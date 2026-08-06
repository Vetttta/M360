"use server";

import { z } from 'zod';
import postgres from 'postgres';
import type { ProductTable } from "@/app/lib/data";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const registerFormSchema = z.object({
  name: z.string().min(1, {message: 'Пожалуйста введите имя.'}),
  email: z.string().min(1, {message: 'Пожалуйста, введите email.'}).email({message: 'Неккоректный адрес электронной почты.'}),
  password: z.string().min(6, {message: 'Пароль должен содержать минимум 6 символов.'}),
});

export type RegisterState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export async function getUserByEmail(email: string) {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0]
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
};

export async function getProductById(id: string | string[] | undefined) {
  if (!id) return null;

  const productId = Array.isArray(id) ? id[0] : id;

  try {
    const data = await sql<ProductTable[]>`
      SELECT
        id,
        name,
        description,
        release_date,
        price,
        image,
        created_at
      FROM products
      WHERE id = ${productId}
    `;

    const product = data[0] || null;

    if (!product) return null;

    return {
      ...product,
      release_date: product.release_date
        ? new Date(product.release_date).getFullYear().toString()
        : null,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Не удалось получить данные товара.');
  }
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
};

export async function createUser(prevState: RegisterState, formData: FormData) {
  const validatedFields = registerFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.'
    }
  }

  const {name, email, password} = validatedFields.data;
  const user = await getUserByEmail(email);
  if (user) {
    return { message: 'Данный пользователь уже существует.' }
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users ( name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;
  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }

  redirect('/login');
};
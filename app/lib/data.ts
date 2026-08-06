import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export type ProductTable = {
  id: string;
  name: string;
  description: string | null;
  release_date: string | null;
  price: number;
  image: string | null;
  created_at: string;
};

const ITEMS_PER_PAGE = 5;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
  option: string,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql<ProductTable[]>`
      SELECT
        id,
        name,
        description,
        release_date,
        price,
        image,
        created_at
      FROM products
      WHERE
        (
          name ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`} OR
          price::text ILIKE ${`%${query}%`} OR
          release_date::text ILIKE ${`%${query}%`}
        )
        ${
          option
            ? sql`AND EXTRACT(YEAR FROM release_date)::text = ${option}`
            : sql``
        }
      ORDER BY created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return products;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Не удалось загрузить список товаров.');
  }
}

export async function fetchProductsPages(query: string, option: string) {
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM products
      WHERE
        (
          name ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`} OR
          price::text ILIKE ${`%${query}%`} OR
          release_date::text ILIKE ${`%${query}%`}
        )
        ${
          option
            ? sql`AND EXTRACT(YEAR FROM release_date)::text = ${option}`
            : sql``
        }
    `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Не удалось получить общее количество страниц товаров.');
  }
}
### 📦 M360 — E-Commerce / Catalog Web Application

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)

An interactive product catalog application featuring user authentication, search filtering, and dynamic routing. Built as a portfolio project to demonstrate core skills in developing modern web applications with <b>Next.js</b> and the <b>React</b> ecosystem.

#### <b>[View Live Demo](https://vetvet-topaz.vercel.app/)</b>

> <b>Test Email:</b> `user@mail.com`<br>
> <b>Test Password:</b> `user1234`

<br>

### Key Features

🔑 <b>Authentication & Security:</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Secure user registration and login flows using Next.js Server Actions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Protected routes implemented with NextAuth.js Credentials Provider<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Password hashing using bcrypt for database storage security<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Strict schema validation on client and server using Zod
<br>

🛍️ <b>Product Catalog & Database Operations:</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Direct SQL queries via Postgres driver for persistent data storage<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Server-side pagination with dynamic page calculation (`LIMIT` / `OFFSET`)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Multi-field real-time search filtering (`ILIKE` search across name, description, price, and date)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Advanced SQL date filtering using `EXTRACT(YEAR FROM release_date)`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Detailed product page (`/products/[id]`) powered by Next.js dynamic routing
<br>

📱 <b>Interface & Tooling:</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Fully responsive UI optimized for all devices (mobile, tablet, desktop)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Modern layouts built with Tailwind CSS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Optimized project setup with custom Webpack configurations

<br>

### Tech Stack

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Core:</b> React, Next.js (Server Actions)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Database:</b> PostgreSQL (Postgres.js driver)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Language:</b> JavaScript / TypeScript<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Styling:</b> Tailwind CSS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Auth & Security:</b> NextAuth.js, bcrypt, Zod, RegEx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Bundler:</b> Webpack

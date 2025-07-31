# 📝 Full-Stack Blog App

A full-stack blog application built using **React (Vite)**, **Node.js (Express)**, **PostgreSQL**, and **Prisma**. It supports user authentication, CRUD operations for posts, server-side pagination, and search functionality.

---

## 🚀 Features

- User registration and login (JWT-based auth)
- Create, edit, delete blog posts (auth required)
- Public access to view and search blog posts
- Server-side pagination and search
- View posts via SEO-friendly slugs

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS (optional)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT, bcrypt

---

## 📐 Database Schema (Prisma)

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  slug      String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

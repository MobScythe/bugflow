# 🐛 Bug Tracker

A simple yet powerful Bug Tracking system inspired by tools like Jira and Notion. Built for developers and teams to create, organize, and track software issues efficiently.

![Bug Tracker Preview](./screenshot.png)

---

## ✨ Features

- 📝 Create, edit, and delete bug reports
- 🏷️ Add tags, severity, priority, and due dates
- 📄 List view for structured issue management
- 📊 Kanban board view grouped by bug status
- 📎 Upload and attach images/files
- 🔍 Filter and search by status, tags, or keywords
- 👤 Assign reporters and (optionally) assignees

---

## 📦 Tech Stack

| Tech             | Usage                     |
| ---------------- | ------------------------- |
| **Node.js**      | Backend API               |
| **Express**      | Routing and middleware    |
| **PostgreSQL**   | Persistent data storage   |
| **Prisma**       | ORM for database access   |
| **React (Vite)** | Frontend client UI        |
| **Multer**       | Image/file uploads        |
| **Docker**       | Containerized development |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bug-tracker.git
cd bug-tracker
```

### 2. Set up the backend

```bash
cd server
cp .env.example .env
# Edit .env with your Postgres credentials

npm install
npx prisma migrate dev --name init
npm run dev
```

### 3. Set up the frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🐳 Using Docker (Optional)

> You can run Postgres, the API, and frontend in isolated containers.

```bash
docker-compose up --build
```

---

## 🧪 Seeding Sample Data

Generate test bugs for development:

```bash
cd server
npx prisma db seed
```

---

## 📁 Folder Structure (Simplified)

```bash
bug-tracker/
├── client/         # React (Vite) frontend
│   └── ...
├── server/         # Node.js backend with Prisma
│   ├── uploads/    # Image uploads
│   └── prisma/     # Schema and seeds
├── docker/         # Docker config files
├── docker-compose.yml
└── README.md
```

---

## 🛠️ TODO

- [ ] Add user auth (JWT + roles)
- [ ] Drag-and-drop reordering in Kanban
- [ ] Comment system for bug discussion
- [ ] Notifications & due date alerts

---

## 📸 Screenshot

> Add `screenshot.png` or a GIF preview of your app UI here for a better first impression.

---

## 🧑‍💻 Author

Made with ❤️ by [Your Name](https://github.com/your-username)

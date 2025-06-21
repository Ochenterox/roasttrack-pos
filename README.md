# ☕ RoastTrack POS

A modern web-based POS system built for independent coffee shops.  
Fast, role-based, and designed to simulate a real-world freelance SaaS project.

![RoastTrack Banner](./public/banner-placeholder.png)

---

## 🚀 Demo

> Live Demo (coming soon)  
> Login credentials will be seeded in the database.

---

## 🧰 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS** + **ShadCN UI**
- **Prisma** + PostgreSQL
- **Zustand** or TanStack Query (for state/data)
- **NextAuth / Auth.js** (for authentication)

---

## 🎯 Features

### ✅ Barista View (POS)

- Category-based product selection
- Add/remove items
- Checkout (mocked)
- Real-time order summary

### ✅ Manager Dashboard

- Daily revenue view
- Top-selling items
- Menu management (CRUD)

### ✅ Role-Based Access

- Barista
- Manager
- Owner

---

## 🗂️ Project Structure

```
/app
  /pos         # POS UI for baristas
  /dashboard   # Manager dashboard
  /admin       # Owner-level settings
/components
/prisma
/types
```

---

## 🧾 About the Project

RoastTrack is a portfolio-grade showcase project built to reflect what a real freelance SaaS app would look like.

> The current version supports a single coffee shop, but the codebase is structured for future multi-tenant SaaS expansion.

---

## 📈 Roadmap

- [ ] Stripe integration (owner billing)
- [ ] Realtime order sync (Pusher or Ably)
- [ ] Multi-shop (multi-tenant support)
- [ ] Offline mode (IndexedDB)
- [ ] Full dark mode and theming

---

## 📬 Contact

Like what you see?  
Want to build something like this for your own team or product?

**[your-email@example.com]**  
**[yourportfolio.com]**

---

© 2025 RoastTrack — Built by [Your Name]

# IRC UWU Conference Web Application (Modern Clone)

A modern, fully redesigned, responsive web application for the **International Research Conference of Uva Wellassa University (IRC UWU)**.  
Built with **Next.js 14+, TypeScript, Tailwind CSS v4, Magic UI, Lucide Icons, and MongoDB**.

---

## 1. Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| CSS Framework | Tailwind CSS v4 |
| UI Components | Magic UI |
| Icons | Lucide Icons |
| Database | MongoDB |
| Backend | Next.js API Routes |

---

## 2. Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/<your-user>/irc-uwu-clone.git
cd irc-uwu-clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Tailwind CSS v4

Tailwind v4 uses a single import file.

Create:

`src/styles/tailwind.css`

```css
@import "tailwindcss";
```

Import in `src/app/layout.tsx`:

```ts
import "../styles/tailwind.css";
```

### 4. Setup environment variables

Create `.env.local`:

```
MONGODB_URI=mongodb+srv://...
NEXT_PUBLIC_APP_NAME=IRC UWU Conference Clone
```

### 5. Run dev server

```bash
npm run dev
```

Visit:
```
http://localhost:3000
```

---

## 3. Project Structure

```
src/
│── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── tracks/
│   ├── keynotes/
│   ├── committee/
│   ├── important-dates/
│   ├── registration/
│   ├── contact/
│   └── api/
│       ├── register/
│       └── submissions/
│
│── components/
│   ├── layout/
│   ├── home/
│   ├── cards/
│   ├── forms/
│   └── ui/
│
│── lib/
│   ├── db.ts
│   ├── helpers.ts
│   └── constants.ts
│
└── styles/
    ├── tailwind.css
    └── globals.css
```

---

## 4. Commands

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

---

## 5. Deployment

Deploy easily using **Vercel**:

```bash
vercel deploy
```

---

## 6. License

This project is MIT Licensed.


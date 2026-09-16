# NextCard

Daraz-এর মতো একটি e-commerce landing page, তৈরি Next.js (App Router) + React + TypeScript + Tailwind CSS দিয়ে।

## চালু করার নিয়ম

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে যাও: http://localhost:3000

## Vercel-এ deploy

1. এই ফোল্ডারটা একটা GitHub repo-তে push করো।
2. vercel.com-এ গিয়ে GitHub repo import করো।
3. কোনো extra config লাগবে না, Vercel নিজেই Next.js চিনে নিয়ে deploy করে দেবে।

## ফোল্ডার গঠন

- `app/` — pages, layout, global CSS
- `components/` — Header, Hero, ProductCard ইত্যাদি ছোট ছোট UI অংশ
- `data/` — products আর categories-এর mock (dummy) data

## যা যোগ করা যায় পরে

- আসল database (MySQL/MongoDB) থেকে product আনা
- Cart-এ item add/remove করার logic
- Product details page, checkout page
- User login/signup

# 🪿 Thagoose — Portfolio v2

เว็บโปรไฟล์ใหม่ สร้างด้วย **Astro + Tailwind CSS v4** · ไทย/อังกฤษ · โหมดมืด/สว่าง · Command palette (Ctrl K)

🌐 https://thagoose3.github.io/Profile-Domain/

## รันบนเครื่อง

```bash
npm install
npm run dev      # เปิด http://localhost:4321/Profile-Domain/
npm run build    # ได้ไฟล์ static ใน dist/
```

## แก้เนื้อหา

เนื้อหาทั้งหมดอยู่ใน `src/data/site.js` ไฟล์เดียว

- **เพิ่มโปรเจกต์:** เพิ่ม object หนึ่งตัวใน `projects` (ใส่ `featured: true` ถ้าอยากให้การ์ดใหญ่)
- **ข้อความ:** ทุกฟิลด์เป็น `{ th, en }`
- **สถานะ / Now / Toolbox:** `profile.status`, `now`, `stack`

## โครงสร้าง

```
src/
  data/site.js          ← เนื้อหาทั้งหมด
  components/           ← Nav, Hero, Goose, Work, ProjectCard, About, Contact, Palette, Footer, T (ข้อความสองภาษา)
  layouts/Layout.astro  ← <head>, ฟอนต์, ตั้งค่าธีม/ภาษาก่อนหน้าเว็บโหลด
  scripts/main.js       ← ธีม ภาษา ฟิลเตอร์ ห่าน GitHub feed command palette
  styles/global.css     ← Tailwind + design tokens
public/                 ← favicon, QR PromptPay
```

## Deploy

push ขึ้น `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build และ deploy ให้เอง
ต้องตั้งค่าครั้งแรกครั้งเดียว: **Settings → Pages → Source → GitHub Actions**

## ลูกเล่น

- `Ctrl K` / `⌘ K` เปิด command palette: ไปที่ section, เปิดแอป, สลับธีม/ภาษา, คัดลอกอีเมล
- ห่านมองตามเมาส์ กดแล้ว honk (เสียงสังเคราะห์ด้วย Web Audio)
- จำนวน repo และรายการอัปเดตล่าสุดดึงสดจาก GitHub API (cache 10 นาที)
- เวลาที่กรุงเทพฯ แบบสด

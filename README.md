# 🪿 Thagoose — Portfolio v2

🌐 https://thagoose3.github.io/Profile-Domain/

ไฟล์ที่ root (`index.html`, `style.css`, `main.js`, `gl.js`) คือเว็บที่ build แล้ว GitHub Pages เสิร์ฟจากตรงนี้เลย ไม่ต้องตั้งค่าเพิ่ม

| โฟลเดอร์ | คืออะไร |
|---|---|
| `source/` | ซอร์สโค้ด Astro + Tailwind v4 (แก้เนื้อหาที่ `source/src/data/site.js`) |
| `legacy/` | เว็บเวอร์ชันเก่า (ฟาร์มห่าน + galaxy 3D) ยังเปิดได้ที่ `/legacy/` และ `/legacy/galaxy.html` |

## ลูกเล่น
- Hero WebGL: ผงแสงหมื่นกว่าจุดรวมตัวเป็นคำว่า THAGOOSE หนีเมาส์ และระเบิดเป็นวังวนตอนเลื่อน
- Preloader, ตัวอักษรเด้งขึ้นทีละตัว, manifesto ที่สว่างทีละคำตามการเลื่อน
- ผลงานเลื่อนแนวนอนแบบ pinned, การ์ดเอียง 3D, เคอร์เซอร์กำหนดเอง, ปุ่มแม่เหล็ก, text scramble
- TH/EN, โหมดมืด/สว่าง, `Ctrl K` command palette, repo สดจาก GitHub

## อยากให้ build อัตโนมัติจาก source (ทางเลือก)
1. ย้าย `source/*` ขึ้นมาไว้ที่ root แทนไฟล์ที่ build แล้ว
2. ย้าย `source/MOVE-TO-.github-workflows-deploy.yml` ไปไว้ที่ `.github/workflows/deploy.yml`
3. Settings → Pages → Source → **GitHub Actions**

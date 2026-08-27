# 🌟 Thagoose - Personal Portfolio & Project Hub

เว็บไซต์โปรไฟล์ส่วนตัวและศูนย์รวมผลงาน (Portfolio & Project Hub) สไตล์ **Modern Minimal Pastel** พัฒนาขึ้นสำหรับโฮสต์บน GitHub Pages ที่โดเมน [https://thagoose3.github.io](https://thagoose3.github.io)

---

## 🎨 จุดเด่นของโปรเจกต์ (Features)

- 🌸 **Modern Minimal Pastel Aesthetic**: โทนสีพาสเทลละมุนตา ดีไซน์กระจกโปร่งแสง (Glassmorphism) และขอบโค้งมนทันสมัย
- 🌓 **Pastel Dark / Light Mode**: สลับธีมสว่าง/มืดได้ทันที พร้อมจดจำค่าไว้ใน `localStorage`
- 📱 **Fully Responsive**: รองรับการแสดงผลทุกหน้าจออย่างสมบูรณ์แบบ (มือถือ, แท็บเล็ต, และเดสก์ท็อป)
- 🚀 **Zero Dependency & Blazing Fast**: ใช้ Pure Semantic HTML5 + Modern CSS + Vanilla JS โหลดไว 100/100 ไม่ต้องรอ Build Tool
- 💎 **Featured Project Bento Grid**: การ์ดแสดงผลงานไฮไลต์ เช่น แอป [Money Memo](https://thagoose3.github.io/Money-memo) พร้อมปุ่มเปิดแอปและลิงก์ซอร์สโค้ด
- 📋 **Interactive Connect Hub**: ปุ่มรวมลิงก์โซเชียลสไตล์ Bento Link-in-bio พร้อมฟังก์ชันกดคลิกคัดลอกอีเมล (Copy to Clipboard) และ Toast แจ้งเตือน

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
thagoose3.github.io/
├── index.html                  # โครงสร้างหน้าเว็บหลัก (Semantic HTML & Meta tags)
├── styles.css                  # ระบบสไตล์ Modern Pastel, CSS Variables, Animations
├── script.js                   # Dark/Light Mode, Copy Toast, Smooth Scroll
├── README.md                   # คู่มือการใช้งานและ Deploy
└── assets/
    └── images/
        ├── avatar.svg                  # ภาพเวกเตอร์ Avatar ประจำตัว
        ├── money-memo-preview.svg      # ม็อกอัปพรีวิวแอป Money Memo
        └── nutritrack-preview.svg      # ม็อกอัปตัวอย่างโปรเจกต์เพิ่มเติม
```

---

## 🚀 ขั้นตอนการนำขึ้น GitHub Pages (Step-by-Step Deployment)

### สเต็ปที่ 1: สร้าง Repository บน GitHub
1. เข้าไปที่ [GitHub.com](https://github.com) แล้วล็อกอินเข้าบัญชี `thagoose3`
2. คลิกปุ่ม **New** (สร้าง Repository ใหม่)
3. ตั้งชื่อ Repository ให้ตรงตามนี้เป๊ะๆ:
   ```text
   thagoose3.github.io
   ```
4. เลือกตั้งค่าเป็น **Public**
5. คลิกปุ่ม **Create repository**

---

### สเต็ปที่ 2: อัปโหลดโค้ดขึ้น GitHub

#### วิธีที่ A: ผ่าน Git Command Line (แนะนำ)
เปิด Terminal หรือ PowerShell แล้วรันคำสั่ง:
```bash
# 1. เข้าไปที่โฟลเดอร์โปรเจกต์
cd C:\Users\pooth\.gemini\antigravity\scratch\thagoose3.github.io

# 2. เริ่มต้น Git และ Commit
git init
git add .
git commit -m "feat: initial commit - modern minimal pastel portfolio hub"

# 3. เชื่อมต่อไปยัง GitHub และ Push โค้ด
git branch -M main
git remote add origin https://github.com/thagoose3/thagoose3.github.io.git
git push -u origin main
```

#### วิธีที่ B: ผ่านหน้าเว็บ GitHub (Drag & Drop)
1. ในหน้า Repo `thagoose3.github.io` บนเว็บ GitHub
2. คลิก **uploading an existing file**
3. ลากไฟล์ทั้งหมด (`index.html`, `styles.css`, `script.js`, โฟลเดอร์ `assets`) ไปวาง
4. คลิก **Commit changes**

---

### สเต็ปที่ 3: เปิดใช้งาน GitHub Pages
1. ไปที่แท็บ **Settings** ของ Repository `thagoose3.github.io`
2. เลื่อนเมนูด้านซ้ายไปที่หัวข้อ **Pages**
3. ในส่วน **Build and deployment**:
   - **Source**: เลือก `Deploy from a branch`
   - **Branch**: เลือก `main` และโฟลเดอร์ `/ (root)`
   - คลิกปุ่ม **Save**
4. รอประมาณ 1-2 นาที GitHub Pages จะ Deploy สำเร็จ และสามารถเข้าชมได้ที่:
   👉 **`https://thagoose3.github.io`**

---

## ✏️ วิธีปรับแต่งข้อมูลส่วนตัว (How to Customize)

1. **เปลี่ยนชื่อ / คำโปรย (Bio)**:
   - เปิดไฟล์ `index.html` แล้วแก้ไขข้อความในแท็ก `<h1 class="hero-title">` และ `<p class="hero-bio">`
2. **เปลี่ยนรูปโปรไฟล์ (Avatar)**:
   - นำรูปภาพของคุณมาวางใน `assets/images/` เช่น `profile.png` หรือ `profile.jpg`
   - ใน `index.html` ให้แก้ `src="assets/images/avatar.svg"` เป็น `src="assets/images/profile.jpg"`
3. **แก้ไขอีเมลและลิงก์ติดต่อ**:
   - ใน `index.html` ค้นหา `contact.thagoose@gmail.com` แล้วเปลี่ยนเป็นอีเมลจริงของคุณ
   - แก้ไข URL ในหมวด Social Links เช่น ลิงก์ LinkedIn, Facebook, หรือช่องทางอื่นๆ
4. **เพิ่มผลงานใหม่**:
   - คัดลอกบล็อก `<article class="project-card"> ... </article>` ใน `index.html` แล้วเปลี่ยนรูปภาพ, ชื่อแอป, คำอธิบาย และลิงก์

---

## 💻 การทดสอบเปิดดูบนเครื่อง (Local Preview)

หากต้องการเปิดดูตัวอย่างบนเครื่องก่อน สามารถทำได้ง่ายๆ โดย:
- **วิธีที่ 1 (ดับเบิลคลิก)**: ดับเบิลคลิกที่ไฟล์ `index.html` เพื่อเปิดผ่าน Chrome / Edge ได้ทันที
- **วิธีที่ 2 (VS Code Live Server)**: คลิกขวาที่ไฟล์ `index.html` ใน VS Code แล้วเลือก **Open with Live Server**
- **วิธีที่ 3 (Python Server)**:
  ```bash
  python -m http.server 3000
  ```
  จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

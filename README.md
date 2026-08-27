# 🪿 Thagoose - Personal Portfolio & Project Hub

เว็บไซต์โปรไฟล์ส่วนตัวและศูนย์รวมเว็บแอปพลิเคชัน (Portfolio & App Hub) สไตล์ **Modern Minimal Goose Theme 🪿** พัฒนาขึ้นสำหรับโฮสต์บน GitHub Pages

🌐 **Live URL**: [https://thagoose3.github.io/Profile-Domain/](https://thagoose3.github.io/Profile-Domain/)

---

## 🎨 จุดเด่นของดีไซน์ (Design & Features)

- 🪿 **Modern Minimal Goose Theme**: โทนสีขนนุ่มและส้มจะงอยปาก (Feather White, Duck-egg Teal, Beak Orange) ดีไซน์สะอาดตา กะทัดรัด ไม่เกะกะสายตา
- 📦 **Compact Bento Grid**: การ์ดเว็บแอปขนาดมินิมอล กระชับ แสดงข้อมูลสำคัญครบถ้วน พร้อมปุ่มเปิดใช้งานได้ทันที
- 🚀 **Featured Web Apps**:
  - 💰 **[Money Memo](https://thagoose3.github.io/Money-memo)**: เว็บแอปบันทึกรายรับ-รายจ่ายอัจฉริยะ พร้อมแดชบอร์ดสรุปยอด
  - 🏋️ **[Exercise Tracker](https://thagoose3.github.io/Exercise)**: แอปพลิเคชันบันทึกตารางการออกกำลังกายและ Routine
  - 🥗 **[Calories Tracker](https://thagoose3.github.io/Calories_Tracker)**: ระบบคำนวณและติดตามโภชนาการ แคลอรี่ และสารอาหารหลัก
- ⚡ **Live GitHub Repos Sync**: ดึงข้อมูลคลัง Repository สดจากบัญชี `@Thagoose3` อัตโนมัติ ไม่ต้องแก้โค้ดทุกครั้งที่สร้าง Repo ใหม่
- 🌓 **Goose Light & Midnight Dark Mode**: สลับธีมสว่าง/มืด พร้อมจำค่าใน `localStorage`
- 🔊 **"Honk!" Easter Egg**: กดที่รูป Avatar หรือปุ่ม Honk เพื่อฟังเสียงร้องเจ้าห่านสังเคราะห์ผ่าน Web Audio API
- 📱 **100% Mobile & Desktop Responsive**: ขนาดพอดีหน้าจอทุกอุปกรณ์ โหลดไว ไร้ Dependencies

---

## 📁 โครงสร้างโปรเจกต์ (File Structure)

```
Profile-Domain/
├── index.html          # โครงสร้างหน้าเว็บหลัก (Semantic HTML5, Meta OpenGraph)
├── styles.css          # สไตล์ Modern Minimal Goose Theme, CSS Variables, Responsive
├── script.js           # ระบบสลับ Theme, Honk Sound, Live GitHub API, Copy Email
├── README.md           # เอกสารแนะนำโปรเจกต์และการใช้งาน
└── assets/
    └── images/
        ├── avatar.svg          # เวกเตอร์เจ้าห่าน Mascot
        ├── money-memo-preview.svg
        ├── exercise-preview.svg
        └── nutritrack-preview.svg
```

---

## 🚀 การจัดการและการอัปเดตผ่าน GitHub Desktop

1. เปิดโปรแกรม **GitHub Desktop**
2. เลือก Repository **`Profile-Domain`**
3. เมื่อแก้ไขไฟล์เสร็จแล้ว ให้พิมพ์ Commit Message ที่มุมซ้ายล่าง แล้วกด **Commit to main**
4. คลิกปุ่ม **Push origin** ที่มุมขวาบน เพื่ออัปเดตหน้าเว็บจริงได้ทันที

---

## 💡 วิธีเปิดใช้งานเว็บแอปสำหรับ Repo อื่นๆ (GitHub Pages)

หากคุณมีโปรเจกต์ใหม่ และต้องการให้เปิดใช้งานผ่าน `https://thagoose3.github.io/<ชื่อ-Repo>`:
1. ไปที่ Repo นั้นๆ บน GitHub (เช่น `github.com/Thagoose3/Exercise`)
2. ไปที่แท็บ **Settings** ➔ เมนูด้านซ้ายเลือก **Pages**
3. ในส่วน **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: เลือก `main` และ `/ (root)` แล้วกด **Save**
4. เว็บแอปจะออนไลน์และสามารถกดเปิดผ่านหน้า Portfolio ได้ทันที

---

## 💻 การทดสอบเปิดดูในเครื่อง (Local Run)

- ดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดดูผ่านเบราว์เซอร์ได้ทันที
- หรือใช้ Python Web Server:
  ```bash
  python -m http.server 3000
  ```
  แล้วเปิด `http://localhost:3000`

# 🪿🌾 Thagoose - Daily Life Ecosystem

เว็บไซต์โปรไฟล์ส่วนตัวและศูนย์รวมเว็บแอปพลิเคชัน (Portfolio & App Hub) สไตล์ **Modern Farm & Space Universe Theme 🪿🌾🚀**

🌐 **Live URL**: [https://thagoose3.github.io/Profile-Domain/](https://thagoose3.github.io/Profile-Domain/)  
🪐 **3D Galaxy Space Map**: [https://thagoose3.github.io/Profile-Domain/galaxy.html](https://thagoose3.github.io/Profile-Domain/galaxy.html)

> *"Thagoose Daily Life Ecosystem — just a goose vibe 🪿"*

---

## 🎨 จุดเด่นและลูกเล่นของโปรเจกต์ (Features & Polish)

- 🚀 **Interactive 3D Galaxy Map (`galaxy.html`)**: แผนที่อวกาศสุดล้ำ จำลองจักรวาลที่แต่ละโปรเจกต์คือ **ดวงดาวเคราะห์ (Planets)** มีเส้นกลุ่มดาวตามลำดับเวลา (Constellation Timeline), ป้ายวันที่สร้าง, การ์ดโฮโลแกรมสรุปข้อมูล และคลิกเพื่อวาร์ปเข้าสู่แอป
- 🌾 **Illustrated Farm & Geese Background**: ภาพพื้นหลังฟาร์มและฝูงห่าน พร้อม Day & Night Mode (โหมดกลางคืนพร้อมแสงจันทร์และหิ่งห้อย)
- 🎠 **Ecosystem Carousel Slider**: แถบเลื่อนการ์ดผลงานแนวนอน พร้อมปุ่มเลื่อนซ้าย-ขวา (`❮` `❯`) และจุดบอกตำแหน่ง (Pagination Dots) ใช้งานลื่นไหลทั้งบนคอมและมือถือ
- 🐾 **Goose Footprints Cursor Trail**: ขยับเมาส์แล้วมีรอยเท้าเจ้าห่านเล็กๆ ลอยตามเมาส์อย่างนุ่มนวล
- ✍️ **Typewriter Subtitle Effect**: ข้อความสลับประโยคพิมพ์ดีดลื่นไหลอัตโนมัติ
- 🎴 **3D Tilt Cards**: การ์ดแสดงผลงานเอียงตามองศาเมาส์แบบ 3 มิติ พร้อมเงากระทบกระจก Frosted Glass
- 📱 **Interactive App Simulator**: ปุ่ม `📱 พรีวิว` เปิดหน้าต่างจำลองทรงมือถือ ให้ทดลองเล่นแอปในหน้าเว็บได้ทันที
- 🚀 **Featured Web Apps (Daily Life Ecosystem)**:
  - ⏳ **[TimeFlow Widget](https://thagoose3.github.io/time-progress-widget)**: วิดเจ็ตแสดงความคืบหน้าของเวลา Real-time (ปี, เดือน, สัปดาห์, วัน) สไตล์ Frosted Glass
  - 🎓 **[PaperVault Workspace](https://thagoose3.github.io/thesis-workspace)**: สตูดิโอจัดการเอกสารวิจัยและวิทยานิพนธ์ ระบบอ่าน PDF ไฮไลต์ สรุป Matrix และ Citation
  - 💰 **[Money Memo](https://thagoose3.github.io/Money-memo)**: เว็บแอปบันทึกรายรับ-รายจ่ายอัจฉริยะ พร้อมแดชบอร์ดสรุปยอด
  - 🏋️ **[Exercise Tracker](https://thagoose3.github.io/Exercise)**: แอปพลิเคชันบันทึกตารางการออกกำลังกายและ Routine
  - 🥗 **[Calories Tracker](https://thagoose3.github.io/Calories_Tracker)**: ระบบคำนวณและติดตามโภชนาการ แคลอรี่
  - 🪿 **[GooseFocus](https://thagoose3.github.io/GooseFocus/)**: ฟาร์มห่านสะสมชั่วโมงโฟกัส & Ranking เต็มหน้าจอ 2D Live Canvas
  - 🦆💥 **[Goose Survivor](https://thagoose3.github.io/goose-survivor/)**: เกมแอ็กชันเอาชีวิตรอด Roguelite ผสม Bullet Hell: เดิน WASD หลบกระสุน ยิงขนนก ปล่อยไข่ระเบิด และ Mega Honk
  - 🍵⚡ **[MorningPulse AI](https://thagoose3.github.io/morning-pulse-ai/)**: แดชบอร์ดสรุปข่าวกรองยามเช้า & หุ้นอัจฉริยะ (Tea Time Edition) รวบรวมดัชนีตลาดโลก ข่าวสารเศรษฐกิจ และคำแนะนำ AI
- ⚡ **Live GitHub Repos Sync**: ดึงข้อมูลคลัง Repository สดจากบัญชี `@Thagoose3` อัตโนมัติ
- 🔊 **"Honk!" & Cosmic Audio Synthesizer**: สังเคราะห์เสียงร้องเจ้าห่านและเสียงอวกาศผ่าน Web Audio API

---

## 📁 โครงสร้างโปรเจกต์ (File Structure)

```
Profile-Domain/
├── index.html                  # โครงสร้างหน้าเว็บหลัก (Farm Theme)
├── styles.css                  # สไตล์ Farm Theme, Carousel, 3D Tilt, Phone Simulator
├── script.js                   # ระบบสลับ Theme, Carousel, Typewriter, Footprints, Honk Sound
├── galaxy.html                 # หน้าแผนที่จักรวาลอวกาศ 3D Galaxy Map
├── galaxy.css                  # สไตล์ Sci-Fi Glassmorphism, 3D Planet Orbits, Hologram HUD
├── galaxy.js                   # Particle Starfield Canvas, Cosmic Physics, Pan & Zoom, Audio
├── README.md                   # เอกสารแนะนำโปรเจกต์และการใช้งาน
└── assets/
    └── images/
        ├── farm-goose-bg.svg           # พื้นหลังฟาร์มตอนกลางวัน
        ├── farm-goose-night-bg.svg     # พื้นหลังฟาร์มตอนกลางคืน
        ├── avatar.svg                  # เวกเตอร์เจ้าห่าน Mascot
        ├── timeflow-preview.svg        # พรีวิวแอป TimeFlow Widget
        ├── thesis-preview.svg          # พรีวิวแอป PaperVault Workspace
        ├── money-memo-preview.svg      # พรีวิวแอป Money Memo
        ├── exercise-preview.svg        # พรีวิวแอป Exercise Tracker
        ├── nutritrack-preview.svg      # พรีวิวแอป Calories Tracker
        └── goose-survivor-preview.svg  # พรีวิวเกม Goose Survivor: Bullet Hell
```

---

---

---

---

## ☕ สนับสนุนผู้พัฒนา (Buy Me a Coffee)

หากคุณชื่นชอบและเห็นว่า **Thagoose Ecosystem & 3D Galaxy Map** มีประโยชน์และมอบความสนุกในการสำรวจระบบนิเวศผลงาน สามารถร่วมสนับสนุนค่ากาแฟและเป็นกำลังใจในการพัฒนาฟีเจอร์ใหม่ๆ ได้ที่ QR Code ด้านล่างนี้เลยครับ 💖

<div align="center">
  <br />
  <img src="assets/donate_qr.png" alt="Thai QR Payment PromptPay" width="280" style="border-radius: 20px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); border: 1px solid #e2e8f0;" />
  <br />
  <p style="margin-top: 10px; font-size: 15px; color: #334155;">
    <strong>พร้อมเพย์ (PromptPay) : นายฐากูร เอ็นสาร</strong>
  </p>
  <br />
</div>

---

<div align="center">
  <p style="font-size: 12px; color: #94a3b8;">Thagoose Profile Hub — Built with ❤️ for the goose ecosystem.</p>
</div>

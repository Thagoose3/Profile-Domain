// All site content lives here. Add a project = add one object to `projects`.
// Every text field is { th, en }.

export const profile = {
  handle: "Thagoose3",
  name: "Thagoose",
  email: "contact.thagoose@gmail.com",
  github: "https://github.com/Thagoose3",
  location: { th: "กรุงเทพฯ, ประเทศไทย", en: "Bangkok, Thailand" },
  timezone: "Asia/Bangkok",
  role: { th: "นักพัฒนาเว็บ & เกม", en: "Web & game developer" },
  status: { th: "เปิดรับงานและโปรเจกต์ร่วมกัน", en: "Open to work & collaborations" },
  headline: {
    th: ["สร้างเครื่องมือเล็กๆ", "ที่ใช้ได้จริงทุกวัน", "— และเกมห่านอีกนิดหน่อย"],
    en: ["I build small tools", "you actually use every day", "— and the odd goose game."],
  },
  intro: {
    th: "สวัสดีครับ ผม Thagoose ชอบเปลี่ยนเรื่องจุกจิกในชีวิตประจำวันให้เป็นเว็บแอปที่เร็ว ใช้ง่าย และมีความสนุกซ่อนอยู่ ตั้งแต่จัดการเวลา การเงิน สุขภาพ ไปจนถึงงานวิจัย",
    en: "Hi, I'm Thagoose. I turn the small annoyances of daily life into fast, friendly web apps with a bit of play hidden inside — time, money, health, research, and the occasional bullet-hell goose.",
  },
};

// Hero + statement copy. Words wrapped in *stars* glow gold as you scroll.
export const hero = {
  eyebrow: { th: "ก่อตั้ง 2026 · กรุงเทพฯ", en: "Est. 2026 · Bangkok" },
  sub: { th: "เว็บแอปสำหรับชีวิตประจำวัน และเกมห่าน", en: "Everyday web apps & goose games." },
};
export const statement = {
  th: "ผมสร้าง *เครื่องมือเล็กๆ* ที่ทำให้ชีวิตประจำวันง่ายขึ้น — เวลา เงิน สุขภาพ งานวิจัย — แล้วแอบใส่ *ความสนุก* ไว้ข้างในทุกชิ้น",
  en: "I build *small tools* that make everyday life a little easier — time, money, health, research — and hide a little *delight* inside every one.",
};

export const categories = [
  { id: "all", th: "ทั้งหมด", en: "All" },
  { id: "productivity", th: "โฟกัส & เวลา", en: "Productivity" },
  { id: "health", th: "สุขภาพ", en: "Health" },
  { id: "finance", th: "การเงิน", en: "Finance" },
  { id: "research", th: "วิจัย", en: "Research" },
  { id: "games", th: "เกม", en: "Games" },
  { id: "ai", th: "AI", en: "AI" },
];

export const projects = [
  {
    slug: "goose-survivor",
    title: "Goose Survivor",
    icon: "🦆",
    year: 2026,
    category: "games",
    featured: true,
    accent: "#f87171",
    live: "https://thagoose3.github.io/goose-survivor/",
    repo: "https://github.com/Thagoose3/goose-survivor",
    tags: ["Canvas 2D", "Web Audio", "Roguelite"],
    desc: {
      th: "เกมเอาชีวิตรอดแนว Roguelite ผสม Bullet Hell เดินด้วย WASD หลบดงกระสุน ยิงขนนก วางไข่ระเบิด และปล่อย Mega Honk ล้างจอ เสียงทั้งหมดสังเคราะห์สดด้วย Web Audio",
      en: "A roguelite bullet-hell survival game. Dodge with WASD, fire feathers, drop egg bombs and clear the screen with a Mega Honk. Every sound is synthesised live with Web Audio.",
    },
  },
  {
    slug: "morning-pulse-ai",
    title: "MorningPulse AI",
    icon: "🍵",
    year: 2026,
    category: "ai",
    featured: true,
    accent: "#22d3ee",
    live: "https://thagoose3.github.io/morning-pulse-ai/",
    repo: "https://github.com/Thagoose3/morning-pulse-ai",
    tags: ["React", "TypeScript", "GitHub Actions"],
    desc: {
      th: "แดชบอร์ดสรุปข่าวและตลาดหุ้นยามเช้า อัปเดตอัตโนมัติทุกวัน 06:30 ด้วย GitHub Actions รวมดัชนีตลาดโลก ข่าวเศรษฐกิจ และบทสรุปจาก AI",
      en: "A morning market and news briefing that rebuilds itself every day at 06:30 via GitHub Actions — global indices, economic headlines and an AI-written summary.",
    },
  },
  {
    slug: "ai-office",
    title: "AI Office",
    icon: "🏢",
    year: 2026,
    category: "ai",
    accent: "#a3e635",
    live: "https://thagoose3.github.io/AI-Office/",
    repo: "https://github.com/Thagoose3/AI-Office",
    tags: ["Pixel art", "Canvas", "AI agents"],
    desc: {
      th: "ออฟฟิศพิกเซลที่โชว์ว่าทีม AI (PM, UI, Dev, Tester) กำลังทำงานอะไรในโปรเจกต์จริงแบบสดๆ น้องๆ นั่งทำงาน เดินคุยกัน และไปเช็กบอร์ดงาน",
      en: "A live pixel-art office showing what an AI agent team — PM, UI, Dev, Tester — is doing in a real project. They work, chat and check the task board.",
    },
  },
  {
    slug: "goosefocus",
    title: "GooseFocus",
    icon: "🪿",
    year: 2026,
    category: "productivity",
    accent: "#ff7a1a",
    live: "https://thagoose3.github.io/GooseFocus/",
    repo: "https://github.com/Thagoose3/GooseFocus",
    tags: ["Canvas 2D", "Leaderboard"],
    desc: {
      th: "ยิ่งโฟกัส ฟาร์มห่านยิ่งโต สะสมชั่วโมงทำงาน เลื่อนยศชาวไร่ และแข่งบน Leaderboard",
      en: "Focus timer where your goose farm grows with every hour. Earn farmer ranks and climb the leaderboard.",
    },
  },
  {
    slug: "timeflow",
    title: "TimeFlow Widget",
    icon: "⏳",
    year: 2026,
    category: "productivity",
    accent: "#818cf8",
    live: "https://thagoose3.github.io/time-progress-widget",
    repo: "https://github.com/Thagoose3/time-progress-widget",
    tags: ["Python", "Desktop widget"],
    desc: {
      th: "วิดเจ็ตบอกว่าปี เดือน สัปดาห์ และวันนี้ผ่านไปแล้วกี่เปอร์เซ็นต์ แบบเรียลไทม์ ใช้ได้ทั้งบนเว็บและเดสก์ท็อป",
      en: "See how much of the year, month, week and day has already gone — live, on the web or your desktop.",
    },
  },
  {
    slug: "papervault",
    title: "PaperVault",
    icon: "📚",
    year: 2026,
    category: "research",
    accent: "#a78bfa",
    live: "https://thagoose3.github.io/thesis-workspace",
    repo: "https://github.com/Thagoose3/thesis-workspace",
    tags: ["PDF.js", "IndexedDB"],
    desc: {
      th: "ห้องทำงานสำหรับเขียนวิทยานิพนธ์ อ่านและไฮไลต์ PDF สรุป Literature Matrix และจัดการ Citation ในที่เดียว",
      en: "A thesis workspace: read and highlight PDFs, build a literature matrix and manage citations in one place.",
    },
  },
  {
    slug: "money-memo",
    title: "Money Memo",
    icon: "💸",
    year: 2026,
    category: "finance",
    accent: "#34d399",
    live: "https://thagoose3.github.io/Money-memo",
    repo: "https://github.com/Thagoose3/Money-memo",
    tags: ["PWA", "Charts"],
    desc: {
      th: "บันทึกรายรับรายจ่ายแบบเร็ว พร้อมแดชบอร์ดและกราฟแยกหมวดหมู่อัตโนมัติ ใช้ออฟไลน์ได้",
      en: "Quick income and expense logging with an automatic dashboard and category charts. Works offline.",
    },
  },
  {
    slug: "exercise",
    title: "Exercise Tracker",
    icon: "🏋️",
    year: 2026,
    category: "health",
    accent: "#f472b6",
    live: "https://thagoose3.github.io/Exercise",
    repo: "https://github.com/Thagoose3/Exercise",
    tags: ["PWA", "Routines"],
    desc: {
      th: "วางตารางและบันทึกการออกกำลังกาย จัด Routine เซ็ต และจับเวลาพัก",
      en: "Plan and log workouts — routines, sets and rest timers.",
    },
  },
  {
    slug: "calories",
    title: "Calories Tracker",
    icon: "🥗",
    year: 2026,
    category: "health",
    accent: "#fbbf24",
    live: "https://thagoose3.github.io/Calories_Tracker",
    repo: "https://github.com/Thagoose3/Calories_Tracker",
    tags: ["Nutrition", "Macros"],
    desc: {
      th: "คำนวณแคลอรี่และติดตามสัดส่วนโปรตีน คาร์บ ไขมัน ในแต่ละวัน",
      en: "Track daily calories and your protein, carb and fat split.",
    },
  },
];

export const stack = [
  "TypeScript", "JavaScript", "React", "Astro", "Tailwind CSS", "Vite",
  "Python", "Canvas 2D", "Web Audio API", "IndexedDB", "PWA", "GitHub Actions", "REST APIs",
];

export const now = {
  th: [
    "เกลา Goose Survivor ให้มีด่านและบอสมากขึ้น",
    "ทดลองโคลนเสียงภาษาไทยด้วย AI",
    "รีดีไซน์เว็บนี้ด้วย Astro (คือหน้าที่คุณกำลังดูอยู่)",
  ],
  en: [
    "Adding stages and bosses to Goose Survivor",
    "Experimenting with Thai voice cloning",
    "Rebuilding this site in Astro (you're looking at it)",
  ],
};

export const principles = [
  { th: "เร็วก่อน สวยตาม — โหลดไวและใช้ได้แม้ออฟไลน์", en: "Fast first — instant loads, works offline." },
  { th: "หนึ่งแอป หนึ่งปัญหา ทำให้จบในตัว", en: "One app, one problem, solved properly." },
  { th: "ใส่ความสนุกเล็กๆ ไว้เสมอ", en: "Always hide a little delight inside." },
];

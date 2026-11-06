// Thagoose v2 — all client behaviour, no libraries.
import { initParticles } from "./gl.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(pointer: fine)").matches;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};
const lang = () => root.dataset.lang || "th";
const t = (th, en) => (lang() === "th" ? th : en);
let particles = null;

/* ================= Theme & language ================= */
function setTheme(theme) {
  root.dataset.theme = theme;
  store.set("theme", theme);
  particles?.setTheme(theme === "light");
}
const toggleTheme = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");
function setLang(l) {
  root.dataset.lang = l;
  root.lang = l;
  store.set("lang", l);
  $$("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === l)));
  renderRepos();
  renderPalette();
  requestAnimationFrame(measureRail);
}
$$("[data-theme-toggle]").forEach((b) => b.addEventListener("click", toggleTheme));
$$("[data-lang-btn]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.langBtn)));

/* ================= Toast / email / honk ================= */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.dataset.show = "true";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.dataset.show = "false"), 1800);
}
async function copyEmail() {
  const email = root.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast(t("คัดลอกอีเมลแล้ว", "Email copied"));
  } catch {
    location.href = `mailto:${email}`;
  }
}
$$("[data-copy-email]").forEach((b) => b.addEventListener("click", copyEmail));

let audio;
function honk() {
  try {
    audio ||= new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain(), n = audio.currentTime;
    o.type = "sawtooth";
    o.frequency.setValueAtTime(420, n);
    o.frequency.exponentialRampToValueAtTime(260, n + 0.22);
    g.gain.setValueAtTime(0.0001, n);
    g.gain.exponentialRampToValueAtTime(0.18, n + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, n + 0.26);
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(n + 0.28);
  } catch {}
  toast("HONK!");
  particles?.scatter();
  setTimeout(() => particles?.assemble(), 700);
}

/* ================= Reveals ================= */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); $$(".mask-reveal", en.target).forEach((c) => c.classList.add("is-in")); io.unobserve(en.target); } }),
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
function armReveals() {
  $$(".reveal, .reveal-group, .split:not(.intro-split), .line-grow:not([data-intro])").forEach((el) => io.observe(el));
}

/* ================= Preloader → intro ================= */
function intro() {
  $$("[data-intro], .intro-split").forEach((el) => el.classList.add("is-in"));
  particles?.assemble();
  armReveals();
}
function runPreloader() {
  const pre = $("#preloader");
  if (!pre || reduced || sessionStorage.getItem("seen-preloader")) {
    pre?.remove();
    intro();
    return;
  }
  const count = $("[data-count]", pre);
  const start = performance.now();
  const dur = 1700;
  (function step(now) {
    const p = clamp((now - start) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    count.textContent = String(Math.round(e * 100)).padStart(3, "0");
    pre.style.setProperty("--p", e);
    if (p < 1) return requestAnimationFrame(step);
    setTimeout(() => {
      pre.classList.add("is-done");
      setTimeout(intro, 350);
      setTimeout(() => pre.remove(), 1200);
      try { sessionStorage.setItem("seen-preloader", "1"); } catch {}
    }, 220);
  })(start);
}

/* ================= Scroll-driven effects ================= */
const hero = $("[data-hero]");
const nav = $("#nav");
const progress = $("#progress");
const fill = $$("[data-fill]");
const marquee = $("[data-marquee]");
const rail = $("[data-rail]");
const track = $("[data-rail-track]");
const railBar = $("[data-rail-bar]");
const railCount = $("[data-rail-count]");
const railCards = track ? $$("[data-project]", track) : [];
let railDist = 0, railX = 0, railTarget = 0;
let lastY = scrollY, velocity = 0, marqueeX = 0;

function measureRail() {
  if (!rail || !track) return;
  railDist = Math.max(0, track.scrollWidth - innerWidth);
  rail.style.height = `${railDist + innerHeight}px`;
}

function onFrame() {
  const y = scrollY;
  const vh = innerHeight;
  velocity = lerp(velocity, y - lastY, 0.12);
  lastY = y;

  // page progress + nav
  const max = document.documentElement.scrollHeight - vh;
  progress?.style.setProperty("--p", max > 0 ? y / max : 0);
  if (nav) nav.dataset.solid = String(y > vh * 0.6);

  // hero: particles explode, content drifts up
  if (hero && particles) particles.setScroll(clamp(y / (vh * 0.9)));

  // manifesto words light up as they pass the middle of the screen
  fill.forEach((el) => {
    const r = el.getBoundingClientRect();
    const p = clamp((vh * 0.78 - r.top) / (r.height + vh * 0.25));
    $$(".fw", el).forEach((w, i, arr) => w.classList.toggle("on", i / arr.length < p));
  });

  // marquee drifts, speeds up and skews with scroll velocity
  if (marquee) {
    marqueeX -= 0.6 + Math.abs(velocity) * 0.35;
    const half = marquee.scrollWidth / 3;
    if (-marqueeX > half) marqueeX += half;
    marquee.style.transform = `translate3d(${marqueeX}px,0,0) skewX(${clamp(-velocity * 0.25, -12, 12)}deg)`;
  }

  // pinned horizontal rail
  if (rail && track) {
    const top = rail.offsetTop;
    const p = railDist ? clamp((y - top) / railDist) : 0;
    railTarget = -p * railDist;
    railX = reduced ? railTarget : lerp(railX, railTarget, 0.1);
    track.style.transform = `translate3d(${railX}px,0,0)`;
    railBar && (railBar.style.transform = `scaleX(${p})`);
    if (railCount && railCards.length) {
      const idx = Math.min(railCards.length - 1, Math.round(p * (railCards.length - 1)));
      railCount.textContent = String(idx + 1).padStart(2, "0");
    }
    // cards lean with movement
    const lean = clamp((railTarget - railX) * 0.02, -8, 8);
    railCards.forEach((c) => { if (!c.matches(":hover")) c.style.transform = `perspective(1200px) rotateY(${lean}deg)`; });
  }

  requestAnimationFrame(onFrame);
}

/* ================= Cursor, magnetic, tilt ================= */
function initPointer() {
  if (!finePointer || reduced) return;
  root.classList.add("has-cursor");
  const dot = $(".cursor-dot"), ring = $(".cursor-ring"), label = $("span", ring);
  let mx = -100, my = -100, rx = -100, ry = -100;
  addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18);
    dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", (e) => {
    const big = e.target.closest("[data-cursor]");
    const link = e.target.closest("a,button,[data-cursor-link]");
    ring.classList.toggle("is-big", !!big);
    ring.classList.toggle("is-link", !big && !!link);
    label.textContent = big ? big.dataset.cursor : "";
  });

  $$("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transition = "transform .6s cubic-bezier(.2,.9,.1,1)";
      el.style.transform = "";
      setTimeout(() => (el.style.transition = ""), 600);
    });
  });

  $$("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}

/* ================= Text scramble on hover ================= */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/";
function scramble(el) {
  const target = el.querySelector(`[lang="${lang()}"]`) || el;
  if (target.dataset.busy || lang() === "th" && target !== el) return; // Thai glyphs don't scramble nicely
  const final = target.textContent;
  target.dataset.busy = "1";
  let frame = 0;
  const total = 14;
  (function step() {
    target.textContent = [...final].map((ch, i) => (ch === " " || i < (frame / total) * final.length ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");
    if (++frame <= total) requestAnimationFrame(step);
    else { target.textContent = final; delete target.dataset.busy; }
  })();
}
if (!reduced) $$("[data-scramble]").forEach((el) => {
  const host = el.closest("a,button") || el;
  host.addEventListener("pointerenter", () => scramble(el));
});

/* ================= Hero HUD ================= */
(function hud() {
  const hx = $("[data-hud-x]"), hy = $("[data-hud-y]"), fps = $("[data-fps]");
  if (!hx) return;
  addEventListener("pointermove", (e) => {
    hx.textContent = (e.clientX / innerWidth).toFixed(3);
    hy.textContent = (e.clientY / innerHeight).toFixed(3);
  });
  let frames = 0, last = performance.now();
  (function loop(now) {
    frames++;
    if (now - last > 500) { fps.textContent = Math.round((frames * 1000) / (now - last)); frames = 0; last = now; }
    requestAnimationFrame(loop);
  })(last);
})();

/* ================= Clock ================= */
function tick() {
  const tz = root.dataset.tz || "Asia/Bangkok";
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit" });
  const hour = Number(now.toLocaleString("en-GB", { timeZone: tz, hour: "2-digit", hour12: false }));
  $$("[data-clock]").forEach((el) => (el.textContent = time));
  const awake = hour >= 8 && hour < 24;
  $$("[data-awake]").forEach((el) => (el.textContent = awake ? t("น่าจะยังตื่นอยู่", "probably awake") : t("น่าจะหลับอยู่", "probably asleep")));
}

/* ================= GitHub feed ================= */
let repos = null;
function timeAgo(date) {
  const s = (Date.now() - new Date(date)) / 1000;
  const rtf = new Intl.RelativeTimeFormat(lang(), { numeric: "auto" });
  for (const [u, sec] of [["year", 31536000], ["month", 2592000], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60]])
    if (s >= sec) return rtf.format(-Math.floor(s / sec), u);
  return rtf.format(0, "minute");
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
function renderRepos() {
  const list = $("#repo-list");
  if (!list || !repos) return;
  list.innerHTML = repos.slice(0, 5).map((r) => `
    <a href="${esc(r.html_url)}" target="_blank" rel="noopener" data-cursor-link class="group flex items-baseline gap-4 border-b border-line py-3 last:border-0">
      <span class="font-medium transition group-hover:text-beak">${esc(r.name)}</span>
      <span class="hidden min-w-0 flex-1 truncate text-sm text-muted sm:block">${r.description ? esc(r.description) : ""}</span>
      <span class="ml-auto shrink-0 text-xs text-muted">${timeAgo(r.pushed_at)}</span>
    </a>`).join("");
}
async function loadRepos() {
  const list = $("#repo-list");
  if (!list) return;
  const user = root.dataset.github;
  try {
    const c = JSON.parse(sessionStorage.getItem("repos") || "null");
    if (c && Date.now() - c.at < 600000) repos = c.data;
  } catch {}
  if (!repos) {
    try {
      const res = await fetch(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=100`);
      if (!res.ok) throw new Error(res.status);
      repos = (await res.json()).filter((r) => !r.fork && r.name.toLowerCase() !== user.toLowerCase());
      try { sessionStorage.setItem("repos", JSON.stringify({ at: Date.now(), data: repos })); } catch {}
    } catch {
      list.innerHTML = `<p class="text-sm text-muted">${t("โหลดข้อมูลจาก GitHub ไม่สำเร็จ", "Couldn't reach GitHub right now.")}</p>`;
      return;
    }
  }
  $$("[data-repo-count]").forEach((el) => (el.textContent = repos.length));
  $$("[data-star-count]").forEach((el) => (el.textContent = repos.reduce((a, r) => a + r.stargazers_count, 0)));
  renderRepos();
}

/* ================= Command palette ================= */
const palette = $("#palette"), pInput = $("#palette-input"), pList = $("#palette-list");
let pItems = [], pIndex = 0;
function commands() {
  const go = (id) => () => $(id)?.scrollIntoView({ behavior: "smooth" });
  const g1 = t("ไปที่", "Go to"), g2 = t("เปิดแอป", "Open app"), g3 = t("คำสั่ง", "Actions");
  return [
    { group: g1, label: t("ผลงาน", "Work"), icon: "II", run: go("#work") },
    { group: g1, label: t("เรื่องราว", "Story"), icon: "III", run: go("#about") },
    { group: g1, label: t("ติดต่อ", "Contact"), icon: "IV", run: go("#contact") },
    ...$$("[data-project]").map((el) => ({ group: g2, label: el.dataset.title, icon: el.dataset.icon, run: () => window.open(el.dataset.live, "_blank") })),
    { group: g3, label: t("สลับโหมดมืด/สว่าง", "Toggle dark / light"), icon: "◐", run: toggleTheme },
    { group: g3, label: lang() === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย", icon: "文", run: () => setLang(lang() === "th" ? "en" : "th") },
    { group: g3, label: t("คัดลอกอีเมล", "Copy email"), icon: "@", run: copyEmail },
    { group: g3, label: "Honk!", icon: "🪿", run: honk },
  ];
}
function renderPalette() {
  if (!pList) return;
  const q = (pInput.value || "").trim().toLowerCase();
  pItems = commands().filter((c) => !q || c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q));
  pIndex = Math.min(pIndex, Math.max(0, pItems.length - 1));
  let last = "";
  pList.innerHTML = pItems.length
    ? pItems.map((c, i) => {
        const head = c.group !== last ? `<li class="label px-3 pt-4 pb-2" role="presentation">${(last = c.group)}</li>` : "";
        return `${head}<li role="option" id="p-${i}" data-i="${i}" aria-selected="${i === pIndex}" class="palette-item flex cursor-pointer items-center gap-4 px-3 py-2.5"><span class="grid size-7 place-items-center border border-line font-mono text-xs text-beak">${c.icon}</span><span class="text-base">${c.label}</span></li>`;
      }).join("")
    : `<li class="px-3 py-6 text-center text-sm text-muted">${t("ไม่พบคำสั่ง", "No results")}</li>`;
  pInput.setAttribute("aria-activedescendant", `p-${pIndex}`);
}
function openPalette() {
  pInput.value = ""; pIndex = 0; renderPalette();
  palette.showModal(); pInput.focus();
}
function runPalette(i) { const c = pItems[i]; if (!c) return; palette.close(); c.run(); }
if (palette) {
  $$("[data-palette-open]").forEach((b) => b.addEventListener("click", openPalette));
  pInput.addEventListener("input", () => { pIndex = 0; renderPalette(); });
  pInput.addEventListener("keydown", (e) => {
    const n = pItems.length || 1;
    if (e.key === "ArrowDown") { e.preventDefault(); pIndex = (pIndex + 1) % n; renderPalette(); $(`#p-${pIndex}`)?.scrollIntoView({ block: "nearest" }); }
    if (e.key === "ArrowUp") { e.preventDefault(); pIndex = (pIndex - 1 + n) % n; renderPalette(); $(`#p-${pIndex}`)?.scrollIntoView({ block: "nearest" }); }
    if (e.key === "Enter") { e.preventDefault(); runPalette(pIndex); }
  });
  pList.addEventListener("click", (e) => { const li = e.target.closest("[data-i]"); if (li) runPalette(Number(li.dataset.i)); });
  palette.addEventListener("click", (e) => e.target === palette && palette.close());
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palette.open ? palette.close() : openPalette(); }
  });
}

/* ================= Smooth anchor scrolling ================= */
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = $(a.getAttribute("href"));
  if (!target) return;
  e.preventDefault();
  window.scrollTo({ top: target.offsetTop, behavior: reduced ? "auto" : "smooth" });
});

/* ================= Boot ================= */
setLang(root.dataset.lang || "th");
$("#year") && ($("#year").textContent = new Date().getFullYear());
tick(); setInterval(tick, 15000);
loadRepos();
measureRail();
addEventListener("resize", measureRail);
addEventListener("load", measureRail);
initPointer();
requestAnimationFrame(onFrame);

const canvas = $("#gl");
if (canvas) {
  initParticles(canvas, { word: "THAGOOSE" })
    .then((p) => {
      particles = p;
      if (!p) throw new Error("no webgl");
      p.setTheme(root.dataset.theme === "light");
    })
    .catch(() => $("#gl-fallback")?.classList.remove("hidden"))
    .finally(runPreloader);
} else {
  runPreloader();
}
window.__site = { get particles() { return particles; }, honk };

/**
 * Thagoose Galaxy Universe JavaScript 🚀🌌🪐
 * Features:
 * 1. Spaceship Flight Mode (Astro-Goose Shuttle exploration)
 * 2. Hyperspace Warp Jump (Star Wars style streaming light rays & shockwave)
 * 3. Planetary Core Scan (3D Layered Tech Stack & Architecture Inspector)
 * 4. Starfield Particle Canvas & Realistic Web Audio Synthesizer
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarfieldCanvas();
  initGalaxyViewport();
  initPlanetInteraction();
  initCosmicAudio();
  initGalaxySimulator();
  initSpaceshipFlightMode();
  initHyperspaceWarp();
  initPlanetaryCoreScan();
  showToast('🚀 ยินดีต้อนรับสู่ Thagoose Space Ecosystem! ลองกดปุ่ม "🕹️ บินสำรวจ" ดูสิ');
});

/* ==========================================================================
   Project Planets Data (Timeline, Exact GitHub Launch Dates & Tech Stack Core)
   ========================================================================== */
const PLANETS_DATA = {
  calories: {
    id: 'calories',
    name: 'Calories Tracker',
    suite: 'Nutrition Suite',
    date: '21 ส.ค. 2026',
    icon: '🥗',
    color: '#FB923C',
    glowRgba: 'rgba(251, 146, 60, 0.45)',
    desc: 'ระบบคำนวณและติดตามโภชนาการ แคลอรี่ และสัดส่วนสารอาหารหลัก (Protein, Carbs, Fats) เพื่อสุขภาพและรูปร่างที่ดี',
    url: 'https://thagoose3.github.io/Calories_Tracker',
    github: 'https://github.com/Thagoose3/Calories_Tracker',
    x: 1200 - 450,
    y: 1200 - 180,
    techStack: {
      crust: 'HTML5, Modern CSS Variables, Responsive Glassmorphism UI',
      mantle: 'Macronutrient Calculation Algorithms, Real-time BMR/TDEE Engine',
      core: 'Browser LocalStorage, JSON Data Schema, Offline PWA'
    }
  },
  moneymemo: {
    id: 'moneymemo',
    name: 'Money Memo',
    suite: 'Finance Suite',
    date: '23 ส.ค. 2026',
    icon: '💰',
    color: '#10B981',
    glowRgba: 'rgba(16, 185, 129, 0.45)',
    desc: 'เว็บแอปบันทึกรายรับ-รายจ่ายอัจฉริยะ พร้อมแดชบอร์ดสรุปยอดเงินและกราฟวิเคราะห์หมวดหมู่อัตโนมัติ ดีไซน์ใช้งานง่ายและคลีนตา',
    url: 'https://thagoose3.github.io/Money-memo',
    github: 'https://github.com/Thagoose3/Money-memo',
    x: 1200 - 240,
    y: 1200 + 360,
    techStack: {
      crust: 'Semantic HTML5, Chart.js Visualizations, Mobile-First Flexbox/Grid',
      mantle: 'Income/Expense Categorization Engine, Monthly Balance Aggregator',
      core: 'IndexedDB & LocalStorage, CSV Export / Import Engine'
    }
  },
  exercise: {
    id: 'exercise',
    name: 'Exercise Tracker',
    suite: 'Fitness Suite',
    date: '27 ส.ค. 2026',
    icon: '🏋️',
    color: '#A855F7',
    glowRgba: 'rgba(168, 85, 247, 0.45)',
    desc: 'แอปพลิเคชันบันทึกการออกกำลังกาย วางตาราง Routine เซ็ต จำนวนครั้ง และจับเวลาฝึกซ้อมอย่างเป็นระบบ',
    url: 'https://thagoose3.github.io/Exercise',
    github: 'https://github.com/Thagoose3/Exercise',
    x: 1200 + 120,
    y: 1200 + 440,
    techStack: {
      crust: 'Dark Neon Violet UI, Touch-Friendly Action Buttons, CSS Micro-animations',
      mantle: 'Workout Routine Scheduler, High-precision Interval Rest Timer',
      core: 'Local Database Persistence, Service Worker PWA Offline Support'
    }
  },
  papervault: {
    id: 'papervault',
    name: 'PaperVault Workspace',
    suite: 'Academic Suite',
    date: '28 ส.ค. 2026',
    icon: '🎓',
    color: '#818CF8',
    glowRgba: 'rgba(129, 140, 248, 0.45)',
    desc: 'สตูดิโอจัดการเอกสารวิจัยและวิทยานิพนธ์ระดับโปร ระบบอ่าน PDF ไฮไลต์ข้อความ สังเคราะห์ Matrix และบันทึก Citation/BibTeX สำหรับนักวิจัย',
    url: 'https://thagoose3.github.io/thesis-workspace',
    github: 'https://github.com/Thagoose3/thesis-workspace',
    x: 1200 + 440,
    y: 1200 + 100,
    techStack: {
      crust: 'PaperVault Dark Studio Layout, PDF.js High-res Canvas, Split-Pane Matrix',
      mantle: 'Text Extraction & Annotation Engine, BibTeX Parser, Citation Formatter',
      core: 'Firebase Cloud Sync, IndexedDB PDF Vault, Python Server Bridge'
    }
  },
  timeflow: {
    id: 'timeflow',
    name: 'TimeFlow Widget',
    suite: 'Productivity Suite',
    date: '31 ส.ค. 2026',
    icon: '⏳',
    color: '#38BDF8',
    glowRgba: 'rgba(56, 189, 248, 0.45)',
    desc: 'วิดเจ็ตแสดงความคืบหน้าของเวลา Real-time (ปี, เดือน, สัปดาห์, วัน) บนเดสก์ท็อป สไตล์ Frosted Glass กระจกใส ช่วยเตือนสติและบริหารเวลาอย่างมีเป้าหมาย',
    url: 'https://thagoose3.github.io/time-progress-widget',
    github: 'https://github.com/Thagoose3/time-progress-widget',
    x: 1200 + 280,
    y: 1200 - 380,
    techStack: {
      crust: 'Frameless Transparent Window, Quantum Clock Gauges, Glassmorphism',
      mantle: 'Real-time Time Elapsed / Remaining Percentile Calculator',
      core: 'Python Desktop UI (PyQt / Tkinter / Win32 API), Web Companion'
    }
  },
  goosefocus: {
    id: 'goosefocus',
    name: 'GooseFocus 🪿',
    suite: 'Productivity & Farm Suite',
    date: '31 ส.ค. 2026',
    icon: '🪿',
    color: '#10B981',
    glowRgba: 'rgba(16, 185, 129, 0.55)',
    desc: 'ฟาร์มห่านสะสมชั่วโมงโฟกัส & Ranking เต็มหน้าจอ 2D Live Canvas พร้อมระบบสะสมชั่วโมง ยศชาวไร่ห่าน Leaderboard และ Web Audio Synthesizer',
    url: 'GooseFocus/index.html',
    github: 'https://github.com/Thagoose3/Profile-Domain/tree/main/GooseFocus',
    x: 1200 - 320,
    y: 1200 - 320,
    techStack: {
      crust: 'Full-screen 2D Canvas Viewport, Glassmorphic HUD, CSS3 Animations',
      mantle: 'Live Goose Entity Physics Engine, Precision Focus Hours Accumulator',
      core: 'Browser LocalStorage, Web Audio API Synthesizer (Zero External Audio)'
    }
  }
};

/* ==========================================================================
   Starfield Particle Canvas (Twinkling Stars, Nebulae & Meteors)
   ========================================================================== */
function initStarfieldCanvas() {
  const canvas = document.getElementById('spaceCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createStars();
  });

  const stars = [];
  const numStars = 320;

  function createStars() {
    stars.length = 0;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        color: ['#FFFFFF', '#E0F2FE', '#FDE68A', '#E0E7FF', '#FCE7F3'][Math.floor(Math.random() * 5)]
      });
    }
  }

  createStars();

  // Shooting Star / Meteor
  let meteor = null;

  function spawnMeteor() {
    if (Math.random() < 0.015 && !meteor) {
      meteor = {
        x: Math.random() * width,
        y: Math.random() * (height * 0.5),
        length: Math.random() * 100 + 80,
        speed: Math.random() * 10 + 12,
        angle: Math.PI / 4 + (Math.random() * 0.3 - 0.15),
        alpha: 1
      };
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Deep Space Radial Background Glow
    const bgGrad = ctx.createRadialGradient(width/2, height/2, 50, width/2, height/2, width * 0.8);
    bgGrad.addColorStop(0, '#0a1026');
    bgGrad.addColorStop(0.5, '#040714');
    bgGrad.addColorStop(1, '#02040a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Stars
    for (let s of stars) {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha > 0.95 || s.alpha < 0.15) s.twinkleDir *= -1;

      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Meteor Animation
    spawnMeteor();
    if (meteor) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, ' + meteor.alpha + ')';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(
        meteor.x - Math.cos(meteor.angle) * meteor.length,
        meteor.y - Math.sin(meteor.angle) * meteor.length
      );
      ctx.stroke();
      ctx.restore();

      meteor.x += Math.cos(meteor.angle) * meteor.speed;
      meteor.y += Math.sin(meteor.angle) * meteor.speed;
      meteor.alpha -= 0.02;

      if (meteor.alpha <= 0 || meteor.x > width + 200 || meteor.y > height + 200) {
        meteor = null;
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   Galaxy Viewport Navigation (Pan, Drag, Mouse Wheel Zoom)
   ========================================================================== */
let currentPanX = 0;
let currentPanY = 0;
let currentZoom = 1;

function initGalaxyViewport() {
  const viewport = document.getElementById('galaxyViewport');
  const world = document.getElementById('galaxyWorld');
  const resetBtn = document.getElementById('resetViewBtn');

  if (!viewport || !world) return;

  let isDragging = false;
  let startX = 0, startY = 0;

  // Mouse Drag / Touch Pan
  viewport.addEventListener('mousedown', (e) => {
    if (window._isFlightModeActive) return;
    if (e.target.closest('.planet-node') || e.target.closest('.galaxy-core-sun')) return;
    isDragging = true;
    startX = e.clientX - currentPanX;
    startY = e.clientY - currentPanY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging || window._isFlightModeActive) return;
    currentPanX = e.clientX - startX;
    currentPanY = e.clientY - startY;
    updateWorldTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support for Mobile
  let touchStartX = 0, touchStartY = 0;
  viewport.addEventListener('touchstart', (e) => {
    if (window._isFlightModeActive) return;
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX - currentPanX;
      touchStartY = e.touches[0].clientY - currentPanY;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (window._isFlightModeActive) return;
    if (e.touches.length === 1) {
      currentPanX = e.touches[0].clientX - touchStartX;
      currentPanY = e.touches[0].clientY - touchStartY;
      updateWorldTransform();
    }
  }, { passive: true });

  // Mouse Wheel Zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    currentZoom = Math.min(Math.max(currentZoom * zoomFactor, 0.45), 1.9);
    updateWorldTransform();
  }, { passive: false });

  // Reset View
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      focusCoordinates(0, 0, 1);
      showToast('🎯 รีเซ็ตมุมมองสู่ศูนย์กลาง Thagoose Prime');
    });
  }

  // Position Planets within Galaxy World
  positionPlanetNodes();
}

function updateWorldTransform() {
  const world = document.getElementById('galaxyWorld');
  if (!world) return;
  world.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentZoom})`;
}

function focusCoordinates(targetX, targetY, targetZoom = 1.25) {
  const world = document.getElementById('galaxyWorld');
  if (!world) return;

  world.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
  currentPanX = -targetX;
  currentPanY = -targetY;
  currentZoom = targetZoom;
  updateWorldTransform();

  setTimeout(() => {
    world.style.transition = 'transform 0.08s ease-out';
  }, 700);
}

function positionPlanetNodes() {
  Object.values(PLANETS_DATA).forEach(data => {
    const el = document.getElementById(`planet-${data.id}`);
    if (el) {
      el.style.left = `${data.x}px`;
      el.style.top = `${data.y}px`;
    }
  });
}

/* ==========================================================================
   Feature 1: Spaceship Flight Mode (Astro-Goose Shuttle 🪿🚀)
   ========================================================================== */
window._isFlightModeActive = false;

function initSpaceshipFlightMode() {
  const flightBtn = document.getElementById('flightModeBtn');
  const ship = document.getElementById('playerSpaceship');
  const guide = document.getElementById('flightGuide');

  if (!flightBtn || !ship) return;

  let shipX = window.innerWidth / 2;
  let shipY = window.innerHeight / 2;
  let targetX = shipX, targetY = shipY;
  let shipAngle = 0;
  let lastProximityPlanet = null;

  flightBtn.addEventListener('click', () => {
    window._isFlightModeActive = !window._isFlightModeActive;
    document.body.classList.toggle('flight-mode', window._isFlightModeActive);
    flightBtn.classList.toggle('flight-active', window._isFlightModeActive);
    ship.classList.toggle('active', window._isFlightModeActive);
    if (guide) guide.classList.toggle('show', window._isFlightModeActive);

    if (window._isFlightModeActive) {
      playWarpSound();
      showToast('🚀 เปิดโหมดขับยาน Astro-Goose! ขยับเมาส์เพื่อบินสำรวจ');
    } else {
      showToast('🛑 ปิดโหมดขับยาน กลับสู่โหมดสำรวจทั่วไป');
      document.querySelectorAll('.planet-node').forEach(p => p.classList.remove('flight-hover'));
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!window._isFlightModeActive) return;
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function updateFlightPhysics() {
    if (window._isFlightModeActive) {
      const dx = targetX - shipX;
      const dy = targetY - shipY;
      const dist = Math.hypot(dx, dy);

      shipX += dx * 0.12;
      shipY += dy * 0.12;

      if (dist > 5) {
        const targetAngle = Math.atan2(dy, dx) + Math.PI / 2;
        shipAngle += (targetAngle - shipAngle) * 0.15;
      }

      ship.style.left = `${shipX}px`;
      ship.style.top = `${shipY}px`;
      const shipBody = ship.querySelector('.ship-body');
      if (shipBody) shipBody.style.transform = `rotate(${shipAngle}rad)`;

      // Proximity detection with planets in galaxyWorld coordinates
      const worldCenterX = window.innerWidth / 2 + currentPanX;
      const worldCenterY = window.innerHeight / 2 + currentPanY;

      let nearestPlanet = null;
      let minDistance = Infinity;

      Object.values(PLANETS_DATA).forEach(data => {
        const planetScreenX = worldCenterX + (data.x - 1200) * currentZoom;
        const planetScreenY = worldCenterY + (data.y - 1200) * currentZoom;
        const pDist = Math.hypot(shipX - planetScreenX, shipY - planetScreenY);

        const el = document.getElementById(`planet-${data.id}`);
        if (pDist < 120 * currentZoom) {
          if (el) el.classList.add('flight-hover');
          if (pDist < minDistance) {
            minDistance = pDist;
            nearestPlanet = data;
          }
        } else {
          if (el) el.classList.remove('flight-hover');
        }
      });

      if (nearestPlanet && nearestPlanet.id !== lastProximityPlanet) {
        lastProximityPlanet = nearestPlanet.id;
        playRadarPing();
        showToast(`📡 ตรวจพบดาวเคราะห์: ${nearestPlanet.name} (กดคลิกเพื่อลงจอด)`);
      } else if (!nearestPlanet) {
        lastProximityPlanet = null;
      }
    }

    requestAnimationFrame(updateFlightPhysics);
  }

  updateFlightPhysics();

  // Click during flight mode to land on nearest planet
  window.addEventListener('click', (e) => {
    if (!window._isFlightModeActive) return;
    if (e.target.closest('#flightModeBtn') || e.target.closest('.hologram-card')) return;

    if (lastProximityPlanet && PLANETS_DATA[lastProximityPlanet]) {
      const data = PLANETS_DATA[lastProximityPlanet];
      focusCoordinates(data.x - 1200, data.y - 1200, 1.35);
      openHologram(lastProximityPlanet);
    } else {
      playPhotonSound();
    }
  });

  // ESC to exit flight mode
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window._isFlightModeActive) {
      flightBtn.click();
    }
  });
}

/* ==========================================================================
   Feature 2: Hyperspace Warp Transition (Star Wars Streaming Rays) 🌠
   ========================================================================== */
function initHyperspaceWarp() {
  const warpBtn = document.getElementById('hologramWarpBtn');
  const backFarmBtn = document.querySelector('a[href="index.html"]');

  if (warpBtn) {
    warpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetUrl = warpBtn.getAttribute('href');
      if (targetUrl && targetUrl !== '#') {
        triggerHyperspaceJump(targetUrl);
      }
    });
  }

  if (backFarmBtn) {
    backFarmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerHyperspaceJump('index.html');
    });
  }
}

function triggerHyperspaceJump(destinationUrl) {
  let warpCanvas = document.getElementById('warpCanvas');
  if (!warpCanvas) {
    warpCanvas = document.createElement('canvas');
    warpCanvas.id = 'warpCanvas';
    document.body.appendChild(warpCanvas);
  }

  const ctx = warpCanvas.getContext('2d');
  const width = warpCanvas.width = window.innerWidth;
  const height = warpCanvas.height = window.innerHeight;
  const cx = width / 2;
  const cy = height / 2;

  warpCanvas.classList.add('active');
  playHyperspaceSound();

  const numStreaks = 400;
  const streaks = [];

  for (let i = 0; i < numStreaks; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 50 + 10;
    streaks.push({
      angle,
      dist,
      speed: Math.random() * 15 + 15,
      length: 2,
      color: ['#38BDF8', '#818CF8', '#A855F7', '#FFFFFF', '#F0F9FF'][Math.floor(Math.random() * 5)]
    });
  }

  let startTime = performance.now();
  const duration = 520; // 0.52s

  function renderWarp(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    ctx.fillStyle = 'rgba(3, 7, 18, 0.28)';
    ctx.fillRect(0, 0, width, height);

    for (let s of streaks) {
      s.speed *= 1.08;
      s.length = Math.min(s.length * 1.15 + 4, 350);
      s.dist += s.speed;

      const x1 = cx + Math.cos(s.angle) * s.dist;
      const y1 = cy + Math.sin(s.angle) * s.dist;
      const x2 = cx + Math.cos(s.angle) * (s.dist + s.length);
      const y2 = cy + Math.sin(s.angle) * (s.dist + s.length);

      ctx.save();
      ctx.strokeStyle = s.color;
      ctx.lineWidth = Math.min(progress * 4 + 1.5, 5);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }

    // Expanding Central Flash Shockwave
    if (progress > 0.4) {
      const flashAlpha = (progress - 0.4) / 0.6;
      ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha * 0.95})`;
      ctx.fillRect(0, 0, width, height);
    }

    if (progress < 1) {
      requestAnimationFrame(renderWarp);
    } else {
      window.location.href = destinationUrl;
    }
  }

  requestAnimationFrame(renderWarp);
}

/* ==========================================================================
   Feature 5: Planetary Core Scan (3D Layered Tech Stack Inspector) 🔬
   ========================================================================== */
function initPlanetaryCoreScan() {
  const scanBtn = document.getElementById('scanCoreBtn');
  const scanContainer = document.getElementById('coreScanContainer');

  if (!scanBtn || !scanContainer) return;

  scanBtn.addEventListener('click', () => {
    const isActive = scanContainer.classList.toggle('active');
    scanBtn.innerHTML = isActive 
      ? '<span>✖</span><span>ปิดมุมมองผ่าแกนดาว (Close Scan)</span>'
      : '<span>🔬</span><span>สแกนโครงสร้างดาว (Tech Core Scan)</span>';
    
    if (isActive) {
      playScanBeep();
      showToast('🔬 สแกนโครงสร้างและสถาปัตยกรรม Tech Stack สำเร็จ');
    }
  });
}

function updateCoreScanDetails(planetData) {
  const scanContainer = document.getElementById('coreScanContainer');
  const scanBtn = document.getElementById('scanCoreBtn');
  if (!scanContainer || !planetData) return;

  // Reset scan container view
  scanContainer.classList.remove('active');
  if (scanBtn) {
    scanBtn.innerHTML = '<span>🔬</span><span>สแกนโครงสร้างดาว (Tech Core Scan)</span>';
  }

  const crustText = document.getElementById('scanCrustText');
  const mantleText = document.getElementById('scanMantleText');
  const coreText = document.getElementById('scanCoreText');

  if (crustText && planetData.techStack) crustText.textContent = planetData.techStack.crust;
  if (mantleText && planetData.techStack) mantleText.textContent = planetData.techStack.mantle;
  if (coreText && planetData.techStack) coreText.textContent = planetData.techStack.core;
}

/* ==========================================================================
   Interactive Planet Hover & Hologram Modal
   ========================================================================== */
let activePlanet = null;

function initPlanetInteraction() {
  const modal = document.getElementById('hologramModal');
  const closeBtn = document.getElementById('hologramCloseBtn');
  const warpBtn = document.getElementById('hologramWarpBtn');
  const previewBtn = document.getElementById('hologramPreviewBtn');
  const githubBtn = document.getElementById('hologramGithubBtn');

  const titleEl = document.getElementById('hologramTitle');
  const badgeEl = document.getElementById('hologramBadge');
  const dateEl = document.getElementById('hologramDate');
  const descEl = document.getElementById('hologramDesc');
  const iconEl = document.getElementById('hologramIcon');
  const coreSun = document.getElementById('coreSun');

  window.openHologram = function(planetKey) {
    const data = PLANETS_DATA[planetKey];
    if (!data || !modal) return;

    activePlanet = data;
    titleEl.textContent = data.name;
    badgeEl.textContent = data.suite;
    dateEl.textContent = `📅 วันที่สร้างบน GitHub: ${data.date}`;
    descEl.textContent = data.desc;
    iconEl.textContent = data.icon;
    warpBtn.href = data.url;
    githubBtn.href = data.github;

    // Update 3D Tech Stack Details
    updateCoreScanDetails(data);

    // Set custom theme glow color
    document.documentElement.style.setProperty('--active-planet-glow', data.color);

    modal.classList.add('active');
    playWarpSound();

    // Update active selector chips
    document.querySelectorAll('.selector-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-planet') === planetKey);
    });
  };

  function closeHologram() {
    if (modal) modal.classList.remove('active');
    document.querySelectorAll('.selector-chip').forEach(chip => chip.classList.remove('active'));
  }

  if (closeBtn) closeBtn.addEventListener('click', closeHologram);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHologram();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeHologram();
  });

  // Attach click to all planet nodes
  Object.keys(PLANETS_DATA).forEach(key => {
    const el = document.getElementById(`planet-${key}`);
    if (el) {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = PLANETS_DATA[key];
        focusCoordinates(data.x - 1200, data.y - 1200, 1.35);
        openHologram(key);
      });
    }
  });

  // Bottom Selector Chips
  document.querySelectorAll('.selector-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.getAttribute('data-planet');
      if (key && PLANETS_DATA[key]) {
        const data = PLANETS_DATA[key];
        focusCoordinates(data.x - 1200, data.y - 1200, 1.35);
        openHologram(key);
      }
    });
  });

  // Central Sun Honk Easter Egg
  if (coreSun) {
    coreSun.addEventListener('click', () => {
      focusCoordinates(0, 0, 1.15);
      playHonkSound();
      showToast('🪿 HONK! ศูนย์กลางจักรวาล Thagoose Prime ส่องสว่างทั่วทั้ง Ecosystem');
    });
  }

  // Live Simulator Preview Button inside Hologram
  if (previewBtn) {
    previewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!activePlanet) return;
      openGalaxySimulator(activePlanet.url, activePlanet.name);
    });
  }
}

/* ==========================================================================
   Galaxy Live Simulator Modal (Testing Apps Inline)
   ========================================================================== */
function initGalaxySimulator() {
  const modal = document.getElementById('galaxySimulatorModal');
  const iframe = document.getElementById('galaxySimulatorIframe');
  const closeBtn = document.getElementById('galaxySimulatorClose');

  if (!modal || !iframe) return;

  function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { iframe.src = 'about:blank'; }, 300);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function openGalaxySimulator(url, title) {
  const modal = document.getElementById('galaxySimulatorModal');
  const iframe = document.getElementById('galaxySimulatorIframe');
  const titleEl = document.getElementById('galaxySimulatorTitle');
  const externalLink = document.getElementById('galaxySimulatorExternal');

  if (!modal || !iframe) return;

  if (titleEl) titleEl.textContent = title;
  if (externalLink) externalLink.href = url;
  iframe.src = url;
  modal.classList.add('active');
}

/* ==========================================================================
   Cosmic Audio Synthesizer (Web Audio API) 🔊🌌
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initCosmicAudio() {
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  if (!soundToggleBtn) return;

  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundIcon) soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
    showToast(soundEnabled ? '🔊 เปิดระบบเสียง Cosmic Audio' : '🔇 ปิดระบบเสียง');
    if (soundEnabled) playWarpSound();
  });
}

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playWarpSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.38);
  } catch (e) {}
}

function playHyperspaceSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.5);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.52);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.53);
  } catch (e) {}
}

function playRadarPing() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {}
}

function playScanBeep() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.setValueAtTime(900, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.26);
  } catch (e) {}
}

function playPhotonSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch (e) {}
}

function playHonkSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.22);

    gain.gain.setValueAtTime(0.22, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}

/* ==========================================================================
   HUD Toast Message
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('galaxyToast');
  const msgEl = document.getElementById('galaxyToastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  clearTimeout(window._galaxyToastTimeout);
  window._galaxyToastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

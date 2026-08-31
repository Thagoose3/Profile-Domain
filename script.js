/**
 * Thagoose - Daily Life Ecosystem Portfolio JavaScript 🪿🌾
 * Features: Typewriter, Carousel Slider, Goose Footprints, 3D Tilt, Live Simulator, Honk Sound, Live GitHub API
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initCarousel();
  initFootprintsTrail();
  init3DTiltCards();
  initAppSimulatorModal();
  initHonkEasterEgg();
  initCopyEmail();
  initFooterYear();
  initSmoothScroll();
  fetchGitHubRepos('Thagoose3');
});

/* ==========================================================================
   Theme Management (Farm Day / Night)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

function applyTheme(theme) {
  const themeIcon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }
}

/* ==========================================================================
   Carousel Horizontal Slider (Left / Right Nav + Dots)
   ========================================================================== */
function initCarousel() {
  const track = document.getElementById('appsTrack');
  const leftBtn = document.getElementById('scrollLeftBtn');
  const rightBtn = document.getElementById('scrollRightBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track) return;

  const cards = track.querySelectorAll('.project-card-scaled');
  if (cards.length === 0) return;

  // Create Pagination Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth + 20; // width + gap
        track.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Scroll Left / Right Buttons
  if (leftBtn) {
    leftBtn.addEventListener('click', () => {
      const scrollAmount = cards[0].offsetWidth + 20;
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (rightBtn) {
    rightBtn.addEventListener('click', () => {
      const scrollAmount = cards[0].offsetWidth + 20;
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Update active dot on scroll
  track.addEventListener('scroll', () => {
    if (!dotsContainer) return;
    const cardWidth = cards[0].offsetWidth + 20;
    const activeIndex = Math.round(track.scrollLeft / cardWidth);
    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }, { passive: true });
}

/* ==========================================================================
   Typewriter Effect (Hero Subtitle)
   ========================================================================== */
function initTypewriter() {
  const targetEl = document.getElementById('typewriterText');
  if (!targetEl) return;

  const words = [
    'Thagoose Daily Life Ecosystem 🌐',
    'TimeFlow (Productivity Suite) ⏳',
    'PaperVault (Research Suite) 🎓',
    'Money Memo (Finance Suite) 💰',
    'Exercise & Routine Tracker 🏋️',
    'Calories & Nutrition Tracker 🥗',
    'just a goose vibe 🪿'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 85;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      targetEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      targetEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 85;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1900;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 380;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   Goose Footprints Cursor Trail (Canvas) 🐾🪿
   ========================================================================== */
function initFootprintsTrail() {
  const canvas = document.getElementById('cursorCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const prints = [];
  let lastX = 0, lastY = 0;
  let leftFoot = true;

  window.addEventListener('mousemove', (e) => {
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist > 35) {
      const angle = Math.atan2(e.clientY - lastY, e.clientX - lastX);
      const offset = leftFoot ? -7 : 7;
      
      prints.push({
        x: e.clientX + Math.cos(angle + Math.PI/2) * offset,
        y: e.clientY + Math.sin(angle + Math.PI/2) * offset,
        angle: angle + Math.PI/2,
        alpha: 0.55,
        scale: 0.9
      });

      lastX = e.clientX;
      lastY = e.clientY;
      leftFoot = !leftFoot;
    }
  });

  function drawFootprint(x, y, angle, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#FDBA74' : '#F97316';

    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(2, 0);
    ctx.lineTo(-2, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-5, -5);
    ctx.lineTo(0, 2);
    ctx.lineTo(-3, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(5, -5);
    ctx.lineTo(0, 2);
    ctx.lineTo(3, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 2, 2.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = prints.length - 1; i >= 0; i--) {
      const p = prints[i];
      drawFootprint(p.x, p.y, p.angle, p.alpha);
      p.alpha -= 0.008;
      if (p.alpha <= 0) {
        prints.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3D Tilt Cards Effect
   ========================================================================== */
function init3DTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   Interactive Live Simulator Modal (Mobile Frame)
   ========================================================================== */
function initAppSimulatorModal() {
  const modal = document.getElementById('simulatorModal');
  const iframe = document.getElementById('simulatorIframe');
  const titleEl = document.getElementById('modalAppTitle');
  const externalLink = document.getElementById('modalExternalLink');
  const closeBtn = document.getElementById('closeModalBtn');
  const openButtons = document.querySelectorAll('.open-simulator-btn');

  if (!modal || !iframe) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-url');
      const title = btn.getAttribute('data-title') || 'App Simulator';

      titleEl.textContent = title;
      iframe.src = url;
      externalLink.href = url;
      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { iframe.src = 'about:blank'; }, 300);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Goose "Honk!" Synthesizer Easter Egg (Web Audio API) 🪿
   ========================================================================== */
function initHonkEasterEgg() {
  const gooseAvatar = document.getElementById('gooseAvatar');
  const honkBtn = document.getElementById('honkBtn');
  const toast = document.getElementById('copyToast');

  const honkMessages = [
    '🪿 HONK! Welcome to Thagoose Daily Life Ecosystem',
    '🪿 Honk honk! Just a goose vibe',
    '🪿 *Happy Goose Noises*',
    '🪿 Goose approved! Peace was never an option.',
    '🪿 HONK! Keep on building awesome apps!'
  ];

  function triggerHonk() {
    playHonkSound();
    const randomMsg = honkMessages[Math.floor(Math.random() * honkMessages.length)];
    showToast(toast, randomMsg, '🪿');
  }

  if (gooseAvatar) gooseAvatar.addEventListener('click', triggerHonk);
  if (honkBtn) honkBtn.addEventListener('click', triggerHonk);
}

function playHonkSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(420, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {
    // Silent fail if blocked
  }
}

/* ==========================================================================
   Fetch GitHub Repositories Dynamically
   ========================================================================== */
async function fetchGitHubRepos(username) {
  const reposGrid = document.getElementById('reposGrid');
  if (!reposGrid) return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error('GitHub API rate limited or unreachable');
    
    const repos = await response.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      reposGrid.innerHTML = `<div class="repo-loading-card"><p>ยังไม่มีคลังผลงาน</p></div>`;
      return;
    }

    reposGrid.innerHTML = repos.map(repo => {
      const liveUrl = `https://${username.toLowerCase()}.github.io/${repo.name}`;
      const langTag = repo.language ? `<span class="pill-tag tag-sky">${repo.language}</span>` : '';
      const description = repo.description || 'โปรเจกต์และโค้ดบน GitHub';

      return `
        <div class="repo-mini-card">
          <div>
            <div class="repo-mini-header">
              <span class="repo-mini-name">📂 ${escapeHTML(repo.name)}</span>
              ${langTag}
            </div>
            <p class="repo-mini-desc">${escapeHTML(description)}</p>
          </div>

          <div class="repo-mini-footer">
            <div class="repo-mini-btns">
              <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">
                เปิดแอป ↗
              </a>
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-xs">
                โค้ด
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.warn('Using fallback repos:', error);
    reposGrid.innerHTML = `
      <div class="repo-mini-card">
        <div>
          <div class="repo-mini-header">
            <span class="repo-mini-name">📂 time-progress-widget</span>
            <span class="pill-tag tag-purple">Python</span>
          </div>
          <p class="repo-mini-desc">วิดเจ็ตแสดงความคืบหน้าของเวลา TimeFlow Desktop Widget</p>
        </div>
        <div class="repo-mini-footer">
          <div class="repo-mini-btns">
            <a href="https://thagoose3.github.io/time-progress-widget" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">เปิดแอป ↗</a>
            <a href="https://github.com/Thagoose3/time-progress-widget" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-xs">โค้ด</a>
          </div>
        </div>
      </div>

      <div class="repo-mini-card">
        <div>
          <div class="repo-mini-header">
            <span class="repo-mini-name">📂 thesis-workspace</span>
            <span class="pill-tag tag-indigo">JavaScript</span>
          </div>
          <p class="repo-mini-desc">สตูดิโอจัดการเอกสารวิจัยและวิทยานิพนธ์ PaperVault</p>
        </div>
        <div class="repo-mini-footer">
          <div class="repo-mini-btns">
            <a href="https://thagoose3.github.io/thesis-workspace" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">เปิดแอป ↗</a>
            <a href="https://github.com/Thagoose3/thesis-workspace" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-xs">โค้ด</a>
          </div>
        </div>
      </div>

      <div class="repo-mini-card">
        <div>
          <div class="repo-mini-header">
            <span class="repo-mini-name">📂 Money-memo</span>
            <span class="pill-tag tag-green">JavaScript</span>
          </div>
          <p class="repo-mini-desc">เว็บแอปบันทึกรายรับ-รายจ่ายอัจฉริยะ</p>
        </div>
        <div class="repo-mini-footer">
          <div class="repo-mini-btns">
            <a href="https://thagoose3.github.io/Money-memo" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">เปิดแอป ↗</a>
            <a href="https://github.com/Thagoose3/Money-memo" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-xs">โค้ด</a>
          </div>
        </div>
      </div>

      <div class="repo-mini-card">
        <div>
          <div class="repo-mini-header">
            <span class="repo-mini-name">📂 Exercise</span>
            <span class="pill-tag tag-purple">PWA</span>
          </div>
          <p class="repo-mini-desc">แอปพลิเคชันบันทึกและวางแผนการออกกำลังกาย</p>
        </div>
        <div class="repo-mini-footer">
          <div class="repo-mini-btns">
            <a href="https://thagoose3.github.io/Exercise" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">เปิดแอป ↗</a>
            <a href="https://github.com/Thagoose3/Exercise" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-xs">โค้ด</a>
          </div>
        </div>
      </div>

      <div class="repo-mini-card">
        <div>
          <div class="repo-mini-header">
            <span class="repo-mini-name">📂 Calories_Tracker</span>
            <span class="pill-tag tag-orange">HTML5</span>
          </div>
          <p class="repo-mini-desc">ระบบคำนวณและติดตามโภชนาการ แคลอรี่</p>
        </div>
        <div class="repo-mini-footer">
          <div class="repo-mini-btns">
            <a href="https://thagoose3.github.io/Calories_Tracker" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">เปิดแอป ↗</a>
            <a href="https://github.com/Thagoose3/Calories_Tracker" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-xs">โค้ด</a>
          </div>
        </div>
      </div>
    `;
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   Copy Email to Clipboard & Toast
   ========================================================================== */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('copyToast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'contact.thagoose@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
        showToast(toast, `คัดลอกอีเมลเรียบร้อย: ${email}`, '📋');
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(toast, `คัดลอกอีเมลเรียบร้อย: ${email}`, '📋');
      }
    });
  });
}

function showToast(toastEl, message, icon = '✅') {
  if (!toastEl) return;
  const msgEl = document.getElementById('toastMsg') || toastEl.querySelector('.toast-msg');
  const iconEl = document.getElementById('toastIcon');

  if (msgEl) msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toastEl.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   Footer Current Year & Smooth Scrolling
   ========================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

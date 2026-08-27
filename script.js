/**
 * Thagoose - Modern Minimal Goose Portfolio JavaScript 🪿
 * Features: Dark/Light Mode, Web Audio "Honk!" Easter Egg, Live GitHub Repos Fetcher, Copy Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCopyEmail();
  initHonkEasterEgg();
  initFooterYear();
  initSmoothScroll();
  fetchGitHubRepos('Thagoose3');
});

/* ==========================================================================
   Theme Management (Goose Light / Midnight Dark)
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
   Goose "Honk!" Synthesizer Easter Egg (Pure Web Audio API) 🪿
   ========================================================================== */
function initHonkEasterEgg() {
  const gooseAvatar = document.getElementById('gooseAvatar');
  const honkBtn = document.getElementById('honkBtn');
  const toast = document.getElementById('copyToast');

  const honkMessages = [
    '🪿 HONK! Welcome to the nest!',
    '🪿 Honk honk! Keep on building cool apps!',
    '🪿 Goose approved! Peace was never an option.',
    '🪿 *Happy Goose Noises*',
    '🪿 Honk! Have a productive day!'
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

    // Goose Honk pitch bend & harmonics
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
    // Silent fail if audio context blocked
  }
}

/* ==========================================================================
   Fetch GitHub Repositories Dynamically (Compact Cards)
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
            <span class="repo-mini-name">📂 Money-memo</span>
            <span class="pill-tag tag-teal">JavaScript</span>
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

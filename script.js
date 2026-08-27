/**
 * Modern Minimal Pastel Portfolio - JavaScript
 * Features: Dark/Light Mode, Live GitHub Repos Fetcher, Copy Email Toast, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCopyEmail();
  initFooterYear();
  initSmoothScroll();
  fetchGitHubRepos('Thagoose3');
});

/* ==========================================================================
   Theme Management (Light / Dark Pastel)
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
   Fetch GitHub Repositories Dynamically
   ========================================================================== */
async function fetchGitHubRepos(username) {
  const reposGrid = document.getElementById('reposGrid');
  if (!reposGrid) return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=15`);
    if (!response.ok) throw new Error('Failed to load GitHub repos');
    
    const repos = await response.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      reposGrid.innerHTML = `
        <div class="repo-empty-card">
          <p>ยังไม่มีคลังผลงานสาธารณะ หรือกำลังโหลดข้อมูล</p>
        </div>
      `;
      return;
    }

    // Filter out profile-domain if desired or display all
    reposGrid.innerHTML = repos.map(repo => {
      const liveUrl = repo.has_pages 
        ? `https://${username.toLowerCase()}.github.io/${repo.name}` 
        : `https://${username.toLowerCase()}.github.io/${repo.name}`;
      
      const langTag = repo.language ? `<span class="tag-pill tag-sky">${repo.language}</span>` : '';
      const starsTag = repo.stargazers_count > 0 ? `<span class="repo-meta-star">⭐ ${repo.stargazers_count}</span>` : '';
      const description = repo.description || 'โปรเจกต์และซอร์สโค้ดบน GitHub';

      return `
        <div class="repo-card-live">
          <div class="repo-card-top">
            <div class="repo-name-group">
              <span class="repo-icon">📂</span>
              <h3 class="repo-name">${escapeHTML(repo.name)}</h3>
            </div>
            ${starsTag}
          </div>

          <p class="repo-desc">${escapeHTML(description)}</p>

          <div class="repo-meta-row">
            ${langTag}
            <span class="repo-update-time">อัปเดต: ${formatDate(repo.updated_at)}</span>
          </div>

          <div class="repo-btn-group">
            <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>เปิดเว็บแอป ↗</span>
            </a>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>โค้ด GitHub</span>
            </a>
          </div>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.warn('GitHub API fetch failed or rate limited:', error);
    // Fallback static cards
    reposGrid.innerHTML = `
      <div class="repo-card-live">
        <div class="repo-card-top">
          <div class="repo-name-group">
            <span class="repo-icon">📂</span>
            <h3 class="repo-name">Money-memo</h3>
          </div>
        </div>
        <p class="repo-desc">เว็บแอปพลิเคชันบันทึกรายรับ-รายจ่ายอัจฉริยะ</p>
        <div class="repo-btn-group">
          <a href="https://thagoose3.github.io/Money-memo" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">เปิดเว็บแอป ↗</a>
          <a href="https://github.com/Thagoose3/Money-memo" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">โค้ด GitHub</a>
        </div>
      </div>

      <div class="repo-card-live">
        <div class="repo-card-top">
          <div class="repo-name-group">
            <span class="repo-icon">📂</span>
            <h3 class="repo-name">Exercise</h3>
          </div>
        </div>
        <p class="repo-desc">แอปพลิเคชันบันทึกและวางแผนการออกกำลังกาย</p>
        <div class="repo-btn-group">
          <a href="https://thagoose3.github.io/Exercise" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">เปิดเว็บแอป ↗</a>
          <a href="https://github.com/Thagoose3/Exercise" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">โค้ด GitHub</a>
        </div>
      </div>

      <div class="repo-card-live">
        <div class="repo-card-top">
          <div class="repo-name-group">
            <span class="repo-icon">📂</span>
            <h3 class="repo-name">Calories_Tracker</h3>
          </div>
        </div>
        <p class="repo-desc">ระบบคำนวณและติดตามโภชนาการ แคลอรี่ และสารอาหารหลัก</p>
        <div class="repo-btn-group">
          <a href="https://thagoose3.github.io/Calories_Tracker" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">เปิดเว็บแอป ↗</a>
          <a href="https://github.com/Thagoose3/Calories_Tracker" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">โค้ด GitHub</a>
        </div>
      </div>
    `;
  }
}

function formatDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('th-TH', { month: 'short', day: 'numeric', year: 'numeric' });
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
        showToast(toast, `คัดลอกอีเมลเรียบร้อย: ${email}`);
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(toast, `คัดลอกอีเมลเรียบร้อย: ${email}`);
      }
    });
  });
}

function showToast(toastEl, message) {
  if (!toastEl) return;
  const toastMsg = toastEl.querySelector('.toast-msg') || toastEl;
  if (toastMsg) toastMsg.textContent = message;

  toastEl.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   Footer Current Year & Smooth Scroll
   ========================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
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

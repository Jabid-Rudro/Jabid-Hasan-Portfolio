// ============================================================================
// Jabid Hasan Rudro — Portfolio Script (Simple Vanilla JavaScript)
// ============================================================================

// 1. Portfolio Data
const NEWS_ITEMS = [
  {
    id: 'news-1',
    title: 'DIU Software Engineering Project Showcase Finalist',
    category: 'Academic',
    date: 'October 2026',
    readTime: '3 min read',
    summary:
      'Presented a semester project management portal at the Department of Software Engineering showcase at Daffodil International University.',
    details: [
      'Built an organized academic workspace for DIU Software Engineering students to manage team sprints, lab submissions, and faculty reviews.',
      'Faculty judges highlighted the clean responsive interface, structured SQL database design, and mobile accessibility.',
    ],
  },
  {
    id: 'news-2',
    title: 'Smart Campus Transit Schedule App Released',
    category: 'Engineering',
    date: 'September 2026',
    readTime: '4 min read',
    summary:
      'Launched a mobile-first shuttle timetable web app helping DIU students check bus routes to Daffodil Smart City.',
    details: [
      'Designed specifically for students commuting between Dhaka hubs and Ashulia with instant route filtering and Dark/White mode.',
      'Built with clean HTML, CSS, and JavaScript so pages open rapidly even on mobile data.',
    ],
  },
  {
    id: 'news-3',
    title: 'Clean Architecture & JavaScript Patterns Study',
    category: 'Milestones',
    date: 'August 2026',
    readTime: '2 min read',
    summary:
      'Completed modular JavaScript and OOP system design exercises aligned with DIU Software Engineering coursework.',
    details: [
      'Practiced separation of concerns, predictable DOM rendering, and maintainable CSS variable theming.',
      'Applied these patterns across academic and personal full-stack projects.',
    ],
  },
  {
    id: 'news-4',
    title: '250+ Problem Solving Challenges Completed',
    category: 'Academic',
    date: 'July 2026',
    readTime: '3 min read',
    summary:
      'Solved 250+ algorithmic and data-structure problems in C++, Java, and JavaScript alongside weekly DIU practice.',
    details: [
      'Focused on arrays, recursion, trees, graph traversal, and SQL query optimization.',
      'Stronger algorithmic thinking improves backend API logic and frontend performance.',
    ],
  },
];

const PROJECTS = [
  {
    id: 'proj-1',
    title: 'DIU Academic & Project Hub',
    category: 'Full-Stack',
    year: '2026',
    stack: 'HTML · CSS · JavaScript · Node.js · SQL',
    image: '/src/assets/images/project_diu_portal_1795005877111.jpg',
    summary:
      'Course milestone tracker and team collaboration dashboard built for Software Engineering students at DIU.',
    highlights: [
      'Role-based views for students and project supervisors.',
      'Responsive grid layout across desktop, tablet, and smartphone screens.',
      'Normalized SQL schema for teams, courses, and weekly milestones.',
    ],
    repoUrl: 'https://github.com/jabidhasanrudro',
  },
  {
    id: 'proj-2',
    title: 'LedgerFlow Commerce & Inventory',
    category: 'Full-Stack',
    year: '2026',
    stack: 'JavaScript · Express · PostgreSQL · CSS',
    image: '/src/assets/images/project_commerce_engine_1795005877531.jpg',
    summary:
      'Inventory management and sales analytics dashboard with low-stock alerts and Dark/White theme support.',
    highlights: [
      'Instant SKU filtering, product search, and tabular revenue reporting.',
      'REST API backend validating order quantities and stock updates.',
      'Accessible dual-theme contrast across tables and metrics.',
    ],
    repoUrl: 'https://github.com/jabidhasanrudro',
  },
  {
    id: 'proj-3',
    title: 'SyncBoard System Architect',
    category: 'Systems',
    year: '2025',
    stack: 'JavaScript · HTML5 Canvas · System Design',
    image: '/src/assets/images/project_code_collab_1795005878834.jpg',
    summary:
      'Interactive diagramming and code planning workspace for drafting ER diagrams and API flows in SWE labs.',
    highlights: [
      'Drag-and-drop system blocks for tables and service endpoints.',
      'Exportable diagram layout for SRS and Software Architecture docs.',
      'Keyboard-friendly workflow for fast editing during team sessions.',
    ],
    repoUrl: 'https://github.com/jabidhasanrudro',
  },
  {
    id: 'proj-4',
    title: 'Smart Campus Transit & Schedule',
    category: 'Frontend',
    year: '2025',
    stack: 'HTML5 · Responsive CSS · Vanilla JS',
    image: '/src/assets/images/project_smart_campus_1795005878960.jpg',
    summary:
      'Mobile-first shuttle schedule and daily class timetable companion for students commuting to Daffodil Smart City.',
    highlights: [
      'Instant filtering across Dhaka & Ashulia campus bus routes.',
      'Lightweight vanilla JS architecture with fast mobile load times.',
      '44px+ touch-friendly controls designed for phone screens.',
    ],
    repoUrl: 'https://github.com/jabidhasanrudro',
  },
];

const SKILLS_LIST = [
  { short: 'C', name: 'C Language', category: 'PROGRAMMING', color: '#467EE8' },
  { short: 'DS', name: 'Data Structures', category: 'CORE CS', color: '#32B7D9' },
  { short: 'SQL', name: 'SQL', category: 'DATABASE', color: '#2399B8' },
  { short: 'ALG', name: 'Algorithms', category: 'CORE CS', color: '#7E5CE6' },
  { short: 'OOP', name: 'OOP', category: 'CONCEPT', color: '#EA6346' },
  { short: 'HTML', name: 'HTML', category: 'FRONT END', color: '#E44D26' },
  { short: 'CSS', name: 'CSS', category: 'FRONT END', color: '#2965F1' },
  { short: 'JS', name: 'JavaScript', category: 'PROGRAMMING', color: '#F5C438', darkText: true },
  { short: 'NODE', name: 'Node.js', category: 'BACK END', color: '#4CB050' },
  { short: 'GIT', name: 'Git & GitHub', category: 'TOOLS', color: '#EC589D' },
];

const CERTIFICATES = [
  {
    id: 'cert-cs202',
    title: 'CS202: Discrete Structures',
    issuer: 'Saylor Academy · Saylor University',
    date: 'April 16, 2026',
    codeLabel: 'CERTIFICATE CODE',
    codeValue: '2037509646JH',
    credentialLabel: 'ID: 2037509646JH · 44 Hours · Grade: 75.00%',
    summary:
      'Certificate of Achievement awarded to Jabid Hasan for completing 44 hours of discrete structures coursework (4.4 CEUs · Grade 75.00%).',
    image: '/src/assets/images/cert_saylor_cs202.jpg',
    pdfUrl: 'https://drive.google.com/file/d/14wLa3DGftfZvMS4ACOWBmHt5bPcYlfBa/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=14wLa3DGftfZvMS4ACOWBmHt5bPcYlfBa',
  },
  {
    id: 'cert-diu-seminar',
    title: 'DIU Day Long Seminar on Career Planning Roadmap',
    issuer: 'Daffodil International University · Dept. of SWE',
    date: 'April 16, 2026',
    codeLabel: 'PARTICIPATION',
    codeValue: 'Dept. of SWE, DIU',
    credentialLabel: 'Certificate of Achievement · Participant',
    summary:
      'Certificate of Achievement presented to Jabid Hasan Rudro for actively participating in the Day Long Seminar on Career Planning Roadmap at DIU.',
    image: '/src/assets/images/cert_diu_career_seminar.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1N4qLonkPmbgrFQhldrloRn82FdAsJIcf/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1N4qLonkPmbgrFQhldrloRn82FdAsJIcf',
  },
  {
    id: 'cert-cs301',
    title: 'CS301: Computer Architecture',
    issuer: 'Saylor Academy · Saylor University',
    date: 'April 14, 2026',
    codeLabel: 'CERTIFICATE CODE',
    codeValue: '4813266819JH',
    credentialLabel: 'ID: 4813266819JH · 48 Hours · Grade: 87.50%',
    summary:
      'Certificate of Achievement awarded to Jabid Hasan for completing 48 hours of computer architecture coursework (4.8 CEUs · Grade 87.50%).',
    image: '/src/assets/images/cert_saylor_cs301.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1fU6gtdyjsT1Rm6m6cBqAzWbGO2ZU9d52/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1fU6gtdyjsT1Rm6m6cBqAzWbGO2ZU9d52',
  },
  {
    id: 'cert-sql',
    title: 'Free SQL Certification Course',
    issuer: 'Intellipaat Academy',
    date: 'April 13, 2026',
    codeLabel: 'CERTIFICATE ID',
    codeValue: '31679-619-333912',
    credentialLabel: 'ID: 31679-619-333912 · Student ID: 251-35-261',
    summary:
      'Verified Certificate of Completion presented to Jabid Hasan (251-35-261) for mastering relational database querying and SQL fundamentals.',
    image: '/src/assets/images/cert_intellipaat_sql.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1TkKRvwJhbI1cFRg9KsqsGBAGrxXTWji7/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1TkKRvwJhbI1cFRg9KsqsGBAGrxXTWji7',
  },
  {
    id: 'cert-battle-minds',
    title: 'Battle of Minds 2026 — Volunteer Certificate',
    issuer: 'Agrapathik',
    date: '2026',
    codeLabel: 'ROLE',
    codeValue: 'Volunteer Service',
    credentialLabel: 'Role: Volunteer Service',
    summary:
      'Presented to Jabid Hasan Rudro in recognition of dedicated volunteer service, teamwork, commitment, and responsibility in Battle of Minds 2026.',
    image: '/src/assets/images/cert_battle_of_minds.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1v52D3WNQpbojaJUX0teoEYjoHwjnD9rm/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1v52D3WNQpbojaJUX0teoEYjoHwjnD9rm',
  },
  {
    id: 'cert-sawtul-ilm',
    title: 'Sawtul Ilm Season 2 — Certificate of Appreciation',
    issuer: 'Gronthosala Public Library & Social Welfare Org.',
    date: 'January 11, 2026',
    codeLabel: 'ROLE',
    codeValue: 'Co-Ordinator | Volunteer',
    credentialLabel: 'Role: Co-Ordinator | Volunteer',
    summary:
      'Presented to Jabid Hasan Rudro for organizer and coordinator performance in Sawtul Ilm Season 2 held on 10–11 January 2026.',
    image: '/src/assets/images/cert_sawtul_ilm.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1dXXbewkeDiDARAYI-OWTSJYIfJopPWoJ/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1dXXbewkeDiDARAYI-OWTSJYIfJopPWoJ',
  },
];

// 2. Icon-Only Circular Dark / White (Light) Mode Toggle (Far Right of Navbar)
const themeToggle = document.getElementById('themeToggle');
const themeIconSun = document.getElementById('themeIconSun');
const themeIconMoon = document.getElementById('themeIconMoon');

function syncThemeIcon() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if (current === 'dark') {
    themeIconSun.removeAttribute('hidden');
    themeIconMoon.setAttribute('hidden', '');
    themeToggle.setAttribute('aria-label', 'Switch to White (Light) Mode');
    themeToggle.setAttribute('title', 'Switch to White Mode');
  } else {
    themeIconMoon.removeAttribute('hidden');
    themeIconSun.setAttribute('hidden', '');
    themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    themeToggle.setAttribute('title', 'Switch to Dark Mode');
  }
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('jabid-theme', next);
  } catch (err) {}
  syncThemeIcon();
});

syncThemeIcon();

// 3. Mobile Drawer Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

menuToggle.addEventListener('click', () => {
  const isHidden = mobileDrawer.hasAttribute('hidden');
  if (isHidden) {
    mobileDrawer.removeAttribute('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
  } else {
    mobileDrawer.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileDrawer.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// 4. Scroll Progress Bar, Navbar Shadow, Active Link & Back-to-Top
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');
const topBtn = document.getElementById('topBtn');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links .nav-link');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;

  navbar.classList.toggle('scrolled', scrollTop > 20);
  if (scrollTop > 400) {
    topBtn.removeAttribute('hidden');
  } else {
    topBtn.setAttribute('hidden', '');
  }

  let activeId = 'home';
  sections.forEach((sec) => {
    if (scrollTop + 130 >= sec.offsetTop) {
      activeId = sec.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 5. Hero & Navbar Avatar Photo Upload / Reset
const heroBgPhoto = document.getElementById('heroBgPhoto');
const heroMobilePhoto = document.getElementById('heroMobilePhoto');
const navAvatarPhoto = document.getElementById('navAvatarPhoto');
const photoUpload = document.getElementById('photoUpload');
const resetPhotoBtn = document.getElementById('resetPhotoBtn');
const DEFAULT_HERO_PHOTO = '/src/assets/images/jabid_hero_photo.jpg';

function setHeroPhoto(src) {
  if (heroBgPhoto) heroBgPhoto.src = src;
  if (heroMobilePhoto) heroMobilePhoto.src = src;
  if (navAvatarPhoto) navAvatarPhoto.src = src;
}

try {
  const savedPhoto = localStorage.getItem('jabid-hero-custom-photo');
  if (savedPhoto) {
    setHeroPhoto(savedPhoto);
    resetPhotoBtn.hidden = false;
  }
} catch (err) {}

photoUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const dataUrl = ev.target.result;
    setHeroPhoto(dataUrl);
    resetPhotoBtn.hidden = false;
    try {
      localStorage.setItem('jabid-hero-custom-photo', dataUrl);
    } catch (err) {}
  };
  reader.readAsDataURL(file);
});

resetPhotoBtn.addEventListener('click', () => {
  setHeroPhoto(DEFAULT_HERO_PHOTO);
  resetPhotoBtn.hidden = true;
  photoUpload.value = '';
  try {
    localStorage.removeItem('jabid-hero-custom-photo');
  } catch (err) {}
});

// 6. Render News & Filter Tabs
const newsTimeline = document.getElementById('newsTimeline');
const newsFilterBtns = document.querySelectorAll('[data-news-filter]');

function renderNews(category = 'all') {
  const list =
    category === 'all' ? NEWS_ITEMS : NEWS_ITEMS.filter((n) => n.category === category);

  newsTimeline.innerHTML = list
    .map(
      (item) => `
      <article class="panel-card interactive-card news-card" data-open-news="${item.id}" tabindex="0">
        <p class="meta-text">${item.category} · ${item.date} · ${item.readTime}</p>
        <h3>${item.title}</h3>
        <p class="card-desc">${item.summary}</p>
        <button class="card-action" type="button">Read update →</button>
      </article>
    `
    )
    .join('');
}

newsFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    newsFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderNews(btn.getAttribute('data-news-filter'));
  });
});

renderNews('all');

// 7. Render Projects & Filter Tabs
const projectsGrid = document.getElementById('projectsGrid');
const projectFilterBtns = document.querySelectorAll('[data-project-filter]');

function renderProjects(category = 'all') {
  const list =
    category === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === category);

  projectsGrid.innerHTML = list
    .map(
      (proj) => `
      <article class="panel-card interactive-card project-card" data-open-project="${proj.id}" tabindex="0">
        <div class="project-thumb">
          <img src="${proj.image}" alt="${proj.title}" referrerpolicy="no-referrer" />
          <div class="thumb-fallback" hidden>${proj.title}</div>
        </div>
        <div class="project-body">
          <p class="meta-text">${proj.category} · ${proj.year} · ${proj.stack}</p>
          <h3>${proj.title}</h3>
          <p class="card-desc">${proj.summary}</p>
          <button class="card-action" type="button">Inspect project →</button>
        </div>
      </article>
    `
    )
    .join('');

  projectsGrid.querySelectorAll('.project-thumb img').forEach((img) => {
    img.addEventListener('error', () => {
      img.hidden = true;
      if (img.nextElementSibling) img.nextElementSibling.hidden = false;
    });
  });
}

projectFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    projectFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.getAttribute('data-project-filter'));
  });
});

renderProjects('all');

// 8. Render Animated Skill Cards (5-column squircle card grid)
function renderSkillsGrid() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;

  skillsGrid.innerHTML = SKILLS_LIST.map(
    (skill, index) => `
      <article class="skill-card" style="--skill-color: ${skill.color}; --i: ${index};">
        <div class="skill-badge ${skill.darkText ? 'is-dark-text' : ''}">${skill.short}</div>
        <div class="skill-info">
          <h3 class="skill-name">${skill.name}</h3>
          <span class="skill-category">${skill.category}</span>
        </div>
      </article>
    `
  ).join('');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsGrid.classList.add('is-visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(skillsGrid);
  } else {
    skillsGrid.classList.add('is-visible');
  }
}

renderSkillsGrid();

// 8b. Animate Education Cards when scrolled into view
function initEducationAnimation() {
  const eduList = document.getElementById('educationList');
  if (!eduList) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            eduList.classList.add('is-visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(eduList);
  } else {
    eduList.classList.add('is-visible');
  }
}

initEducationAnimation();

// 9. Render All 6 Unique Certificates Together on One Page
const certificatesList = document.getElementById('certificatesList');
if (certificatesList) {
  certificatesList.innerHTML = CERTIFICATES.map(
    (cert) => `
      <article class="cert-showcase">
        <div class="cert-preview-pane">
          <div class="cert-frame" data-open-cert="${cert.id}" tabindex="0" role="button" aria-label="Open full preview for ${cert.title}">
            <img src="${cert.image}" alt="${cert.title}" referrerpolicy="no-referrer" />
            <span class="cert-open-badge">OPEN FULL CERTIFICATE ↗</span>
          </div>
        </div>

        <div class="cert-details-pane">
          <span class="cert-issuer-tag">${cert.issuer}</span>
          <h3 class="cert-showcase-title">${cert.title}</h3>
          <p class="cert-showcase-desc">${cert.summary}</p>

          <div class="cert-meta-rows">
            <div class="cert-meta-row">
              <span class="cert-meta-key">ISSUED</span>
              <span class="cert-meta-val">${cert.date}</span>
            </div>
            <div class="cert-meta-row">
              <span class="cert-meta-key">${cert.codeLabel}</span>
              <span class="cert-meta-val mono">${cert.codeValue}</span>
            </div>
          </div>

          <div class="cert-actions">
            <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn-view">
              View Certificate ↗
            </a>
            <a href="${cert.downloadUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn-download">
              Download PDF
            </a>
          </div>
        </div>
      </article>
    `
  ).join('');
}

// 10. Detail Modal Handler
const detailModal = document.getElementById('detailModal');
const modalMeta = document.getElementById('modalMeta');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(meta, title, bodyHtml) {
  modalMeta.textContent = meta;
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  detailModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  detailModal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !detailModal.hasAttribute('hidden')) closeModal();
});

function handleCardOpen(target) {
  const newsCard = target.closest('[data-open-news]');
  if (newsCard) {
    const item = NEWS_ITEMS.find((n) => n.id === newsCard.getAttribute('data-open-news'));
    if (item) {
      openModal(
        `${item.category} · ${item.date} · ${item.readTime}`,
        item.title,
        `<p>${item.summary}</p>` + item.details.map((p) => `<p>${p}</p>`).join('')
      );
    }
    return;
  }

  const projectCard = target.closest('[data-open-project]');
  if (projectCard) {
    const proj = PROJECTS.find((p) => p.id === projectCard.getAttribute('data-open-project'));
    if (proj) {
      openModal(
        `${proj.category} · ${proj.year} · ${proj.stack}`,
        proj.title,
        `
          <img src="${proj.image}" alt="${proj.title}" referrerpolicy="no-referrer" />
          <p>${proj.summary}</p>
          <ul class="modal-list">
            ${proj.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
          <div>
            <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              View on GitHub
            </a>
          </div>
        `
      );
    }
    return;
  }

  const certCard = target.closest('[data-open-cert]');
  if (certCard) {
    const cert = CERTIFICATES.find((c) => c.id === certCard.getAttribute('data-open-cert'));
    if (cert) {
      openModal(
        `${cert.issuer} · ${cert.date}`,
        cert.title,
        `
          <img class="cert-preview" src="${cert.image}" alt="${cert.title}" referrerpolicy="no-referrer" />
          <p>${cert.summary}</p>
          <p class="mono"><strong>Credential:</strong> ${cert.credentialLabel}</p>
          <p><strong>Recipient:</strong> Jabid Hasan Rudro (Software Engineering, DIU)</p>
          <div>
            <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Open Original PDF ↗
            </a>
          </div>
        `
      );
    }
  }
}

document.addEventListener('click', (e) => handleCardOpen(e.target));
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[tabindex="0"]')) {
    e.preventDefault();
    handleCardOpen(e.target);
  }
});

// 11. Copy Email & Contact Form
const copyEmailBtn = document.getElementById('copyEmailBtn');
copyEmailBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('jabidrudro@gmail.com');
    copyEmailBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyEmailBtn.textContent = 'Copy';
    }, 2000);
  } catch (err) {
    copyEmailBtn.textContent = 'jabidrudro@gmail.com';
  }
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const subject = document.getElementById('subjectInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  if (!name || !email || !subject || !message) {
    formMessage.textContent = 'Please fill in all fields before sending.';
    formMessage.className = 'form-message error';
    return;
  }

  formMessage.textContent = `Thank you, ${name}! Your message to Jabid Hasan Rudro has been received.`;
  formMessage.className = 'form-message success';
  contactForm.reset();
});

// 12. Animated Stat Counters (Counts clearly from 0 -> target)
let countTimers = [];

function clearCountTimers() {
  countTimers.forEach((id) => cancelAnimationFrame(id));
  countTimers = [];
}

function runCountUp(el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const pad = parseInt(el.getAttribute('data-pad') || '0', 10);

  const formatNum = (val) => {
    const str = pad > 0 ? String(val).padStart(pad, '0') : String(val);
    return `${str}${suffix}`;
  };

  el.textContent = formatNum(0);
  const duration = 1800;
  const startTime = performance.now();

  function step(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    const current = Math.round(eased * target);
    el.textContent = formatNum(current);
    if (elapsed < 1) {
      const rafId = requestAnimationFrame(step);
      countTimers.push(rafId);
    } else {
      el.textContent = formatNum(target);
    }
  }

  const rafId = requestAnimationFrame(step);
  countTimers.push(rafId);
}

function initStatCounters() {
  const statsBar = document.querySelector('.hero-stats');
  const counters = document.querySelectorAll('.hero-stats [data-count]');
  if (!statsBar || !counters.length) return;

  let isAnimating = false;

  const startAll = () => {
    if (isAnimating) return;
    isAnimating = true;
    clearCountTimers();
    counters.forEach((el) => runCountUp(el));
    setTimeout(() => {
      isAnimating = false;
    }, 1850);
  };

  // Run shortly after page renders so user clearly sees 0 -> target
  setTimeout(startAll, 350);

  // Replay smoothly whenever stats bar re-enters the viewport
  if ('IntersectionObserver' in window) {
    let wasVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !wasVisible) {
            wasVisible = true;
            startAll();
          } else if (!entry.isIntersecting) {
            wasVisible = false;
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(statsBar);
  }

  // Also replay on hover or click so user can trigger it anytime
  statsBar.addEventListener('mouseenter', startAll);
  statsBar.addEventListener('click', startAll);
}

initStatCounters();

// 13. Current Year in Footer
document.getElementById('yearNow').textContent = new Date().getFullYear();

// Theme: respect prefers-color-scheme first, persist with localStorage.
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('keyser-theme'); } catch (e) { stored = null; }
  var initial = stored;
  if (!initial && window.matchMedia) {
    initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (!initial) initial = 'light';
  apply(initial);

  function apply(theme) {
    var dark = theme === 'dark';
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.setAttribute('aria-pressed', String(dark));
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('keyser-theme', next); } catch (e) { /* private mode */ }
    });
  }
})();

// Mobile nav: side drawer.
(function () {
  var btn = document.getElementById('menu-toggle');
  var closeBtn = document.getElementById('menu-close');
  var nav = document.getElementById('mobile-nav');
  var scrim = document.getElementById('nav-scrim');
  if (!btn || !nav) return;

  function openNav() {
    nav.removeAttribute('hidden');
    if (scrim) scrim.removeAttribute('hidden');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { nav.classList.add('open'); });
    });
    document.body.classList.add('nav-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = 'Close';
    if (closeBtn) closeBtn.focus();
  }

  function closeNav() {
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Menu';
    window.setTimeout(function () {
      if (!nav.classList.contains('open')) {
        nav.setAttribute('hidden', '');
        if (scrim) scrim.setAttribute('hidden', '');
      }
    }, 220);
  }

  btn.addEventListener('click', function () {
    if (nav.classList.contains('open')) closeNav();
    else openNav();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (scrim) scrim.addEventListener('click', closeNav);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
      btn.focus();
    }
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeNav();
  });
})();

// Horizontal track buttons: scroll by one card, native scroll only.
document.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-track-prev],[data-track-next]');
  if (!btn) return;
  var id = btn.getAttribute('data-track-prev') || btn.getAttribute('data-track-next');
  var track = document.getElementById(id);
  if (!track) return;
  var card = track.querySelector(':scope > *');
  var step = card ? card.getBoundingClientRect().width + 16 : 320;
  var dir = btn.hasAttribute('data-track-next') ? 1 : -1;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  track.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
});

// Random symbols background — subtle floating/drifting.
(function () {
  var container = document.querySelector('.random-symbols');
  if (!container) return;

  var symbols = [
    '</', '>', '∣ψ⟩=α∣0⟩+β∣1⟩', 'साधनं सिध्दिम् यान्ति',
    'मनः संप्रभवः सुखम्।', '{', '}', '/>', '&&', '||', '===', '=>',
    '∑', '∇', 'ℂ', 'Δ', 'λ', '∀', '∃', '⟦', '⟧', '→', '∝', '≠',
    '∇·B=0', '⌈ ⌉', 'ℵ₀', '<<', '>>', '↑', '↓', 'λ', '→', '∈',
    '⊂', '⊆', '⊄', '⊈', '|x|', 'Turing', 'O(n)', 'Ω(n)', 'Θ(n)',
    'φ', 'χ', '∅', '⊕', '⊗', '≡', '⋈', '∩', '∪', '⊔', '||=', '++',
    '--', '<=>', '∞', 'π', '√', '∫', '∂', '∇²', 'α', 'β', 'γ',
    'ΔH', 'ΔG', 'ΔS', '∅', '⇌', '→', 'H₂O', 'F = ma', 'E = mc²',
    'p = mv', 'W = Fd', 'F = μN', 'Q = mcΔT', 'PV = nRT',
    'B = μ₀I / r', 'p = -iħ ∇', 'Z = N - A', 'p = ∇ψ', 'E = - ∇Φ'
  ];

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 640;
  var count = isMobile ? 25 : 50;

  var animations = [
    'drift-1', 'drift-2', 'drift-3', 'drift-4', 'drift-5',
    'drift-6', 'drift-7', 'drift-8', 'drift-9', 'drift-10'
  ];

  // Inject keyframes once
  var style = document.createElement('style');
  style.textContent = [
    '@keyframes drift-1 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } 25% { transform: translate(30px, -20px) rotate(2deg); opacity: 0.12; } 50% { transform: translate(10px, -40px) rotate(-1deg); opacity: 0.06; } 75% { transform: translate(-20px, -10px) rotate(1deg); opacity: 0.1; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } }',
    '@keyframes drift-2 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } 25% { transform: translate(-25px, 15px) rotate(-2deg); opacity: 0.1; } 50% { transform: translate(-10px, 35px) rotate(1deg); opacity: 0.05; } 75% { transform: translate(15px, 5px) rotate(-1deg); opacity: 0.08; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } }',
    '@keyframes drift-3 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } 33% { transform: translate(20px, -30px) rotate(3deg); opacity: 0.11; } 66% { transform: translate(-15px, -15px) rotate(-2deg); opacity: 0.05; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } }',
    '@keyframes drift-4 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } 33% { transform: translate(-30px, -10px) rotate(-3deg); opacity: 0.1; } 66% { transform: translate(10px, 25px) rotate(2deg); opacity: 0.04; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } }',
    '@keyframes drift-5 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.06; } 50% { transform: translate(40px, 20px) rotate(4deg); opacity: 0.09; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.06; } }',
    '@keyframes drift-6 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.06; } 50% { transform: translate(-20px, -40px) rotate(-4deg); opacity: 0.1; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.06; } }',
    '@keyframes drift-7 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } 25% { transform: translate(15px, 30px) rotate(1deg); opacity: 0.11; } 50% { transform: translate(-25px, 10px) rotate(-2deg); opacity: 0.05; } 75% { transform: translate(10px, -20px) rotate(2deg); opacity: 0.08; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } }',
    '@keyframes drift-8 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } 25% { transform: translate(-15px, -25px) rotate(-1deg); opacity: 0.1; } 50% { transform: translate(30px, 5px) rotate(2deg); opacity: 0.06; } 75% { transform: translate(-10px, 30px) rotate(-2deg); opacity: 0.09; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.08; } }',
    '@keyframes drift-9 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } 50% { transform: translate(25px, -15px) rotate(2deg); opacity: 0.1; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } }',
    '@keyframes drift-10 { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } 50% { transform: translate(-35px, 20px) rotate(-3deg); opacity: 0.09; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.07; } }'
  ].join(' ');
  document.head.appendChild(style);

  for (var i = 0; i < count; i++) {
    var el = document.createElement('span');
    var sym = symbols[Math.floor(Math.random() * symbols.length)];
    el.textContent = sym;
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.fontSize = (Math.random() * 14 + 10) + 'px'; // 10-24px
    var anim = animations[Math.floor(Math.random() * animations.length)];
    var dur = 15 + Math.random() * 20; // 15-35s
    var delay = Math.random() * 5; // 0-5s
    if (!prefersReduced) {
      el.style.animation = anim + ' ' + dur + 's ease-in-out ' + delay + 's infinite';
    }
    container.appendChild(el);
  }
})();

// Year update
document.addEventListener('DOMContentLoaded', function () {
  var year = document.getElementById('current-year');
  if (year) year.textContent = '2026';
});

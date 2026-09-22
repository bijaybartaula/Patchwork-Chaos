// Project data: only what exists in the repo. No counts shown; filters reflect real entries.
var projects = [
  {
    id: 1,
    title: 'AI for Renewable Energy Optimization',
    category: 'ai',
    categoryLabel: 'AI/ML',
    problem: 'Renewable supply shifts with weather while demand follows its own pattern.',
    built: 'A machine learning model that predicts consumption and adjusts distribution for efficiency.',
    challenge: 'Making predictions useful for distribution decisions, not just accurate on paper.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow'],
    github: 'https://github.com/vijaybartaula/Renewable-Energy-Optimization',
    demo: null
  },
  {
    id: 3,
    title: 'Smart Water Management System',
    category: 'iot',
    categoryLabel: 'IoT',
    problem: 'Household and urban water gets wasted through leaks and manual distribution.',
    built: 'An IoT setup that monitors usage in real time, flags leaks, and automates distribution.',
    challenge: 'Reliable sensor readings and messaging over constrained hardware.',
    technologies: ['Raspberry Pi', 'MQTT', 'Python'],
    github: 'https://github.com/vijaybartaula/Smart-Water-Management',
    demo: null
  },
  {
    id: 6,
    title: 'Reverse Auction for Good Deeds',
    category: 'web',
    categoryLabel: 'Web',
    problem: 'People willing to help lack a simple way to offer time and skill.',
    built: 'A web platform where users bid time and effort instead of money, with charity donation as an option.',
    challenge: 'Real-time bidding state and a payment path that stays honest.',
    technologies: ['Node.js', 'WebSockets', 'Stripe'],
    github: 'https://github.com/vijaybartaula/Reverse-Auction-for-Good-Deeds',
    demo: 'https://reverse-auction.vercel.app'
  },
  {
    id: 7,
    title: 'Carbon Footprint Tracker',
    category: 'web',
    categoryLabel: 'Web',
    problem: 'Individuals and small businesses cannot see where emissions come from.',
    built: 'A web tool that records activity and suggests concrete reductions.',
    challenge: 'Turning rough input into estimates people can act on.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/vijaybartaula/Carbon-Footprint-Tracker',
    demo: 'https://carbon-tracker.web.app'
  },
  {
    id: 10,
    title: 'Affordable Housing Finder App',
    category: 'app',
    categoryLabel: 'App',
    problem: 'Low-income families struggle to find listings, subsidies, and assistance in one place.',
    built: 'A mobile app that connects listings with support programs.',
    challenge: 'Presenting dense eligibility info without overwhelming the reader.',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    github: 'https://github.com/vijaybartaula/Affordable-Housing-Finder',
    demo: null
  },
  {
    id: 13,
    title: 'Virtual Rehabilitation Game for Stroke Patients',
    category: 'games',
    categoryLabel: 'Game',
    problem: 'Rehab exercises are repetitive and hard to stay with.',
    built: 'A VR game that turns motor-skill exercises into short motivating sessions.',
    challenge: 'Keeping movement tracking forgiving enough for recovering patients.',
    technologies: ['Unity', 'C#', 'VR'],
    github: 'https://github.com/vijaybartaula/Rehabilitation-VR-Game',
    demo: null
  }
];

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
  });
}

function initializeProjects() {
  var track = document.getElementById('projects-track');
  if (!track) return;
  var buttons = document.querySelectorAll('.filter-btn');

  function card(p) {
    var demo = p.demo
      ? '<a href="' + escapeHtml(p.demo) + '" target="_blank" rel="noopener noreferrer">Demo</a>'
      : '<span class="no-demo">No live demo</span>';
    return '<article class="project-card" data-category="' + p.category + '">' +
      '<p class="kicker">' + escapeHtml(p.categoryLabel) + '</p>' +
      '<h3>' + escapeHtml(p.title) + '</h3>' +
      '<p><strong>Problem.</strong> ' + escapeHtml(p.problem) + '</p>' +
      '<p><strong>Built.</strong> ' + escapeHtml(p.built) + '</p>' +
      '<p><strong>Hard part.</strong> ' + escapeHtml(p.challenge) + '</p>' +
      '<ul class="tech-list">' + p.technologies.map(function (t) {
        return '<li>' + escapeHtml(t) + '</li>';
      }).join('') + '</ul>' +
      '<div class="card-links">' +
      '<a href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener noreferrer">Source</a>' + demo +
      '</div></article>';
  }

  track.innerHTML = projects.map(card).join('');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      track.querySelectorAll('.project-card').forEach(function (el) {
        el.style.display = (f === 'all' || el.getAttribute('data-category') === f) ? '' : 'none';
      });
      track.scrollTo({ left: 0, behavior: 'auto' });
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeProjects);

// Education only. No invented employers or roles.
var education = [
  {
    title: 'B.E. in Computer Engineering',
    school: 'Nepal College of Information Technology',
    period: '2022 – 2026',
    place: 'Balkumari, Nepal',
    note: 'Web development, AI fundamentals, data structures, and backend basics. Study projects in this portfolio come from this period.'
  },
  {
    title: '+2 in Computer Science',
    school: 'NIST College, Banepa',
    period: '2020 – 2022',
    place: 'Banepa, Nepal',
    note: 'Algorithms, data handling, and applied computing foundations.'
  },
  {
    title: 'Secondary Education',
    school: 'Shree Janak Secondary School',
    period: 'Until Mar 2020',
    place: 'Bhakundebesi, Nepal',
    note: 'Mathematics and science focus with extracurricular problem-solving.'
  }
];

function initializeExperience() {
  var track = document.getElementById('edu-track');
  if (!track) return;
  track.innerHTML = education.map(function (e) {
    return '<article class="edu-card">' +
      '<p class="kicker">Education</p>' +
      '<h3>' + e.title + '</h3>' +
      '<p>' + e.school + '</p>' +
      '<p class="edu-meta">' + e.period + ' · ' + e.place + '</p>' +
      '<p>' + e.note + '</p></article>';
  }).join('');
}

document.addEventListener('DOMContentLoaded', initializeExperience);

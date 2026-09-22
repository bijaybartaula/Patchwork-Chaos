// Technical areas as plain lists. No percentages, no bars.
var skillsData = [
  {
    group: 'Programming & Systems',
    note: 'Systems programming, algorithmic thinking, and building reliable backends across compiled and interpreted languages.',
    items: ['Python', 'JavaScript', 'Java', 'C++']
  },
  {
    group: 'Web Architecture & HCI',
    note: 'Responsive interfaces, thoughtful state management, and modern web applications that feel fast and intuitive.',
    items: ['HTML/CSS', 'React', 'Node.js', 'Next.js']
  },
  {
    group: 'Applied AI & ML Research',
    note: 'Domain-specific modeling, retrieval systems, and machine learning pipelines grounded in verified context.',
    items: ['Qiskit', 'Blockchain', 'Computer Vision', 'Reinforcement Learning', 'RAG', 'LLMs', 'Prompt Engineering']
  },
  {
    group: 'Data & Systems Infrastructure',
    note: 'Schema design, relational and document databases, vector search indexing, and resilient API layers.',
    items: ['MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL', 'Vector DBs', 'Supabase']
  }
];

function initializeSkills() {
  var el = document.querySelector('.skills-list');
  if (!el) return;
  el.innerHTML = skillsData.map(function (g) {
    return '<div class="skill-group"><h3>' + g.group + '</h3>' +
      '<p class="skill-note">' + g.note + '</p><ul>' +
      g.items.map(function (s) { return '<li>' + s + '</li>'; }).join('') +
      '</ul></div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded', initializeSkills);

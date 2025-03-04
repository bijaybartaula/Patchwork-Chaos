const skillsData = [
  {
    category: 'Programming Languages',
    icon: 'code-2',
    skills: [
      { name: 'Python', level: 78 },
      { name: 'JavaScript', level: 73 },
      { name: 'Java', level: 72 },
      { name: 'C++', level: 71 },
      { name: 'Rust', level: 69 }
    ]
  },
  {
    category: 'Web Technologies',
    icon: 'globe',
    skills: [
      { name: 'React', level: 74 },
      { name: 'Node.js', level: 72 },
      { name: 'HTML/CSS', level: 81 },
      { name: 'TypeScript', level: 73 },
      { name: 'Next.js', level: 68 }
    ]
  },
  {
    category: 'AI, Blockchain & Quantum Computing',
    icon: 'brain', 
    skills: [
      { name: 'Reinforcement Learning', level: 68 },
      { name: 'Computer Vision', level: 70 },
      { name: 'Blockchain Development', level: 72 },
      { name: 'Quantum Algorithms', level: 68 },
      { name: 'Qiskit', level: 66 }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: 'cloud',
    skills: [
      { name: 'CI/CD', level: 76 },
      { name: 'Docker', level: 71 },
      { name: 'AWS', level: 77 },
      { name: 'Google Cloud', level: 68 },
      { name: 'Kubernetes', level: 72 }
    ]
  }
];

function initializeSkills() {
  const skillsContainer = document.querySelector('.skills-container');

  skillsContainer.innerHTML = skillsData.map(group => `
    <div class="skill-group fade-in">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-2 bg-blue-100 rounded-lg text-blue-600">
          <i data-lucide="${group.icon}"></i>
        </div>
        <h3 class="text-xl font-semibold">${group.category}</h3>
      </div>
      <div class="space-y-6">
        ${group.skills.map(skill => `
          <div class="skill-bar">
            <div class="skill-info">
              <span class="font-medium">${skill.name}</span>
              <span class="text-gray-500">${skill.level}%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" style="width: 0%" data-progress="${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Initialize Lucide icons
  lucide.createIcons();

  // Animate skill bars when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-progress-bar');
        bars.forEach(bar => {
          const progress = bar.dataset.progress;
          setTimeout(() => {
            bar.style.width = `${progress}%`;
          }, 200);
        });
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-group').forEach(group => {
    observer.observe(group);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSkills);

const experiences = [ 
    {
      type: 'education',
      title: 'B.E. in Computer Engineering (In Progress)',
      company: 'Nepal College of Information Technology',
      location: 'Balkumari, Nepal',
      period: '2022 - 2026',
      description: 'Focused on web development, Artificial Intelligence, and Data Structures, exploring front-end integration and backend optimization. Investigating methods to improve system performance through creative solutions. Driven to solve complex challenges with efficient and precise coding techniques.',
      achievements: []
    },
    // {
    //     type: 'work',
    //     title: 'Software Engineering Intern',
    //     company: 'Tech Corp',
    //     location: 'Remote',
    //     period: 'Jun 2025 - Aug 2025',
    //     description: 'Assisted in the design and enhancement of web applications, employing cutting-edge technologies such as React and Node.js. Played an integral role in developing innovative features and optimizing system performance to ensure a flawless and efficient user experience.',
    //     achievements: []
    //   },
    //   {
    //     type: 'work',
    //     title: 'Research Assistant',
    //     company: 'University Lab',
    //     location: 'Remote',
    //     period: 'Jan 2025 - May 2025',
    //     description: 'Collaborated closely with esteemed researchers to delve into the complexities of machine learning algorithms. Contributed to the meticulous analysis of data, aiding in the publication of groundbreaking findings in prestigious, peer-reviewed academic journals.',
    //     achievements: []
    //   },
    {
      type: 'education',
      title: '+2 SLC in Computer Science',
      company: 'NIST College Banepa',
      location: 'Banepa, Nepal',
      period: '2020 - 2022',
      description: 'Developed advanced computational solutions using algorithms, data analysis, and optimization techniques. Applied mathematical modeling and statistical methods to integrate theory with scientific principles. Fostered innovation and progress in cross-disciplinary research and technology.',
      achievements: []
    },
    {
      type: 'education',
      title: 'Academic Foundation',
      company: 'Shree Janak Secondary School',
      location: 'Bhakundebesi, Nepal',
      period: 'Somewhere - Mar 2020',
      description: 'Completed primary and secondary education with distinction, demonstrating exceptional aptitude in Mathematics and the Sciences. Actively engaged in extracurricular pursuits, fostering a well-rounded skill set, and exhibited remarkable problem-solving acumen through various academic challenges.',
      achievements: []
    }
  ];
  
  // Initialize experience section
  function initializeExperience() {
    const timeline = document.querySelector('.timeline');
  
    // Create timeline items
    timeline.innerHTML = experiences.map((exp, index) => `
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="flex items-center gap-2 mb-4">
            <div class="p-2 rounded-lg ${exp.type === 'work' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}">
              <i data-lucide="${exp.type === 'work' ? 'briefcase' : 'graduation-cap'}"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold">${exp.title}</h3>
              <h4 class="text-lg text-gray-600">${exp.company}</h4>
            </div>
          </div>
  
          <div class="flex items-center gap-4 text-gray-500 mb-4">
            <div class="flex items-center gap-1">
              <i data-lucide="calendar"></i>
              <span>${exp.period}</span>
            </div>
            <div class="flex items-center gap-1">
              <i data-lucide="map-pin"></i>
              <span>${exp.location}</span>
            </div>
          </div>
  
          <p class="text-gray-600 mb-4">${exp.description}</p>
  
          <ul class="space-y-2">
            ${exp.achievements.map(achievement => `
              <li class="text-gray-600 flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                ${achievement}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  
    // Initialize Lucide icons
    lucide.createIcons();
  
    // Animate timeline items when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializeExperience);
  
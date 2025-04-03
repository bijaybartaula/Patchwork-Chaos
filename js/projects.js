const projects = [ 

  // AI/ML
  {
    id: 1,
    title: "AI for Renewable Energy Optimization",
    description: "A machine learning model that optimizes the usage of renewable energy sources (solar, wind, etc.) by predicting energy consumption patterns and adjusting energy distribution for maximum efficiency.",
    category: "ai",
    image: "https://media.licdn.com/dms/image/D5612AQGek6FkY7Ed_w/article-cover_image-shrink_600_2000/0/1663245137008?e=2147483647&v=beta&t=4ptwb2fySXlMkK5xCxLsFpKJN8ViGkpKyI7aRlqYzJw",
    technologies: ["Python", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/vijaybartaula/Renewable-Energy-Optimization",
    demo: "https://example.com/"
  },
  // {
  //   id: 2,
  //   title: "AI for Traffic Congestion Management",
  //   description: "An AI-powered system that uses real-time traffic data to optimize traffic signals, reduce congestion, and improve road safety in urban areas.",
  //   category: "ai",
  //   image: "https://developer-blogs.nvidia.com/wp-content/uploads/2021/06/ITS-Nota-Image-1000x600-1.png",
  //   technologies: ["Python", "OpenCV", "TensorFlow"],
  //   github: "https://github.com/vijaybartaula/AI-Traffic-Management",
  //   demo: "https://example.com/"
  // },

  // IoT
  {
    id: 3,
    title: "Smart Water Management System",
    description: "An IoT-based system that monitors water usage in real-time, detects leaks, and automates water distribution to improve efficiency and reduce water wastage in urban areas.",
    category: "iot",
    image: "https://planetsmartcity.in/wp-content/uploads/2023/10/Water-management.png",
    technologies: ["Raspberry Pi", "MQTT", "Python"],
    github: "https://github.com/vijaybartaula/Smart-Water-Management",
    demo: "https://example.com/"
  },
  // {
  //   id: 4,
  //   title: "IoT-based Waste Management System",
  //   description: "A smart waste management system that uses IoT sensors to monitor trash levels in bins and optimize garbage collection routes, reducing waste overflow and improving recycling efforts.",
  //   category: "iot",
  //   image: "https://media.excellentwebworld.com/wp-content/uploads/2024/05/27114111/smart-waste-management-using-internet-of-things.webp",
  //   technologies: ["Arduino", "IoT", "Node.js"],
  //   github: "https://github.com/vijaybartaula/IoT-Waste-Management-System",
  //   demo: "https://example.com/"
  // },

  // Web Development
  // {
  //   id: 5,
  //   title: "Global Disaster Relief Platform",
  //   description: "A web platform that connects emergency responders, volunteers, and donors to provide real-time information and resources during natural disasters, ensuring effective and timely assistance.",
  //   category: "web",
  //   image: "https://fliplet.com/wp-content/w3-webp/uploads/2023/04/emcf_devices_image_2_v2.pngw3.webp",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   github: "https://github.com/vijaybartaula/Global-Disaster-Relief",
  //   demo: "https://disaster-relief.netlify.app"
  // },
  {
    id: 6,
    title: "Reverse Auction for Good Deeds",
    description: "A platform where users bid to perform good deeds for others, offering time, effort, or expertise instead of payment. It features a reverse auction style, allowing users to choose who performs the task, with an option to donate time to charity.",
    category: "web",
    image: "https://user-images.githubusercontent.com/83122808/161217545-4e4ea08f-8fbb-4330-8054-ef145e6b1c12.png", 
    technologies: ["Node.js", "WebSockets", "Stripe"],
    github: "https://github.com/vijaybartaula/Reverse-Auction-for-Good-Deeds",
    demo: "https://reverse-auction.vercel.app"
  },
  {
    id: 7,
    title: "Carbon Footprint Tracker",
    description: "A web-based tool that allows individuals and businesses to track their carbon footprint, providing actionable insights to reduce their environmental impact.",
    category: "web",
    image: "https://cdn.dribbble.com/users/610533/screenshots/11465382/co2tracker.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/vijaybartaula/Carbon-Footprint-Tracker",
    demo: "https://carbon-tracker.web.app"
  },
  // {
  //   id: 8,
  //   title: "Virtual Time Capsule Platform",
  //   description: "A platform where users can create digital time capsules (letters, videos, or photos) that are locked and only opened on a specific date in the future. It could also allow users to send time capsules to others for them to open on a set future date.",
  //   category: "web",
  //   image: "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/a883f17a-2803-4469-81ae-02d2c5d51c47/1717973381157/desktop.jpg", 
  //   technologies: ["React", "Node.js", "Encryption"],
  //   github: "https://github.com/vijaybartaula/Virtual-Time-Capsule", 
  //   demo: "https://virtual-capsule.vercel.app" 
  // },
  // {
  //   id: 9,
  //   title: "Crowdsourced Memory Map",
  //   description: "An interactive map where users pin personal memories, stories, or experiences tied to specific locations, including photos, text, and video, creating a collective collection of human stories over time.",
  //   category: "web",
  //   image: "https://lonewalker.net/wp-content/uploads/Screenshot_20220426-092223.jpg", 
  //   technologies: ["Node.js", "Maps API", "WebRTC"],
  //   github: "https://github.com/vijaybartaula/Crowdsourced-Memory-Map", 
  //   demo: "https://crowdsourced-memory-map.web.app" 
  // },

  // App Development
  {
    id: 10,
    title: "Affordable Housing Finder App",
    description: "A mobile app that helps low-income families find affordable housing options by connecting them with available listings, government subsidies, and financial assistance programs.",
    category: "app",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*1Ej2rSRCQOYdqdkqVAZtCw.png",
    technologies: ["React Native", "Firebase", "Node.js"],
    github: "https://github.com/vijaybartaula/Affordable-Housing-Finder",
    demo: "https://example.com/"
  },
  // {
  //   id: 11,
  //   title: "Sustainable Shopping App",
  //   description: "A mobile app that helps consumers find eco-friendly products and brands, promoting sustainability by providing product reviews, sustainability ratings, and shopping recommendations.",
  //   category: "app",
  //   image: "https://miro.medium.com/v2/resize:fit:1400/1*UDi-P94Ou_RvMU4OYk8E6Q.png",
  //   technologies: ["React Native", "Node.js", "Google Firebase"],
  //   github: "https://github.com/vijaybartaula/Sustainable-Shopping-App",
  //   demo: "https://example.com/"
  // },  

  // Games Development
  // {
  //   id: 12,
  //   title: "Environmental Awareness Game",
  //   description: "A mobile game that educates players about environmental issues like deforestation, pollution, and climate change while encouraging positive actions to reduce their environmental impact.",
  //   category: "games",
  //   image: "https://cdn.prod.website-files.com/5b651f8b5fc94c4e27470a81/5fc73342b54c16e81252812c_Environmental%20Games%20Blog%20Header%20Full%20Image%20-%20Chaos%20Theory%20(2)%20(1).png",
  //   technologies: ["Unity", "C#", "Android"],
  //   github: "https://github.com/vijaybartaula/Environmental-Awareness-Game",
  //   demo: "https://example.com/"
  // },
  {
    id: 13,
    title: "Virtual Rehabilitation Game for Stroke Patients",
    description: "A virtual reality game designed to aid in the rehabilitation of stroke patients by engaging them in fun and motivating exercises that improve motor skills and coordination.",
    category: "games",
    image: "https://gesturetekhealth.com/sites/default/files/irex_madonna_edit-1_1.jpg",
    technologies: ["Unity", "C#", "VR"],
    github: "https://github.com/vijaybartaula/Rehabilitation-VR-Game",
    demo: "https://example.com/"
  }
];   
    
  function initializeProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';
  
    // Create project cards
    function createProjectCard(project) {
      return `
        <div class="project-card" data-category="${project.category}">
          <div style="overflow: hidden;">
            <img src="${project.image}" alt="${project.title}" class="project-image">
          </div>
          <div class="project-content">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              ${project.technologies.map(tech => `
                <span class="tech-box">
                  ${tech}
                </span>
              `).join('')}
            </div>
            <div class="flex gap-4">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <i data-lucide="github"></i>
                <span>Source</span>
              </a>
              <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <i data-lucide="external-link"></i>
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }
  
    // Filter projects
    function filterProjects(category) {
      const projectCards = document.querySelectorAll('.project-card');
  
      projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('visible'), 100);
        } else {
          card.style.display = 'none';
          card.classList.remove('visible');
        }
      });
    }
  
    // Render initial projects
    projectsGrid.innerHTML = projects.map(createProjectCard).join('');
    lucide.createIcons();
  
    // Add filter functionality
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;
        currentFilter = category;
  
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        filterProjects(category);
      });
    });
  
    // Initialize with all projects visible
    filterProjects('all');
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializeProjects);
  

  // Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add event listeners for filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');
        
        // Get the filter category
        const filter = button.getAttribute('data-filter');
        
        // Show or hide project cards based on the filter
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';  // Show the card
          } else {
            card.style.display = 'none';  // Hide the card
          }
        });
      });
    });
  });
  

// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  const icon = mobileMenuBtn.querySelector('i');
  if (navLinks.classList.contains('show')) {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    const icon = mobileMenuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove('show');
    const icon = mobileMenuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      mobileMenu.classList.remove('active');
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// Initialize typed.js
const typed = new Typed('#typed', {
  strings: [
    'Quantum Computing Enthusiast',
    'AI/ML Enthusiast',
    'Blockchain Architect',
    'Computer Science Engineer',
    'Full Stack Developer',
    'Tech Innovator',
    'Creative Problem Solver'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    // List of symbols and text elements
    const symbols = [
      '</', '>', '∣ψ⟩=α∣0⟩+β∣1⟩', 'साधनं सिध्दिम् यान्ति', 'मनः संप्रभवः सुखम्।', '{', '}', '/>', '&&', '||', '===', '=>', '∑', '∇', 'ℂ', 'Δ', 'λ', '∀', '∃', '⟦', '⟧', '→', '∝', '≠', '∇·B=0', '⌈ ⌉', 'ℵ₀', '<<', '>>', '↑', '↓', 'λ', '→', '∈', '⊂', '⊆', '⊄', '⊈', '|x|', 'Turing', 'O(n)', 'Ω(n)', 'Θ(n)', 'φ', 'χ', '∅', '⊕', '⊗', '≡', '⋈', '∩', '∪', '⊔', '||=', '++', '--', '<=>', '∞', 'π', '√', '∫', '∂', '∇²', 'α', 'β', 'γ', 'ΔH', 'ΔG', 'ΔS', '∅', '⇌', '→', 'H₂O','F = ma', 'E = mc²', 'p = mv', 'W = Fd','F = μN', 'Q = mcΔT', 'PV = nRT', 'B = μ₀I / r', 'p = -iħ ∇', 'Z = N - A', 'p = ∇ψ', 'E = - ∇Φ'
    ];
  
    // Container where the random symbols will be appended
    const randomSymbolsContainer = document.querySelector('.random-symbols');
  
    // Function to create random symbols
    const createRandomSymbols = () => {
      for (let i = 0; i < 50; i++) {
        const symbolDiv = document.createElement('div');
        
        // Randomize the symbol
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Random styles
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 5}s`;
        const fontSize = `${Math.random() * 20 + 10}px`;
  
        // Apply styles dynamically
        symbolDiv.style.position = 'absolute';
        symbolDiv.style.left = left;
        symbolDiv.style.top = top;
        symbolDiv.style.animationDelay = animationDelay;
        symbolDiv.style.fontSize = fontSize;
        symbolDiv.style.opacity = '0.67';
        symbolDiv.style.color = 'lightgrey';
  
        // Assign the random symbol text
        symbolDiv.textContent = randomSymbol;
        
        // Add the float animation class
        symbolDiv.classList.add('animate-float');
        
        // Append to the container
        randomSymbolsContainer.appendChild(symbolDiv);
      }
    };
  
    // Call the function to generate the symbols
    createRandomSymbols();
  });
  
// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

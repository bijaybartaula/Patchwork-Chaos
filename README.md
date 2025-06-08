# Alchemist of Digital Ingenuity

[![Website](https://img.shields.io/website?url=https%3A//bijaybartaula.com.np)](https://bijaybartaula.com.np)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-79%2F100-orange)](https://bijaybartaula.com.np)
[![Performance](https://img.shields.io/badge/Performance-64%2F100-yellow)](#performance-metrics)

> A modern, responsive portfolio website showcasing computer engineering expertise and web development projects. Built with vanilla JavaScript for optimal performance and maintainability.

**Take a Tour**: [.com.np](https://bijaybartaula.com.np)

---

## Features

### **Modern Design**
- **Responsive Layout**: Mobile-first design with fluid breakpoints
- **Interactive Animations**: Smooth CSS3 transitions and keyframe animations
- **Dynamic Typography**: Animated typing effects with Typed.js
- **Professional Aesthetics**: Clean gradient text and modern iconography

### **Dynamic Content**
- **Filterable Projects**: Interactive gallery with category-based filtering (AI/ML, IoT, Web Dev)
- **Animated Skills**: Visual proficiency bars with smooth animations
- **Interactive Timeline**: Educational and professional experience showcase
- **Quote Generator**: Inspirational quotes with elegant transitions

### **Performance Optimized**
- **Vanilla JavaScript**: Zero framework overhead, minimal dependencies
- **Efficient Animations**: CSS-based transitions with hardware acceleration
- **Lazy Loading**: Intersection Observer API for optimized content loading
- **Modern Standards**: ES6+ syntax with backward compatibility

---

## Architecture

### **Project Structure**
```
patchwork-chaos/
├── README.md               # Project overview and instructions
├── CNAME                   # Custom domain configuration
├── index.html              # HTML structure (277 LOC)
├── LICENSE                 # GNU AGPL v3.0
├── asset/                  # Media files
│   ├── artifacts/          # Generated artifacts (e.g., screenshots, reports)
│   └── diagram/
│       └── architecture-diagram.mermaid  # Architecture diagram in Mermaid format
├── styles/
│   ├── main.css              # Core styles (19.5KB)
│   └── animations.css        # Keyframe animations (3.33KB)
├── js/
   ├── main.js              # Core functionality (171 LOC)
   ├── projects.js          # Project filtering (253 LOC)
   ├── skills.js            # Skill visualization (100 LOC)
   ├── experience.js        # Timeline rendering (112 LOC)
   ├── contact.js           # Form handling (98 LOC)
   └── quotes.js            # Quote generator (1476 LOC)
```

### **Technology Stack**
| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ | Core structure and functionality |
| **Animations** | CSS Keyframes, Intersection Observer | Smooth user interactions |
| **Icons** | Lucide Icons | Consistent iconography |
| **Typography** | Typed.js | Dynamic text animations |
| **Forms** | EmailJS | Contact form integration |

### **Architectural Structure**
```
┌──────────────────────────────────────────────────────┐
│                  Presentation Layer                   │
├───────────────┬───────────────┬──────────────────────┤
│  HTML5 Markup │   CSS3 Styles │    JavaScript         │
└───────┬───────┴───────┬───────┴──────────┬───────────┘
        │               │                  │
        ▼               ▼                  ▼
┌──────────────────────────────────────────────────────┐
│                   Application Layer                   │
├───────────────┬───────────────┬──────────────────────┤
│  DOM Manip.   │ Event Handlers│  API Integrations     │
└───────────────┴───────────────┴──────────────────────┘
```

### **Architectural Diagram**

```
flowchart TD
    index["index.html"]:::ui

    subgraph "Presentation Layer"
        subgraph "CSS Modules"
            maincss["main.css"]:::ui
            animcss["animations.css"]:::ui
        end
        subgraph "JS Modules"
            mainjs["main.js"]:::logic
            proj["projects.js"]:::logic
            skill["skills.js"]:::logic
            exp["experience.js"]:::logic
            quote["quotes.js"]:::logic
            contact["contact.js"]:::logic
            typed["Typed.js"]:::logic
            icons["Lucide Icons"]:::logic
        end
    end

    subgraph "Application Layer"
        dom["DOM & Event Handlers"]:::logic
        data["Data Models"]:::logic
    end

    subgraph "External Services"
        emailjs["EmailJS API"]:::external
    end

    subgraph "Assets"
        assetDir["asset/"]:::assets
        cv["Bijay_CV.pdf"]:::assets
    end

    index -->|"loads CSS"| maincss
    index -->|"loads CSS"| animcss
    index -->|"loads JS"| mainjs
    index -->|"loads JS"| proj
    index -->|"loads JS"| skill
    index -->|"loads JS"| exp
    index -->|"loads JS"| quote
    index -->|"loads JS"| contact

    mainjs -->|"init & invoke"| typed
    mainjs -->|"init & invoke"| icons

    proj -->|"render/filter"| dom
    skill -->|"observe & animate"| dom
    exp -->|"lazy-load timeline"| dom
    quote -->|"rotate quotes"| dom
    contact -->|"handle form"| dom
    dom -->|"uses models"| data
    contact -->|"calls API"| emailjs

    index --> assetDir
    assetDir --> cv

    click index "https://github.com/bijaybartaula/patchwork-chaos/blob/main/index.html"
    click maincss "https://github.com/bijaybartaula/patchwork-chaos/blob/main/styles/main.css"
    click animcss "https://github.com/bijaybartaula/patchwork-chaos/blob/main/styles/animations.css"
    click mainjs "https://github.com/bijaybartaula/patchwork-chaos/blob/main/js/main.js"
    click proj "https://github.com/bijaybartaula/patchwork-chaos/blob/main/js/projects.js"
    click skill "https://github.com/bijaybartaula/patchwork-chaos/blob/main/js/skills.js"
    click exp "https://github.com/bijaybartaula/patchwork-chaos/blob/main/js/experience.js"
    click quote "https://github.com/bijaybartaula/patchwork-chaos/blob/main/js/quotes.js"
    click contact "https://github.com/bijaybartaula/patchwork-chaos/blob/main/js/contact.js"
    click assetDir "https://github.com/bijaybartaula/patchwork-chaos/tree/main/asset/"
    click cv "https://github.com/bijaybartaula/patchwork-chaos/blob/main/asset/Bijay_CV.pdf"

    classDef ui fill:#cce5ff,stroke:#006BB3,color:#000
    classDef logic fill:#d4edda,stroke:#28A745,color:#000
    classDef external fill:#fff3cd,stroke:#FFC107,color:#000
    classDef assets fill:#e2e3e5,stroke:#6C757D,color:#000
```

### **Component Specifications**

#### Core Modules
| Module          | LOC  | Dependencies          | Key Features                          |
|-----------------|------|-----------------------|---------------------------------------|
| main.js         | 171  | Typed.js, Lucide      | Navigation, animations, core logic    |
| projects.js     | 253  | None                  | Project filtering, card generation    |
| skills.js       |  100  | None                  | Animated skill visualization          |
| experience.js   | 112  | None                  | Interactive timeline rendering        |
| contact.js      | 98  | EmailJS               | Form validation, email integration    |
| quotes.js       | 1476   | None                  | Randomized quote display              |

#### Style Modules
| File            | Size | Features                              |
|-----------------|------|---------------------------------------|
| main.css        | 19.5KB | Responsive layout, theme variables    |
| animations.css  | 3.33KB  | 10+ keyframe animations               |

#### Bundle Size Overview

| Bundle          | Value       |
| --------------- | ----------- |
| JS Bundle Size  | 75KB (gzip) |
| CSS Bundle Size | 23KB (gzip) |

---

## Performance Metrics

### **Lighthouse Scores**
| Metric | Desktop | Mobile | Target |
|--------|---------|---------|--------|
| **Performance** | 99/100 | 93/100 | 100 |
| **Accessibility** | 84/100 | 75/100 | 100 |
| **Best Practices** | 100/100 | 100/100 |100 |
| **SEO** | 91/100 | 91/100 | 100 |
| **Overall** | **93.5/100** | **89.75/100** | **100** |

### **Core Web Vitals**
| Metric | Desktop | Mobile | Benchmark |
|--------|---------|---------|-----------|
| **FCP** | 0.7s | 2.7s | <1.8s |
| **LCP** | 0.7s | 2.7s | <2.5s |
| **TBT** | 0ms | 0ms | <300ms |
| **CLS** | 0.001 | 0.002 | <0.1 |

---

## Quick Start

### **Prerequisites**
- Modern web browser (Chrome 88+, Firefox 85+, Safari 14+)
- Web server (for local development)

### **Installation**
```bash
# Clone the repository
git clone https://github.com/bijaybartaula/patchwork-chaos.git

# Navigate to project directory
cd patchwork-chaos

```

### **Live Server Setup**
```bash
# For VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# For npm live-server
npm install -g live-server
live-server
```

---

## Configuration

### **EmailJS Setup**
```javascript
// Update contact.js with your credentials
const CONFIG = {
  serviceID: 'your_service_id',
  templateID: 'your_template_id', 
  publicKey: 'your_public_key'
};
```

### **Customization Guide**
1. **Personal Information**: Update `index.html` with your details
2. **Projects**: Modify project data in `js/projects.js`
3. **Skills**: Adjust proficiency levels in `js/skills.js`
4. **Experience**: Update timeline in `js/experience.js`
5. **Styling**: Customize colors and themes in CSS files

---

## Development

### **Local Development**
```bash
# Watch for changes (requires Node.js)
npm install -g nodemon
nodemon --watch . --ext html,css,js --exec "echo 'Files changed'"

# Or use browser-sync for auto-reload
npm install -g browser-sync
browser-sync start --server --files "*.html, styles/*.css, js/*.js"
```

### **Code Quality**
- **Linting**: ESLint configuration for JavaScript
- **Formatting**: Prettier for consistent code style
- **Validation**: W3C HTML/CSS validation
- **Performance**: Regular Lighthouse audits

---

## Optimization Roadmap

### **Immediate Improvements** (Q2 2025)
- [ ] **Image Optimization**: Convert to WebP/AVIF formats (-1.5MB)
- [ ] **JavaScript Minification**: Reduce bundle size (-4KB unused JS)
- [ ] **Render Blocking**: Defer non-critical CSS/JS (-1,030ms)
- [ ] **Caching Strategy**: Implement efficient cache headers

### **Accessibility Enhancements**
- [ ] **Color Contrast**: Improve contrast ratios to WCAG AA standards
- [ ] **Screen Reader**: Add ARIA labels and descriptions
- [ ] **Keyboard Navigation**: Enhance focus management
- [ ] **Semantic HTML**: Improve heading hierarchy

### **Future Features** (Q3 2025)
- [ ] **Dark Mode**: Theme toggle with automatic system preference detection (though it's perfect in the default mode)
- [ ] **PWA Support**: Service worker and offline functionality
- [ ] **i18n**: Multi-language support
- [ ] **Blog Integration**: Dynamic content management

---

## Security & Best Practices

### **Implemented Security**
- ✅ Input sanitization for contact forms
- ✅ XSS prevention measures
- ✅ EmailJS rate limiting
- ✅ HTTPS enforcement

### **Recommended Headers**
```nginx
# Add to your web server configuration
add_header Content-Security-Policy "default-src 'self'";
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

---

## Analytics & Monitoring

### **Performance Monitoring**
- **Core Web Vitals**: Monthly Lighthouse audits
- **Error Tracking**: Console error monitoring
- **Form Analytics**: EmailJS delivery tracking
- **Uptime Monitoring**: 99.9% availability target

### **SEO Optimization**
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Proper crawling directives

---

## Contributing

Contributions are welcome! Please read our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### **Development Standards**
- Follow ESLint configuration
- Maintain 90%+ test coverage
- Update documentation for new features
- Ensure cross-browser compatibility

---

## License

This project is licensed under the **GNU Affero General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

### **License Summary**
- ✅ Commercial use allowed
- ✅ Modification allowed  
- ✅ Distribution allowed
- ❗ Must include copyright notice
- ❗ Must disclose source code
- ❗ Same license required for derivatives

---

## Author

**Bijay Bartaula**
- Website: [Keyser.](https://keyser.netlify.app)
- Email: bijay.221208@ncit.edu.np
- LinkedIn: [Connect With Me](https://linkedin.com/in/bijaybartaula)
- GitHub: [@bijaybartaula](https://github.com/bijaybartaula)

---

## Acknowledgments

- **[Typed.js](https://github.com/mattboldt/typed.js/)** - Beautiful typing animations
- **[Lucide Icons](https://lucide.dev/)** - Clean, consistent iconography  
- **[EmailJS](https://www.emailjs.com/)** - Reliable email service integration

---

<div align="center">

**⭐ Star this repository if it helped you build your own portfolio.**

Made with ❤️ and 💔 by [Bijay Bartaula](https://bijaybartaula.com.np)

</div>

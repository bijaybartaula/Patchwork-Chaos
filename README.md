# Patchwork Chaos

Personal portfolio site for Bijay Bartaula, computer engineering student working in web architecture and applied machine learning. Live at [bijaybartaula.com.np](https://bijaybartaula.com.np/).

The site is a single static page with no build step, no framework, and no runtime dependencies. What you see in the repository is what gets served.

## Stack

HTML, CSS, and vanilla JavaScript. That is the whole list.

There are no CDN scripts, no icon libraries, no animation libraries, no form services, and no backend. Earlier versions of this project used Typed.js, Lucide, and EmailJS. All three were removed during the redesign. The contact section is now a plain `mailto:` link, icons are limited to two inline SVGs (theme toggle no longer uses icons at all), and the typing animation is gone.

## Structure

```text
patchwork-chaos/
├── index.html              # Page structure and content (276 lines)
├── styles/
│   └── main.css            # All styles, light and dark themes (284 lines)
├── js/
│   ├── main.js             # Theme, mobile nav, track buttons, symbol background, year (136 lines)
│   ├── projects.js         # Project data and card rendering with filters (124 lines)
│   ├── skills.js           # Technical area data and list rendering (36 lines)
│   └── experience.js       # Education data and card rendering (39 lines)
├── asset/
│   ├── Bijay_CV.pdf        # CV download
│   ├── bijay_favicon.png   # Favicon and touch icon
│   └── diagram/
│       └── architecture-diagram.mermaid
├── robots.txt
├── sitemap.xml
├── CNAME                   # Custom domain for GitHub Pages
├── LICENSE                 # GNU Affero General Public License v3.0
└── README.md
```

Content lives in two places. Static copy (hero, about, story, contact, footer) is written directly in `index.html`. Repeatable data (projects, skill groups, education entries) lives as plain arrays in the corresponding JS files and is rendered into the page on load.

## Sections

The page follows one numbered sequence, sections 01 through 10, sharing a single content container so every section starts from the same left edge:

1. Background and focus
2. The Trail I Tread (personal story)
3. Interests (single editorial line, no cards)
4. Technical areas (four groups plus a capabilities list, no proficiency scores)
5. Professional experience (AI Engineer Intern, Personal Virtual Lab maintained since 2023)
6. Research and publications (points to Google Scholar, no fabricated papers)
7. Featured projects (horizontal track with All, AI/ML, Web, Game filters)
8. Education (horizontal track, three entries)
9. Blog and writing (links out to [bartaula.vercel.app/blog](https://bartaula.vercel.app/blog), no built-in blog system)
10. Get in touch (email line plus a Send Email `mailto:` button)

There is no pricing, testimonials, newsletter funnel, or metrics dashboard. The numbers in the hero marginalia (winters, works, tomes) are personal notes, not product statistics.

## Key implementation details

**Theming.** A `data-theme` attribute on `<html>` switches between two custom property sets: warm paper (`#faf7f0`) with deep cosmic blue ink, and very dark navy (`#0c1322`) with off-white text. The toggle is a rectangular switch that sets `aria-pressed`. Preference persists in `localStorage` under the `keyser-theme` key and falls back to `prefers-color-scheme` on first visit.

**Horizontal browsing.** Projects and education render into CSS scroll-snap tracks (`overflow-x: auto`, `scroll-snap-type: x mandatory`). Supplemental arrow buttons scroll by one card width and degrade to native swipe and touch scrolling. Filtering is a `display` toggle with `aria-pressed` on each button. No carousel library.

**Symbol background.** The hero contains a `.random-symbols` layer behind the content (`pointer-events: none`, `z-index: 0`). `main.js` populates it with 50 spans on desktop and 25 under 640px, drawn from a fixed list of math, physics, programming, and Sanskrit fragments. Ten drift keyframes are injected once and assigned with randomized duration (15 to 35s) and delay. When `prefers-reduced-motion` is set, no animation is applied and opacity drops to a static wash.

**Skills without scores.** There are no percentage ratings, progress bars, or charts anywhere. Proficiency is communicated through the grouped technology lists, the project cards, and the linked source repositories.

**Projects without screenshots.** Project cards are text only: category kicker, title, problem, what was built, the hard part, technology tags, and source link. Demo links appear only where a real deployment URL exists in the data; otherwise the card reads "No live demo".

## SEO

The head includes a description, canonical URL, keyword list drawn from actual page content, Open Graph tags, a summary Twitter card, theme-color values for both schemes, and a JSON-LD `Person` block (name, student title, NCIT affiliation, Kavre/NP address, email, and the three verifiable profile URLs). There is intentionally no `og:image` because the site ships no imagery to reference. `robots.txt` and `sitemap.xml` (single canonical URL, appropriate for a one-page site) sit at the root. Markup uses one `h1`, section `h2`s, skip link, labelled navigation, and visible focus states.

## Running it locally

Any static file server works. Two options:

```bash
# Python
python -m http.server 8000

# VS Code
# Right-click index.html, "Open with Live Server"
```

Then open `http://localhost:8000`. There is nothing to install and nothing to build.

Deployment is plain static hosting. On GitHub Pages the `CNAME` file maps the custom domain automatically.

## Customizing

- Personal copy: edit `index.html` directly.
- Projects: edit the `projects` array in `js/projects.js`. Each entry needs `title`, `category` (one of `ai`, `iot`, `web`, `app`, `games`), `categoryLabel`, `problem`, `built`, `challenge`, `technologies`, `github`, and `demo` (or `null`).
- Skill groups: edit `skillsData` in `js/skills.js`.
- Education: edit the `education` array in `js/experience.js`.
- Theme colors, type stacks, and radii: CSS custom properties at the top of `styles/main.css`. Radii are intentionally varied (3px buttons, 2px cards, circular track arrows) rather than uniform.

## Browser support and accessibility

Targets modern browsers with no polyfills. The layout breakpoint is 820px (desktop nav collapses to a menu button) with a 640px adjustment for the symbol layer. Keyboard users get a skip link, focusable scroll tracks with arrow-key support, labelled controls, and `aria-pressed`/`aria-expanded` states throughout. `prefers-reduced-motion` disables smooth scrolling, transitions, and the symbol drift.

## Blog & Writing

Writing on software, technology, artificial intelligence, and ideas at the intersection of technology and people.

My work has been published across Medium, Substack, and WordPress. The existing writing archives live on those platforms.

**Read here:** [https://bartaula.vercel.app/blog](https://bartaula.vercel.app/blog)

> *"You are what your deep, driving desire is. As your desire is, so is your will. As your will is, so is your deed. As your deed is, so is your destiny."*
>
> — Upanishads

## License

GNU Affero General Public License v3.0. See [LICENSE](LICENSE).

## Author

Bijay Bartaula

- Site: [bijaybartaula.com.np](https://bijaybartaula.com.np/)
- Blog: [bartaula.vercel.app/blog](https://bartaula.vercel.app/blog)
- Email: bijay.algo@gmail.com
- GitHub: [@bijaybartaula](https://github.com/bijaybartaula)
- LinkedIn: [bijaybartaula](https://linkedin.com/in/bijaybartaula)
- X: [@bijaybartaula](https://x.com/bijaybartaula)
- Google Scholar: [citations](https://scholar.google.com/citations?user=n2CoW9MAAAAJ&hl=en)

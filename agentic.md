# agentic.md — Kerala Photographer Portfolio Website
> **AI Agent Build Guide** · No Backend · 3D / Next-Gen · Freelance Portfolio

---

## 0. Project Vision

Build a **jaw-dropping, no-backend portfolio website** for a Kerala-based photographer specialising in wedding photography, child photography, and advertisement videos. The site must feel like a **premium creative studio** — something a client in Kochi or Thrissur sees and immediately trusts with their wedding day.

**The one unforgettable thing:** When you scroll, the world moves around you. Photos breathe, float, and rotate in 3D space. It feels less like a website and more like walking through a gallery exhibition.

**Target clients:** Kerala families planning weddings, parents wanting child portraits, brands needing ad video production.

**Deploy target:** Static hosting — Netlify, Vercel, or GitHub Pages. Zero backend. Zero server cost.

---

## 1. Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | **React 18 + Vite** | Fast dev, optimised static build |
| 3D / WebGL | **Three.js + @react-three/fiber** | 3D scene, floating image planes |
| 3D Helpers | **@react-three/drei** | Float, Image, Environment, Text3D |
| Scroll Animation | **GSAP + ScrollTrigger** | Industry standard, silky scroll |
| Page Transitions | **Framer Motion** | Route-level transitions |
| Routing | **React Router v6** | Client-side, 3 pages only |
| Styling | **Tailwind CSS v3** | Utility-first, fast |
| Video | **Native HTML5 video** | No external player dependency |
| Font Loading | **Google Fonts (self-hosted)** | No FOMO on perf |
| Icons | **Lucide React** | Lightweight |
| Contact Form | **Formspree** (free tier) | No backend needed |
| Deployment | **Netlify / Vercel** | Static, free, fast CDN |

**No backend. No database. No CMS. All content is hardcoded JSON in `src/data/`.**

---

## 2. Project Structure

```
photographer-portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # 1200×630 Open Graph image
│   └── assets/
│       ├── images/
│       │   ├── weddings/         # wedding photo placeholders (10–15 imgs)
│       │   ├── children/         # child photography (8–10 imgs)
│       │   ├── ads/              # ad/commercial stills (6–8 imgs)
│       │   └── hero/             # hero section images (3–5 imgs)
│       └── videos/
│           ├── showreel.mp4      # main showreel (autoplay, muted)
│           └── ad-sample.mp4     # ad video sample
├── src/
│   ├── main.jsx
│   ├── App.jsx                   # Router + global layout
│   ├── index.css                 # Tailwind imports + CSS variables
│   ├── data/
│   │   ├── gallery.js            # All photo/video content data
│   │   ├── testimonials.js       # Client quotes
│   │   └── services.js           # Services offered + pricing info
│   ├── pages/
│   │   ├── Home.jsx              # Hero + reel + services teaser
│   │   ├── Portfolio.jsx         # Full gallery with 3D filter
│   │   └── Contact.jsx           # Contact form + location
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Minimal floating nav
│   │   │   ├── Footer.jsx        # Minimal footer
│   │   │   └── PageTransition.jsx
│   │   ├── three/
│   │   │   ├── HeroScene.jsx     # Main 3D hero with floating photos
│   │   │   ├── FloatingGrid.jsx  # 3D image grid for portfolio
│   │   │   └── ParticleField.jsx # Ambient particle background
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ShowreelSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   └── GalleryFilter.jsx
│   │   └── ui/
│   │       ├── MagneticButton.jsx  # Button that follows cursor
│   │       ├── CursorFollower.jsx  # Custom cursor dot
│   │       ├── ImageReveal.jsx     # Masked reveal on scroll
│   │       └── VideoModal.jsx      # Lightbox for videos
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   ├── useCursorPosition.js
│   │   └── useMediaQuery.js
│   └── utils/
│       ├── animations.js         # Reusable GSAP configs
│       └── constants.js          # Breakpoints, easing values
├── .env.example                  # VITE_FORMSPREE_ID=xxxxx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 3. Pages (Only 3)

### Page 1: Home (`/`)
The signature page. The one that closes clients.

**Sections in order:**
1. **HeroSection** — Full viewport. 3D scene with 3–5 floating photo planes rotating slowly in z-space. Photographer name in large display type. Tagline: *"Moments Crafted in Kerala"*. CTA: "See My Work" → scrolls to reel.
2. **ShowreelSection** — Full-width autoplay muted video loop (showreel.mp4). Click to unmute. Overlay text fades out on play.
3. **ServicesSection** — 3 cards: Wedding · Children · Advertisement. Each card has a hover 3D tilt effect (CSS `perspective` + `rotateX/Y` on mouse move). Short description. Kerala-specific copy.
4. **TestimonialsSection** — Horizontal scroll strip. 4–6 client quotes. Names like "Anjali & Rahul, Thrissur Wedding 2024".
5. **CTASection** — Dark section. Large text: *"Let's create something unforgettable."* Magnetic CTA button → `/contact`.

### Page 2: Portfolio (`/portfolio`)
The gallery. Every photo must feel like it deserves its own wall.

**Layout:**
- Filter tabs at top: `All` · `Weddings` · `Children` · `Ads & Videos`
- On page load: **3D floating grid** (react-three/fiber) — images displayed as 3D planes in a staggered grid, subtle drift/float animation
- Toggle button: **"3D View ↔ Grid View"** — smooth transition between Three.js canvas and a standard CSS masonry grid
- Clicking any image → full-screen lightbox with prev/next
- Video items show a play button overlay → opens `VideoModal`

### Page 3: Contact (`/contact`)
Clean. Trustworthy. Converts.

**Sections:**
1. Large heading: *"Book Your Session"*
2. Form fields: Name, Phone, Email, Service (dropdown: Wedding / Children / Advertisement), Preferred Date, Message
3. Submit via **Formspree** (POST to `https://formspree.io/f/{VITE_FORMSPREE_ID}`)
4. Success state: animated checkmark + "I'll get back to you within 24 hours"
5. Below form: WhatsApp CTA button (Kerala clients heavily use WhatsApp)
6. Location card: "Based in Kerala · Serving all of South India"
7. Instagram embed link (not widget — just a styled link to profile)

---

## 4. Design System

### Aesthetic Direction
**"Dark Luxury Editorial"** — The kind of portfolio a Vogue photographer would have. Deep blacks, warm gold accents, generous white space, cinematic typography. Kerala's richness — gold, deep teal, ivory — translated into a modern digital luxury language.

### Color Palette (CSS Variables)
```css
:root {
  --color-bg:         #0A0A0A;   /* near black */
  --color-surface:    #141414;   /* card background */
  --color-border:     #1E1E1E;   /* subtle dividers */
  --color-gold:       #C9A84C;   /* Kerala gold — primary accent */
  --color-gold-light: #E8C97A;   /* hover state */
  --color-ivory:      #F5F0E8;   /* primary text */
  --color-muted:      #888880;   /* secondary text */
  --color-teal:       #1A4A4A;   /* deep Kerala teal — hover fills */
}
```

### Typography
```
Display / Hero:    "Cormorant Garamond" — serif, elegant, editorial weight
Body / UI:         "DM Sans" — geometric, clean, modern
Accent / Labels:   "Cinzel" — Roman caps for category labels, service names
```
Load from Google Fonts. Self-host via `vite-plugin-webfont-dl` for performance.

### Motion Principles
- **Scroll reveals:** Elements enter from below with `opacity: 0 → 1` + `y: 40px → 0`, staggered with GSAP ScrollTrigger
- **3D Hero:** Three.js canvas — photos on `PlaneGeometry`, `Float` component from drei, slow Y-axis rotation on the group, depth-of-field post-processing
- **Cursor:** Custom 40px circle follower. Grows and inverts color on hover over images/buttons
- **Page transitions:** Framer Motion `AnimatePresence` — dark curtain wipe between pages
- **Magnetic buttons:** CTAs pull toward cursor within a 100px radius
- **Image hover:** CSS 3D tilt on service cards (`transform: perspective(800px) rotateX() rotateY()`)
- **No motion on mobile:** Disable Three.js canvas on `prefers-reduced-motion` and on screens < 768px. Show static hero image instead.

---

## 5. Three.js Hero Scene (`HeroScene.jsx`)

```jsx
// Architecture guide — agent writes full implementation

// Canvas setup
<Canvas
  camera={{ position: [0, 0, 5], fov: 60 }}
  gl={{ antialias: true, alpha: true }}
  style={{ position: 'absolute', inset: 0 }}
>
  <ambientLight intensity={0.4} />
  <directionalLight position={[5, 5, 5]} intensity={0.8} />
  <Environment preset="sunset" />

  {/* 5 floating photo planes at different z-depths */}
  {heroImages.map((img, i) => (
    <Float key={i} speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh position={positions[i]} rotation={rotations[i]}>
        <planeGeometry args={[sizes[i].w, sizes[i].h]} />
        <meshStandardMaterial map={texture} transparent opacity={0.9} />
      </mesh>
    </Float>
  ))}

  {/* Subtle particle field behind */}
  <ParticleField count={200} color="#C9A84C" />

  <EffectComposer>
    <DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2} />
    <Bloom luminanceThreshold={0.8} intensity={0.3} />
    <Vignette eskil={false} offset={0.2} darkness={0.8} />
  </EffectComposer>
</Canvas>
```

**Positions array** — stagger the 5 planes:
```js
const positions = [
  [-2.5, 0.5, -1],   // left, slightly behind
  [2.2, -0.3, -0.5], // right, mid depth
  [0, 0.2, 0],       // center, front
  [-1.2, -1.5, -2],  // lower left, deep
  [1.8, 1.4, -1.5],  // upper right, deep
]
```

---

## 6. Content Data (`src/data/`)

### `gallery.js`
```js
export const galleryItems = [
  {
    id: 1,
    category: "weddings",           // weddings | children | ads
    type: "image",                  // image | video
    src: "/assets/images/weddings/w1.jpg",
    thumbnail: "/assets/images/weddings/w1-thumb.jpg",
    title: "Anjali & Rahul",
    location: "Thrissur, Kerala",
    year: "2024",
    featured: true,
  },
  // ... 30+ items total
  {
    id: 25,
    category: "ads",
    type: "video",
    src: "/assets/videos/ad-sample.mp4",
    thumbnail: "/assets/images/ads/ad1-thumb.jpg",
    title: "Malabar Gold Campaign",
    client: "Malabar Gold & Diamonds",
    year: "2024",
  }
]
```

### `testimonials.js`
```js
export const testimonials = [
  {
    quote: "He captured every emotion of our wedding day perfectly. Our families in the Gulf were in tears watching the video.",
    name: "Sreelakshmi & Arjun",
    event: "Wedding · Kochi · 2024",
    rating: 5,
  },
  // 5 more
]
```

### `services.js`
```js
export const services = [
  {
    id: "weddings",
    title: "Wedding Photography",
    tagline: "Every glance, every tear, every laugh — preserved forever.",
    description: "Full-day coverage from Muhurtham to reception. Traditional Kerala ceremonies and modern celebrations.",
    features: ["Full-day coverage", "Edited digital gallery", "Printed album option", "Drone shots available"],
    icon: "heart",
  },
  {
    id: "children",
    title: "Child Photography",
    tagline: "Childhood is fleeting. These moments are not.",
    description: "Natural light studio and outdoor sessions for newborns, first birthdays, and family portraits.",
    features: ["Newborn · 1st Birthday · Annual", "Outdoor & studio sessions", "Same-week delivery"],
    icon: "star",
  },
  {
    id: "ads",
    title: "Advertisement Videos",
    tagline: "Visuals that make your brand impossible to ignore.",
    description: "Product launches, brand films, social media reels, and TV commercials for Kerala businesses.",
    features: ["4K production", "Scripting & storyboard", "Drone & gimbal", "Color grading"],
    icon: "video",
  },
]
```

---

## 7. Performance Rules

The 3D effects are heavy. These rules are non-negotiable:

- **Lazy load all images** — use `loading="lazy"` + Intersection Observer for gallery
- **Image format** — all portfolio images must be `.webp` with `.jpg` fallback
- **Three.js on demand** — only mount `<Canvas>` when `!isMobile && !prefersReducedMotion`
- **Video** — `preload="none"` on all videos. Load only on viewport entry.
- **Code splitting** — React Router lazy imports all 3 pages: `const Portfolio = lazy(() => import('./pages/Portfolio'))`
- **Font swap** — `font-display: swap` on all custom fonts
- **Target Lighthouse score:** Performance ≥ 85, Accessibility ≥ 95

---

## 8. SEO & Meta

Every page needs these in `index.html` and via React Helmet (or Vite plugin):

```html
<!-- Home page example -->
<title>Your Name | Wedding & Child Photographer in Kerala</title>
<meta name="description" content="Kerala's finest wedding, child, and advertisement photographer. Serving Kochi, Thrissur, Calicut and all of Kerala. Book your session today." />

<!-- Open Graph -->
<meta property="og:title" content="Your Name Photography · Kerala" />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />

<!-- Local SEO schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Photographer",
  "name": "Your Name Photography",
  "address": { "@type": "PostalAddress", "addressRegion": "Kerala", "addressCountry": "IN" },
  "areaServed": "Kerala",
  "priceRange": "₹₹–₹₹₹"
}
</script>
```

---

## 9. Mobile Experience

No Three.js on mobile. The experience must still be exceptional:

- Hero: Full-viewport image with `object-fit: cover`, subtle Ken Burns CSS animation (`scale: 1 → 1.05` over 8s)
- Portfolio: Pure CSS masonry grid, no 3D toggle
- Touch-friendly lightbox with swipe gestures (use `react-swipeable`)
- Sticky WhatsApp float button bottom-right on mobile (critical for Kerala clients)
- Nav: Hamburger menu with full-screen overlay, staggered link reveal animation

---

## 10. Placeholder Assets Strategy

Agents cannot generate real photos. Use this strategy:

```js
// In gallery.js, use high-quality Unsplash URLs as placeholders
// that match the categories

// Weddings
"https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800" // Kerala wedding

// Children
"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800" // child portrait

// Replace all with real client photos before launch
```

Add a `/* REPLACE WITH REAL PHOTO */` comment on every placeholder. The agent must make all image slots functional and clearly marked.

---

## 11. Formspree Contact Integration

```jsx
// Contact.jsx — form submission handler
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus("loading")
  
  const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
  
  if (res.ok) {
    setStatus("success") // show animated checkmark
  } else {
    setStatus("error")   // show retry message
  }
}
```

`.env.example`:
```
VITE_FORMSPREE_ID=your_formspree_form_id
```

---

## 12. Navbar Design

Minimal. Floating. Does not compete with photos.

```
Desktop:
[Logo / Name in Cinzel]          [Portfolio]  [Contact]  [Book Now →]

Mobile:
[Logo]                                                   [☰]
```

- On scroll down: navbar shrinks, gains `backdrop-filter: blur(12px)` + subtle border
- On scroll up: navbar re-appears (hide-on-scroll-down / show-on-scroll-up)
- Active page: gold underline on nav link
- "Book Now" → styled as outlined gold button, magnetic hover effect

---

## 13. Agent Build Order

Execute in this exact sequence:

```
Step 1:  Scaffold Vite + React project. Install all dependencies.
Step 2:  Configure Tailwind, CSS variables, Google Fonts import.
Step 3:  Write src/data/ files (gallery.js, testimonials.js, services.js) with placeholder content.
Step 4:  Write utils/animations.js (GSAP configs) and utils/constants.js.
Step 5:  Write hooks/ (useScrollProgress, useCursorPosition, useMediaQuery).
Step 6:  Write layout components: Navbar, Footer, PageTransition.
Step 7:  Write ui/ components: CursorFollower, MagneticButton, ImageReveal, VideoModal.
Step 8:  Write three/ components: ParticleField → HeroScene → FloatingGrid.
Step 9:  Write sections/: HeroSection → ShowreelSection → ServicesSection → TestimonialsSection.
Step 10: Assemble Home.jsx — wire all sections, add GSAP ScrollTrigger on each.
Step 11: Write Portfolio.jsx — filter tabs, 3D/Grid toggle, lightbox.
Step 12: Write Contact.jsx — form, Formspree integration, WhatsApp button.
Step 13: Write App.jsx — router, AnimatePresence, lazy loading.
Step 14: Configure vite.config.js — build optimisation, asset handling.
Step 15: Add meta tags, OG image, JSON-LD schema to index.html.
Step 16: Mobile audit — disable Three.js, add touch swipe, WhatsApp float button.
Step 17: Performance pass — lazy images, video preload="none", code splitting.
Step 18: Write README.md with deploy instructions.
Step 19: Test build: npm run build → npm run preview. Fix all console errors.
Step 20: Final check: Lighthouse score, mobile responsiveness, all links work.
```

---

## 14. Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.0",
    "framer-motion": "^11.2.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",
    "three": "^0.165.0",
    "@react-three/fiber": "^8.16.8",
    "@react-three/drei": "^9.105.6",
    "@react-three/postprocessing": "^2.16.2",
    "lucide-react": "^0.383.0",
    "react-swipeable": "^7.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.2.11",
    "tailwindcss": "^3.4.4",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38"
  }
}
```

---

## 15. Definition of Done

The build is complete when ALL of the following pass:

- [ ] `npm run dev` starts with zero console errors
- [ ] Hero 3D scene renders — photos floating, particles visible
- [ ] Scroll through Home — all GSAP animations trigger correctly
- [ ] Portfolio 3D ↔ Grid toggle works
- [ ] Gallery filter (All/Weddings/Children/Ads) filters correctly
- [ ] Lightbox opens on image click, closes on ESC / outside click
- [ ] Video modal plays on click
- [ ] Contact form submits (test with Formspree)
- [ ] Page transitions animate between all 3 routes
- [ ] Custom cursor follows mouse, grows on hover
- [ ] `npm run build` completes with no errors
- [ ] Mobile view: Three.js disabled, Ken Burns hero visible
- [ ] WhatsApp float button visible on mobile
- [ ] Lighthouse Performance ≥ 85
- [ ] All images have `alt` text (accessibility)
- [ ] README has deploy steps

---

## 16. README Must Include

1. Live demo link (Netlify/Vercel URL)
2. Screenshot of hero on desktop + mobile
3. Tech stack badges
4. 3-command setup (`git clone` → `npm install` → `npm run dev`)
5. How to replace placeholder photos with real content
6. How to set up Formspree (env variable)
7. How to deploy to Netlify / Vercel (1-click deploy button)

---

## 17. Portfolio Pitch Notes

When showing this project to freelance clients:

- **Lead with the live demo** — let the 3D hero do the talking
- **Mention Kerala specificity** — WhatsApp integration, local SEO, Muhurtham/ceremony knowledge shows domain awareness
- **Highlight no-backend = no hosting cost** — clients love "zero monthly server fees"
- **Offer customisation** — "I can swap in your real photos, update the color palette to match your brand, and have it live in 48 hours"
- **This targets:** Creative portfolio websites, photography/videography studios, personal brand sites — all high-paying Upwork categories

---

*Last updated: March 2026 · Stack: React 18 · Three.js r165 · GSAP 3 · Vite 5*
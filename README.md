# Kerala Photographer Portfolio

A premium, high-performance, no-backend portfolio website for photographers specializing in weddings, children, and commercials. Built with React, Three.js, and GSAP.

![Hero Showcase](/og-image.jpg)

## 🚀 Tech Stack

- **Framework:** [React 18 + Vite](https://vitejs.dev/)
- **3D Engine:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations:** [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Contact:** [Formspree](https://formspree.io/)

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd photography-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root and add your Formspree ID:
   ```env
   VITE_FORMSPREE_ID=your_formspree_form_id
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

## 📸 Content Customization

### Replacing Placeholder Photos
All gallery data is located in `src/data/gallery.js`. 
- Replace the Unsplash URLs with your local assets in `public/assets/images/`.
- Update `testimonials.js` and `services.js` with your own content.

### Video Showcase
Place your showreel in `public/assets/videos/showreel.mp4` and update the source in `ShowreelSection.jsx`.

## 🚢 Deployment

This is a **zero-backend** project. You can host it for free on:
- **Netlify:** Connect your repo and set the build command to `npm run build` and publish directory to `dist`.
- **Vercel:** Works automatically when you import the repository.
- **GitHub Pages:** Use a GH Action for Vite deployment.

## 📱 Mobile Experience
The project is fully responsive. On mobile devices, heavy Three.js effects are disabled and replaced with high-quality static visuals to ensure maximum performance and batter life.

---
*Crafted for premium visual storytelling.*

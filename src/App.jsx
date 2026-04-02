import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CursorFollower from './components/ui/CursorFollower';

// Pages - Lazy Loaded
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  const location = useLocation();

  return (
    <div className="bg-luxury-bg text-luxury-primary min-h-screen">
      <CursorFollower />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-luxury-bg">
            <div className="text-gold font-accent animate-pulse tracking-widest uppercase text-xs">Loading...</div>
          </div>
        }>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
      
      {/* Mobile WhatsApp Button */}
      <a 
        href="https://wa.me/918156965442" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl md:hidden hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;

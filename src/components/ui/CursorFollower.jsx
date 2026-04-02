import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorFollower = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener('mousemove', moveMouse);
    
    const hoverables = document.querySelectorAll('a, button, .hover-target');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 border border-gold rounded-full pointer-events-none z-[100] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 150 }}
    />
  );
};

export default CursorFollower;

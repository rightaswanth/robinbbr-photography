import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASING } from "./constants";

gsap.registerPlugin(ScrollTrigger);
export const fadeIn = (element, delay = 0, duration = 1) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration, delay, ease: EASING.main }
  );
};

export const fadeUp = (element, delay = 0, duration = 1, y = 40) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y },
    { 
      opacity: 1, 
      y: 0, 
      duration, 
      delay, 
      ease: EASING.main,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      }
    }
  );
};

export const staggerFadeUp = (elements, stagger = 0.2, delay = 0) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      stagger,
      delay,
      duration: 1,
      ease: EASING.main,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
      }
    }
  );
};

export const revealImage = (element) => {
  return gsap.fromTo(
    element,
    { clipPath: "inset(100% 0% 0% 0%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      }
    }
  );
};

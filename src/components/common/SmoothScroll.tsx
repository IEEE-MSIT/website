import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children?: React.ReactNode;
}

export let lenisInstance: Lenis | null = null;

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with weighted, heavy inertial smooth scrolling physics
    const lenis = new Lenis({
      duration: 1.4, // Gives that luxurious, weighted momentum feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85, // Heavy wheel resistance for deliberate, silky gliding
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Connect to requestAnimationFrame
    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  }, []);

  // Handle route change scroll to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };
    if (pathname) {
        // Scroll kun til toppen, hvis der er en sti (for at undgå unødvendig scroll ved komponentens montering)
        scrollToTop();
      }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
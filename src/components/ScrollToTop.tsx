import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Retry logic to scroll to anchor element
      const targetId = hash.replace('#', '');
      let attempts = 0;
      const maxAttempts = 20; // 20 attempts * 50ms = 1s max
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately first
      if (!scrollToElement()) {
        // If not found, retry with intervals
        const interval = setInterval(() => {
          attempts++;
          if (scrollToElement() || attempts >= maxAttempts) {
            clearInterval(interval);
          }
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
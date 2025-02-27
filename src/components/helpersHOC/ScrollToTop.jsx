import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    const targetDiv = document.querySelector('.desktop-questions')
    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scroll to the top of the div
      });
    }
  }, [location]);

  return children;
};

export default ScrollToTop;

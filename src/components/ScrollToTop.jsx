import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Slight delay so the outgoing page can begin exiting smoothly without an abrupt scroll snap
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 180);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};


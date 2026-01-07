import { useState, useEffect } from 'react';

/**
 * Custom hook to listen for media queries.
 * @param {string} query - The media query string (e.g., '(pointer: fine)')
 * @returns {boolean} - Whether the query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } 
    // Legacy support
    else if (media.addListener) {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};

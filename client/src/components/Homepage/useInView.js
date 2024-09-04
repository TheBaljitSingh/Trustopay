import { useState, useEffect } from 'react';

export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(ref.current); // To make sure the animation happens only once
          }
        },
        { ...options }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref, options]);

  return inView;
}

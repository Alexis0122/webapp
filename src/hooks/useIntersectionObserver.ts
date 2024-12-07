import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // intersectionRatio es el % de lo que se tiene que ver del elemento en el viewport del usuario para que se muestre la transicion.
      if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
        setIsVisible(true);
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, { 
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px',
      ...options 
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref: elementRef, isVisible };
};
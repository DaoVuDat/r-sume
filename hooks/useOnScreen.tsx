import React, { useEffect, useRef, useState } from 'react';

const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  rootMargin?: string | null
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const current = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: rootMargin ?? '0px',
        threshold: 0.75,
      }
    );
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [rootMargin]);

  return isIntersecting;
};

export default useOnScreen;

import { useEffect, useState, type RefObject } from 'react';

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 0 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
}

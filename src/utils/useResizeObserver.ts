import { useEffect, useRef, useState } from 'react';

export type ResizeObserverSize = {
  width: number;
  height: number;
};

/**
 * Observes the size of a DOM element using ResizeObserver API and exposes
 * its current width and height.
 *
 * This hook enables container-driven responsive behavior, where layout
 * decisions are based on the actual rendered size of a component rather then
 * on viewport breakpoints.
 *
 * It was introduced to evaluate a container-based approach for responsive
 * layouts (e.g. in the Banner component), as an alternative to relying on
 * viewport-based media queries.
 *
 * @template T - The type of the observed HTML element.
 *
 * @returns An object containing:
 * - `ref`: a React ref to be attached to the element to observe.
 * - `size`: the current size of the element (`{ width, height }`),
 *   or `null` before the first measurement
 */
export function useResizeObserver<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState<ResizeObserverSize | null>(null);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) {
      return;
    }

    const rect = elem.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      if (!entry) {
        return;
      }

      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(elem);
    return () => resizeObserver.disconnect();
  }, []);

  return { ref, size };
}

import { useState, useRef, useEffect, RefObject } from 'react';

/**
 * Hook to detect if an element's text content is truncated (overflowing)
 * relative to its visible width.
 * @param ref The React ref attached to the DOM element to inspect.
 * @param enabled If false, the hook bypasses all checks and returns false.
 * @param dependencies Array of variables (e.g., the text content) that trigger a recalculation when changed.
 */
export function useIsTruncated<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled = true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies: Array<any> = []
): boolean {
  const [isTruncated, setIsTruncated] = useState(false);
  const lastWidth = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setIsTruncated(false);
      return;
    }

    const el = ref.current;
    if (!el) {
      return;
    }

    const checkOverflow = () => {
      setIsTruncated(el.scrollWidth > el.clientWidth);
    };

    // Create the observer to react to container resize events
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!entry) {
        return;
      }

      const currentWidth = entry.contentRect.width;

      // Limit recalculations only to actual width changes to prevent loops
      if (currentWidth !== lastWidth.current) {
        lastWidth.current = currentWidth;
        checkOverflow();
      }
    });

    observer.observe(el);

    // Initial calculation and on every dependency change (e.g., text length changes)
    checkOverflow();

    // Cleanup on unmount
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, enabled, ...dependencies]); // Include ref and spread dependencies to track them properly

  return isTruncated;
}

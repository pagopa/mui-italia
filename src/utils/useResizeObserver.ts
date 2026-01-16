import { useEffect, useRef, useState } from 'react';

export type ResizeObserverSize = {
  width: number;
  height: number;
};

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

import mediaQuery from 'css-mediaquery';
import { vi } from 'vitest';

/**
 * Mock of window.matchMedia to intercept the breakpoint rules of MUI
 */
export function createMatchMedia(width: number) {
  return (query: string) => ({
    matches: mediaQuery.match(query, { width }),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}

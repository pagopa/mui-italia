import { ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import { themeNext } from '@theme';
import mediaQuery from 'css-mediaquery';
import { ReactElement, ReactNode } from 'react';
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

const customRender = (ui: ReactElement, renderOptions: RenderOptions = {}) => {
  // test view
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={themeNext}>{children}</ThemeProvider>
  );

  const view = render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });

  return { ...view };
};

export * from '@testing-library/react';
export { customRender as render };

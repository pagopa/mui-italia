import { useEffect } from 'react';
import { act, render, screen } from '@testing-library/react';

import { ResizeObserverSize, useResizeObserver } from '../useResizeObserver';

let resizeObserverCallback: ResizeObserverCallback;

const observe = vi.fn();
const disconnect = vi.fn();
const resizeObserver = {
  observe,
  unobserve: vi.fn(),
  disconnect,
} as ResizeObserver;

class ResizeObserverMock {
  constructor(callback: ResizeObserverCallback) {
    resizeObserverCallback = callback;
  }

  observe = observe;
  unobserve = vi.fn();
  disconnect = disconnect;
}

interface SizeReporterProps {
  onSize?: (size: ResizeObserverSize | null) => void;
}

const SizeReporter = ({ onSize }: SizeReporterProps) => {
  const { ref, size } = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    onSize?.(size);
  }, [onSize, size]);

  return <div ref={ref}>{size ? `${size.width}x${size.height}` : 'Not measured'}</div>;
};

const triggerResize = () => {
  act(() => {
    resizeObserverCallback([], resizeObserver);
  });
};

describe('useResizeObserver', () => {
  let width: number;
  let height: number;

  beforeEach(() => {
    width = 320;
    height = 80;
    observe.mockClear();
    disconnect.mockClear();
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
      () => new DOMRect(0, 0, width, height)
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('measures the element when it is mounted', () => {
    render(<SizeReporter />);

    const element = screen.getByText('320x80');
    expect(observe).toHaveBeenCalledWith(element);
  });

  it('updates the size after a ResizeObserver callback', () => {
    render(<SizeReporter />);

    width = 480;
    height = 120;
    triggerResize();

    expect(screen.getByText('480x120')).toBeInTheDocument();
  });

  it('does not emit a new size when the dimensions are unchanged', () => {
    const onSize = vi.fn();
    render(<SizeReporter onSize={onSize} />);
    expect(onSize).toHaveBeenCalledTimes(2);

    triggerResize();

    expect(onSize).toHaveBeenCalledTimes(2);
    expect(onSize).toHaveBeenLastCalledWith({ width: 320, height: 80 });
  });

  it('disconnects the observer when it is unmounted', () => {
    const { unmount } = render(<SizeReporter />);

    unmount();

    expect(disconnect).toHaveBeenCalledOnce();
  });
});

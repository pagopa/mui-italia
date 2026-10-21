import { vi } from 'vitest';
import { themeNext } from '@theme';

import { createMatchMedia, fireEvent, render, screen } from '../../../test-utils';
import { MIBanner } from '../MIBanner';

const TITLE = 'Banner title';
const MESSAGE = 'Banner message';
const CTA_LABEL = 'Discover more';
const CTA_NAME = `${TITLE} ${CTA_LABEL}`;
const VARIANTS = ['primary', 'secondary', 'tertiary'] as const;

const DESKTOP_WIDTH = 1200;
const MOBILE_WIDTH = 400;

const isBefore = (a: Element, b: Element) => {
  const elements = Array.from(document.body.querySelectorAll('*'));
  return elements.indexOf(a) < elements.indexOf(b);
};

describe('MIBanner', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

  describe('base rendering', () => {
    it('renders a section landmark labelled by the title paragraph', () => {
      render(<MIBanner title={TITLE} />);

      const region = screen.getByRole('region', { name: TITLE });
      const title = screen.getByText(TITLE);

      expect(region.tagName).toBe('SECTION');
      expect(title.tagName).toBe('P');
      expect(region).toHaveAttribute('aria-labelledby', title.id);
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });

    it('renders the message only when provided', () => {
      const { rerender } = render(<MIBanner title={TITLE} />);
      expect(screen.queryByText(MESSAGE)).not.toBeInTheDocument();

      rerender(<MIBanner title={TITLE} message={MESSAGE} />);
      expect(screen.getByText(MESSAGE)).toBeInTheDocument();
    });

    it('labels each banner with its own title', () => {
      render(
        <>
          <MIBanner title="First banner" />
          <MIBanner title="Second banner" />
        </>
      );

      expect(screen.getByRole('region', { name: 'First banner' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Second banner' })).toBeInTheDocument();
    });

    it('forwards data-* and aria-* attributes to the root section', () => {
      render(<MIBanner title={TITLE} data-testid="banner" aria-live="polite" />);

      const banner = screen.getByTestId('banner');
      expect(banner.tagName).toBe('SECTION');
      expect(banner).toHaveAttribute('aria-live', 'polite');
    });

    it('does not leak component props to the DOM', () => {
      render(<MIBanner title={TITLE} variant="primary" badge="New" data-testid="banner" />);

      const banner = screen.getByTestId('banner');
      expect(banner).not.toHaveAttribute('variant');
      expect(banner).not.toHaveAttribute('badge');
    });

    it.each([
      ['white', themeNext.palette.background.paper],
      ['info', themeNext.colors.blue[50]],
    ] as const)('applies the %s background color', (color, expected) => {
      render(<MIBanner title={TITLE} color={color} />);

      expect(screen.getByRole('region', { name: TITLE })).toHaveStyle({
        backgroundColor: expected,
      });
    });
  });

  describe('close button', () => {
    it.each(VARIANTS)('is not rendered without onClose (%s)', (variant) => {
      render(<MIBanner title={TITLE} variant={variant} />);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it.each(VARIANTS)('calls onClose when clicked (%s)', (variant) => {
      const onClose = vi.fn();
      render(<MIBanner title={TITLE} variant={variant} onClose={onClose} />);

      fireEvent.click(screen.getByRole('button', { name: 'Close' }));

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('uses the provided closeAriaLabel', () => {
      render(<MIBanner title={TITLE} onClose={vi.fn()} closeAriaLabel="Chiudi banner" />);

      expect(screen.getByRole('button', { name: 'Chiudi banner' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });
  });

  describe('CTA', () => {
    it.each(VARIANTS)('renders a button labelled by title and CTA label (%s)', (variant) => {
      const onClick = vi.fn();
      render(<MIBanner title={TITLE} variant={variant} cta={{ label: CTA_LABEL, onClick }} />);

      fireEvent.click(screen.getByRole('button', { name: CTA_NAME }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders a contained button in the secondary variant', () => {
      render(
        <MIBanner title={TITLE} variant="secondary" cta={{ label: CTA_LABEL, onClick: vi.fn() }} />
      );

      expect(screen.getByRole('button', { name: CTA_NAME })).toHaveClass('MuiButton-contained');
    });

    it.each(['primary', 'tertiary'] as const)(
      'renders a text button in the %s variant',
      (variant) => {
        render(
          <MIBanner title={TITLE} variant={variant} cta={{ label: CTA_LABEL, onClick: vi.fn() }} />
        );

        expect(screen.getByRole('button', { name: CTA_NAME })).toHaveClass('MuiButton-text');
      }
    );

    it.each(VARIANTS)(
      'renders a text link in the same tab when href is provided (%s)',
      (variant) => {
        render(
          <MIBanner title={TITLE} variant={variant} cta={{ label: CTA_LABEL, href: '/details' }} />
        );

        const link = screen.getByRole('link', { name: CTA_NAME });
        expect(link).toHaveAttribute('href', '/details');
        expect(link).toHaveAttribute('target', '_self');
        expect(link).not.toHaveAttribute('rel');
        expect(link).toHaveClass('MuiButton-text');
      }
    );

    it('adds a safe rel when the link opens in a new tab', () => {
      render(
        <MIBanner title={TITLE} cta={{ label: CTA_LABEL, href: '/details', target: '_blank' }} />
      );

      const link = screen.getByRole('link', { name: CTA_NAME });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('keeps a custom rel', () => {
      render(
        <MIBanner
          title={TITLE}
          cta={{ label: CTA_LABEL, href: '/details', target: '_blank', rel: 'noopener' }}
        />
      );

      expect(screen.getByRole('link', { name: CTA_NAME })).toHaveAttribute('rel', 'noopener');
    });
  });

  describe('variant-specific content', () => {
    it('renders the badge only in the primary variant', () => {
      const { rerender } = render(<MIBanner title={TITLE} badge="New" />);
      expect(screen.getByText('New')).toBeInTheDocument();

      rerender(<MIBanner title={TITLE} variant="secondary" badge="New" />);
      expect(screen.queryByText('New')).not.toBeInTheDocument();

      rerender(<MIBanner title={TITLE} variant="tertiary" badge="New" />);
      expect(screen.queryByText('New')).not.toBeInTheDocument();
    });

    it('defaults to the primary variant with the default illustration', () => {
      render(<MIBanner title={TITLE} />);

      expect(screen.getByTitle('Push')).toBeInTheDocument();
    });

    it('renders a custom illustration instead of the default one', () => {
      render(
        <MIBanner title={TITLE} illustration={<img src="custom.svg" alt="Custom illustration" />} />
      );

      expect(screen.getByRole('img', { name: 'Custom illustration' })).toBeInTheDocument();
      expect(screen.queryByTitle('Push')).not.toBeInTheDocument();
    });

    it.each(['secondary', 'tertiary'] as const)(
      'does not render illustrations in the %s variant',
      (variant) => {
        render(
          <MIBanner
            title={TITLE}
            variant={variant}
            illustration={<img src="custom.svg" alt="Custom illustration" />}
          />
        );

        expect(screen.queryByRole('img', { name: 'Custom illustration' })).not.toBeInTheDocument();
        expect(screen.queryByTitle('Push')).not.toBeInTheDocument();
      }
    );

    it('renders the default icon in the tertiary variant', () => {
      render(<MIBanner title={TITLE} variant="tertiary" />);

      expect(screen.getByTestId('EmojiObjectsOutlinedIcon')).toBeInTheDocument();
    });

    it('renders a custom icon in the tertiary variant', () => {
      render(
        <MIBanner title={TITLE} variant="tertiary" icon={<span data-testid="custom-icon" />} />
      );

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('EmojiObjectsOutlinedIcon')).not.toBeInTheDocument();
    });

    it.each(['primary', 'secondary'] as const)(
      'does not render the icon in the %s variant',
      (variant) => {
        render(
          <MIBanner title={TITLE} variant={variant} icon={<span data-testid="custom-icon" />} />
        );

        expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument();
        expect(screen.queryByTestId('EmojiObjectsOutlinedIcon')).not.toBeInTheDocument();
      }
    );
  });

  describe('responsive layout', () => {
    const cta = { label: CTA_LABEL, onClick: () => {} };

    it('places the secondary CTA after the close button on desktop', () => {
      window.matchMedia = createMatchMedia(DESKTOP_WIDTH);
      render(
        <MIBanner title={TITLE} message={MESSAGE} variant="secondary" cta={cta} onClose={vi.fn()} />
      );

      const close = screen.getByRole('button', { name: 'Close' });
      const action = screen.getByRole('button', { name: CTA_NAME });
      expect(isBefore(close, action)).toBe(true);
    });

    it('places the secondary CTA below the message and before the close button on mobile', () => {
      window.matchMedia = createMatchMedia(MOBILE_WIDTH);
      render(
        <MIBanner title={TITLE} message={MESSAGE} variant="secondary" cta={cta} onClose={vi.fn()} />
      );

      const close = screen.getByRole('button', { name: 'Close' });
      const action = screen.getByRole('button', { name: CTA_NAME });
      expect(isBefore(screen.getByText(MESSAGE), action)).toBe(true);
      expect(isBefore(action, close)).toBe(true);
    });

    it('reduces the primary title size on mobile', () => {
      window.matchMedia = createMatchMedia(MOBILE_WIDTH);
      render(<MIBanner title={TITLE} />);

      expect(screen.getByText(TITLE)).toHaveStyle({ fontSize: '18px' });
    });

    it('keeps the tertiary variant horizontal on mobile', () => {
      window.matchMedia = createMatchMedia(MOBILE_WIDTH);
      render(<MIBanner title={TITLE} variant="tertiary" />);

      expect(screen.getByText(TITLE)).toHaveStyle({ textAlign: 'left' });
    });
  });
});

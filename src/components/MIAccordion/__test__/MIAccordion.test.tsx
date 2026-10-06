import { act, fireEvent, render, screen } from '../../../test-utils';

import MIAccordion from '../MIAccordion';
import type { MIAccordionProps } from '../types';

const TITLE = 'Configurazione del servizio';
const CONTENT = 'Contenuto della sezione';

describe('MIAccordion', () => {
  it('renders a collapsed header button inside a level 3 heading', () => {
    render(<MIAccordion title={TITLE}>{CONTENT}</MIAccordion>);

    const button = screen.getByRole('button', { name: TITLE });
    const heading = screen.getByRole('heading', { level: 3 });

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(heading).toContainElement(button);
    expect(heading).not.toHaveAttribute('id');
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('uses the given heading level', () => {
    render(
      <MIAccordion title={TITLE} headingLevel={2}>
        {CONTENT}
      </MIAccordion>
    );

    expect(screen.getByRole('heading', { level: 2 })).toContainElement(
      screen.getByRole('button', { name: TITLE })
    );
  });

  it('expands on click and wires the region to the button', () => {
    render(<MIAccordion title={TITLE}>{CONTENT}</MIAccordion>);

    const button = screen.getByRole('button', { name: TITLE });
    fireEvent.click(button);

    const region = screen.getByRole('region', { name: TITLE });

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAttribute('aria-controls', region.id);
    expect(region).toHaveAttribute('aria-labelledby', button.id);
    expect(region).toHaveTextContent(CONTENT);
  });

  it('starts expanded with defaultExpanded', () => {
    render(
      <MIAccordion title={TITLE} defaultExpanded>
        {CONTENT}
      </MIAccordion>
    );

    expect(screen.getByRole('button', { name: TITLE })).toHaveAttribute('aria-expanded', 'true');
  });

  it('calls onChange in controlled mode', () => {
    const handleChange = vi.fn();
    render(
      <MIAccordion title={TITLE} expanded={false} onChange={handleChange}>
        {CONTENT}
      </MIAccordion>
    );

    fireEvent.click(screen.getByRole('button', { name: TITLE }));

    expect(handleChange).toHaveBeenCalledWith(expect.anything(), true);
  });

  it('renders only title and toggle when optional slots are missing', () => {
    const { container } = render(<MIAccordion title={TITLE}>{CONTENT}</MIAccordion>);

    expect(container.querySelector('.MIAccordion-icon')).not.toBeInTheDocument();
    expect(container.querySelector('.MuiChip-root')).not.toBeInTheDocument();
    expect(container.querySelector('.MIAccordion-description')).not.toBeInTheDocument();
  });

  it('renders a custom title node inside the header button', () => {
    render(
      <MIAccordion
        title={
          <>
            Configurazione <strong>del servizio</strong>
          </>
        }
      >
        {CONTENT}
      </MIAccordion>
    );

    expect(screen.getByRole('button', { name: 'Configurazione del servizio' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Configurazione del servizio'
    );
  });

  it('renders icon and badge inside the header', () => {
    render(
      <MIAccordion title={TITLE} icon={<span data-testid="icon" />} badge="Attivo">
        {CONTENT}
      </MIAccordion>
    );

    const button = screen.getByRole('button', { name: `${TITLE} Attivo` });

    expect(button).toContainElement(screen.getByTestId('icon'));
    expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
    const chip = screen.getByText('Attivo').closest('.MuiChip-root');
    expect(chip).toHaveClass('MuiChip-filled');
    // Inline element: the badge sits inside span wrappers
    expect(chip?.tagName).toBe('SPAN');
  });

  it('shows the description only when expanded, outside the button', () => {
    render(
      <MIAccordion title={TITLE} description="Testo di supporto">
        {CONTENT}
      </MIAccordion>
    );

    const button = screen.getByRole('button', { name: TITLE });
    expect(screen.queryByRole('region')).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByRole('region')).toHaveTextContent('Testo di supporto');
    expect(button).not.toHaveTextContent('Testo di supporto');
  });

  it('blocks the toggle and renders an outlined badge when disabled', () => {
    render(
      <MIAccordion title={TITLE} badge="Attivo" badgeProps={{ color: 'success' }} disabled>
        {CONTENT}
      </MIAccordion>
    );

    const button = screen.getByRole('button', { name: `${TITLE} Attivo` });
    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('tabindex', '-1');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Attivo').closest('.MuiChip-root')).toHaveClass('MuiChip-outlined');
  });

  it('forwards only color and variant to the badge', () => {
    const withSx: MIAccordionProps = {
      title: TITLE,
      children: CONTENT,
      // @ts-expect-error sx is not accepted by badgeProps
      badgeProps: { sx: {} },
    };
    const withIcon: MIAccordionProps = {
      title: TITLE,
      children: CONTENT,
      // @ts-expect-error icon is not accepted by badgeProps
      badgeProps: { icon: <span /> },
    };
    expect([withSx, withIcon]).toHaveLength(2);

    // Same props passed without type checking, as a JavaScript consumer could do
    const untypedBadgeProps = {
      color: 'success',
      variant: 'outlined',
      className: 'custom-chip',
      clickable: true,
    } as unknown as MIAccordionProps['badgeProps'];

    render(
      <MIAccordion title={TITLE} badge="Attivo" badgeProps={untypedBadgeProps}>
        {CONTENT}
      </MIAccordion>
    );

    const chip = screen.getByText('Attivo').closest('.MuiChip-root');

    expect(chip).toHaveClass('MuiChip-outlined');
    expect(chip).not.toHaveClass('custom-chip');
    expect(chip).not.toHaveClass('MuiChip-clickable');
    expect(chip).not.toHaveAttribute('role', 'button');
  });

  it('ignores keyboard and assistive technology activation when disabled', () => {
    const handleChange = vi.fn();
    render(
      <MIAccordion title={TITLE} onChange={handleChange} disabled>
        {CONTENT}
      </MIAccordion>
    );

    const button = screen.getByRole('button', { name: TITLE });

    // MUI ButtonBase calls onClick on Space keyup without checking disabled
    fireEvent.keyDown(button, { key: ' ' });
    fireEvent.keyUp(button, { key: ' ' });
    fireEvent.keyDown(button, { key: 'Enter' });
    button.click();

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows the content of a disabled and expanded item', () => {
    render(
      <MIAccordion title={TITLE} disabled defaultExpanded>
        {CONTENT}
      </MIAccordion>
    );

    expect(screen.getByRole('region')).toHaveTextContent(CONTENT);
  });

  it('replaces only the content with the skeleton while loading', () => {
    render(
      <MIAccordion title={TITLE} description="Testo di supporto" loading defaultExpanded>
        {CONTENT}
      </MIAccordion>
    );

    const region = screen.getByRole('region');

    expect(region.querySelector('[aria-busy="true"]')).toBeInTheDocument();
    expect(region.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    expect(screen.queryByText(CONTENT)).not.toBeInTheDocument();
    expect(screen.queryByText('Testo di supporto')).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: TITLE });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('uses a custom skeleton from slots', () => {
    render(
      <MIAccordion
        title={TITLE}
        loading
        defaultExpanded
        slots={{ skeleton: () => <div data-testid="custom-skeleton" /> }}
      >
        {CONTENT}
      </MIAccordion>
    );

    expect(screen.getByTestId('custom-skeleton')).toBeInTheDocument();
  });

  it('accepts only the public API props', () => {
    // @ts-expect-error style is not part of the public API
    const withStyle: MIAccordionProps = { title: TITLE, children: CONTENT, style: {} };
    // @ts-expect-error className is not part of the public API
    const withClassName: MIAccordionProps = { title: TITLE, children: CONTENT, className: 'x' };
    // @ts-expect-error classes is not part of the public API
    const withClasses: MIAccordionProps = { title: TITLE, children: CONTENT, classes: {} };
    expect([withStyle, withClassName, withClasses]).toHaveLength(3);

    const titleNode = <a href="#x">Link</a>;

    const withNodeDescription: MIAccordionProps = {
      title: TITLE,
      // @ts-expect-error description accepts plain text only
      description: titleNode,
      children: CONTENT,
    };
    expect(withNodeDescription).toBeDefined();
  });

  it('forwards id, data attributes and sx to the root', () => {
    const { container } = render(
      <MIAccordion title={TITLE} id="accordion-id" data-testid="accordion" sx={{ mt: 2 }}>
        {CONTENT}
      </MIAccordion>
    );

    const root = container.querySelector('.MuiAccordion-root');

    expect(screen.getByTestId('accordion')).toBe(root);
    expect(root).toHaveAttribute('id', 'accordion-id');
    expect(root).toHaveStyle({ marginTop: '16px' });
  });

  it('applies aria attributes to the header button, keeping its internal wiring', () => {
    render(
      <>
        <p id="accordion-help">Compila prima le informazioni generali</p>
        <MIAccordion title={TITLE} aria-describedby="accordion-help">
          {CONTENT}
        </MIAccordion>
      </>
    );

    const button = screen.getByRole('button', { name: TITLE });
    fireEvent.click(button);
    const region = screen.getByRole('region', { name: TITLE });

    expect(button).toHaveAccessibleDescription('Compila prima le informazioni generali');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAttribute('aria-controls', region.id);
    expect(region.closest('.MuiAccordion-root')).not.toHaveAttribute('aria-describedby');
  });

  it('shows the focus ring on the card while the header has keyboard focus', () => {
    const { container } = render(<MIAccordion title={TITLE}>{CONTENT}</MIAccordion>);
    const root = container.querySelector('.MuiAccordion-root');
    const button = screen.getByRole('button', { name: TITLE });

    // Keyboard navigation: MUI marks the following focus as focus-visible
    fireEvent.keyDown(document.body, { key: 'Tab' });
    act(() => button.focus());
    expect(root).toHaveClass('MIAccordion-focusVisible');

    act(() => button.blur());
    expect(root).not.toHaveClass('MIAccordion-focusVisible');
    // Mouse focus (no ring) is verified in the browser: jsdom matches :focus-visible on any focus
  });

  it('disables the collapse animation when the user prefers reduced motion', () => {
    render(<MIAccordion title={TITLE}>{CONTENT}</MIAccordion>);

    const css = Array.from(document.querySelectorAll('style'))
      .map((style) => style.textContent)
      .join('');

    expect(css).toMatch(
      /@media \(prefers-reduced-motion: ?reduce\)\{[^}]*\.MuiCollapse-root\{transition-duration:0ms ?!important;?\}/
    );
  });

  it('does not render its own live region', () => {
    // Loading is announced by the page through a single shared live region
    const { rerender } = render(
      <MIAccordion title={TITLE} loading defaultExpanded>
        {CONTENT}
      </MIAccordion>
    );
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    rerender(<MIAccordion title={TITLE}>{CONTENT}</MIAccordion>);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});

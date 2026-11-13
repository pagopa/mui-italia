import { StrictMode, useState } from 'react';

import { createMatchMedia, fireEvent, render, screen } from '../../../test-utils';

import MIDrawer from '../MIDrawer';
import type { MIDrawerProps } from '../types';

const TITLE = 'Filtra le notifiche';
const CONTENT = 'Contenuto del drawer';

const renderDrawer = (props: Partial<MIDrawerProps> = {}) =>
  render(
    <MIDrawer open onClose={vi.fn()} title={TITLE} {...props}>
      {props.children ?? <p>{CONTENT}</p>}
    </MIDrawer>
  );

const getPaper = () => document.querySelector('.MuiDrawer-paper') as HTMLElement;
const getRoot = () => document.querySelector('.MuiDrawer-root') as HTMLElement;

const getCss = () =>
  Array.from(document.querySelectorAll('style'))
    .map((style) => style.textContent)
    .join('');

const DrawerWithOpener = (props: Partial<MIDrawerProps>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Apri i filtri
      </button>
      <MIDrawer open={open} onClose={() => setOpen(false)} title={TITLE} {...props}>
        {props.children ?? <p>{CONTENT}</p>}
      </MIDrawer>
    </>
  );
};

describe('MIDrawer', () => {
  afterEach(() => {
    // @ts-expect-error matchMedia is restored to the jsdom default (undefined)
    delete window.matchMedia;
  });

  it('renders a modal dialog named by its level 2 title', () => {
    renderDrawer();

    const dialog = screen.getByRole('dialog', { name: TITLE });

    expect(dialog).toBe(getPaper());
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('heading', { level: 2, name: TITLE })).toBeInTheDocument();
    expect(dialog).toHaveTextContent(CONTENT);
  });

  it('renders nothing while closed', () => {
    renderDrawer({ open: false });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('describes the dialog with the description', () => {
    renderDrawer({ description: 'Scegli i criteri della ricerca.' });

    expect(screen.getByRole('dialog')).toHaveAccessibleDescription(
      'Scegli i criteri della ricerca.'
    );
  });

  it('keeps an aria-describedby passed by the product next to the description', () => {
    render(
      <>
        <p id="drawer-help">I filtri restano attivi fino al logout.</p>
        <MIDrawer
          open
          onClose={vi.fn()}
          title={TITLE}
          description="Scegli i criteri della ricerca."
          aria-describedby="drawer-help"
        >
          {CONTENT}
        </MIDrawer>
      </>
    );

    expect(screen.getByRole('dialog')).toHaveAccessibleDescription(
      'Scegli i criteri della ricerca. I filtri restano attivi fino al logout.'
    );
  });

  it('moves the focus to the title when it opens', () => {
    renderDrawer();

    expect(screen.getByRole('heading', { level: 2 })).toHaveFocus();
  });

  it('keeps the focus on a field with autoFocus', () => {
    renderDrawer({
      children: (
        <label>
          Codice fiscale
          <input autoFocus />
        </label>
      ),
    });

    expect(screen.getByRole('textbox', { name: 'Codice fiscale' })).toHaveFocus();
  });

  it('keeps the focus on a field with autoFocus in StrictMode', () => {
    // StrictMode runs the effects twice in development: MUI FocusTrap restores the focus to the opener in between
    render(
      <StrictMode>
        <DrawerWithOpener>
          <label>
            Codice fiscale
            <input autoFocus />
          </label>
        </DrawerWithOpener>
      </StrictMode>
    );

    const opener = screen.getByRole('button', { name: 'Apri i filtri' });
    opener.focus();
    fireEvent.click(opener);

    expect(screen.getByRole('textbox', { name: 'Codice fiscale' })).toHaveFocus();
  });

  it('returns the focus to the opener when it closes', () => {
    render(<DrawerWithOpener />);

    const opener = screen.getByRole('button', { name: 'Apri i filtri' });
    opener.focus();
    fireEvent.click(opener);

    expect(screen.getByRole('heading', { level: 2 })).toHaveFocus();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(opener).toHaveFocus();
  });

  it('keeps the focus on a field with autoFocus when the container is in an iframe', () => {
    // The field belongs to the iframe window, whose HTMLElement is not the one of the main window
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument as Document;

    const { unmount } = renderDrawer({
      container: iframeDocument.body,
      children: (
        <label>
          Codice fiscale
          <input autoFocus />
        </label>
      ),
    });

    expect(iframeDocument.activeElement).toBe(iframeDocument.querySelector('input'));

    unmount();
    iframe.remove();
  });

  it('closes with the close button, Esc and a click on the backdrop', () => {
    const handleClose = vi.fn();
    renderDrawer({ onClose: handleClose });

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(handleClose).toHaveBeenLastCalledWith(expect.anything(), 'closeButtonClick');

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(handleClose).toHaveBeenLastCalledWith(expect.anything(), 'escapeKeyDown');

    fireEvent.click(document.querySelector('.MuiBackdrop-root') as HTMLElement);
    expect(handleClose).toHaveBeenLastCalledWith(expect.anything(), 'backdropClick');

    expect(handleClose).toHaveBeenCalledTimes(3);
  });

  it('keeps the modal dialog guarantees when the omitted props are passed with a spread', () => {
    // A shared options object bypasses the excess property check of TypeScript
    const sharedOptions: Record<string, unknown> = {
      disableEnforceFocus: true,
      disableRestoreFocus: true,
      disableEscapeKeyDown: true,
      hideBackdrop: true,
      ModalProps: { disableEscapeKeyDown: true, hideBackdrop: true },
    };
    render(<DrawerWithOpener {...sharedOptions} />);

    const opener = screen.getByRole('button', { name: 'Apri i filtri' });
    opener.focus();
    fireEvent.click(opener);

    // Focus trap: the focus cannot leave the dialog
    opener.focus();
    expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement);

    expect(document.querySelector('.MuiBackdrop-root')).toBeInTheDocument();

    // Esc closes the drawer and the focus returns to the opener
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(opener).toHaveFocus();
  });

  it('translates the accessible name of the close button', () => {
    renderDrawer({ localeText: { closeButtonAriaLabel: 'Chiudi' } });

    expect(screen.getByRole('button', { name: 'Chiudi' })).toBeInTheDocument();
  });

  it('opens from the right on desktop by default', () => {
    window.matchMedia = createMatchMedia(1200);
    renderDrawer();

    expect(getPaper()).toHaveClass('MuiDrawer-paperAnchorRight');
  });

  it('is a bottom sheet on mobile', () => {
    window.matchMedia = createMatchMedia(375);
    renderDrawer();

    expect(getPaper()).toHaveClass('MuiDrawer-paperAnchorBottom');
  });

  it('opens from the left from the sm breakpoint and stays a bottom sheet on mobile', () => {
    window.matchMedia = createMatchMedia(640);
    const { unmount } = renderDrawer({ anchor: 'left' });
    expect(getPaper()).toHaveClass('MuiDrawer-paperAnchorLeft');
    unmount();

    window.matchMedia = createMatchMedia(375);
    renderDrawer({ anchor: 'left' });
    expect(getPaper()).toHaveClass('MuiDrawer-paperAnchorBottom');
  });

  it('renders the actions in the footer in the given order', () => {
    renderDrawer({
      actions: (
        <>
          <button type="button">Filtra</button>
          <button type="button">Annulla filtri</button>
        </>
      ),
    });

    const footer = document.querySelector('.MIDrawer-footer') as HTMLElement;
    const buttons = Array.from(footer.querySelectorAll('button')).map(
      (button) => button.textContent
    );

    expect(buttons).toEqual(['Filtra', 'Annulla filtri']);
  });

  it('renders no footer without actions', () => {
    renderDrawer();

    expect(document.querySelector('.MIDrawer-footer')).not.toBeInTheDocument();
  });

  it('shows the primary on the right from the sm breakpoint, keeping the DOM order', () => {
    renderDrawer({ actions: <button type="button">Filtra</button> });

    expect(getCss()).toMatch(
      /@media \(min-width: ?640px\)\{[^}]*\.MIDrawer-footer[^{]*\{[^}]*flex-direction:row-reverse/
    );
  });

  it('hides the pictogram from screen readers', () => {
    renderDrawer({ pictogram: <svg data-testid="pictogram" /> });

    expect(screen.getByTestId('pictogram').parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('dialog', { name: TITLE })).toBeInTheDocument();
  });

  it('shows the divider and the gradient according to the scroll position', () => {
    renderDrawer();
    const paper = getPaper();

    Object.defineProperty(paper, 'scrollHeight', { configurable: true, value: 1000 });
    Object.defineProperty(paper, 'clientHeight', { configurable: true, value: 600 });

    paper.scrollTop = 0;
    fireEvent.scroll(paper);
    expect(getRoot()).not.toHaveClass('MIDrawer-scrolled');
    expect(getRoot()).toHaveClass('MIDrawer-hasMore');

    paper.scrollTop = 200;
    fireEvent.scroll(paper);
    expect(getRoot()).toHaveClass('MIDrawer-scrolled');
    expect(getRoot()).toHaveClass('MIDrawer-hasMore');

    paper.scrollTop = 400;
    fireEvent.scroll(paper);
    expect(getRoot()).toHaveClass('MIDrawer-scrolled');
    expect(getRoot()).not.toHaveClass('MIDrawer-hasMore');
  });

  it('stops sticking header and footer on short viewports', () => {
    renderDrawer({ actions: <button type="button">Filtra</button> });

    expect(getCss()).toMatch(
      /@media \(max-height: ?400px\)\{[^@]*\.MIDrawer-header,[^{]*\.MIDrawer-footer\{position:static;?\}/
    );
  });

  it('disables the slide animation when the user prefers reduced motion', () => {
    renderDrawer();

    expect(getCss()).toMatch(
      /@media \(prefers-reduced-motion: ?reduce\)\{[^}]*\.MuiDrawer-paper,[^{]*\.MuiBackdrop-root\{transition-duration:0ms ?!important;?\}/
    );
  });

  it('forwards id, data attributes and sx to the root and aria attributes to the dialog', () => {
    renderDrawer({
      id: 'filters-drawer',
      // @ts-expect-error data-* attributes are not in the props type but reach the root
      'data-testid': 'filters',
      sx: { zIndex: 1500 },
      'aria-label': 'Filtri',
    });

    const root = getRoot();

    expect(screen.getByTestId('filters')).toBe(root);
    expect(root).toHaveAttribute('id', 'filters-drawer');
    expect(root).toHaveStyle({ zIndex: '1500' });
    expect(getPaper()).toHaveAttribute('aria-label', 'Filtri');
    expect(root).not.toHaveAttribute('aria-label');
  });

  it('accepts only the public API props', () => {
    const base = { open: true, onClose: vi.fn(), title: TITLE, children: CONTENT };

    // @ts-expect-error the focus trap cannot be disabled
    const withEnforceFocus: MIDrawerProps = { ...base, disableEnforceFocus: true };
    // @ts-expect-error Esc always closes the drawer
    const withEscape: MIDrawerProps = { ...base, disableEscapeKeyDown: true };
    // @ts-expect-error the backdrop is always shown
    const withBackdrop: MIDrawerProps = { ...base, hideBackdrop: true };
    // @ts-expect-error the panel is styled by the component
    const withPaperProps: MIDrawerProps = { ...base, PaperProps: {} };
    // @ts-expect-error className is not part of the public API
    const withClassName: MIDrawerProps = { ...base, className: 'x' };
    // @ts-expect-error top and bottom are not part of the design system
    const withTop: MIDrawerProps = { ...base, anchor: 'top' };

    expect([
      withEnforceFocus,
      withEscape,
      withBackdrop,
      withPaperProps,
      withClassName,
      withTop,
    ]).toHaveLength(6);
  });
});

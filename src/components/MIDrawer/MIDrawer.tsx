'use client';

import { Close as CloseIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';

import { MIIconButton } from '@components/MIIconButton';

import { StyledDrawer } from './StyledDrawer';
import type { MIDrawerProps } from './types';

const DEFAULT_CLOSE_BUTTON_ARIA_LABEL = 'Close';

type MIDrawerTitleProps = {
  id: string;
  open: boolean;
  children: ReactNode;
};

// Initial focus on the title (WAI-ARIA APG dialog, informative content), unless the content already moved it inside the dialog (e.g. autoFocus on a field).
// Child effects run first: MUI FocusTrap then finds the focus inside the dialog and keeps it there, and still restores it to the opener on close.
const MIDrawerTitle = ({ id, open, children }: MIDrawerTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  // Element focused inside the dialog when it opened (e.g. a field with autoFocus)
  const initialFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const title = ref.current;
    if (!open || !title) {
      initialFocusRef.current = null;
      return;
    }
    const dialog = title.closest('[role="dialog"]');
    if (!dialog) {
      return;
    }
    const activeElement = title.ownerDocument.activeElement;
    if (activeElement instanceof HTMLElement && dialog.contains(activeElement)) {
      initialFocusRef.current = activeElement;
      return;
    }
    // In StrictMode (development) effects run twice and FocusTrap restores the focus to the opener in between: the element focused at the first run gets it back
    const initialFocus = initialFocusRef.current;
    (initialFocus && dialog.contains(initialFocus) ? initialFocus : title).focus();
  }, [open]);

  return (
    <h2 ref={ref} id={id} className="MIDrawer-title" tabIndex={-1}>
      {children}
    </h2>
  );
};

type ScrollState = {
  // Content scrolled down: divider below the header
  scrolled: boolean;
  // More content below the footer: gradient above the buttons
  hasMore: boolean;
};

const MIDrawer = forwardRef<HTMLDivElement, MIDrawerProps>((props, ref) => {
  const {
    open,
    onClose,
    title,
    description,
    pictogram,
    children,
    actions,
    anchor = 'right',
    localeText,
    ...other
  } = props;

  // aria-* attributes describe the dialog (the drawer panel), the rest goes to the root
  const ariaProps = Object.fromEntries(
    Object.entries(other).filter(([key]) => key.startsWith('aria-'))
  );
  const rootProps = Object.fromEntries(
    Object.entries(other).filter(([key]) => !key.startsWith('aria-'))
  );

  const theme = useTheme();
  // The drawer lives in a portal mounted only in the browser, so reading the media query on the first render is SSR-safe
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  const titleId = useId();
  const descriptionId = useId();
  const describedBy =
    [description ? descriptionId : undefined, ariaProps['aria-describedby']]
      .filter(Boolean)
      .join(' ') || undefined;

  const [paper, setPaper] = useState<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({ scrolled: false, hasMore: false });
  const hasActions = Boolean(actions);

  useEffect(() => {
    if (!paper) {
      return undefined;
    }

    const update = () => {
      const scrolled = paper.scrollTop > 0;
      const hasMore = paper.scrollTop + paper.clientHeight < paper.scrollHeight - 1;
      setScrollState((current) =>
        current.scrolled === scrolled && current.hasMore === hasMore
          ? current
          : { scrolled, hasMore }
      );
      // Read by scroll-padding, so that the focused element is not hidden by the sticky header and footer
      paper.style.setProperty(
        '--MIDrawer-header-height',
        `${headerRef.current?.offsetHeight ?? 0}px`
      );
      paper.style.setProperty(
        '--MIDrawer-footer-height',
        `${footerRef.current?.offsetHeight ?? 0}px`
      );
    };

    update();
    paper.addEventListener('scroll', update, { passive: true });

    if (typeof ResizeObserver === 'undefined') {
      return () => paper.removeEventListener('scroll', update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(paper);
    Array.from(paper.children).forEach((child) => observer.observe(child));

    return () => {
      paper.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [paper, hasActions]);

  const handleCloseButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClose(event, 'closeButtonClick');
  };

  const rootClassName =
    [scrollState.scrolled && 'MIDrawer-scrolled', scrollState.hasMore && 'MIDrawer-hasMore']
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <StyledDrawer
      {...rootProps}
      ref={ref}
      className={rootClassName}
      variant="temporary"
      open={open}
      onClose={onClose}
      // Figma: bottom sheet below sm, side panel from sm
      anchor={isMobile ? 'bottom' : anchor}
      PaperProps={{
        ref: setPaper,
        // MUI Drawer is a Modal without the dialog semantics
        role: 'dialog',
        'aria-modal': true,
        'aria-labelledby': titleId,
        ...ariaProps,
        'aria-describedby': describedBy,
      }}
    >
      <div ref={headerRef} className="MIDrawer-header">
        {pictogram && (
          <span className="MIDrawer-pictogram" aria-hidden="true">
            {pictogram}
          </span>
        )}
        <MIDrawerTitle id={titleId} open={open}>
          {title}
        </MIDrawerTitle>
        <span className="MIDrawer-close">
          <MIIconButton
            aria-label={localeText?.closeButtonAriaLabel ?? DEFAULT_CLOSE_BUTTON_ARIA_LABEL}
            onClick={handleCloseButtonClick}
            // Icon aligned to the padding (edge="end" moves it 4px further); dark as in Figma
            sx={{ mr: -1, color: 'text.primary' }}
          >
            <CloseIcon />
          </MIIconButton>
        </span>
      </div>

      <div className="MIDrawer-content">
        {description && (
          <p id={descriptionId} className="MIDrawer-description">
            {description}
          </p>
        )}
        <div className="MIDrawer-body">{children}</div>
      </div>

      {actions && (
        <div ref={footerRef} className="MIDrawer-footer">
          {actions}
        </div>
      )}
    </StyledDrawer>
  );
});

MIDrawer.displayName = 'MIDrawer';

export default MIDrawer;

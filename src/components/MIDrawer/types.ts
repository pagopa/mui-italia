import type { DrawerProps } from '@mui/material';
import type { ReactNode } from 'react';

/** Why the drawer asked to be closed: the two MUI Modal reasons plus the close button. */
export type MIDrawerCloseReason = 'escapeKeyDown' | 'backdropClick' | 'closeButtonClick';

export type MIDrawerAnchor = 'right' | 'left';

// Props of MUI Drawer that conflict with the MIDrawer API, with the Figma layout or with the
// guarantees of the WAI-ARIA modal dialog pattern
type OmittedDrawerProps =
  // Layout handled by the component
  | 'variant'
  | 'elevation'
  | 'PaperProps'
  | 'SlideProps'
  | 'TransitionComponent'
  | 'ModalProps'
  // Redefined by MIDrawer
  | 'title'
  | 'children'
  | 'open'
  | 'onClose'
  | 'anchor'
  // Focus trap, focus restore, Esc and backdrop are part of the modal dialog pattern: products cannot disable them
  | 'disableEnforceFocus'
  | 'disableAutoFocus'
  | 'disableRestoreFocus'
  | 'disableEscapeKeyDown'
  | 'hideBackdrop'
  // Deprecated in MUI v5, or Modal slots
  | 'BackdropComponent'
  | 'BackdropProps'
  | 'onBackdropClick'
  | 'components'
  | 'componentsProps'
  | 'slots'
  | 'slotProps'
  // Styling outside the design system
  | 'classes'
  | 'className'
  | 'style';

export interface MIDrawerLocaleText {
  /**
   * Accessible name of the close button.
   * @default 'Close'
   */
  closeButtonAriaLabel?: string;
}

// aria-* attributes are applied to the dialog (the drawer panel), the other props to the root
export type MIDrawerProps = Omit<DrawerProps, OmittedDrawerProps> & {
  /** Whether the drawer is open. */
  open: boolean;
  /**
   * Called when the drawer asks to be closed: close button, Esc or click on the backdrop. Required, otherwise the drawer could not be closed.
   * Use the reason to ask for confirmation before losing unsaved changes.
   */
  onClose: (event: object, reason: MIDrawerCloseReason) => void;
  /** Title of the dialog, rendered as an h2 and always visible. It is the accessible name of the dialog. */
  title: ReactNode;
  /**
   * Optional short plain text below the title, read by screen readers when the drawer opens (aria-describedby). Rich text with links goes in `children`.
   */
  description?: string;
  /** Optional decorative pictogram on the left of the title, 40px (e.g. an MI illustration). Hidden from screen readers. */
  pictogram?: ReactNode;
  /** Content of the drawer. */
  children: ReactNode;
  /**
   * Footer buttons (MIButton), always anchored at the bottom. At most two: pass them in order primary, secondary.
   * On mobile they are full width with the primary on top; from the sm breakpoint they are on one row with the primary on the right.
   */
  actions?: ReactNode;
  /**
   * Side of the panel from the sm breakpoint. Use 'left' only for specific needs. Below sm the drawer is always a bottom sheet.
   * @default 'right'
   */
  anchor?: MIDrawerAnchor;
  /** Texts for assistive technologies, to be translated by the product. */
  localeText?: MIDrawerLocaleText;
};

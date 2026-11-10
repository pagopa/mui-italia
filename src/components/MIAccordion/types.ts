import type { AccordionProps } from '@mui/material';
import type { ComponentType, ReactNode } from 'react';

import type { MIChipProps } from '@components/MIChip';

export type MIAccordionHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface MIAccordionSkeletonProps {
  /**
   * Number of skeleton rows.
   * @default 6
   */
  rows?: number;
}

// Props of MUI Accordion that conflict with the MIAccordion API or with the Figma layout
type OmittedAccordionProps =
  | 'title'
  | 'children'
  | 'slots'
  | 'slotProps'
  | 'TransitionComponent'
  | 'TransitionProps'
  | 'disableGutters'
  | 'elevation'
  | 'square'
  | 'variant'
  | 'classes'
  | 'className'
  | 'style';

// aria-* attributes are applied to the header button, the other props to the root
export type MIAccordionProps = Omit<AccordionProps, OmittedAccordionProps> & {
  /**
   * Item title, always visible in the header. Standard usage, aligned with Figma and accessible: a plain string, plus `badge` / `badgeProps` for the status.
   * Custom content is allowed, but it is rendered inside the header button: it must not contain interactive elements (links, buttons, inputs) and must keep a meaningful text name.
   */
  title: ReactNode;
  /** Content shown when the item is expanded. */
  children: ReactNode;
  /**
   * Optional icon on the left of the title (icon, status icon or avatar). It is decorative and hidden from screen readers: any status it conveys must also be in the title or the badge.
   */
  icon?: ReactNode;
  /** Optional badge text, rendered as a MIChip below the title. */
  badge?: string;
  /**
   * Color and variant of the badge MIChip. Other MIChip props (sx, icon, clickable…) are not accepted: the badge is plain text and sits inside the header button. When the item is disabled the badge is always outlined.
   * @default { color: 'neutral', variant: 'filled' }
   */
  badgeProps?: Pick<MIChipProps, 'color' | 'variant'>;
  /** Optional secondary plain text, visible only when the item is expanded. Rich text with links goes in `children`. */
  description?: string;
  /**
   * Level of the heading that wraps the header, chosen according to the page hierarchy.
   * @default 3
   */
  headingLevel?: MIAccordionHeadingLevel;
  /**
   * Shows the skeleton in place of the content; the header stays interactive. The component does not announce loading: the page does it through its shared live region.
   * @default false
   */
  loading?: boolean;
  slots?: {
    skeleton?: ComponentType<MIAccordionSkeletonProps>;
  };
  slotProps?: {
    skeleton?: MIAccordionSkeletonProps;
  };
};

import type { AccordionProps } from '@mui/material';
import type { ComponentType, ReactNode } from 'react';

import type { MIChipProps } from '@components/MIChip';
import type { MarginSxProps } from '@lib-types/shared.types';

export type MIAccordionHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface MIAccordionSkeletonProps {
  /**
   * Number of skeleton rows.
   * @default 6
   */
  rows?: number;
}

// Only behaviour props are inherited from MUI Accordion: style, className, classes, variant, component and DOM handlers are left out so that the Figma layout cannot be overridden.
export type MIAccordionProps = Pick<
  AccordionProps,
  'expanded' | 'defaultExpanded' | 'onChange' | 'disabled' | 'id'
> & {
  /** Item title, always visible in the header. Plain text only: the whole header is already a button. */
  title: string;
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
  sx?: MarginSxProps;
};

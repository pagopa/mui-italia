'use client';

import type { AccordionSummaryProps } from '@mui/material';
import type { FC } from 'react';

import { StyledAccordionSummary, StyledHeading } from './StyledAccordion';
import type { MIAccordionHeadingLevel } from './types';

type MIAccordionHeadingProps = AccordionSummaryProps & {
  level: MIAccordionHeadingLevel;
  id: string;
  'aria-controls': string;
};

/**
 * MUI v5 Accordion has no heading slot and wires its region reading `id` and `aria-controls` from the props of its first child. This component is that first child: it receives both props and forwards them to the summary (the button), wrapping it in the heading required by the WAI-ARIA Accordion pattern. Replace with `slotProps.heading` when moving to MUI v6.
 */
const MIAccordionHeading: FC<MIAccordionHeadingProps> = ({ level, ...summaryProps }) => (
  <StyledHeading as={`h${level}`}>
    <StyledAccordionSummary {...summaryProps} />
  </StyledHeading>
);

export default MIAccordionHeading;

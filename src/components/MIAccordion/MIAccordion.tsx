'use client';

import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { forwardRef, SyntheticEvent, useId, useState } from 'react';

import { MIChip } from '@components/MIChip';

import MIAccordionHeading from './MIAccordionHeading';
import MIAccordionSkeleton from './MIAccordionSkeleton';
import { StyledAccordion, StyledAccordionDetails } from './StyledAccordion';
import type { MIAccordionProps } from './types';

const MIAccordion = forwardRef<HTMLDivElement, MIAccordionProps>((props, ref) => {
  const {
    title,
    children,
    icon,
    badge,
    badgeProps,
    description,
    headingLevel = 3,
    expanded,
    defaultExpanded,
    onChange,
    disabled = false,
    id,
    loading = false,
    slots,
    slotProps,
    sx,
    ...other
  } = props;

  // Props outside the public API (style, className, classes…) are dropped even when passed without type checking; data-* attributes are kept for tests and analytics
  const dataAttributes = Object.fromEntries(
    Object.entries(other).filter(([key]) => key.startsWith('data-'))
  );

  const buttonId = useId();
  const regionId = useId();

  // MUI Accordion is always controlled from here so that a disabled item ignores every toggle request: aria-disabled is only declarative, and MUI blocks mouse and Enter but a Space key or a click dispatched by assistive technologies would still toggle it
  const isControlled = expanded !== undefined;
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded ?? false);
  const isExpanded = isControlled ? expanded : uncontrolledExpanded;

  const handleChange = (event: SyntheticEvent, nextExpanded: boolean) => {
    if (disabled) {
      return;
    }
    if (!isControlled) {
      setUncontrolledExpanded(nextExpanded);
    }
    onChange?.(event, nextExpanded);
  };

  const Skeleton = slots?.skeleton ?? MIAccordionSkeleton;

  return (
    <StyledAccordion
      ref={ref}
      id={id}
      expanded={isExpanded}
      onChange={handleChange}
      disabled={disabled}
      disableGutters
      elevation={0}
      square
      sx={sx}
      {...dataAttributes}
    >
      <MIAccordionHeading
        level={headingLevel}
        id={buttonId}
        aria-controls={regionId}
        expandIcon={<KeyboardArrowDownIcon />}
      >
        {/* Decorative: kept out of the button accessible name (e.g. avatar initials) */}
        {icon && (
          <span className="MIAccordion-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="MIAccordion-text">
          <span className="MIAccordion-title">{title}</span>
          {badge && (
            // Only color and variant are forwarded, even when other props arrive untyped;
            // rendered as a span because it sits inside inline (span) wrappers
            <MIChip
              component="span"
              label={badge}
              color={badgeProps?.color ?? 'neutral'}
              variant={disabled ? 'outlined' : badgeProps?.variant}
            />
          )}
        </span>
      </MIAccordionHeading>

      {/* No live region here: loading is announced by the page through a single shared live region, as several regions updating together behave unpredictably with screen readers */}
      <StyledAccordionDetails aria-busy={loading || undefined}>
        {!loading && description && <div className="MIAccordion-description">{description}</div>}
        <div className="MIAccordion-content">
          {loading ? <Skeleton {...slotProps?.skeleton} /> : children}
        </div>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
});

MIAccordion.displayName = 'MIAccordion';

export default MIAccordion;

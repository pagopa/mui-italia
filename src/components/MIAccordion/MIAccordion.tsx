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
    loading = false,
    slots,
    slotProps,
    ...other
  } = props;

  // aria-* attributes describe the header button (the focusable element), the rest goes to the root
  const ariaProps = Object.fromEntries(
    Object.entries(other).filter(([key]) => key.startsWith('aria-'))
  );
  const rootProps = Object.fromEntries(
    Object.entries(other).filter(([key]) => !key.startsWith('aria-'))
  );

  // Keyboard focus ring on the whole card, without :has() (unsupported by the browsers targeted in .babelrc.mjs)
  const [focusVisible, setFocusVisible] = useState(false);

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
      {...rootProps}
      ref={ref}
      className={focusVisible ? 'MIAccordion-focusVisible' : undefined}
      expanded={isExpanded}
      onChange={handleChange}
      disabled={disabled}
      disableGutters
      elevation={0}
      square
    >
      <MIAccordionHeading
        {...ariaProps}
        level={headingLevel}
        id={buttonId}
        aria-controls={regionId}
        expandIcon={<KeyboardArrowDownIcon />}
        onFocusVisible={() => setFocusVisible(true)}
        onBlur={() => setFocusVisible(false)}
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

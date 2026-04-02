import {
  useState,
  useRef,
  useEffect,
  ReactElement,
  cloneElement,
  ReactNode,
  isValidElement,
} from 'react';
import { Tooltip, TooltipProps, ClickAwayListener, useMediaQuery } from '@mui/material';
import { theme } from '@theme';

export interface Props extends Pick<TooltipProps, 'title'> {
  disabled?: boolean;
  children: ReactNode;
}

const callAll =
  (...fns: (Function | undefined)[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

const getTargetElem = (children: ReactNode): ReactElement => {
  if (typeof children === 'string' || typeof children === 'number') {
    // To handle events and ref requested by ClickAwayListener and CloneElement
    // we need to wrap primitive type into a span
    return <span>{children}</span>;
  } else if (isValidElement(children)) {
    // If it is a valid element we can use it as it is
    return children;
  }
  // Fallback for null, undefined and booleans (no tooltip will be shown)
  return <>{children}</>;
};

const MITooltip = ({ title, disabled = false, children, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const enterTimer = useRef<NodeJS.Timeout | null>(null);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  const clearTimers = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (isMobile || disabled) return;

    clearTimers();
    enterTimer.current = setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    if (isMobile || disabled) return;

    clearTimers();
    leaveTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClick = () => {
    if (isMobile && !disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleClickAway = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };

  const targetElement = getTargetElem(children);
  const childProps = targetElement.props as Record<string, any>;
  const triggerElement = cloneElement(targetElement, {
    onMouseEnter: callAll(handleMouseEnter, childProps.onMouseEnter),
    onMouseLeave: callAll(handleMouseLeave, childProps.onMouseLeave),
    onClick: callAll(handleClick, childProps.onClick),
  });

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      clearTimers();
    } else if (isHovered.current && !isMobile) {
      // The disabled attribute can change value.
      // If its value changes from false to true and the mouse is on it, we must open the tooltip
      clearTimers();
      enterTimer.current = setTimeout(() => setIsOpen(true), 200);
    }
  }, [disabled]);

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      mouseEvent={!isMobile ? false : 'onClick'}
      touchEvent={!isMobile ? false : 'onTouchEnd'}
    >
      <Tooltip
        title={title}
        open={isOpen}
        disableHoverListener
        disableTouchListener
        disableFocusListener
        slotProps={{
          tooltip: {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          },
        }}
        {...props}
      >
        {triggerElement}
      </Tooltip>
    </ClickAwayListener>
  );
};

export default MITooltip;

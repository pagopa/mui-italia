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

export interface Props
  extends Pick<
    TooltipProps,
    'id' | 'title' | 'onOpen' | 'onClose' | 'placement' | 'describeChild' | 'children'
  > {
  disabled?: boolean;
  describeValue?: boolean;
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

const MITooltip = ({ title, disabled = false, describeValue = false, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const enterTimer = useRef<NodeJS.Timeout | null>(null);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);
  const isOpening = useRef(false);

  const clearTimers = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  const handleOpen = () => {
    isOpening.current = true;
    if (isMobile || disabled) return;

    clearTimers();
    enterTimer.current = setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleClose = () => {
    isOpening.current = false;
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

  const targetElement = getTargetElem(props.children);
  const childProps = targetElement.props as Record<string, any>;
  const triggerElement = cloneElement(targetElement, {
    onMouseEnter: callAll(handleOpen, childProps.onMouseEnter),
    onMouseLeave: callAll(handleClose, childProps.onMouseLeave),
    onFocus: callAll(handleOpen, childProps.onFocus),
    onBlur: callAll(handleClose, childProps.onBlur),
    onClick: callAll(handleClick, childProps.onClick),
    'aria-label': describeValue ? title : undefined,
  });

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      clearTimers();
    } else if (isOpening.current && !isMobile) {
      // The disabled attribute can change value.
      // If its value changes from true to false and the mouse is on it, we must open the tooltip
      clearTimers();
      enterTimer.current = setTimeout(() => setIsOpen(true), 200);
    }
  }, [disabled]);

  // For accessibility the tooltip must close on Esc button
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        if (isOpen) {
          setIsOpen(false);
          clearTimers();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      mouseEvent={!isMobile ? false : 'onClick'}
      touchEvent={!isMobile ? false : 'onTouchEnd'}
    >
      <Tooltip
        {...props}
        title={title}
        open={isOpen}
        disableHoverListener
        disableTouchListener
        disableFocusListener
        slotProps={{
          tooltip: {
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          },
        }}
      >
        {triggerElement}
      </Tooltip>
    </ClickAwayListener>
  );
};

export default MITooltip;

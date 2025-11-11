import { Box, Stack, Typography, useTheme, styled, keyframes, alpha } from '@mui/material';
import { useEffect, useId, useRef, useState } from 'react';
import { blue, error as errorColor, neutral as neutralColor } from './../../theme/colors';

/**
 * Layout constants used to size the code input component.
 * All values are expressed in theme spacing units.
 * These control the size and spacing of character boxes,
 * as well as the padding and border radius of the container.
 */
const charBoxWidth = 2; // 2 * 8px = 16px
const charBoxSpacing = 2;
const codeBoxPaddingX = 3;
const codeBoxPaddingTop = 1.5;
const codeBoxPaddingBottom = 2;
const codeBoxBorderRadius = 1;
const codeBoxErrorBorder = 0.25;

/**
 *  CodeInput Props
 *
 * @typedef {Object} CodeInputProps
 * @property {number} length - Required number of characters for the code
 * @property {(value: string) => void} onChange - Callback triggered on every input change
 * @property {'text' | 'numeric'} [inputMode] - Input mode applied to the internal HTML input element.
 *                                              Useful for customizing the keyboard on mobile devices.
 *                                              - 'text': shows the default alphanumeric keyboard.
 *                                              - 'numeric': shows a numeric keypad (recommended for numeric codes).
 *                                              Default: 'text'.
 * @property {string} value - Current code value, could be used for a controlled behaviour
 * @property {boolean} [readOnly=false] - If `true`, the input is non-editable but still accessible for screen readers
 * @property {string} [id] - Optional ID for the input. If not provided, a unique one is generated
 * @property {string} [name] - Optional name of the input field
 * @property {boolean} [encrypted=false] - If `true`, hides the actual characters using dots instead
 * @property {boolean} [error=false] - Displays error state layout
 * @property {string} [helperText] - Helper text, displayed below the input
 * @property {string} [ariaLabel] - Aria label associated to the input
 * @property {string} [ariaLabelledby] - ID of an element that labels the input (for accessibility)
 * @property {string} [ariaDescribedby] - ID of an element providing additional description (e.g. helper text)
 */
export interface CodeInputProps {
  length: number;
  onChange: (value: string) => void;
  inputMode?: 'text' | 'numeric';
  value?: string;
  readOnly?: boolean;
  id?: string;
  name?: string;
  encrypted?: boolean;
  error?: boolean;
  helperText?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

type CaretPosition = {
  index: number;
  position: 'start' | 'center' | 'end';
};

const blink = keyframes`
  0%   { opacity: 0; }
  50%  { opacity: 1; }
  100% { opacity: 0; }
`;

const Caret = styled('div')<{ position: CaretPosition['position'] }>(({ position }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '2px',
  borderRadius: '2px',
  height: '1em',
  backgroundColor: blue[500],
  animation: `${blink} 1s step-start infinite`,
  transformOrigin: 'center',
  left: position === 'center' ? '50%' : position === 'end' ? 'calc(100% + 1px)' : '-1px',
}));

const OverlayInput = styled('input')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  background: 'transparent',
  border: 0,
  outline: 'none',

  // metrics tuned to align native selection with virtual boxes
  fontFamily: 'monospace',
  fontSize: '1em',
  letterSpacing: 'calc(var(--char-box-w) + var(--char-gap) - 1ch)',
  paddingLeft: 'calc(var(--pad-x) - (var(--char-gap) / 2))',
  paddingRight: 'calc(var(--pad-x) - (var(--char-gap) / 2))',
  paddingTop: theme.spacing(codeBoxPaddingTop),
  paddingBottom: theme.spacing(codeBoxPaddingBottom),
  lineHeight: '1.5em',

  // hide text and native caret
  color: 'transparent',
  caretColor: 'transparent',
  zIndex: 1,

  // highlight selection (no text, background only)
  '::selection': {
    background: alpha(theme.palette.primary.main, 0.35),
    color: 'transparent',
  },
  '::-moz-selection': {
    background: alpha(theme.palette.primary.main, 0.35),
    color: 'transparent',
  },
}));

const CodeBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean }>(({ theme, error }) => ({
  position: 'relative',
  display: 'inline-block',
  cursor: 'text',
  padding: `${theme.spacing(codeBoxPaddingTop)} ${theme.spacing(codeBoxPaddingX)} ${theme.spacing(
    codeBoxPaddingBottom
  )}`,
  border: `${theme.spacing(error ? codeBoxErrorBorder : 0.125)} solid ${
    error ? errorColor[600] : neutralColor[100]
  }`,
  borderRadius: theme.spacing(codeBoxBorderRadius),
  // Shared layout variables for OverlayInput and CharBox.
  // Define box width, gap, and horizontal padding to keep
  // visual boxes and native selection perfectly aligned.
  '--char-box-w': theme.spacing(charBoxWidth),
  '--char-gap': theme.spacing(charBoxSpacing),
  '--pad-x': theme.spacing(codeBoxPaddingX),
}));

const CharBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(charBoxWidth),
  height: '1.5em',
  lineHeight: '1.5em',
  paddingBottom: theme.spacing(0.25),
  marginBottom: theme.spacing(0.5),
  borderBottom: `1px solid ${neutralColor[700]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

const HelperText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean }>(({ error, theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: '14px',
  lineHeight: '1em',
  alignSelf: 'stretch',
  width: 'auto',
  maxWidth: '100%',
  wordBreak: 'break-word',
  boxSizing: 'content-box',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  color: error ? errorColor[600] : theme.palette.text.primary,
}));

/**
 * CodeInput – React component for entering OTP or PIN codes.
 *
 * Displays a sequence of visually separated character boxes, simulating individual inputs,
 * with a hidden `input` field handling the real input logic.
 * It supports both controlled and uncontrolled usage.
 *
 * @component
 * @example
 * ```tsx
 * <CodeInput
 *   value={code}
 *   onChange={(val, status) => setCode(val)}
 *   length={6}
 *   error={hasError}
 *   helperText="Enter the code"
 *   encrypted
 * />
 * ```
 */
const CodeInput = ({
  length,
  onChange,
  inputMode = 'text',
  value,
  readOnly = false,
  id: idProp,
  name,
  encrypted = false,
  error = false,
  helperText,
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
}: CodeInputProps) => {
  const theme = useTheme();
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const helperTextId = helperText ? `${id}-helper-text` : undefined;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState('');
  const currentValue = isControlled ? value : internalValue;
  const sanitizedValue = currentValue.slice(0, length);

  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [caretPosition, setCaretPosition] = useState<CaretPosition | null>(null);

  const codeBoxContentWidth = length * charBoxWidth + (length - 1) * charBoxSpacing;

  const containerWidth = theme.spacing(
    codeBoxContentWidth + 2 * codeBoxPaddingX + 2 * codeBoxErrorBorder
  );

  useEffect(() => {
    if (readOnly) {
      setCaretPosition(null);
      return;
    }
    const input = hiddenInputRef.current;
    if (!input) {
      return;
    }

    let rafId = 0;
    const scheduleCaretSync = () => {
      // if a sync has already been scheduled, do nothing
      if (rafId) {
        return;
      }
      // Use rAF to read selectionStart/End after the browser has applied
      // the final caret/selection changes
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        syncCaretFromInput(input, sanitizedValue.length);
      });
    };

    const onSelectionChange = () => {
      if (document.activeElement === input) {
        scheduleCaretSync();
      }
    };

    // We need this because focusing via TAB/SHIFT+TAB may not emit a selectionchange.
    // Scheduling a sync on focus ensures the virtual caret is aligned immediately when
    // the field receives the focus.
    const onFocus = () => scheduleCaretSync();
    const onBlur = () => setCaretPosition(null);

    document.addEventListener('selectionchange', onSelectionChange);
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('selectionchange', onSelectionChange);
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('blur', onBlur);
    };
  }, [readOnly, sanitizedValue.length]);

  const updateCaretPosition = (pos: number, valueLen: number = sanitizedValue.length) => {
    const el = hiddenInputRef.current;
    const isActive = el && document.activeElement === el;
    if (readOnly || !isActive || pos < 0 || pos > length) {
      return;
    }
    if (valueLen === length && pos === length) {
      setCaretPosition({ index: length - 1, position: 'end' });
    } else if (pos === valueLen) {
      setCaretPosition({ index: valueLen, position: 'center' });
    } else {
      setCaretPosition({ index: pos, position: 'start' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) {
      return;
    }
    const raw = e.target.value;
    const filtered = raw.slice(0, length);

    if (!isControlled) {
      setInternalValue(filtered);
    }
    onChange?.(filtered);
  };

  /**
   * Synchronizes the virtual caret position with the real input's selection.
   * Reads the current cursor (selectionStart) from the native input element
   * and updates the visual caret position accordingly.
   *
   * @param el - The native input element reference.
   * @param valueLen - The current length of the input value (defaults to sanitizedValue.length).
   */
  const syncCaretFromInput = (
    el: HTMLInputElement | null | undefined,
    valueLen: number = sanitizedValue.length
  ) => {
    if (!el) {
      setCaretPosition(null);
      return;
    }

    const start = el.selectionStart ?? valueLen;
    const end = el.selectionEnd ?? start;

    // do not show the caret with an active selection
    if (start !== end) {
      setCaretPosition(null);
      return;
    }

    updateCaretPosition(start, valueLen);
  };

  return (
    <Box sx={{ display: 'inline-block', width: containerWidth }}>
      <CodeBox error={error} sx={{ cursor: readOnly ? 'default' : 'text' }}>
        <OverlayInput
          id={id}
          {...(name && { name })}
          ref={hiddenInputRef}
          type={encrypted ? 'password' : 'text'}
          inputMode={inputMode}
          autoComplete="one-time-code"
          /* Disable mobile keyboard features that can change caret/value on Android (Gboard)
          This field is an OTP/PIN, not natural text; we want raw keystrokes without "smart" edits */
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={sanitizedValue}
          maxLength={length}
          readOnly={readOnly}
          aria-invalid={error || undefined}
          {...(ariaLabel && { 'aria-label': ariaLabel })}
          {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
          {...(helperTextId || ariaDescribedby
            ? {
                'aria-describedby': [helperTextId, ariaDescribedby].filter(Boolean).join(' '),
              }
            : {})}
          onChange={handleChange}
          sx={encrypted ? { fontSize: '1.5em' } : undefined}
        />

        <Stack
          direction="row"
          spacing={theme.spacing(charBoxSpacing)}
          sx={{
            fontSize: encrypted ? '1.5em' : '1em',
            fontFamily: `'Titillium Web', sans-serif`,
            fontWeight: 600,
            color: theme.palette.text.primary,
            position: 'relative',
            zIndex: 0,
            pointerEvents: 'none',
          }}
          aria-hidden
        >
          {Array.from({ length }).map((_, i) => {
            const char = sanitizedValue[i] || '';
            const displayedChar = encrypted && char ? '•' : char;
            const showCaret = !readOnly && caretPosition?.index === i;

            return (
              <CharBox key={i}>
                {displayedChar && <Box component="span">{displayedChar}</Box>}
                {showCaret && <Caret position={caretPosition.position} />}
              </CharBox>
            );
          })}
        </Stack>
      </CodeBox>

      {helperText && (
        <HelperText id={helperTextId} error={error}>
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};

export default CodeInput;

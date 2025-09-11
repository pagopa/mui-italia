import { Box, Stack, Typography, useTheme, styled, keyframes } from '@mui/material';
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react';
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

const CodeBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean }>(({ theme, error }) => ({
  display: 'inline-block',
  cursor: 'text',
  padding: `${theme.spacing(codeBoxPaddingTop)} ${theme.spacing(codeBoxPaddingX)} ${theme.spacing(
    codeBoxPaddingBottom
  )}`,
  border: `${theme.spacing(error ? codeBoxErrorBorder : 0.125)} solid ${
    error ? errorColor[600] : neutralColor[100]
  }`,
  borderRadius: theme.spacing(codeBoxBorderRadius),
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
  marginInline: theme.spacing(0.125),
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
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState<CaretPosition | null>(null);

  // Track whether the keyboard/IME (composition) is active: do not touch the caret while composing
  const isComposingRef = useRef(false);

  // "Intended" caret computed BEFORE the mutation (onBeforeInput), to be restored AFTER render
  const pendingCaretRef = useRef<number | null>(null);

  type BeforeInputEvt = FormEvent<HTMLInputElement> & {
    nativeEvent: InputEvent & { data?: string | null; inputType: string };
  };

  /* Restore the real caret AFTER React/IME are done (next frame),
  to prevent the browser from overriding selection right after onChange */
  const restoreCaretIfNeeded = useCallback(() => {
    requestAnimationFrame(() => {
      const el = hiddenInputRef.current;
      const caret = pendingCaretRef.current;

      /* Guard: run only when the hidden input is focused, not composing,
      and we have a pending caret to restore. */
      if (!el || document.activeElement !== el || isComposingRef.current || caret == null) {
        return;
      }

      const pos = Math.min(caret, el.value.length);
      try {
        el.setSelectionRange(pos, pos);
      } catch {
        // Safe-guard: prevent runtime errors from stopping the input flow
      }

      // Clear pending so we don't attempt to restore again next frame
      pendingCaretRef.current = null;
    });
  }, []);

  const codeBoxContentWidth = length * charBoxWidth + (length - 1) * charBoxSpacing;

  const containerWidth = theme.spacing(
    codeBoxContentWidth + 2 * codeBoxPaddingX + 2 * codeBoxErrorBorder
  );

  useEffect(() => {
    if (readOnly) {
      setIsFocused(false);
      setCaretPosition(null);
    }
  }, [readOnly]);

  // After each value update, sync the virtual caret with the native selection (when focused)
  useLayoutEffect(() => {
    if (readOnly || !isFocused || !hiddenInputRef.current) {
      return;
    }

    const pos = hiddenInputRef.current.selectionStart ?? sanitizedValue.length;

    if (caretPosition?.index !== pos) {
      updateCaretPosition(pos);
    }
  }, [sanitizedValue, isFocused, readOnly]);

  // If we have a "pending" caret to restore (from beforeinput), do it after the value update
  useLayoutEffect(() => {
    if (pendingCaretRef.current != null) {
      restoreCaretIfNeeded();
    }
  }, [sanitizedValue, restoreCaretIfNeeded]);

  // Update the virtual caret state (index + how to render it)
  const updateCaretPosition = (pos: number, valueLen: number = sanitizedValue.length) => {
    if (readOnly || !isFocused || pos < 0 || pos > length) {
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

  // onBeforeInput: snapshot the user's intent BEFORE the browser/IME mutates the value,
  // computing the expected caret position after the insertion (start + delta)
  const handleBeforeInput = (e: BeforeInputEvt) => {
    const el = e.currentTarget;
    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? start;
    const added = e.nativeEvent.data?.length ?? 0;
    const delta = added - (end - start);
    pendingCaretRef.current = Math.max(0, start + delta);
  };

  // onChange: update the value and derive a robust caret position
  // Prefer pendingCaretRef (intent), otherwise selectionStart; last fallback: end of text
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) {
      return;
    }
    const raw = e.target.value;
    const filtered = raw.slice(0, length);

    let caretPos = e.target.selectionStart;
    const pending = pendingCaretRef.current;

    if ((caretPos == null || caretPos === 0) && pending != null) {
      caretPos = pending;
    } else if (caretPos == null) {
      caretPos = filtered.length;
    }
    pendingCaretRef.current = caretPos;

    if (!isControlled) {
      setInternalValue(filtered);
    }
    onChange?.(filtered);
    updateCaretPosition(caretPos, filtered.length);
    restoreCaretIfNeeded();
  };

  // KeyUp: align the virtual caret to the most recent native selection
  const handleKeyUp = () => {
    if (readOnly) {
      return;
    }
    const pos = hiddenInputRef.current?.selectionStart ?? sanitizedValue.length;
    updateCaretPosition(pos);
  };

  // Click on a code "box": move the real cursor there and update the virtual caret
  const handleCharClick = (index: number) => {
    hiddenInputRef.current?.focus();
    setIsFocused(true);
    if (readOnly) {
      return;
    }

    const valueLen = sanitizedValue.length;
    const pos = index > valueLen ? valueLen : index;
    hiddenInputRef.current?.setSelectionRange(pos, pos);
    updateCaretPosition(pos, valueLen);
  };

  const handleContainerClick = () => {
    hiddenInputRef.current?.focus();
  };

  // Keep the virtual caret in sync even when the browser fires async selectionchange events
  useEffect(() => {
    const handleSelectionChange = () => {
      const inputElement = hiddenInputRef.current;
      if (!inputElement || document.activeElement !== inputElement) {
        return;
      }
      const pos = inputElement.selectionStart ?? inputElement.value.length;
      updateCaretPosition(pos, inputElement.value.length);
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return (
    <Box sx={{ display: 'inline-block', width: containerWidth }}>
      <CodeBox
        onClick={handleContainerClick}
        error={error}
        sx={{ cursor: readOnly ? 'default' : 'text' }}
      >
        <input
          id={id}
          {...(name && { name })}
          ref={hiddenInputRef}
          type={encrypted ? 'password' : 'text'}
          inputMode={inputMode}
          autoComplete="one-time-code"
          /* Disable mobile keyboard features that can change caret/value on Android (Gboard)
          This field is an OTP/PIN, not natural text; we want raw keystrokes without “smart” edits */
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={sanitizedValue}
          onBeforeInput={handleBeforeInput}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onCompositionStart={() => {
            isComposingRef.current = true;
          }}
          onCompositionEnd={(e) => {
            isComposingRef.current = false;
            // At the end of composition, store current selection and restore it on the next frame
            pendingCaretRef.current =
              e.currentTarget.selectionStart ?? e.currentTarget.value.length;
            restoreCaretIfNeeded();
          }}
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
          // Visually hidden input: invisible but focusable with working selection (not 0×0)
          style={{
            position: 'absolute',
            opacity: 0,
            /* Keep a minimal box (1x1) so Android/Chrome respects selection APIs
            0x0 inputs can make setSelectionRange unreliable on some devices
            Remove extra box metrics */
            width: 1,
            height: 1,
            padding: 0,
            border: 0,
            margin: 0,
            /* Clip the element to ensure nothing is painted (classic a11y pattern) */
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            /* Prevent any accidental scrollbars or line wrapping */
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
          // Focus: place the cursor at the end, update the virtual caret immediately, and schedule a restore
          onFocus={(e) => {
            setIsFocused(true);
            if (readOnly) {
              return;
            }
            const pos = e.target.value.length;
            e.target.setSelectionRange(pos, pos);
            updateCaretPosition(pos);
            pendingCaretRef.current = pos;
            restoreCaretIfNeeded();
          }}
          onBlur={() => {
            setIsFocused(false);
            setCaretPosition(null);
            pendingCaretRef.current = null;
          }}
        />

        <Stack
          direction="row"
          spacing={theme.spacing(charBoxSpacing)}
          sx={{
            fontSize: encrypted ? '1.5em' : '1em',
            fontFamily: `'Titillium Web', sans-serif`,
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
          aria-hidden
        >
          {Array.from({ length }).map((_, i) => {
            const char = sanitizedValue[i] || '';
            const displayedChar = encrypted && char ? '•' : char;
            const showCaret = !readOnly && caretPosition?.index === i;

            return (
              <CharBox key={i} onClick={() => handleCharClick(i)}>
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

import { Box, Stack, Typography, useTheme, styled, keyframes } from '@mui/material';
import { useRef, useLayoutEffect, useEffect, useState, useId } from 'react';
import { blue, error as errorColor, neutral as neutralColor } from './../../theme/colors';

/**
 * Constants used to size each character box and the spacing between them.
 * These values are used for styling CharBox elements, controlling the horizontal spacing in the Stack,
 * and for computing the total width of the code box to align the helper text accordingly.
 */
const charBoxWidth = 16;
const charBoxSpacing = 16;

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
  id?: string;
  name?: string;
  encrypted?: boolean;
  error?: boolean;
  helperText?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

const blink = keyframes`
  50% { opacity: 0; }
`;

const Caret = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '2px',
  borderRadius: '2px',
  height: '1em',
  backgroundColor: blue[500],
  animation: `${blink} 1s step-start infinite`,
  transformOrigin: 'center',
}));

const CodeBox = styled(Box)<{ error?: boolean }>(({ error }) => ({
  display: 'inline-block',
  cursor: 'text',
  padding: '12px 24px 16px',
  border: `${error ? 2 : 1}px solid ${error ? errorColor[600] : neutralColor[100]}`,
  borderRadius: '8px',
}));

const CharBox = styled(Box)(() => ({
  width: `${charBoxWidth}px`,
  height: '1.5em',
  lineHeight: '1.5em',
  paddingBottom: '2px',
  marginBottom: '4px',
  borderBottom: `1px solid ${neutralColor[700]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginInline: '1px',
}));

const HelperText = styled(Typography)<{ error?: boolean }>(({ error, theme }) => ({
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
  id: idProp,
  name,
  encrypted = false,
  error = false,
  helperText,
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
}: CodeInputProps) => {
  const codeBoxRef = useRef<HTMLDivElement>(null);

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
  const [cursorIndex, setCursorIndex] = useState(sanitizedValue.length);

  const codeBoxWidth = length * charBoxWidth + (length - 1) * charBoxSpacing;

  useLayoutEffect(() => {
    if (hiddenInputRef.current) {
      const pos = hiddenInputRef.current.selectionStart ?? sanitizedValue.length;
      setCursorIndex(pos);
    }
  }, [sanitizedValue]);

  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const filtered = raw.slice(0, length);

    const caretPos = e.target.selectionStart ?? filtered.length;
    setCursorIndex(caretPos);

    if (!isControlled) {
      setInternalValue(filtered);
    }
    onChange?.(filtered);
  };

  const handleKeyUp = () => {
    const input = hiddenInputRef.current;
    if (input) {
      const pos = input.selectionStart ?? sanitizedValue.length;
      setCursorIndex(pos);
    }
  };

  const handleContainerClick = () => {
    hiddenInputRef.current?.focus();
  };

  const handleCharClick = (index: number) => {
    const pos = index > sanitizedValue.length ? sanitizedValue.length : index;
    hiddenInputRef.current?.focus();
    hiddenInputRef.current?.setSelectionRange(pos, pos);
    setCursorIndex(pos);
  };

  return (
    <Box sx={{ display: 'inline-block' }}>
      <CodeBox ref={codeBoxRef} onClick={handleContainerClick} error={error}>
        <input
          id={id}
          {...(name && { name })}
          ref={hiddenInputRef}
          type={encrypted ? 'password' : 'text'}
          inputMode={inputMode}
          autoComplete="one-time-code"
          value={sanitizedValue}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          maxLength={length}
          {...(ariaLabel && { 'aria-label': ariaLabel })}
          {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
          {...(helperTextId || ariaDescribedby
            ? {
                'aria-describedby': [helperTextId, ariaDescribedby].filter(Boolean).join(' '),
              }
            : {})}
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
            height: 0,
            width: 0,
          }}
          onFocus={(e) => {
            const pos = e.target.value.length;
            e.target.setSelectionRange(pos, pos);
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />

        <Stack
          direction="row"
          spacing={`${charBoxSpacing}px`}
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

            const isEndOfValue =
              isFocused &&
              sanitizedValue.length === length &&
              cursorIndex === length &&
              i === length - 1;
            const isNextEmptyBox =
              isFocused &&
              cursorIndex === sanitizedValue.length &&
              sanitizedValue.length < length &&
              i === sanitizedValue.length;
            const isCursorHere =
              isFocused &&
              cursorIndex === i &&
              !isNextEmptyBox &&
              !(isEndOfValue && sanitizedValue[i]);

            return (
              <CharBox key={i} onClick={() => handleCharClick(i)}>
                {displayedChar && <Box component="span">{displayedChar}</Box>}
                {(isCursorHere || isNextEmptyBox || isEndOfValue) && (
                  <Caret
                    sx={{
                      left: isNextEmptyBox ? '50%' : isEndOfValue ? 'calc(100% + 1px)' : '-1px',
                    }}
                  />
                )}
              </CharBox>
            );
          })}
        </Stack>
      </CodeBox>

      {helperText && (
        <HelperText id={helperTextId} error={error} sx={{ width: codeBoxWidth }}>
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};

export default CodeInput;

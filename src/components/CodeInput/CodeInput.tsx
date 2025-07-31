import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useRef, useLayoutEffect, useEffect, useState, useId } from 'react';

/**
 * Type representing the current status of the code input
 * - `valid`: the code is complete and valid
 * - `incomplete`: the code is not complete yet
 * - `invalid-char`: contains invalid characters (e.g. letters)
 */
export type CodeInputStatus = 'valid' | 'incomplete' | 'invalid-char';

/**
 *  CodeInput Props
 *
 * @typedef {Object} CodeInputProps
 * @property {number} length - Required number of characters for the code
 * @property {(value: string, status: CodeInputStatus) => void} onChange - Callback triggered on every input change
 * @property {string} value - Current code value, could be used for a controlled behaviour
 * @property {string} [id] - Optional ID for the input. If not provided, a unique one is generated
 * @property {string} [name='otp'] - Name of the input field
 * @property {boolean} [encrypted=false] - If `true`, hides the actual characters using dots instead
 * @property {boolean} [error=false] - Displays error state layout
 * @property {string} [helperText] - Helper text, displayed below the input
 * @property {string} [ariaLabelledby] - ID of an element that labels the input (for accessibility)
 * @property {string} [ariaDescribedby] - ID of an element providing additional description (e.g. helper text)
 */
export interface CodeInputProps {
  length: number;
  onChange: (value: string, status: CodeInputStatus) => void;
  value?: string;
  id?: string;
  name?: string;
  encrypted?: boolean;
  error?: boolean;
  helperText?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

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
  value,
  id: idProp,
  name = 'otp',
  encrypted = false,
  error = false,
  helperText,
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
  const [cursorIndex, setCursorIndex] = useState(sanitizedValue.length);

  const fontSize = '16px';
  const fontFamily = "'Titillium Web', sans-serif";
  const fontWeight = 500;
  const inputMode = 'numeric';

  const mainColor = theme.palette.text.primary;
  const underlineColor = theme.palette.neutral[700];
  const borderColor = error ? theme.palette.error[600] : theme.palette.neutral[100];
  const borderSize = error ? 2 : 1;
  const helperTextColor = error ? theme.palette.error.main : mainColor;

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
    const filtered = raw.replace(/\s/g, '').slice(0, length);

    const allDigits = filtered.split('').every((c) => /^[0-9]$/.test(c));
    const status: CodeInputStatus = !allDigits
      ? 'invalid-char'
      : filtered.length < length
      ? 'incomplete'
      : 'valid';

    const caretPos = e.target.selectionStart ?? filtered.length;
    setCursorIndex(caretPos);

    if (!isControlled) {
      setInternalValue(filtered);
    }
    onChange?.(filtered, status);
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
    <Box>
      <Box
        onClick={handleContainerClick}
        sx={{
          display: 'inline-block',
          cursor: 'text',
          px: 3,
          py: 1.5,
          border: `${borderSize}px solid ${borderColor}`,
          borderRadius: '8px',
        }}
      >
        <input
          id={id}
          name={name}
          ref={hiddenInputRef}
          type="text"
          inputMode={inputMode}
          autoComplete="one-time-code"
          value={sanitizedValue}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          maxLength={length}
          aria-label="Code input"
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
          spacing={2}
          sx={{ fontSize, fontFamily, fontWeight, color: mainColor }}
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
              <Box
                key={i}
                onClick={() => handleCharClick(i)}
                sx={{
                  width: '1em',
                  height: '1.5em',
                  borderBottom: `1px solid ${underlineColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  mx: '1px',
                }}
              >
                {displayedChar && <Box component="span">{displayedChar}</Box>}
                {(isCursorHere || isNextEmptyBox || isEndOfValue) && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '1px',
                      height: '1em',
                      backgroundColor: mainColor,
                      animation: 'blink 1s step-start infinite',
                      left: isNextEmptyBox ? '50%' : isEndOfValue ? 'calc(100% + 1px)' : '-1px',
                      transformOrigin: 'center',
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Stack>

        <style>
          {`
            @keyframes blink {
              50% { opacity: 0; }
            }
          `}
        </style>
      </Box>

      {helperText && (
        <Typography
          id={helperTextId}
          mt={1}
          ml={3}
          fontSize="14px"
          lineHeight="1rem"
          color={helperTextColor}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default CodeInput;

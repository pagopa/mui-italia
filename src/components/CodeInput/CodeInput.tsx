import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useRef, useLayoutEffect, useEffect, useState, useId } from 'react';

export type CodeInputStatus = 'valid' | 'incomplete' | 'invalid-char';

export interface CodeInputProps {
  id?: string;
  name?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  value: string;
  onChange: (value: string, status: CodeInputStatus) => void;
  length: number;
  error?: boolean;
  helperText?: string;
  encrypted?: boolean;
}

const CodeInput = ({
  id: idProp,
  name = 'otp',
  ariaLabelledby,
  ariaDescribedby,
  value,
  onChange,
  length,
  error = false,
  helperText,
  encrypted = false,
}: CodeInputProps) => {
  const theme = useTheme();
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const helperTextId = helperText ? `${id}-helper-text` : undefined;

  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [cursorIndex, setCursorIndex] = useState(value.length);

  const fontSize = '16px';
  const fontFamily = "'Titillium Web', sans-serif";
  const fontWeight = 500;
  const inputMode = 'numeric';

  const mainColor = theme.palette.text.primary;
  const borderColor = error ? theme.palette.error.main : theme.palette.grey[400];
  const helperTextColor = error ? theme.palette.error.main : mainColor;

  useLayoutEffect(() => {
    if (hiddenInputRef.current) {
      const pos = hiddenInputRef.current.selectionStart ?? value.length;
      setCursorIndex(pos);
    }
  }, [value]);

  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const filtered = raw.replace(/\s/g, '').slice(0, length);

    const allDigits = filtered.split('').every((c) => /^[0-9]$/.test(c));
    const status = !allDigits ? 'invalid-char' : filtered.length < length ? 'incomplete' : 'valid';

    const caretPos = e.target.selectionStart ?? filtered.length;
    setCursorIndex(caretPos);
    onChange(filtered, status);
  };

  const handleKeyUp = () => {
    const input = hiddenInputRef.current;
    if (input) {
      const pos = input.selectionStart ?? value.length;
      setCursorIndex(pos);
    }
  };

  const handleContainerClick = () => {
    hiddenInputRef.current?.focus();
  };

  const handleCharClick = (index: number) => {
    const pos = index > value.length ? value.length : index;
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
          py: 2,
          border: `1px solid ${borderColor}`,
          borderRadius: 1,
        }}
      >
        <input
          id={id}
          name={name}
          ref={hiddenInputRef}
          type="text"
          inputMode={inputMode}
          autoComplete="one-time-code"
          value={value}
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
            const char = value[i] || '';
            const displayedChar = encrypted && char ? '•' : char;

            const isEndOfValue =
              value.length === length && cursorIndex === length && i === length - 1;
            const isNextEmptyBox =
              isFocused &&
              cursorIndex === value.length &&
              value.length < length &&
              i === value.length;
            const isCursorHere =
              isFocused && cursorIndex === i && !isNextEmptyBox && !(isEndOfValue && value[i]);

            return (
              <Box
                key={i}
                onClick={() => handleCharClick(i)}
                sx={{
                  width: '1em',
                  height: '1.5em',
                  borderBottom: `1px solid ${mainColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  mx: '1px',
                }}
              >
                {displayedChar && <Box component="span">{displayedChar}</Box>}
                {isCursorHere && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '-1px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '1px',
                      height: '1em',
                      backgroundColor: mainColor,
                      animation: 'blink 1s step-start infinite',
                    }}
                  />
                )}
                {isNextEmptyBox && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '1px',
                      height: '1em',
                      backgroundColor: mainColor,
                      animation: 'blink 1s step-start infinite',
                    }}
                  />
                )}
                {isEndOfValue && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: '-1px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '1px',
                      height: '1em',
                      backgroundColor: mainColor,
                      animation: 'blink 1s step-start infinite',
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

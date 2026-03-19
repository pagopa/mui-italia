'use client';

import { useState, useRef, useEffect, FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import type { IconButtonProps } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export interface CopyToClipboardProps extends Omit<IconButtonProps, 'onClick' | 'value'> {
  /** Value or a function that returns what should be copied to clipboard */
  value: (() => string) | string;
  /** If given renders a tooltip with the given message on copy to clipboard button press */
  tooltipTitle?: string;
}

/** @returns copy to clipboard button's localized default aria label values */
function getDefaultAriaLabels() {
  if (typeof window !== 'undefined') {
    const activeLang = window.document.documentElement.lang;
    switch (activeLang) {
      case 'fr':
        return { copy: 'Copie', copied: 'Copié' };
      case 'en':
        return { copy: 'Copy', copied: 'Copied' };
      case 'es':
        return { copy: 'Copiar', copied: 'Copiado' };
      case 'de':
        return { copy: 'Kopieren', copied: 'Kopiert' };
    }
  }

  return { copy: 'Copia', copied: 'Copiato' };
}

export const CopyToClipboardButton: FC<CopyToClipboardProps> = ({
  value,
  tooltipTitle,
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const copiedTimeoutRef = useRef<NodeJS.Timeout>();

  /** Clears the timeout on component unmount */
  useEffect(
    () => () => {
      clearTimeout(copiedTimeoutRef.current);
    },
    []
  );

  const handleCopyToClipboard = async () => {
    const valueToCopy = value instanceof Function ? value() : value;
    try {
      await navigator.clipboard.writeText(valueToCopy);
      clearTimeout(copiedTimeoutRef.current);
      setCopied(true);
      copiedTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const defaultAriaLabels = getDefaultAriaLabels();
  const ariaLabels = {
    copy: props['aria-label'] ?? defaultAriaLabels.copy,
    copied: tooltipTitle ?? defaultAriaLabels.copied,
  };

  return (
    <Tooltip
      // the tooltip only shows when the tooltipTitle is given
      open={!!tooltipTitle && copied}
      arrow={true}
      title={tooltipTitle}
      placement="top"
    >
      <IconButton
        role="button"
        onClick={handleCopyToClipboard}
        {...props}
        sx={{ mx: 1, ...props.sx }}
        aria-label={!copied ? ariaLabels.copy : ariaLabels.copied}
      >
        {!copied && <ContentCopyIcon fontSize="small" />}
        {copied && <CheckIcon color="success" fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
};

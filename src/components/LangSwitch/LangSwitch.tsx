'use client';

import { SyntheticEvent, useState } from 'react';
import { Menu, MenuItem, Typography, Box } from '@mui/material';
import { ButtonNaked } from '@components/ButtonNaked';

/* Icons */
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

export type LangCode = 'it' | 'en' | 'de' | 'fr' | 'sl';

// Partial is used here to define that every key in LangLabels is optional,
// while the it key-value pair is mandatory
export type LangLabels = Partial<Record<LangCode, string>> & { it: string };

export type Languages = (Partial<Record<LangCode, LangLabels>> & { it: LangLabels }) | LangLabels;

function isFlatLanguages(languages: Languages): languages is LangLabels {
  return typeof languages.it === 'string';
}

export type LangSwitchProps = {
  currentLangCode?: LangCode;
  languages: Languages;
  onLanguageChanged: (newLang: LangCode) => void;
};

export function LangSwitch({
  currentLangCode = 'it',
  languages,
  onLanguageChanged,
}: LangSwitchProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const flat = isFlatLanguages(languages);

  const getLabel = (langCode: LangCode): string => {
    if (flat) {
      return languages[langCode] || languages.it;
    }
    const currentLangLabels = languages[currentLangCode] ?? languages.it;
    return currentLangLabels[langCode] || languages.it.it;
  };

  const handleClick = (e: SyntheticEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const wrapUpdateActiveLang = (newLang: LangCode) => (e: SyntheticEvent) => {
    e.preventDefault();

    onLanguageChanged(newLang);
    handleClose();
  };

  return (
    <Box>
      <ButtonNaked
        id="lang-menu-button"
        sx={{
          color: 'text.primary',
          justifyContent: 'space-between',
          p: 0,
          height: 'auto',
          display: 'flex',
        }}
        aria-label={`Seleziona lingua: ${getLabel(currentLangCode)}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? 'lang-menu' : undefined}
        onClick={handleClick}
      >
        <Box component="span" sx={{ textAlign: 'left' }}>
          <Typography color="inherit" component="span" variant="subtitle2">
            {getLabel(currentLangCode)}
          </Typography>
        </Box>

        {open ? (
          <KeyboardArrowUpRoundedIcon fontSize="small" />
        ) : (
          <KeyboardArrowDownRoundedIcon fontSize="small" />
        )}
      </ButtonNaked>
      {Boolean(Object.keys(languages).length > 0) && (
        <Menu
          id="lang-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'lang-menu-button' }}
        >
          {Object.keys(languages).map((langCode) => {
            const code = langCode as LangCode;
            const label = getLabel(code);
            return (
              <MenuItem
                aria-label={label}
                key={code}
                onClick={wrapUpdateActiveLang(code)}
                lang={flat ? code : undefined}
              >
                {label}
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </Box>
  );
}

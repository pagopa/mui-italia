"use client";

import React, { useState } from "react";
import { Menu, MenuItem, Typography, Box } from "@mui/material";
import { ButtonNaked } from "@components/ButtonNaked";

/* Icons */
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

export type LangCode = "it" | "en" | "de" | "fr" | "sl";

// Partial is used here to define that every key in LangLabels is optional,
// while the it key-value pair is mandatory
export type LangLabels = Partial<Record<LangCode, string>> & { it: string };

// Partial is used here to define that every key in LangLabels is optional,
// while the it key-value pair is mandatory
export type Languages = Partial<Record<LangCode, LangLabels>> & { it: LangLabels };

export type LangSwitchProps = {
  currentLangCode?: LangCode;
  languages: Languages;
  onLanguageChanged: (newLang: LangCode) => void;
};

export function LangSwitch({
  currentLangCode = "it",
  languages,
  onLanguageChanged,
}: LangSwitchProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  // checks if currentLangCode is included in languages,
  // if not uses the italian labels, this allows non italian lang labels and
  // languages to be optional while being backward compatible
  const currentLangLabels: LangLabels =
    languages[currentLangCode] ?? languages.it;

  const handleClick = (e: React.SyntheticEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const wrapUpdateActiveLang =
    (newLang: LangCode) => (e: React.SyntheticEvent) => {
      if (e) {
        e.preventDefault();
      }

      onLanguageChanged(newLang);
      handleClose();
    };

  return (
    <React.Fragment>
      <Box>
        <ButtonNaked
          sx={{
            color: "text.primary",
            justifyContent: "space-between",
            p: 0,
            height: "auto",
            display: "flex",
          }}
          aria-label="lingua"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {currentLangCode && (
            <Box component="span" sx={{ textAlign: "left" }}>
              <Typography color="inherit" component="span" variant="subtitle2">
                {currentLangLabels[currentLangCode]}
              </Typography>
            </Box>
          )}

          {open ? (
            <KeyboardArrowUpRoundedIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownRoundedIcon fontSize="small" />
          )}
        </ButtonNaked>
        {Boolean(Object.keys(languages).length > 0) && (
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "lang-menu-button" }}
          >
            {Object.keys(languages).map((langCode, i) => (
              <MenuItem
                aria-label={currentLangLabels[langCode as LangCode]}
                key={i}
                onClick={wrapUpdateActiveLang(langCode as LangCode)}
              >
                {currentLangLabels[langCode as LangCode]}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Box>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { Menu, MenuItem, Typography, Box } from "@mui/material";
import { ButtonNaked } from "@components/ButtonNaked";

/* Icons */
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

type LangCode = "it" | "en";
type LangLabels = Record<LangCode, string>;
type Languages = Record<LangCode, LangLabels>;

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
                {languages[currentLangCode][currentLangCode]}
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
                aria-label={languages[currentLangCode][langCode as LangCode]}
                key={i}
                onClick={wrapUpdateActiveLang(langCode as LangCode)}
              >
                {languages[currentLangCode][langCode as LangCode]}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Box>
    </React.Fragment>
  );
}

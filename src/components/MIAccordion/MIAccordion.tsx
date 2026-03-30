import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  AccordionProps,
  Chip, // Importiamo i tipi base di MUI
} from '@mui/material';
import { colors } from 'theme/foundations/colors';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

// 1. Definiamo le regole del GIOCO per il nostro team
export interface MIAccordionProps extends Omit<AccordionProps, 'children'> {
  title: string;
  titleVariant?: 'primary' | 'secondary' | 'tertiary';
  icon?: React.ReactNode | false;
  chipLabel?: string;
  chipColor?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  children: React.ReactNode;
  panelId: string; // a11y needed
  panelHeader: string; // a11y needed
}

const getVariant = (variant: 'primary' | 'secondary' | 'tertiary') => {
  switch (variant) {
    case 'primary':
      return 'h6';
    case 'secondary':
      return 'subtitle1';
    case 'tertiary':
      return 'overline';
    default:
      return 'h6';
  }
};

// 2. Creiamo il componente
export const MIAccordion = ({
  title,
  titleVariant = 'primary',
  icon = false,
  chipLabel,
  chipColor,
  children,
  panelId,
  panelHeader,
  ...rest
}: MIAccordionProps) => {
  return (
    <Accordion
      {...rest}
      sx={{
        border: `1px solid ${colors.neutral.grey[100]}`,
        boxShadow: 'none',
        borderRadius: '8px',

        '&:first-of-type': {
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        },
        '&:last-of-type': {
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        },

        // Nascondiamo la riga divisoria nativa di MUI (quella grigia in alto)
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        id={panelId}
        aria-controls={panelHeader}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          {icon && (
            <Box
              sx={{
                display: 'flex',
                mt: 0.5,
                color: colors.neutral.grey[300],
                '& svg': {
                  fontSize: '24px',
                },
              }}
            >
              {icon}
            </Box>
          )}

          {/* Testo e Chip */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
            <Typography variant={getVariant(titleVariant)} fontWeight={600}>
              {title}
            </Typography>

            {chipLabel && <Chip color={chipColor} label={chipLabel} size="small" />}
          </Box>
        </Box>
      </AccordionSummary>

      {/* Il contenuto passato dall'esterno finisce magicamente qui dentro */}
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

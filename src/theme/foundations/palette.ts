import { colors } from './colors';

/**
 * Ci sono 2 categorie di colori:
 *
 * 1. COLORI CUSTOM NUOVI (neutral, turquoise, blueitalia, purple):
 *    - Non esistono in MUI di default
 *    - Possono essere definiti completamente in Palette e PaletteOptions
 *    - Ognuno ha la sua interfaccia specifica (es. NeutralPaletteColor)
 *
 * 2. COLORI STANDARD MUI (info, success, warning, error):
 *    - Esistono già in MUI con tipo PaletteColor
 *    - Non possono essere sovrascritti in Palette (causa errori di TypeScript)
 *    - Per aggiungere proprietà custom (700, 500, 400, etc.) dobbiamo estendere
 *      PaletteColor e SimplePaletteColorOptions
 *
 * Le estensioni globali sotto aggiungono tutte le possibili proprietà numeriche
 * come opzionali. Questo permette a ciascun colore di usare solo quelle necessarie.
 */

// TODO - Spostare queste dichiarazioni in un file separato dedicato?
declare module '@mui/material/styles' {
  /**
   * Definisce la struttura di un singolo colore nella palette finale
   * Es: Quando viene usato il tema nei vari componenti: theme.palette.neutral
   */
  interface PaletteColor {
    850: string;
    100: string;
    black?: string;
    white?: string;
    700?: string;
    650?: string;
    600?: string;
    500?: string;
    450?: string;
    400?: string;
    300?: string;
    250?: string;
    200?: string;
    150?: string;
    50?: string;
  }

  /**
   * SimplePaletteColorOptions: definisce la struttura di un colore quando si crea il tema
   * Es: createTheme({ palette: { neutral: {...}, error: {...} } })
   */
  interface SimplePaletteColorOptions {
    850?: string;
    100?: string;
    black?: string;
    white?: string;
    700?: string;
    650?: string;
    600?: string;
    500?: string;
    450?: string;
    400?: string;
    300?: string;
    250?: string;
    200?: string;
    150?: string;
    50?: string;
  }

  /**
   * Palette: definisce tutti i colori della palette finale insieme
   * Es: theme.palette (contiene neutral, blue, opacity, torquoise, blueItalia etc.)
   *
   * Solo i colori custom nuovi vanno dichiarati qui. I colori standard di MUI (info, success, warning, error)
   * usano automaticamente PaletteColor estesa sopra.
   */
  interface Palette {
    neutral: NeutralPaletteColor;
    // blue: BluePaletteColor;
    // turquoise: TurquoisePaletteColor;
    // blueitalia: BlueitaliaPaletteColor;
  }

  /**
   * PaletteOptions: definisce tutti i colori come opzioni di input insieme
   * Es: createTheme({ palette: { neutral: {...} } })
   *
   * Anche qui vanno dichiarati solo i colori custom nuovi. I colori standard MUI sono già gestiti.
   */
  interface PaletteOptions {
    neutral: NeutralPaletteColor;
  }

  // Interfacce specifiche per i colori custom
  interface NeutralPaletteColor extends BasePaletteColor {
    main: string;
    black: string;
    700: string;
    650: string;
    450: string;
    300: string;
    200: string;
    50: string;
    white: string;
  }

  // BasePaletteColor: proprietà comuni a tutti i colori custom
  interface BasePaletteColor {
    main: string;
    contrastText: string;
    850: string;
    100: string;
  }
}

export const muiItaliaPalette = {
  neutral: {
    main: colors.neutral.black,
    contrastText: colors.neutral.white,
    black: colors.neutral.black,
    850: colors.neutral[850],
    700: colors.neutral[700],
    650: colors.neutral[650],
    450: colors.neutral[450],
    300: colors.neutral[300],
    200: colors.neutral[200],
    100: colors.neutral[100],
    50: colors.neutral[50],
    white: colors.neutral.white,
  },
  blue: {},
  turquoise: {},
  blueitalia: {},
  info: {
    main: colors.info[500],
    dark: colors.info[700],
    light: colors.info[400],
    contrastText: colors.neutral.black,
    850: colors.info[850],
    700: colors.info[700],
    500: colors.info[500],
    400: colors.info[400],
    100: colors.info[100],
  },
  success: {},
  warning: {},
  error: {},
  purple: {},
};

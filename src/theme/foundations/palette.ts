export type {};
/**
 * There are 2 categories of colors:
 *
 * 1. NEW CUSTOM COLORS (neutral, turquoise, blueitalia, purple):
 *    - They do not exist in MUI by default
 *    - They can be fully defined inside Palette and PaletteOptions
 *    - Each one has its own specific interface (e.g. NeutralPaletteColor)
 *
 * 2. STANDARD MUI COLORS (info, success, warning, error):
 *    - They already exist in MUI as PaletteColor
 *    - They cannot be overridden directly in Palette (this would cause TypeScript errors)
 *    - To add custom properties (700, 500, 400, etc.) we need to extend
 *      PaletteColor and SimplePaletteColorOptions
 *
 * The global extensions below add all possible numeric properties
 * as optional fields. This allows each color to use only the properties it needs.
 */

// TODO - Spostare queste dichiarazioni in un file separato dedicato?
declare module '@mui/material/styles' {
  /**
   * Definisce la struttura di un singolo colore nella palette finale
   * Es: Quando viene usato il tema nei vari componenti: theme.palette.neutral
   */
  interface PaletteColor {
    black?: string;
    white?: string;
    850: string;
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
    100: string;
    50?: string;
  }

  /**
   * SimplePaletteColorOptions: definisce la struttura di un colore quando si crea il tema
   * Es: createTheme({ palette: { neutral: {...}, error: {...} } })
   */
  interface SimplePaletteColorOptions {
    black?: string;
    white?: string;
    850?: string;
    700?: string;
    650?: string;
    600?: string;
    500?: string;
    450?: string;
    400?: string;
    300?: string;
    250?: string;
    200?: string;
    100?: string;
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
    neutral?: NeutralPaletteColor;
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

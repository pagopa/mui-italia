type BreadcrumbsVariant = 'responsive' | 'mobileOnly';

export interface MIBreadcrumbsProps {
  /**
   * Array di elementi delle breadcrumbs.
   * Ogni elemento rappresenta un elemento della gerarchia di navigazione.
   * L'ordine degli elementi è importante e deve rispecchiare l'ordine gerarchico di navigazione.
   * Esempio: Home - Elenco Ricevute - Dettaglio Ricevuta
   */
  elements?: MIBreadcrumbProps[];
  /**
   * Etichetta del bottone "Indietro".
   * Visibile sempre nella variante 'mobileOnly',
   * altrimenti visibile per risoluzioni mobile.
   * @default "Indietro"
   * - utilizzare string vuota per nascondere l'etichetta e mostrare solo l'icona di back
   * - oppure è possibile valorizzare la prop per gestire le traduzioni 
   */
  backButtonLabel?: string;
  /**
   * Variante del breadcrumb
   * @default "responsive"
   * - "responsive": breadcrumb responsive per mobile e desktop
   * - "mobileOnly": breadcrumb solo per mobile
   */
  variant?: BreadcrumbsVariant;
}

export interface MIBreadcrumbProps {
  label: string;
  showBackButton?: boolean;
  onClick?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
  href?: string;
}
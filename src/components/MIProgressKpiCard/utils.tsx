interface MIProgressKpiCardData {
  label?: string;
  numerator: number;
  variant?: 'small' | 'regular';
}

interface MIProgressKpiCardProps {
  title: string;
  icon?: React.ReactNode;
  tooltipText?: string;
  tooltipAriaLabel?: string;
  denominator: number;
  bars: Array<MIProgressKpiCardData>;
  localeFormat: string;
}

type MIProgressKpiCardBarProps = { headerLabelId: string } & Pick<MIProgressKpiCardProps, 'denominator' | 'localeFormat'> & Pick<MIProgressKpiCardData, 'numerator' | 'variant' | 'label'>;

interface BorderLinearProgressProps {
  $sizeVariant: NonNullable<MIProgressKpiCardData['variant']>;
  $isFull: boolean;
}

const percentageFormatter = (localeFormat: string) => new Intl.NumberFormat(localeFormat, {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const ratioFormatter = (localeFormat: string) => new Intl.NumberFormat(localeFormat, { useGrouping: true });

export type { MIProgressKpiCardData, MIProgressKpiCardProps, MIProgressKpiCardBarProps, BorderLinearProgressProps };
export { percentageFormatter, ratioFormatter };
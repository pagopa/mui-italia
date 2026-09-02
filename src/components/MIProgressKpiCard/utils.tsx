interface MIProgressKpiCardData {
  label?: string;
  numerator: number;
  variant?: 'small' | 'regular';
}

interface MIProgressKpiCardProps {
  title: string;
  icon?: React.ReactNode;
  tooltipText?: string;
  denominator: number;
  bars: MIProgressKpiCardData[];
}

type MIProgressKpiCardBarProps = Pick<MIProgressKpiCardProps, 'denominator'> & Pick<MIProgressKpiCardData, 'numerator' | 'variant' | 'label'>;

interface BorderLinearProgressProps {
  $sizeVariant: NonNullable<MIProgressKpiCardData['variant']>;
  $isFull: boolean;
}

const percentageFormatter = new Intl.NumberFormat('it-IT', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const ratioFormatter = new Intl.NumberFormat('it-IT', { useGrouping: true });

export type { MIProgressKpiCardData, MIProgressKpiCardProps, MIProgressKpiCardBarProps, BorderLinearProgressProps };
export { percentageFormatter, ratioFormatter };
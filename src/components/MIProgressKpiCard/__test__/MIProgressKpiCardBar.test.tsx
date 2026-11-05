import { linearProgressClasses } from '@mui/material/LinearProgress';
import { render, screen } from '../../../test-utils';
import MIProgressKpiCardBar from '../MIProgressKpiCardBar';

describe('MIProgressKpiCardBar', () => {
  it('renders the label and links it to the progress bar through aria-labelledby', () => {
    render(<MIProgressKpiCardBar index={2} numerator={3} denominator={10} label="Approvate" />);

    const label = screen.getByText('Approvate');
    expect(label).toHaveAttribute('id', 'mi-progress-kpi-card-bar-label-2');
    expect(screen.getByRole('progressbar', { name: 'Approvate' })).toBeInTheDocument();
  });

  it('does not render a label when it is not provided', () => {
    const { container } = render(<MIProgressKpiCardBar numerator={3} denominator={10} />);

    expect(container.querySelector('[id^="mi-progress-kpi-card-bar-label-"]')).not.toBeInTheDocument();
  });

  it('defaults the label id index to 0', () => {
    render(<MIProgressKpiCardBar numerator={3} denominator={10} label="Approvate" />);

    expect(screen.getByText('Approvate')).toHaveAttribute('id', 'mi-progress-kpi-card-bar-label-0');
  });

  it('renders numerator and denominator formatted with it-IT grouping', () => {
    render(<MIProgressKpiCardBar numerator={1234} denominator={5000} />);

    expect(screen.getByText('1.234')).toBeInTheDocument();
    expect(screen.getByText('5.000')).toBeInTheDocument();
  });

  it('sets the progress value to the ratio of numerator over denominator', () => {
    render(<MIProgressKpiCardBar numerator={3} denominator={10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '30');
  });

  it('caps the progress value at 100 when numerator exceeds denominator', () => {
    render(<MIProgressKpiCardBar numerator={15} denominator={10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('uses a progress value of 0 when denominator is zero', () => {
    render(<MIProgressKpiCardBar numerator={5} denominator={0} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('uses a progress value of 0 when denominator is negative', () => {
    render(<MIProgressKpiCardBar numerator={5} denominator={-10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('shows the completed check icon only when numerator reaches denominator', () => {
    const { rerender } = render(<MIProgressKpiCardBar numerator={9} denominator={10} />);
    expect(screen.queryByTestId('CheckCircleIcon')).not.toBeInTheDocument();

    rerender(<MIProgressKpiCardBar numerator={10} denominator={10} />);
    expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
  });

  it('does not show the completed check icon when denominator is zero', () => {
    render(<MIProgressKpiCardBar numerator={0} denominator={0} />);

    expect(screen.queryByTestId('CheckCircleIcon')).not.toBeInTheDocument();
  });

  it('uses a thinner bar for the small variant', () => {
    render(<MIProgressKpiCardBar numerator={3} denominator={10} variant="small" />);

    expect(screen.getByRole('progressbar')).toHaveStyle({ height: '8px' });
  });

  it('uses a thicker bar for the regular variant by default', () => {
    render(<MIProgressKpiCardBar numerator={3} denominator={10} />);

    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveStyle({ height: '16px' });
    expect(progress.querySelector(`.${linearProgressClasses.bar}`)).toBeInTheDocument();
  });
});

import { linearProgressClasses } from '@mui/material/LinearProgress';
import { render, screen } from '../../../test-utils';
import MIProgressKpiCardBar from '../MIProgressKpiCardBar';

const defaultProps = { headerLabelId: 'kpi-heading', localeFormat: 'it-IT' };

describe('MIProgressKpiCardBar', () => {
  it('renders the label and links it to the progress bar through aria-labelledby', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={3} denominator={10} label="Approvate" />);

    const label = screen.getByText('Approvate');
    expect(label.id).not.toBe('');
    expect(screen.getByRole('progressbar', { name: 'Approvate' })).toHaveAttribute('aria-labelledby', label.id);
  });

  it.each([undefined, ''])('uses the heading as its accessible name when label is %s', (label) => {
    render(
      <>
        <h2 id={defaultProps.headerLabelId}>Applications</h2>
        <MIProgressKpiCardBar {...defaultProps} numerator={3} denominator={10} label={label} />
      </>
    );

    expect(screen.getByRole('progressbar', { name: 'Applications' })).toHaveAttribute(
      'aria-labelledby', defaultProps.headerLabelId
    );
    expect(screen.getByText('Applications').parentElement?.querySelectorAll('[id]')).toHaveLength(1);
  });

  it('keeps the label id stable when rerendered and switches to the heading when the label is removed', () => {
    const { rerender } = render(
      <MIProgressKpiCardBar {...defaultProps} numerator={3} denominator={10} label="Approvate" />
    );
    const labelId = screen.getByText('Approvate').id;

    rerender(<MIProgressKpiCardBar {...defaultProps} numerator={4} denominator={10} label="In attesa" />);

    expect(screen.getByText('In attesa')).toHaveAttribute('id', labelId);
    expect(screen.getByRole('progressbar', { name: 'In attesa' })).toHaveAttribute('aria-labelledby', labelId);

    rerender(<MIProgressKpiCardBar {...defaultProps} numerator={4} denominator={10} />);

    expect(screen.queryByText('In attesa')).not.toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-labelledby', defaultProps.headerLabelId);
  });

  it.each([
    { localeFormat: 'it-IT', numerator: '1.234', denominator: '5.000' },
    { localeFormat: 'en-US', numerator: '1,234', denominator: '5,000' },
  ])('formats numerator and denominator using $localeFormat', ({ localeFormat, numerator, denominator }) => {
    render(<MIProgressKpiCardBar {...defaultProps} localeFormat={localeFormat} numerator={1234} denominator={5000} />);

    expect(screen.getByText(numerator)).toBeInTheDocument();
    expect(screen.getByText(denominator)).toBeInTheDocument();
  });

  it('sets the progress value to the ratio of numerator over denominator', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={3} denominator={10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '30');
  });

  it('caps the progress value at 100 when numerator exceeds denominator', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={15} denominator={10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('uses a progress value of 0 when denominator is zero', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={5} denominator={0} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('uses a progress value of 0 when denominator is negative', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={5} denominator={-10} />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('shows the completed check icon only when numerator reaches denominator', () => {
    const { rerender } = render(<MIProgressKpiCardBar {...defaultProps} numerator={9} denominator={10} />);
    expect(screen.queryByTestId('CheckCircleIcon')).not.toBeInTheDocument();

    rerender(<MIProgressKpiCardBar {...defaultProps} numerator={10} denominator={10} />);
    expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
  });

  it('does not show the completed check icon when denominator is zero', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={0} denominator={0} />);

    expect(screen.queryByTestId('CheckCircleIcon')).not.toBeInTheDocument();
  });

  it('uses a thinner bar for the small variant', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={3} denominator={10} variant="small" />);

    expect(screen.getByRole('progressbar')).toHaveStyle({ height: '8px' });
  });

  it('uses a thicker bar for the regular variant by default', () => {
    render(<MIProgressKpiCardBar {...defaultProps} numerator={3} denominator={10} />);

    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveStyle({ height: '16px' });
    expect(progress.querySelector(`.${linearProgressClasses.bar}`)).toBeInTheDocument();
  });
});

import { render, screen } from '../../../test-utils';
import MIProgressKpiCardPercentage from '../MIProgressKpiCardPercentage';

describe('MIProgressKpiCardPercentage', () => {
  it('renders an integer percentage followed by the % sign', () => {
    render(<MIProgressKpiCardPercentage percentage={50} localeFormat="it-IT" />);

    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('renders zero as 0%', () => {
    render(<MIProgressKpiCardPercentage percentage={0} localeFormat="it-IT" />);

    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it.each([
    { localeFormat: 'it-IT', expected: '33,3%' },
    { localeFormat: 'en-US', expected: '33.3%' },
  ])('formats decimals with at most one fraction digit using $localeFormat', ({ localeFormat, expected }) => {
    render(<MIProgressKpiCardPercentage percentage={33.333} localeFormat={localeFormat} />);

    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('renders values above 100 without clamping them', () => {
    render(<MIProgressKpiCardPercentage percentage={150} localeFormat="it-IT" />);

    expect(screen.getByText('150%')).toBeInTheDocument();
  });
});

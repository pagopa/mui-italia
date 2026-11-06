import { render, screen } from '../../../test-utils';
import MIProgressKpiCardPercentage from '../MIProgressKpiCardPercentage';

describe('MIProgressKpiCardPercentage', () => {
  it('renders an integer percentage followed by the % sign', () => {
    render(<MIProgressKpiCardPercentage percentage={50} />);

    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('renders zero as 0%', () => {
    render(<MIProgressKpiCardPercentage percentage={0} />);

    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('formats decimals with a comma and at most one fraction digit (it-IT)', () => {
    render(<MIProgressKpiCardPercentage percentage={33.333} />);

    expect(screen.getByText('33,3%')).toBeInTheDocument();
  });

  it('renders values above 100 without clamping them', () => {
    render(<MIProgressKpiCardPercentage percentage={150} />);

    expect(screen.getByText('150%')).toBeInTheDocument();
  });
});

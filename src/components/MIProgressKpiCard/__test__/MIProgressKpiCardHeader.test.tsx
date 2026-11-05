import { fireEvent, render, screen } from '../../../test-utils';
import MIProgressKpiCardHeader from '../MIProgressKpiCardHeader';

describe('MIProgressKpiCardHeader', () => {
  it('renders the title', () => {
    render(<MIProgressKpiCardHeader title="Pratiche completate" />);

    expect(screen.getByText('Pratiche completate')).toBeInTheDocument();
  });

  it('renders the icon when provided', () => {
    render(
      <MIProgressKpiCardHeader title="Pratiche" icon={<span data-testid="kpi-icon" />} />
    );

    expect(screen.getByTestId('kpi-icon')).toBeInTheDocument();
  });

  it('does not render the tooltip button when tooltipText is not provided', () => {
    render(<MIProgressKpiCardHeader title="Pratiche" />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('uses tooltipText as accessible name when tooltipAriaLabel is not provided', () => {
    render(<MIProgressKpiCardHeader title="Pratiche" tooltipText="Maggiori informazioni" />);

    expect(screen.getByRole('button', { name: 'Maggiori informazioni' })).toBeInTheDocument();
  });

  it('uses tooltipAriaLabel as accessible name when provided', () => {
    render(
      <MIProgressKpiCardHeader
        title="Pratiche"
        tooltipText="Maggiori informazioni"
        tooltipAriaLabel="Apri dettagli sulle pratiche"
      />
    );

    const button = screen.getByRole('button', { name: 'Apri dettagli sulle pratiche' });
    expect(button).toHaveAttribute('type', 'button');
    expect(screen.queryByRole('button', { name: 'Maggiori informazioni' })).not.toBeInTheDocument();
  });

  it('shows the tooltip text when the tooltip button is hovered', async () => {
    render(<MIProgressKpiCardHeader title="Pratiche" tooltipText="Maggiori informazioni" />);

    fireEvent.mouseOver(screen.getByRole('button', { name: 'Maggiori informazioni' }));

    expect(await screen.findByRole('tooltip')).toHaveTextContent('Maggiori informazioni');
  });
});

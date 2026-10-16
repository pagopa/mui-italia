import { fireEvent, render, screen } from '../../../test-utils';

import MIChip from '../MIChip';

describe('MIChip', () => {
  it('renders the label', () => {
    render(<MIChip label="Consegnata" />);

    expect(screen.getByText('Consegnata')).toBeInTheDocument();
  });

  it('renders the neutral filled chip with the grey background', () => {
    const { container } = render(<MIChip label="Neutral" color="neutral" />);
    const chip = container.querySelector('.MuiChip-root');

    expect(chip).toHaveClass('MuiChip-filled');
    expect(chip).toHaveStyle({ backgroundColor: '#E8EBF1', color: '#0E0F13' });
  });

  it('renders the neutral outlined chip without delete action', () => {
    const { container } = render(<MIChip label="Neutral" color="neutral" variant="outlined" />);
    const chip = container.querySelector('.MuiChip-root');

    expect(chip).toHaveClass('MuiChip-outlined');
    expect(chip).toHaveStyle({ borderColor: '#0E0F13', color: '#0E0F13' });
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders the delete action in deletable mode', () => {
    const handleDelete = vi.fn();
    render(<MIChip label="Filtro" onDelete={handleDelete} aria-label="Rimuovi filtro" />);

    fireEvent.click(screen.getByRole('button', { name: 'Rimuovi filtro' }));

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});

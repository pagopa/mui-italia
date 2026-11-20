import { createRef, useState } from 'react';

import { fireEvent, render, screen } from '../../../test-utils';
import { MIPaginationSelect } from '../index';

const options = [
  { value: 10, label: '10' },
  { value: 50, label: '50', disabled: true },
  { value: 20, label: '20' },
];

describe('MIPaginationSelect', () => {
  it('defaults to Italian and updates the label and accessible name when locale changes', () => {
    const { rerender } = render(<MIPaginationSelect options={options} value={20} />);
    expect(screen.getByText('Elementi per pagina')).toBeVisible();
    expect(screen.getByRole('combobox', { name: 'Elementi per pagina' })).toHaveTextContent('20');

    rerender(<MIPaginationSelect locale="en" options={options} value={20} />);
    expect(screen.getByText('Rows perpage')).toBeVisible();
    expect(screen.getByRole('combobox', { name: 'Rows perpage' })).toHaveTextContent('20');
    expect(screen.queryByText('Elementi per pagina')).not.toBeInTheDocument();
  });

  it('uses the localized default instead of an empty label', () => {
    render(<MIPaginationSelect locale="en" label="" options={options} value={10} />);
    expect(screen.getByRole('combobox', { name: 'Rows perpage' })).toHaveTextContent('10');
  });

  it('associates the visible label without rendering a floating label or outline notch', () => {
    const { container } = render(
      <MIPaginationSelect locale="en" label="Risultati per pagina" options={options} value={20} />
    );

    const select = screen.getByRole('combobox', { name: 'Risultati per pagina' });
    const label = screen.getByText('Risultati per pagina');
    expect(select).toHaveTextContent('20');
    expect(select).toHaveAttribute('aria-labelledby', expect.stringContaining(label.id));
    expect(container.querySelector('.MuiInputLabel-root')).not.toBeInTheDocument();
    expect(container.querySelector('legend')).not.toHaveTextContent('Risultati per pagina');
  });

  it('updates the controlled value from the keyboard and skips disabled options', () => {
    const onChange = vi.fn();
    function ControlledSelect() {
      const [value, setValue] = useState<unknown>(10);
      return (
        <MIPaginationSelect
          label="Rows per page"
          options={options}
          value={value}
          onChange={(event, child) => {
            setValue(event.target.value);
            onChange(event, child);
          }}
        />
      );
    }

    render(<ControlledSelect />);
    const select = screen.getByRole('combobox', { name: 'Rows per page' });
    expect(select).toHaveTextContent('10');
    fireEvent.keyDown(select, { key: 'ArrowDown' });
    expect(screen.getByRole('option', { name: '10' })).toHaveFocus();
    expect(screen.getByRole('option', { name: '50' })).toHaveAttribute('aria-disabled', 'true');
    fireEvent.keyDown(screen.getByRole('option', { name: '10' }), { key: 'ArrowDown' });
    const nextOption = screen.getByRole('option', { name: '20' });
    expect(nextOption).toHaveFocus();
    fireEvent.keyDown(nextOption, { key: 'Enter' });
    fireEvent.keyUp(nextOption, { key: 'Enter' });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe(20);
    expect(select).toHaveTextContent('20');
  });

  it('keeps label IDs unique across instances', () => {
    render(
      <>
        <MIPaginationSelect label="First" options={options} value={10} />
        <MIPaginationSelect label="Second" options={options} value={20} />
      </>
    );
    expect(screen.getByText('First').id).not.toBe(screen.getByText('Second').id);
    expect(screen.getByRole('combobox', { name: 'First' })).toHaveAttribute(
      'aria-labelledby',
      expect.stringContaining(screen.getByText('First').id)
    );
    expect(screen.getByRole('combobox', { name: 'Second' })).toHaveAttribute(
      'aria-labelledby',
      expect.stringContaining(screen.getByText('Second').id)
    );
  });

  it('forwards the ref to the select', () => {
    const ref = createRef<HTMLDivElement>();
    render(<MIPaginationSelect ref={ref} label="Page size" options={options} value={10} />);
    expect(ref.current).toBe(screen.getByRole('combobox').closest('.MuiInputBase-root'));
  });
});

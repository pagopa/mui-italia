import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { createRef } from 'react';

import { fireEvent, render, screen, within } from '../../../test-utils';

import MISelect from '../MISelect';

const options = [
  <MenuItem key="1" value="1">
    option-1
  </MenuItem>,
  <MenuItem key="2" value="2">
    option-2
  </MenuItem>,
  <MenuItem key="3" value="3">
    option-3
  </MenuItem>,
];

const openSelect = () => fireEvent.mouseDown(screen.getByRole('combobox'));

describe('MISelect', () => {
  it('renders the selected value', () => {
    render(
      <MISelect value="2" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('option-2');
  });

  it('renders the label when used inside a FormControl', () => {
    render(
      <FormControl>
        <InputLabel id="select-label">label</InputLabel>
        <MISelect labelId="select-label" label="label" value="" onChange={vi.fn()}>
          {options}
        </MISelect>
      </FormControl>
    );

    expect(screen.getByRole('combobox', { name: 'label' })).toBeInTheDocument();
  });

  it('renders the KeyboardArrowDown icon', () => {
    render(
      <MISelect value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByTestId('KeyboardArrowDownIcon')).toBeInTheDocument();
  });

  it('opens the menu and shows the options', () => {
    render(
      <MISelect value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    openSelect();

    const listbox = screen.getByRole('listbox');
    expect(within(listbox).getAllByRole('option')).toHaveLength(3);
    expect(within(listbox).getByRole('option', { name: 'option-1' })).toBeInTheDocument();
  });

  it('updates aria-expanded when the menu opens', () => {
    render(
      <MISelect value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-expanded', 'false');

    openSelect();

    expect(combobox).toHaveAttribute('aria-expanded', 'true');
  });

  it.each(['ArrowDown', 'ArrowUp', 'Enter', ' '])('opens the menu with the "%s" key', (key) => {
    const onOpen = vi.fn();
    render(
      <MISelect value="" onChange={vi.fn()} onOpen={onOpen}>
        {options}
      </MISelect>
    );

    fireEvent.keyDown(screen.getByRole('combobox'), { key });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('renders the menu open when controlled with the open prop', () => {
    render(
      <MISelect open value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('does not open when readOnly', () => {
    const onOpen = vi.fn();
    render(
      <MISelect readOnly value="1" onChange={vi.fn()} onOpen={onOpen}>
        {options}
      </MISelect>
    );

    openSelect();
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' });

    expect(onOpen).not.toHaveBeenCalled();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('calls onChange with the selected value', () => {
    const onChange = vi.fn();
    render(
      <MISelect value="" onChange={onChange}>
        {options}
      </MISelect>
    );

    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'option-3' }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('3');
  });

  it('calls onOpen and onClose', () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    render(
      <MISelect value="" onChange={vi.fn()} onOpen={onOpen} onClose={onClose}>
        {options}
      </MISelect>
    );

    openSelect();
    expect(onOpen).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('option', { name: 'option-1' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('supports multiple selection', () => {
    const onChange = vi.fn();
    render(
      <MISelect multiple value={['1']} onChange={onChange}>
        {options}
      </MISelect>
    );

    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'option-2' }));

    expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true');
    expect(onChange.mock.calls[0][0].target.value).toEqual(['1', '2']);
  });

  it('does not open when disabled', () => {
    const onOpen = vi.fn();
    render(
      <MISelect disabled value="" onChange={vi.fn()} onOpen={onOpen}>
        {options}
      </MISelect>
    );

    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-disabled', 'true');

    openSelect();

    expect(onOpen).not.toHaveBeenCalled();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('applies the error state', () => {
    const { container } = render(
      <MISelect error value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(container.querySelector('.MuiInputBase-root')).toHaveClass('Mui-error');
    expect(container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards the name and required props to the native input', () => {
    const { container } = render(
      <MISelect name="my-select" required value="1" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('name', 'my-select');
    expect(input).toHaveValue('1');
    expect(input).toBeRequired();
  });

  it('forwards the ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <MISelect ref={ref} value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('MuiInputBase-root');
  });

  it('has the correct displayName', () => {
    expect(MISelect.displayName).toBe('MISelect');
  });
});

import { createRef } from 'react';

import { fireEvent, render, screen, within } from '../../../test-utils';

import MISelect from '../MISelect';
import MISelectItem from '../MISelectItem';

const options = [
  <MISelectItem key="1" value="1" startIcon={<span data-testid="option-icon" />}>
    option-1
  </MISelectItem>,
  <MISelectItem key="2" value="2">
    option-2
  </MISelectItem>,
  <MISelectItem key="3" value="3">
    option-3
  </MISelectItem>,
];

const openSelect = () => fireEvent.mouseDown(screen.getByRole('combobox'));

describe('MISelect', () => {
  it('renders the selected value', () => {
    render(
      <MISelect label="Select" value="2" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('option-2');
  });

  it('renders and associates the label when provided as a prop', () => {
    render(
      <MISelect label="label" value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByRole('combobox', { name: 'label' })).toBeInTheDocument();
    expect(screen.getByLabelText('label')).toBeInTheDocument();
  });

  it('renders the KeyboardArrowDown icon', () => {
    render(
      <MISelect label="Select" value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByTestId('KeyboardArrowDownIcon')).toBeInTheDocument();
  });

  it('opens the menu and shows the options', () => {
    render(
      <MISelect label="Select" value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    openSelect();

    const listbox = screen.getByRole('listbox');
    expect(within(listbox).getAllByRole('option')).toHaveLength(3);
    expect(within(listbox).getByRole('option', { name: 'option-1' })).toBeInTheDocument();
  });

  it('supports an optional start icon on select items', () => {
    render(
      <MISelect label="Select" open value="1" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    const listbox = screen.getByRole('listbox');
    const firstOption = within(listbox).getByRole('option', { name: 'option-1' });
    const secondOption = within(listbox).getByRole('option', { name: 'option-2' });

    expect(within(firstOption).getByTestId('option-icon')).toBeInTheDocument();
    expect(within(secondOption).queryByTestId('option-icon')).not.toBeInTheDocument();
  });

  it('updates aria-expanded when the menu opens', () => {
    render(
      <MISelect label="Select" value="" onChange={vi.fn()}>
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
      <MISelect label="Select" value="" onChange={vi.fn()} onOpen={onOpen}>
        {options}
      </MISelect>
    );

    fireEvent.keyDown(screen.getByRole('combobox'), { key });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('renders the menu open when controlled with the open prop', () => {
    render(
      <MISelect label="Select" open value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('does not open when readOnly', () => {
    const onOpen = vi.fn();
    render(
      <MISelect label="Select" readOnly value="1" onChange={vi.fn()} onOpen={onOpen}>
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
      <MISelect label="Select" value="" onChange={onChange}>
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
      <MISelect label="Select" value="" onChange={vi.fn()} onOpen={onOpen} onClose={onClose}>
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
      <MISelect label="Select" multiple value={['1', '2']} onChange={onChange}>
        {options}
      </MISelect>
    );

    const combobox = screen.getByRole('combobox');
    const getDisplayedChip = (label: string) =>
      within(combobox).queryByText(label)?.closest('.MuiChip-root') ?? null;

    expect(getDisplayedChip('option-1')).toBeInTheDocument();
    expect(getDisplayedChip('option-2')).toBeInTheDocument();

    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'option-3' }));

    expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true');
    expect(onChange.mock.calls[0][0].target.value).toEqual(['1', '2', '3']);
    expect(getDisplayedChip('option-1')).toBeInTheDocument();
    expect(getDisplayedChip('option-2')).toBeInTheDocument();
  });

  it('removes a selected chip and emits the updated value', () => {
    const onChange = vi.fn();
    render(
      <MISelect
        label="Select"
        multiple
        name="multi-select"
        onChange={onChange}
        getChipDeleteAriaLabel={(label) => `Remove ${label}`}
      >
        {options}
      </MISelect>
    );

    const combobox = screen.getByRole('combobox');
    const getDisplayedChip = (label: string) =>
      within(combobox).queryByText(label)?.closest('.MuiChip-root') ?? null;

    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'option-1' }));
    fireEvent.click(screen.getByRole('option', { name: 'option-2' }));

    expect(getDisplayedChip('option-1')).toBeInTheDocument();
    expect(getDisplayedChip('option-2')).toBeInTheDocument();

    const deleteIcon = within(combobox).getAllByTestId('CloseRoundedIcon')[0];
    expect(deleteIcon).toHaveAttribute('aria-label', 'Remove option-1');
    fireEvent.click(deleteIcon);

    expect(onChange.mock.calls[2][0].target.value).toEqual(['2']);
    expect(onChange.mock.calls[2][0].target.name).toBe('multi-select');
    expect(getDisplayedChip('option-1')).not.toBeInTheDocument();
    expect(getDisplayedChip('option-2')).toBeInTheDocument();
  });

  it('supports a custom renderValue prop', () => {
    render(
      <MISelect
        label="Select"
        multiple
        value={['1', '2']}
        onChange={vi.fn()}
        renderValue={(selected) => `${(selected as Array<string>).length} selected`}
      >
        {options}
      </MISelect>
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('2 selected');
  });

  it('does not open when disabled', () => {
    const onOpen = vi.fn();
    render(
      <MISelect label="Select" disabled value="" onChange={vi.fn()} onOpen={onOpen}>
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
      <MISelect label="Select" error value="" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    expect(container.querySelector('.MuiInputBase-root')).toHaveClass('Mui-error');
    expect(container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards the name and required props to the native input', () => {
    const { container } = render(
      <MISelect label="Required field" name="my-select" required value="1" onChange={vi.fn()}>
        {options}
      </MISelect>
    );

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('name', 'my-select');
    expect(input).toHaveValue('1');
    expect(input).toBeRequired();
    expect(screen.getByText('Required field').closest('label')).toHaveClass('Mui-required');
  });

  it('forwards the ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <MISelect label="Select" ref={ref} value="" onChange={vi.fn()}>
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

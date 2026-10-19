import { createRef } from 'react';
import { MenuItem } from '@mui/material';

import { fireEvent, render, screen, within } from '../../../test-utils';

import MISelect, { type MISelectOption } from '../MISelect';

const options: Array<MISelectOption> = [
  { value: '1', label: 'option-1', startIcon: <span data-testid="option-icon" /> },
  { value: '2', label: 'option-2' },
  { value: '3', label: 'option-3' },
];

const openSelect = () => fireEvent.mouseDown(screen.getByRole('combobox'));

describe('MISelect', () => {
  it('renders helper text inside the form control and associates it with the select', () => {
    const { container } = render(
      <MISelect label="Select" options={options} value="" helperText="Choose your organization" />
    );

    const helper = screen.getByText('Choose your organization');
    expect(helper).toHaveClass('MuiFormHelperText-root');
    expect(helper.closest('.MuiFormControl-root')).toBe(
      screen.getByRole('combobox').closest('.MuiFormControl-root')
    );
    expect(screen.getByRole('combobox')).toHaveAccessibleDescription('Choose your organization');
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-describedby', helper.id);
    expect(container.querySelector('input')).not.toHaveAttribute('helperText');
  });

  it.each([undefined, null, false, ''])('omits empty helper text (%s)', (helperText) => {
    const { container } = render(
      <MISelect label="Select" options={options} value="" helperText={helperText} />
    );

    expect(container.querySelector('.MuiFormHelperText-root')).not.toBeInTheDocument();
    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-describedby');
  });

  it('renders numeric and rich helper content', () => {
    const { rerender } = render(
      <MISelect label="Select" options={options} value="" helperText={0} />
    );
    expect(screen.getByRole('combobox')).toHaveAccessibleDescription('0');

    rerender(
      <MISelect
        label="Select"
        options={options}
        value=""
        helperText={
          <span>
            <strong>Custom guidance</strong> for this field
          </span>
        }
      />
    );
    expect(screen.getByRole('combobox')).toHaveAccessibleDescription(
      'Custom guidance for this field'
    );
  });

  it('inherits helper error and disabled states from the form control', () => {
    const { rerender } = render(
      <MISelect
        label="Select"
        options={options}
        value=""
        helperText="Selection unavailable"
        error
        disabled
      />
    );
    expect(screen.getByText('Selection unavailable')).toHaveClass('Mui-error', 'Mui-disabled');

    rerender(<MISelect label="Select" options={options} value="" helperText="Select an option" />);
    expect(screen.getByText('Select an option')).not.toHaveClass('Mui-error');
    expect(screen.getByText('Select an option')).not.toHaveClass('Mui-disabled');
  });

  it('preserves external descriptions from select and input props', () => {
    render(
      <>
        <p id="external-description">External guidance</p>
        <p id="input-description">Input guidance</p>
        <MISelect
          label="Select"
          options={options}
          value=""
          aria-describedby="external-description"
          inputProps={{ 'aria-describedby': 'input-description', 'data-testid': 'native-input' }}
          helperText="Additional guidance"
        />
      </>
    );
    const helperId = screen.getByText('Additional guidance').id;
    expect(screen.getByRole('combobox')).toHaveAccessibleDescription(
      'External guidance Input guidance Additional guidance'
    );
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-describedby',
      `external-description input-description ${helperId}`
    );
    expect(screen.getByTestId('native-input')).toBeInTheDocument();
  });

  it('keeps helper IDs unique and stable and removes the association when content disappears', () => {
    const { rerender } = render(
      <>
        <MISelect label="First" options={options} value="" helperText="First guidance" />
        <MISelect label="Second" options={options} value="" helperText="Second guidance" />
      </>
    );
    const firstId = screen.getByText('First guidance').id;
    expect(firstId).not.toBe(screen.getByText('Second guidance').id);

    rerender(
      <>
        <MISelect label="First" options={options} value="" helperText="Updated guidance" />
        <MISelect label="Second" options={options} value="" helperText="Second guidance" />
      </>
    );
    expect(screen.getByText('Updated guidance')).toHaveAttribute('id', firstId);
    expect(screen.getByRole('combobox', { name: 'First' })).toHaveAccessibleDescription(
      'Updated guidance'
    );

    rerender(
      <>
        <MISelect label="First" options={options} value="" />
        <MISelect label="Second" options={options} value="" helperText="Second guidance" />
      </>
    );
    expect(screen.queryByText('Updated guidance')).not.toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'First' })).not.toHaveAttribute('aria-describedby');
  });

  it('renders custom option components and selects their values from the keyboard', () => {
    const onChange = vi.fn();
    render(
      <MISelect
        label="Custom select"
        options={options}
        value=""
        onChange={onChange}
        renderOptions={(option) => (
          <MenuItem value={option.value} disabled={option.disabled}>
            <span>{option.label}</span>
            <span> - custom content</span>
          </MenuItem>
        )}
      />
    );

    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' });
    const firstOption = screen.getByRole('option', { name: 'option-1 - custom content' });
    expect(firstOption).toHaveFocus();
    fireEvent.keyDown(firstOption, { key: 'ArrowDown' });
    const secondOption = screen.getByRole('option', { name: 'option-2 - custom content' });
    expect(secondOption).toHaveFocus();
    fireEvent.keyDown(secondOption, { key: 'Enter' });
    fireEvent.keyUp(secondOption, { key: 'Enter' });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('2');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it.each([false, true])('preserves disabled options with custom rendering set to %s', (custom) => {
    const onChange = vi.fn();
    render(
      <MISelect
        label="Select"
        options={[
          options[0],
          { value: 'disabled', label: 'Unavailable', disabled: true },
          ...options.slice(1),
        ]}
        value=""
        onChange={onChange}
        renderOptions={
          custom
            ? (option) => (
                <MenuItem value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              )
            : undefined
        }
      />
    );

    openSelect();
    const disabledOption = screen.getByRole('option', { name: 'Unavailable' });
    expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByRole('option', { name: 'option-1' })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole('option', { name: 'option-1' }), { key: 'ArrowDown' });
    expect(screen.getByRole('option', { name: 'option-2' })).toHaveFocus();
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('option', { name: 'option-2' }));
    expect(onChange.mock.calls[0][0].target.value).toBe('2');
  });

  it('uses option labels for chips independently of custom markup and removes them', () => {
    const onChange = vi.fn();
    render(
      <MISelect
        label="Select"
        options={options}
        multiple
        onChange={onChange}
        getChipDeleteAriaLabel={(label) => `Remove ${label}`}
        renderOptions={(option) => <MenuItem value={option.value}>Custom: {option.label}</MenuItem>}
      />
    );

    const combobox = screen.getByRole('combobox');
    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'Custom: option-1' }));
    fireEvent.click(screen.getByRole('option', { name: 'Custom: option-2' }));
    expect(combobox).toHaveTextContent('option-1');
    expect(combobox).toHaveTextContent('option-2');
    expect(combobox).not.toHaveTextContent('Custom:');

    const deleteIcon = within(combobox).getAllByTestId('CloseRoundedIcon')[0];
    expect(deleteIcon).toHaveAttribute('aria-label', 'Remove option-1');
    fireEvent.click(deleteIcon);
    expect(onChange.mock.calls[2][0].target.value).toEqual(['2']);
    expect(combobox).not.toHaveTextContent('option-1');
    expect(combobox).toHaveTextContent('option-2');
  });

  it('supports numeric option values', () => {
    const onChange = vi.fn();
    render(
      <MISelect
        label="Items per page"
        options={[
          { value: 10, label: 'Ten items' },
          { value: 20, label: 'Twenty items' },
        ]}
        value={10}
        onChange={onChange}
      />
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('Ten items');
    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'Twenty items' }));
    expect(onChange.mock.calls[0][0].target.value).toBe(20);
  });

  it('uses the option label for the selected value independently of custom option content', () => {
    render(
      <MISelect
        label="Select"
        options={options}
        value="2"
        renderOptions={(option) => <MenuItem value={option.value}>Custom: {option.label}</MenuItem>}
      />
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('option-2');
    expect(screen.getByRole('combobox')).not.toHaveTextContent('Custom:');
  });

  it('preserves MUI string matching for numeric values in single selection', () => {
    render(<MISelect label="Select" options={[{ value: 2, label: 'Two' }]} value="2" />);

    expect(screen.getByRole('combobox')).toHaveTextContent('Two');
  });

  it('allows renderValue to override the label of a single selection', () => {
    render(
      <MISelect
        label="Select"
        options={options}
        value="2"
        renderValue={() => 'Custom selected label'}
      />
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('Custom selected label');
    expect(screen.getByRole('combobox')).not.toHaveTextContent('option-2');
  });

  it('supports an empty options array', () => {
    render(<MISelect label="Empty select" options={[]} value="" />);

    openSelect();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('updates selected chip labels when options change', () => {
    const { rerender } = render(
      <MISelect label="Select" options={options} multiple value={['1']} />
    );
    expect(screen.getByRole('combobox')).toHaveTextContent('option-1');

    rerender(
      <MISelect
        label="Select"
        options={[{ value: '1', label: 'Translated label' }]}
        multiple
        value={['1']}
      />
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('Translated label');
    expect(screen.getByRole('combobox')).not.toHaveTextContent('option-1');
  });

  it('renders the selected value', () => {
    render(<MISelect label="Select" options={options} value="2" onChange={vi.fn()} />);

    expect(screen.getByRole('combobox')).toHaveTextContent('option-2');
  });

  it('renders and associates the label when provided as a prop', () => {
    render(<MISelect label="label" options={options} value="" onChange={vi.fn()} />);

    expect(screen.getByRole('combobox', { name: 'label' })).toBeInTheDocument();
    expect(screen.getByLabelText('label')).toBeInTheDocument();
  });

  it('renders the KeyboardArrowDown icon', () => {
    render(<MISelect label="Select" options={options} value="" onChange={vi.fn()} />);

    expect(screen.getByTestId('KeyboardArrowDownIcon')).toBeInTheDocument();
  });

  it('opens the menu and shows the options', () => {
    render(<MISelect label="Select" options={options} value="" onChange={vi.fn()} />);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    openSelect();

    const listbox = screen.getByRole('listbox');
    expect(within(listbox).getAllByRole('option')).toHaveLength(3);
    expect(within(listbox).getByRole('option', { name: 'option-1' })).toBeInTheDocument();
  });

  it('supports an optional start icon on select items', () => {
    render(<MISelect label="Select" options={options} open value="1" onChange={vi.fn()} />);

    const listbox = screen.getByRole('listbox');
    const firstOption = within(listbox).getByRole('option', { name: 'option-1' });
    const secondOption = within(listbox).getByRole('option', { name: 'option-2' });

    expect(within(firstOption).getByTestId('option-icon')).toBeInTheDocument();
    expect(within(secondOption).queryByTestId('option-icon')).not.toBeInTheDocument();
  });

  it('updates aria-expanded when the menu opens', () => {
    render(<MISelect label="Select" options={options} value="" onChange={vi.fn()} />);

    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-expanded', 'false');

    openSelect();

    expect(combobox).toHaveAttribute('aria-expanded', 'true');
  });

  it.each(['ArrowDown', 'ArrowUp', 'Enter', ' '])('opens the menu with the "%s" key', (key) => {
    const onOpen = vi.fn();
    render(
      <MISelect label="Select" options={options} value="" onChange={vi.fn()} onOpen={onOpen} />
    );

    fireEvent.keyDown(screen.getByRole('combobox'), { key });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('renders the menu open when controlled with the open prop', () => {
    render(<MISelect label="Select" options={options} open value="" onChange={vi.fn()} />);

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('does not open when readOnly', () => {
    const onOpen = vi.fn();
    render(
      <MISelect
        label="Select"
        options={options}
        readOnly
        value="1"
        onChange={vi.fn()}
        onOpen={onOpen}
      />
    );

    openSelect();
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' });

    expect(onOpen).not.toHaveBeenCalled();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('calls onChange with the selected value', () => {
    const onChange = vi.fn();
    render(<MISelect label="Select" options={options} value="" onChange={onChange} />);

    openSelect();
    fireEvent.click(screen.getByRole('option', { name: 'option-3' }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('3');
  });

  it('calls onOpen and onClose', () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    render(
      <MISelect
        label="Select"
        options={options}
        value=""
        onChange={vi.fn()}
        onOpen={onOpen}
        onClose={onClose}
      />
    );

    openSelect();
    expect(onOpen).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('option', { name: 'option-1' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('supports multiple selection', () => {
    const onChange = vi.fn();
    render(
      <MISelect label="Select" options={options} multiple value={['1', '2']} onChange={onChange} />
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
        options={options}
        multiple
        name="multi-select"
        onChange={onChange}
        getChipDeleteAriaLabel={(label) => `Remove ${label}`}
      />
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
        options={options}
        multiple
        value={['1', '2']}
        onChange={vi.fn()}
        renderValue={(selected) => `${(selected as Array<string>).length} selected`}
      />
    );

    expect(screen.getByRole('combobox')).toHaveTextContent('2 selected');
  });

  it('does not open when disabled', () => {
    const onOpen = vi.fn();
    render(
      <MISelect
        label="Select"
        options={options}
        disabled
        value=""
        onChange={vi.fn()}
        onOpen={onOpen}
      />
    );

    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-disabled', 'true');

    openSelect();

    expect(onOpen).not.toHaveBeenCalled();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('applies the error state', () => {
    const { container } = render(
      <MISelect label="Select" options={options} error value="" onChange={vi.fn()} />
    );

    expect(container.querySelector('.MuiInputBase-root')).toHaveClass('Mui-error');
    expect(container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards the name and required props to the native input', () => {
    const { container } = render(
      <MISelect
        label="Required field"
        options={options}
        name="my-select"
        required
        value="1"
        onChange={vi.fn()}
      />
    );

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('name', 'my-select');
    expect(input).toHaveValue('1');
    expect(input).toBeRequired();
    expect(screen.getByText('Required field').closest('label')).toHaveClass('Mui-required');
  });

  it('forwards the ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<MISelect label="Select" options={options} ref={ref} value="" onChange={vi.fn()} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('MuiInputBase-root');
  });

  it('has the correct displayName', () => {
    expect(MISelect.displayName).toBe('MISelect');
  });
});

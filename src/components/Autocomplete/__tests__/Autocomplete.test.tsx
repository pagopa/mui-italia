import { fireEvent, render, screen, within } from '../../../test-utils';
import { Autocomplete } from '../index';

type City = {
  id: number;
  label: string;
};

const cities: Array<City> = [
  { id: 1, label: 'Milano' },
  { id: 2, label: 'Roma' },
  { id: 3, label: 'Torino' },
];

const renderMultipleAutocomplete = (
  props: Partial<React.ComponentProps<typeof Autocomplete<City, true>>> = {}
) =>
  render(
    <Autocomplete<City, true>
      options={cities}
      label="Seleziona città"
      multiple
      isOptionEqualToValue={(option, value) => option.id === value.id}
      {...props}
    />
  );

const openAndSelect = (...labels: Array<string>) => {
  fireEvent.click(screen.getByRole('combobox'));
  labels.forEach((label) => {
    fireEvent.click(screen.getByRole('option', { name: label }));
  });
  fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' });
};

describe('Autocomplete', () => {
  describe('Autocomplete: multiple mode', () => {
    it('shows individual chips by default in multiple mode', () => {
      renderMultipleAutocomplete();

      openAndSelect('Milano', 'Roma');

      const selectedOptionsList = screen.getByRole('list', { name: 'Selected options' });
      expect(within(selectedOptionsList).getByText('Milano')).toBeInTheDocument();
      expect(within(selectedOptionsList).getByText('Roma')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Clear the entered text' })).toBeInTheDocument();
    });

    it('shows only the selection count chip and hides the general clear button in count-only mode', () => {
      renderMultipleAutocomplete({ showSelectionCountOnly: true });

      openAndSelect('Milano', 'Roma');

      expect(screen.getByText('2')).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: 'Clear the entered text' })
      ).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Delete 2' })).toBeInTheDocument();
    });

    it('clears all selections from the count chip delete action in count-only mode', () => {
      const onChange = vi.fn();
      renderMultipleAutocomplete({ onChange, showSelectionCountOnly: true });

      openAndSelect('Milano', 'Roma');

      fireEvent.click(screen.getByRole('button', { name: 'Delete 2' }));

      expect(onChange).toHaveBeenLastCalledWith([]);
      expect(screen.queryByText('2')).not.toBeInTheDocument();
    });

    it('replaces %s with the label of each chip in the default delete aria-label', () => {
      renderMultipleAutocomplete();

      openAndSelect('Milano', 'Roma');

      expect(screen.getByRole('button', { name: 'Delete Milano' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Delete Roma' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /%s/ })).not.toBeInTheDocument();
    });

    it('replaces %s with the label of each chip in a custom delete aria-label', () => {
      renderMultipleAutocomplete({
        slotProps: { selectionChip: { 'aria-label': 'Elimina %s' } },
      });

      openAndSelect('Milano', 'Roma');

      expect(screen.getByRole('button', { name: 'Elimina Milano' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Elimina Roma' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /%s/ })).not.toBeInTheDocument();
    });

    it('removes only the related option when clicking the delete icon of a chip', () => {
      const onChange = vi.fn();
      renderMultipleAutocomplete({ onChange });

      openAndSelect('Milano', 'Roma');

      fireEvent.click(screen.getByRole('button', { name: 'Delete Milano' }));

      expect(onChange).toHaveBeenLastCalledWith([{ id: 2, label: 'Roma' }]);
      const selectedOptionsList = screen.getByRole('list', { name: 'Selected options' });
      expect(within(selectedOptionsList).queryByText('Milano')).not.toBeInTheDocument();
      expect(within(selectedOptionsList).getByText('Roma')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Delete Milano' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Delete Roma' })).toBeInTheDocument();
    });

    it('renders the chips as listitems of the selected options list', () => {
      renderMultipleAutocomplete({
        slotProps: { selectionChip: { 'aria-label': 'Elimina %s' } },
      });

      openAndSelect('Milano', 'Roma');

      const selectedOptionsList = screen.getByRole('list', { name: 'Selected options' });
      const chips = within(selectedOptionsList).getAllByRole('listitem');
      expect(chips).toHaveLength(2);
      expect(chips[0]).toHaveTextContent('Milano');
      expect(chips[1]).toHaveTextContent('Roma');
      chips.forEach((chip) => {
        expect(chip).not.toHaveAttribute('aria-label');
      });
    });
  });
});

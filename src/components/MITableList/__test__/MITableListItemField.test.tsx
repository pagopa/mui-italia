import { render, screen } from '../../../test-utils';

import MITableListItemField from '../MITableListItemField';

describe('MITableListItemField', () => {
  it('renders primitive label and value', () => {
    render(<MITableListItemField label="Codice ID">0000000000</MITableListItemField>);

    expect(screen.getByText('Codice ID')).toBeInTheDocument();
    expect(screen.getByText('0000000000')).toBeInTheDocument();
  });

  it('renders numeric values', () => {
    render(<MITableListItemField label="Comunicazioni">{10}</MITableListItemField>);

    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('renders custom nodes as they are', () => {
    render(
      <MITableListItemField label={<span data-testid="custom-label">Label</span>}>
        <span data-testid="custom-value">Value</span>
      </MITableListItemField>
    );

    expect(screen.getByTestId('custom-label')).toBeInTheDocument();
    expect(screen.getByTestId('custom-value')).toBeInTheDocument();
  });

  it('renders the icon when provided', () => {
    render(
      <MITableListItemField label="Comunicazioni" icon={<span data-testid="field-icon" />}>
        10
      </MITableListItemField>
    );

    expect(screen.getByTestId('field-icon')).toBeInTheDocument();
  });

  it('does not render any icon when it is not provided', () => {
    render(<MITableListItemField label="Comunicazioni">10</MITableListItemField>);

    expect(screen.queryByTestId('field-icon')).not.toBeInTheDocument();
    expect(screen.getByText('Comunicazioni')).toBeInTheDocument();
  });
});

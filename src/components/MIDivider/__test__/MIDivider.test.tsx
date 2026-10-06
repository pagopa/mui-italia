import { render } from '../../../test-utils';
import MIDivider from '../MIDivider';

describe('MIDivider', () => {
  it('renders as an hr element by default', () => {
    const { container } = render(<MIDivider />);

    const divider = container.querySelector('hr.MuiDivider-root');
    expect(divider).toBeInTheDocument();
  });

  it('allows overriding the component prop', () => {
    const { container } = render(<MIDivider component="li" className="custom-divider" />);

    expect(container.querySelector('li.custom-divider')).toBeInTheDocument();
  });

  it('uses a non-void element when text prop is provided', () => {
    const { container } = render(<MIDivider text="Dettagli" />);

    const divider = container.querySelector('div.MuiDivider-root');

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveTextContent('Dettagli');
  });

  it('uses a non-void element when component is hr and text is provided', () => {
    const { container } = render(<MIDivider component="hr" text="Informazioni" />);

    const divider = container.querySelector('div.MuiDivider-root');

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveTextContent('Informazioni');
  });
});
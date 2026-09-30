import { render } from '../../../../test-utils';
import MIMenuDivider from '../MIMenuDivider';

describe('MIMenuDivider', () => {
  it('renders as a list item', () => {
    const { container } = render(<MIMenuDivider />);

    const divider = container.querySelector('li.MuiDivider-root');
    expect(divider).toBeInTheDocument();
  });

  it('forwards standard Divider props', () => {
    const { container } = render(<MIMenuDivider className="custom-divider" />);

    expect(container.querySelector('li.custom-divider')).toBeInTheDocument();
  });
});

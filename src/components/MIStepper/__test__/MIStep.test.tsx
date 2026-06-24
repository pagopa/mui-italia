import { render } from '@testing-library/react';

import MIStep from '../MIStep';

describe('MIStep Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<MIStep>Step Content</MIStep>);

    expect(getByText('Step Content')).toBeInTheDocument();
  });
});

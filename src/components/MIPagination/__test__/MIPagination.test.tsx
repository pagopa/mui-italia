import { render } from '../../../test-utils';
import MIPagination from '../MIPagination';

describe('MIPagination', () => {
  it('renders MIPagination with 110 pages and the first one selected', () => {
    const { getByText, queryByText } = render(<MIPagination page={1} count={110} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('110')).toBeInTheDocument();
    expect(queryByText('4')).not.toBeInTheDocument();
  });

  it('renders MIPagination with 110 pages and the last one selected', () => {
    const { getByText, queryByText } = render(<MIPagination page={110} count={110} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('108')).toBeInTheDocument();
    expect(getByText('109')).toBeInTheDocument();
    expect(getByText('110')).toBeInTheDocument();
    expect(queryByText('107')).not.toBeInTheDocument();
  });
});

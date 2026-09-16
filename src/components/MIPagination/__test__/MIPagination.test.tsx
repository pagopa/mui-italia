import { vi } from 'vitest';

import { createMatchMedia, fireEvent, render } from '../../../test-utils';
import MIPagination from '../MIPagination';

describe('MIPagination', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

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

  it('marks the current page as selected via aria-current', () => {
    const { getByText } = render(<MIPagination page={3} count={5} />);
    expect(getByText('3')).toHaveAttribute('aria-current', 'true');
    expect(getByText('2')).not.toHaveAttribute('aria-current', 'true');
  });

  it('disables the previous button on the first page and the next button on the last page', () => {
    const { getByLabelText, rerender } = render(<MIPagination page={1} count={5} />);
    expect(getByLabelText('Go to previous page')).toBeDisabled();
    expect(getByLabelText('Go to next page')).not.toBeDisabled();

    rerender(<MIPagination page={5} count={5} />);
    expect(getByLabelText('Go to previous page')).not.toBeDisabled();
    expect(getByLabelText('Go to next page')).toBeDisabled();
  });

  it('calls onChange with the clicked page number', () => {
    const handleChange = vi.fn();
    const { getByText } = render(<MIPagination page={1} count={5} onChange={handleChange} />);

    fireEvent.click(getByText('3'));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 3);
  });

  it('calls onChange with the next and previous page numbers when navigating', () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(<MIPagination page={3} count={5} onChange={handleChange} />);

    fireEvent.click(getByLabelText('Go to next page'));
    expect(handleChange).toHaveBeenLastCalledWith(expect.anything(), 4);

    fireEvent.click(getByLabelText('Go to previous page'));
    expect(handleChange).toHaveBeenLastCalledWith(expect.anything(), 2);
  });

  it('disables every item when the disabled prop is set', () => {
    const { getByText, getByLabelText } = render(<MIPagination page={2} count={5} disabled />);

    expect(getByText('1')).toBeDisabled();
    expect(getByLabelText('Go to next page')).toBeDisabled();
    expect(getByLabelText('Go to previous page')).toBeDisabled();
  });

  it('only renders the navigation buttons and the selected page on mobile', () => {
    window.matchMedia = createMatchMedia(400);
    const { getByText, queryByText, getByLabelText } = render(<MIPagination page={5} count={10} />);

    expect(getByText('5')).toBeInTheDocument();
    expect(getByLabelText('Go to previous page')).toBeInTheDocument();
    expect(getByLabelText('Go to next page')).toBeInTheDocument();
    expect(queryByText('1')).not.toBeInTheDocument();
    expect(queryByText('10')).not.toBeInTheDocument();
  });

  it('navigates on mobile by clicking the next button', () => {
    window.matchMedia = createMatchMedia(400);
    const handleChange = vi.fn();
    const { getByLabelText } = render(<MIPagination page={5} count={10} onChange={handleChange} />);

    fireEvent.click(getByLabelText('Go to next page'));

    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 6);
  });

  it('renders all page numbers on desktop for a small page count', () => {
    const { getByText } = render(<MIPagination page={1} count={5} />);
    ['1', '2', '3', '4', '5'].forEach((page) => {
      expect(getByText(page)).toBeInTheDocument();
    });
  });
});

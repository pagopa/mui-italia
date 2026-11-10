import { render } from '../../../test-utils';

import MIAccordionSkeleton from '../MIAccordionSkeleton';

/**
 * The skeleton is aria-hidden: placeholders are counted through the spans rendered by Skeleton, without relying on MUI class names.
 */
const countPlaceholders = (container: HTMLElement) => container.querySelectorAll('span').length;

describe('MIAccordionSkeleton', () => {
  it('is hidden to assistive technologies', () => {
    const { container } = render(<MIAccordionSkeleton />);

    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders the default rows', () => {
    const { container } = render(<MIAccordionSkeleton />);

    // 6 rows * 2 placeholders
    expect(countPlaceholders(container)).toBe(12);
  });

  it('renders the configured rows with dividers between them', () => {
    const { container } = render(<MIAccordionSkeleton rows={3} />);

    expect(countPlaceholders(container)).toBe(6);
    expect(container.querySelectorAll('hr')).toHaveLength(2);
  });
});

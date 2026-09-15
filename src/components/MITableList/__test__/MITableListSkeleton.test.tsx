import { render } from '../../../test-utils';

import MITableListSkeleton from '../MITableListSkeleton';

/**
 * Lo skeleton non espone testo né ruoli (è aria-hidden), quindi il conteggio
 * dei placeholder si basa sull'elemento renderizzato da Skeleton (uno span),
 * senza dipendere dalle classi MUI.
 */
const countPlaceholders = (container: HTMLElement) => container.querySelectorAll('span').length;

describe('MITableListSkeleton', () => {
  it('is hidden to assistive technologies', () => {
    const { container } = render(<MITableListSkeleton rows={1} cols={1} />);

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('exposes no accessible content', () => {
    const { queryByRole } = render(<MITableListSkeleton />);

    expect(queryByRole('list')).not.toBeInTheDocument();
    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders the default rows and cols', () => {
    const { container } = render(<MITableListSkeleton />);

    // 4 rows * 3 cols * 2 placeholder
    expect(countPlaceholders(container)).toBe(24);
  });

  it('renders the configured rows and cols', () => {
    const { container } = render(<MITableListSkeleton rows={2} cols={4} />);

    expect(countPlaceholders(container)).toBe(16);
  });

  it('renders the action placeholder when action is true', () => {
    const withoutAction = render(<MITableListSkeleton rows={1} cols={1} />);
    const withAction = render(<MITableListSkeleton rows={1} cols={1} action />);

    expect(countPlaceholders(withAction.container)).toBe(
      countPlaceholders(withoutAction.container) + 1
    );
  });
});

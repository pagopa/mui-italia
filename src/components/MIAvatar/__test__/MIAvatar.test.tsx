import { createRef } from 'react';

import { fireEvent, render, screen } from '../../../test-utils';
import { MIAvatar } from '..';
import type { MIAvatarProps } from '..';

describe('MIAvatar', () => {
  it.each([
    ['small', '2.75rem'],
    ['big', '4.125rem'],
  ] as const)('renders the %s placeholder at the correct size', (size, dimension) => {
    render(<MIAvatar size={size} alt="Comune di Milano" />);

    const icon = screen.getByRole('img', { name: 'Comune di Milano' });
    expect(icon.parentElement).toHaveStyle({
      width: dimension,
      height: dimension,
      backgroundColor: '#F4F5F8',
    });
    expect(icon).toHaveStyle({ width: '50%', height: '50%' });
  });

  it('renders an image with its alternative text and forwards root props and ref', () => {
    const ref = createRef<HTMLDivElement>();
    const onClick = vi.fn();
    render(
      <MIAvatar
        ref={ref}
        src="/logo.png"
        alt="Logo del Comune"
        data-testid="avatar"
        onClick={onClick}
        sx={{ width: 80 }}
      />
    );

    expect(screen.getByRole('img', { name: 'Logo del Comune' })).toHaveAttribute(
      'src',
      '/logo.png'
    );
    expect(ref.current).toBe(screen.getByTestId('avatar'));
    expect(ref.current).toHaveStyle({ width: '80px' });
    fireEvent.click(screen.getByTestId('avatar'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('keeps decorative images and placeholders hidden from the accessibility tree', () => {
    expectTypeOf<Extract<MIAvatarProps, { variant?: 'standard' }>>().toExtend<{
      alt: string;
    }>();
    const { rerender } = render(<MIAvatar src="/logo.png" alt="" data-testid="avatar" />);

    expect(screen.getByTestId('avatar').querySelector('img')).toHaveAttribute('alt', '');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();

    rerender(<MIAvatar alt="" data-testid="avatar" />);
    expect(screen.getByTestId('avatar').querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('shows the accessible placeholder when the image fails to load', () => {
    const image = document.createElement('img');
    const imageConstructor = vi.spyOn(window, 'Image').mockImplementation(function () {
      return image;
    });

    try {
      render(<MIAvatar src="/missing.png" alt="Logo del Comune" />);
      fireEvent.error(image);

      expect(screen.getByRole('img', { name: 'Logo del Comune' }).tagName).toBe('svg');
    } finally {
      imageConstructor.mockRestore();
    }
  });

  it.each([
    ['small', '2.75rem'],
    ['big', '4.125rem'],
  ] as const)('shows a %s skeleton until loading finishes', (size, dimension) => {
    const ref = createRef<HTMLDivElement>();
    const { rerender } = render(
      <MIAvatar
        isLoading
        size={size}
        src="/logo.png"
        alt="Logo del Comune"
        ref={ref}
        data-testid="avatar"
        aria-label="Caricamento logo"
      />
    );

    const avatar = screen.getByTestId('avatar');
    expect(ref.current).toBe(avatar);
    expect(avatar).toHaveAttribute('aria-busy', 'true');
    expect(avatar).toHaveAttribute('aria-label', 'Caricamento logo');
    expect(avatar).not.toHaveAttribute('isLoading');
    expect(avatar).toHaveStyle({ width: dimension, height: dimension, boxShadow: 'none' });
    expect(avatar.firstElementChild).toHaveStyle({
      backgroundColor: '#E8EBF1',
      borderRadius: 'inherit',
    });
    expect(screen.queryByRole('img', { name: 'Logo del Comune' })).not.toBeInTheDocument();

    rerender(<MIAvatar size={size} src="/logo.png" alt="Logo del Comune" />);
    expect(screen.getByRole('img', { name: 'Logo del Comune' })).toHaveAttribute(
      'src',
      '/logo.png'
    );
  });

  it('shows a circular skeleton instead of gravatar initials during loading', () => {
    const { rerender } = render(
      <MIAvatar variant="gravatar" label="MR" isLoading data-testid="avatar" />
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveAttribute('aria-busy', 'true');
    expect(avatar).toHaveStyle({ width: '32px', height: '32px', borderRadius: '50%' });
    expect(avatar).not.toHaveTextContent('MR');
    expect(avatar.firstElementChild).toHaveStyle({
      backgroundColor: '#E8EBF1',
      borderRadius: 'inherit',
    });

    rerender(<MIAvatar variant="gravatar" label="MR" />);
    expect(screen.getByText('MR')).not.toHaveAttribute('aria-busy');
  });

  it('renders the gravatar initials in a 32px circle', () => {
    expectTypeOf<Extract<MIAvatarProps, { variant: 'gravatar' }>>().toExtend<{
      label: string;
      children?: never;
    }>();
    render(
      <MIAvatar variant="gravatar" label="MR" role="img" aria-label="Mario Rossi" />
    );

    expect(screen.getByLabelText('Mario Rossi')).toHaveTextContent('MR');
    expect(screen.getByLabelText('Mario Rossi')).not.toHaveAttribute('label');
    expect(screen.getByLabelText('Mario Rossi')).toHaveStyle({
      width: '32px',
      height: '32px',
      backgroundColor: '#B6C5F7',
      color: '#031344',
      borderRadius: '50%',
    });
  });
});

import { fireEvent, render, screen } from '@testing-library/react';

import { ProfileSwitcher, ProfileSwitcherProps } from '../ProfileSwitcher';

const defaultProps: ProfileSwitcherProps = {
  profileInitials: 'EC',
  profileName: 'Ente Creditore',
  onSwitchProfile: vi.fn(),
};

const observe = vi.fn();
const disconnect = vi.fn();

class ResizeObserverMock {
  observe = observe;
  unobserve = vi.fn();
  disconnect = disconnect;
}

const mockElementSize = (width: number, height = 64) =>
  vi
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue(new DOMRect(0, 0, width, height));

const renderProfileSwitcher = (props: Partial<ProfileSwitcherProps> = {}) =>
  render(<ProfileSwitcher {...defaultProps} {...props} />);

describe('ProfileSwitcher', () => {
  beforeEach(() => {
    observe.mockClear();
    disconnect.mockClear();
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
    mockElementSize(320);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('renders the standard layout', () => {
    const { container } = renderProfileSwitcher();

    expect(screen.getByText('Stai operando come')).toBeInTheDocument();
    expect(screen.getByText('Ente Creditore')).toBeInTheDocument();
    expect(screen.getByText('EC')).toBeInTheDocument();
    expect(container.querySelector('.MuiBadge-dot')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cambia profilo: Ente Creditore' })
    ).toHaveTextContent('Cambia profilo');
  });

  it('calls onSwitchProfile when the switch action is clicked', () => {
    const onSwitchProfile = vi.fn();
    renderProfileSwitcher({ onSwitchProfile });

    fireEvent.click(screen.getByRole('button', { name: 'Cambia profilo: Ente Creditore' }));

    expect(onSwitchProfile).toHaveBeenCalledOnce();
  });

  it('disables the switch action', () => {
    const onSwitchProfile = vi.fn();
    renderProfileSwitcher({ disabled: true, onSwitchProfile });

    const switchButton = screen.getByRole('button', {
      name: 'Cambia profilo: Ente Creditore',
    });
    expect(switchButton).toBeDisabled();

    fireEvent.click(switchButton);
    expect(onSwitchProfile).not.toHaveBeenCalled();
  });

  it('hides the switch action when showSwitchProfile is false', () => {
    renderProfileSwitcher({ showSwitchProfile: false });

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByText('Ente Creditore')).toBeInTheDocument();
  });

  it('renders an accessible switch action in the compact layout', () => {
    mockElementSize(120);
    renderProfileSwitcher();

    const switchButton = screen.getByRole('button', {
      name: 'Cambia profilo: Ente Creditore',
    });
    expect(switchButton).toHaveTextContent('EC');
    expect(screen.queryByText('Stai operando come')).not.toBeInTheDocument();
    expect(screen.queryByText('Ente Creditore')).not.toBeInTheDocument();
  });

  it('uses a custom aria-label for the switch action', () => {
    renderProfileSwitcher({ switchAriaLabel: 'Seleziona un altro profilo' });

    expect(
      screen.getByRole('button', { name: 'Seleziona un altro profilo' })
    ).toBeInTheDocument();
  });
});

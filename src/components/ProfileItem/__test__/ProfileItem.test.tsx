import { fireEvent, render, screen } from '../../../test-utils';

import { ProfileItem, ProfileItemProps } from '../ProfileItem';

const defaultProps: ProfileItemProps = {
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

const renderProfileItem = (props: Partial<ProfileItemProps> = {}) =>
  render(<ProfileItem {...defaultProps} {...props} />);

describe('ProfileItem', () => {
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
    const { container } = renderProfileItem();

    expect(screen.getByText('Stai operando come')).toBeInTheDocument();
    expect(screen.getByText('Ente Creditore')).toBeInTheDocument();
    expect(screen.getByText('EC')).toBeInTheDocument();
    expect(container.querySelector('.MuiBadge-root')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cambia profilo: Ente Creditore' })
    ).toHaveTextContent('Cambia profilo');
  });

  it('calls onSwitchProfile when the switch action is clicked', () => {
    const onSwitchProfile = vi.fn();
    renderProfileItem({ onSwitchProfile });

    fireEvent.click(screen.getByRole('button', { name: 'Cambia profilo: Ente Creditore' }));

    expect(onSwitchProfile).toHaveBeenCalledOnce();
  });

  it('hides the switch action when showSwitchProfile is false', () => {
    renderProfileItem({ showSwitchProfile: false });

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByText('Ente Creditore')).toBeInTheDocument();
  });

  it('renders an accessible switch action in the compact layout', () => {
    mockElementSize(120);
    renderProfileItem();

    const switchButton = screen.getByRole('button', {
      name: 'Cambia profilo: Ente Creditore',
    });
    expect(switchButton).toHaveTextContent('EC');
    expect(screen.queryByText('Stai operando come')).not.toBeInTheDocument();
    expect(screen.queryByText('Ente Creditore')).not.toBeInTheDocument();
  });

  it('renders a non-interactive avatar in the compact layout when showSwitchProfile is false', () => {
    const onSwitchProfile = vi.fn();
    mockElementSize(120);
    renderProfileItem({ showSwitchProfile: false, onSwitchProfile });

    expect(screen.getByText('EC')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('EC'));

    expect(onSwitchProfile).not.toHaveBeenCalled();
  });

  it('uses a custom aria-label for the switch action', () => {
    renderProfileItem({ switchAriaLabel: 'Seleziona un altro profilo' });

    expect(screen.getByRole('button', { name: 'Seleziona un altro profilo' })).toBeInTheDocument();
  });
});

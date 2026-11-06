import { createMatchMedia, render, screen } from '../../../test-utils';

import MIBoxedModule from '../MIBoxedModule';

const renderModule = () =>
  render(
    <MIBoxedModule
      data-testid="module"
      icon={<span data-testid="icon" />}
      action={<button type="button">Aggiorna documenti</button>}
    >
      Contenuto
    </MIBoxedModule>
  );

describe('MIBoxedModule', () => {
  afterEach(() => {
    // @ts-expect-error matchMedia is restored to the jsdom default (undefined)
    delete window.matchMedia;
  });

  it.each([375, 1200])('centers the icon and keeps it 12px from the content at %ipx', (width) => {
    window.matchMedia = createMatchMedia(width);
    renderModule();

    const module = screen.getByTestId('module');
    const content = screen.getByTestId('icon').nextElementSibling;

    expect(module).toHaveStyle({ alignItems: 'center' });
    expect(content).toHaveStyle({ marginLeft: '12px' });
  });
});

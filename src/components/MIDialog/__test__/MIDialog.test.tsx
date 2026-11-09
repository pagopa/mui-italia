import { vi } from 'vitest';

import { themeNext } from '@theme';
import { fireEvent, render } from '../../../test-utils';
import { MIDialog } from '../MIDialog';

describe('MIDialog', () => {
  it('renders the title and description props with accessible dialog references', () => {
    const { getByRole, getByText } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Conferma la richiesta"
        closeButtonAriaLabel="Chiudi finestra"
        description="Vuoi procedere?"
      >
        <p>Azioni</p>
      </MIDialog>
    );

    const dialog = getByRole('dialog', { name: 'Conferma la richiesta' });

    expect(dialog).toHaveAccessibleDescription('Vuoi procedere?');
    expect(getByText('Azioni')).toBeInTheDocument();
  });

  it('does not render fullscreen when fullScreen is passed at runtime', () => {
    const { getByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        closeButtonAriaLabel="Chiudi finestra"
        // @ts-expect-error fullScreen is intentionally excluded from MIDialogProps
        fullScreen
      />
    );

    expect(getByRole('dialog')).not.toHaveClass('MuiDialog-paperFullScreen');
  });

  it('allows the title to be omitted when the dialog has an accessible name', () => {
    const { getByRole, queryByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        aria-labelledby="dialog-name"
        closeButtonAriaLabel="Chiudi finestra"
      >
        <span id="dialog-name">Informazioni</span>
      </MIDialog>
    );

    expect(getByRole('dialog', { name: 'Informazioni' })).toBeInTheDocument();
    expect(queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders secondary and primary actions and invokes their handlers', () => {
    const onPrimaryAction = vi.fn();
    const onSecondaryAction = vi.fn();
    const { getByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Azioni disponibili"
        closeButtonAriaLabel="Chiudi finestra"
        primaryAction={{ label: 'Conferma', onClick: onPrimaryAction }}
        secondaryAction={{ label: 'Annulla', onClick: onSecondaryAction }}
      />
    );

    fireEvent.click(getByRole('button', { name: 'Annulla' }));
    fireEvent.click(getByRole('button', { name: 'Conferma' }));

    expect(onSecondaryAction).toHaveBeenCalledTimes(1);
    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it('applies the configured color independently to each action', () => {
    const { getByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Annullare l’operazione"
        closeButtonAriaLabel="Chiudi finestra"
        primaryAction={{
          label: 'Annulla',
          onClick: () => {},
          color: 'error',
        }}
        secondaryAction={{
          label: 'Indietro',
          onClick: () => {},
          color: 'primary',
        }}
      />
    );

    expect(getByRole('button', { name: 'Annulla' })).toHaveStyle({
      backgroundColor: themeNext.colors.error[600],
    });
    expect(getByRole('button', { name: 'Indietro' })).toHaveStyle({
      color: themeNext.colors.blue[500],
    });
  });

  it('renders the custom footer instead of configured actions', () => {
    const { getByRole, queryByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Azioni disponibili"
        closeButtonAriaLabel="Chiudi finestra"
        primaryAction={{ label: 'Conferma', onClick: () => {} }}
        secondaryAction={{ label: 'Annulla', onClick: () => {} }}
        renderFooter={<button type="button">Azione personalizzata</button>}
      />
    );

    expect(getByRole('button', { name: 'Azione personalizzata' })).toBeInTheDocument();
    expect(queryByRole('button', { name: 'Conferma' })).not.toBeInTheDocument();
    expect(queryByRole('button', { name: 'Annulla' })).not.toBeInTheDocument();
  });

  it('allows the configured actions to be hidden with an empty custom footer', () => {
    const { queryByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Azioni disponibili"
        closeButtonAriaLabel="Chiudi finestra"
        primaryAction={{ label: 'Conferma', onClick: () => {} }}
        secondaryAction={{ label: 'Annulla', onClick: () => {} }}
        renderFooter={null}
      />
    );

    expect(queryByRole('button', { name: 'Conferma' })).not.toBeInTheDocument();
    expect(queryByRole('button', { name: 'Annulla' })).not.toBeInTheDocument();
  });


  it('renders additional children alongside the required title', () => {
    const { getByRole, getByText } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Titolo del dialog"
        closeButtonAriaLabel="Chiudi finestra"
      >
        <p>Contenuto manuale</p>
      </MIDialog>
    );

    expect(getByRole('dialog', { name: 'Titolo del dialog' })).toBeInTheDocument();
    expect(getByText('Contenuto manuale')).toBeInTheDocument();
  });

  it('allows explicit accessible references to override the generated ones', () => {
    const { getByRole } = render(
      <MIDialog
        open
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        title="Titolo visibile"
        closeButtonAriaLabel="Chiudi finestra"
        description="Descrizione visibile"
        aria-labelledby="external-title"
        aria-describedby="external-description"
      >
        <span id="external-title">Nome accessibile</span>
        <span id="external-description">Descrizione accessibile</span>
      </MIDialog>
    );

    const dialog = getByRole('dialog', { name: 'Nome accessibile' });

    expect(dialog).toHaveAccessibleDescription('Descrizione accessibile');
  });

  it('requests closure when the close icon button is activated', () => {
    const onClose = vi.fn();
    const onCloseButtonClick = vi.fn();
    const { getByRole } = render(
      <MIDialog
        open
        onClose={onClose}
        onCloseButtonClick={onCloseButtonClick}
        title="Titolo del dialog"
        closeButtonAriaLabel="Chiudi finestra"
      />
    );

    fireEvent.click(getByRole('button', { name: 'Chiudi finestra' }));

    expect(onCloseButtonClick).toHaveBeenCalledWith(expect.anything());
    expect(onClose).not.toHaveBeenCalled();
  });
});

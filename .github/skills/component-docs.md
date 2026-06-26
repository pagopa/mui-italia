# Skill: Generazione documentazione Storybook per componenti MUI Italia

## Obiettivo

Generare o aggiornare la documentazione Storybook di un componente React del design system MUI Italia, creando una pagina MDX strutturata e story dedicate che siano utili sia agli sviluppatori sia ai team esterni, in particolare design review.

La documentazione deve essere chiara, verificabile dal codice e non deve inventare finalità, comportamenti o linee guida non deducibili dal componente o dalle informazioni fornite dallo sviluppatore.

---

## Input richiesti

Prima di procedere, analizza:

- il file del componente;
- le props pubbliche del componente;
- eventuali story già esistenti;
- eventuali test o esempi d’uso;
- eventuali riferimenti Figma, GitHub o MUI se disponibili.

Se lo scopo del componente, il contesto d’uso o il significato delle varianti non è chiaro dal codice, chiedi chiarimenti allo sviluppatore invece di inventare.

---

## Struttura della documentazione

La documentazione deve usare la struttura MDX già prevista dal progetto:

- `Title`
- `Overview`
- `Section`
- `SubSection`
- `Story`
- `Primary`
- `Controls`

Esempio di struttura base:

```mdx
import { Meta, Title, Primary, Controls, Story } from '@storybook/addon-docs/blocks';

import Overview from './components/Overview';
import Section from './components/Section';
import SubSection from './components/SubSection';
import * as ComponentStories from '../stories/Component.stories';

<Meta of={ComponentStories} />

<Title />

<Overview githubRelativePath="Component/Component.tsx" figmaNodeId="..." muiRelativePath="...">
  Descrizione del componente.
</Overview>

<Section
  title="Playground"
  description="Usa i controlli per modificare i parametri principali del componente e verificare il risultato live."
>
  <Primary />
  <Controls />
</Section>
```

---

## Overview

La sezione `Overview` deve spiegare:

- che cos’è il componente;
- quale scopo ha;
- quali bisogni copre;
- eventuale relazione con il componente MUI di base, se presente;
- eventuale riferimento a Figma, GitHub e MUI, se disponibile.

Regole:

- non inventare contesti d’uso non deducibili;
- non aggiungere linee guida di design se non sono presenti nel codice o nei requisiti;
- se lo scopo non è chiaro, chiedere allo sviluppatore;
- mantenere il testo sintetico ma utile per team tecnici e design.

Esempio:

```mdx
<Overview githubRelativePath="MIChip/MIChip.tsx" figmaNodeId="157-745" muiRelativePath="react-chip">
  <strong>MIChip</strong> è un componente pensato per mostrare informazioni sintetiche come stato,
  etichetta o filtro applicato. Supporta varianti filled e outlined, palette semantiche dedicate e
  una modalità deletable.
</Overview>
```

---

## Playground

Ogni componente deve avere una sezione `Playground`.

Il Playground serve principalmente agli sviluppatori per sperimentare con il componente tramite i Controls di Storybook.

Regole:

- esporre solo controlli utili e comprensibili;
- limitare i controls tramite `parameters.controls.include`;
- evitare controlli automatici rumorosi;
- non esporre direttamente props complesse;
- usare args custom Storybook-only per gestire props complesse;
- usare un `render` esplicito per mappare gli args custom sulle props reali del componente.

### Props primitive

Props primitive o semplici possono essere esposte direttamente:

- `string`
- `boolean`
- `number`
- union di stringhe;
- enum;
- varianti visuali;
- colori;
- size;
- stato abilitato/disabilitato.

Esempio:

```tsx
argTypes: {
  label: {
    control: { type: 'text' },
    description: 'Testo visualizzato dal componente.',
  },
  variant: {
    options: ['filled', 'outlined'],
    control: { type: 'radio' },
  },
}
```

### Props complesse

Non esporre direttamente nei controls props come:

- funzioni;
- callback;
- `ReactNode`;
- componenti React;
- render props;
- oggetti complessi;
- `sx`;
- `slotProps`;
- `componentsProps`;
- classi CSS;
- ref.

Per queste props creare controlli custom serializzabili.

Esempi:

```tsx
type ComponentStoryArgs = {
  label: string;
  variant?: 'filled' | 'outlined';
  deletable?: boolean;
  deleteAriaLabel?: string;
};
```

```tsx
render: ({ deletable, deleteAriaLabel, label, variant }) => {
  if (deletable) {
    return (
      <Component
        label={label}
        variant={variant}
        onDelete={() => alert('Deleted')}
        aria-label={deleteAriaLabel}
      />
    );
  }

  return <Component label={label} variant={variant} />;
};
```

### Regola importante per TypeScript

Se il componente usa union complesse o discriminated union nelle props, evitare spread generici come:

```tsx
<Component {...args} />
```

Preferire mapping esplicito:

```tsx
<Component label={label} color={color} variant={variant} />
```

Questo evita errori TypeScript quando alcune props sono valide solo in combinazione con altre.

---

## Story statiche per review design

Se il componente prevede più configurazioni, varianti o stati che cambiano il layout o l’aspetto visivo, creare story statiche dedicate.

Queste story servono a:

- facilitare la review del team design;
- mostrare tutte le varianti principali;
- confrontare stati e configurazioni;
- ridurre la necessità di manipolare manualmente i controls.

Esempi di sezioni:

- `Varianti`
- `Colori`
- `Dimensioni`
- `Stati`
- `Layout`
- `Con icona`
- `Deletable`
- `Mobile`
- `Responsive`

Nel file MDX usare `Section` e `SubSection`:

```mdx
<Section
  title="Varianti"
  description="Panoramica delle varianti visive disponibili per il componente."
>
  <SubSection title="Filled">
    <Story of={ComponentStories.FilledVariants} />
  </SubSection>

  <SubSection title="Outlined">
    <Story of={ComponentStories.OutlinedVariants} />
  </SubSection>
</Section>
```

Le story statiche dovrebbero preferibilmente:

- non avere controls;
- mostrare più casi insieme;
- avere layout ordinato;
- usare `Stack`, `Box` o griglie semplici;
- avere label descrittive.

---

## Accessibilità

Creare una sezione `Accessibilità` solo se esistono props che l’utilizzatore deve valorizzare correttamente affinché il componente risulti completamente accessibile.

La sezione non deve spiegare quando usare il componente e non deve aggiungere linee guida di design generiche.

Deve invece concentrarsi sulle props rilevanti.

Esempi di props/accessibilità:

- `aria-label`;
- `aria-labelledby`;
- `aria-describedby`;
- `alt`;
- `title`;
- `label`;
- `id`;
- associazioni tra input e label;
- testo visibile necessario a non dipendere solo dal colore;
- props richieste quando il componente è interattivo.

Esempio:

```mdx
<Section
  title="Accessibilità"
  description="Il componente è accessibile by design. L’accessibilità finale dipende però dalla corretta valorizzazione delle props testuali richieste in alcuni casi."
>
  <SubSection title="Props rilevanti">
    <Typography variant="body1">
      • <strong>label</strong>: identifica il contenuto del componente. Deve essere sempre significativo.
    </Typography>

    <Typography variant="body1">
      • <strong>aria-label</strong>: descrive l’azione associata a un controllo interattivo quando il solo testo visibile non è sufficiente.
    </Typography>

  </SubSection>

  <Story of={ComponentStories.Accessibility} />
</Section>
```

Se non ci sono props accessibilità da configurare, non creare la sezione oppure indicare esplicitamente solo se richiesto dallo sviluppatore.

---

## Convenzioni per le story

Il file story deve seguire questa struttura:

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

type ComponentStoryArgs = {
  // args semplici e controllabili
};

const meta: Meta<ComponentStoryArgs> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        // solo controlli utili
      ],
    },
  },
  args: {
    // default args
  },
  argTypes: {
    // documentazione controls
  },
  render: (args) => {
    // mapping esplicito args -> props reali
  },
};

export default meta;

type Story = StoryObj<ComponentStoryArgs>;

export const Playground: Story = {};

export const VariantExample: Story = {
  render: () => (
    // esempio statico
  ),
};
```

Regole:

- usare `type Story = StoryObj<ComponentStoryArgs>`;
- evitare `StoryObj<typeof Component>` se servono args custom;
- usare args custom per props complesse;
- disabilitare controls non utili;
- aggiungere descrizioni in `argTypes`;
- categorizzare eventuali args custom come `Storybook controls`.

Esempio:

```tsx
argTypes: {
  deletable: {
    control: 'boolean',
    description: 'Controllo Storybook: abilita la configurazione deletable.',
    table: {
      category: 'Storybook controls',
    },
  },
  onDelete: {
    control: false,
    table: {
      type: { summary: 'React.EventHandler<any>' },
    },
  },
}
```

---

## Criteri di qualità

La documentazione generata deve essere:

- coerente con il codice del componente;
- utile per sviluppatori;
- utile per review design;
- sintetica ma completa;
- priva di informazioni inventate;
- strutturata in sezioni prevedibili;
- facile da mantenere;
- compatibile con TypeScript;
- adatta a essere replicata su altri componenti.

---

## Anti-pattern da evitare

Non fare:

```tsx
<Component {...args} />
```

quando il componente ha props complesse o union discriminanti.

Non esporre direttamente:

```tsx
onClick: {
  control: 'text';
}
```

Non inventare:

```mdx
Usa questo componente quando vuoi aumentare engagement...
```

se non è deducibile dai requisiti.

Non creare sezioni accessibilità generiche se non ci sono props concrete da configurare.

Non mostrare troppe story ridondanti.

Non lasciare Controls automatici non filtrati.

---

## Regola operativa

Questa skill è consultiva: deve generare una proposta di documentazione, non applicare modifiche automatiche al repository.

## Output atteso

La skill non deve modificare direttamente i file del repository.

Deve invece produrre una proposta a schermo che lo sviluppatore potrà valutare, copiare e integrare manualmente nel codice.

Per ogni componente, la risposta deve includere:

1. una proposta per `src/stories/<Component>.stories.tsx`;
2. una proposta per `src/docs/<Component>.mdx`;
3. l’elenco delle props esposte nei Controls;
4. l’elenco delle props complesse gestite tramite controlli custom;
5. eventuali domande aperte se servono informazioni non deducibili dal codice.

Quando mostra codice, separare chiaramente i blocchi per file:

```tsx
// src/stories/<Component>.stories.tsx
```

```mdx
<!-- src/docs/<Component>.mdx -->
```

Se alcune informazioni non sono disponibili, non inventarle: indicare esplicitamente cosa manca e chiedere chiarimenti allo sviluppatore.

---
name: create-mui-italia-stories
description: >
  Usa questa skill quando l’utente vuole generare, creare, aggiornare o verificare
  le stories Storybook e la documentazione MDX di un componente React + TypeScript
  del design system MUI Italia. Si attiva con richieste come: "genera le stories",
  "crea Storybook", "documenta questo componente", "aggiungi la documentazione",
  "scrivi il file stories", "crea la pagina MDX", "aggiungi copertura Storybook"
  oppure quando viene fornito un componente e viene richiesta documentazione o
  copertura visuale. La skill produce una proposta a schermo e non modifica
  automaticamente il repository.
compatibility:
  tools:
    - storybook_mcp (optional — per leggere convenzioni e stories esistenti)
    - figma_mcp (optional — per arricchire la documentazione con informazioni di design)
  stack:
    - React + TypeScript
    - MUI (Material UI)
    - Storybook 10+ con Vite (@storybook/react-vite)
    - Chromatic visual testing
---

# Generazione documentazione Storybook per MUI Italia

## Obiettivo

Generare o aggiornare la documentazione Storybook di un componente React del design system
MUI Italia, producendo:

1. **`src/stories/ComponentName.stories.tsx`** — Playground e stories statiche;
2. **`src/docs/ComponentName.mdx`** — pagina di documentazione per sviluppatori e designer;
3. **audit dell’esistente**, se sono già presenti stories o documentazione;
4. **riepilogo della copertura**, delle props analizzate e delle assunzioni;
5. **self-check finale** rispetto alle convenzioni del progetto.

La documentazione deve essere:

- verificabile dal codice o dai requisiti forniti;
- utile agli sviluppatori;
- utile alla design review;
- compatibile con TypeScript;
- adatta ai test visuali con Chromatic;
- sintetica ma completa;
- priva di finalità, comportamenti o linee guida inventate.

## Regola operativa

Questa skill è **consultiva**.

Deve produrre a schermo file completi e pronti da copiare, ma non deve modificare
automaticamente il repository.

Se l’utente chiede esplicitamente di applicare le modifiche o aprire una pull request,
l’operazione deve essere trattata come un passaggio separato.

---

# Regole linguistiche

Tutta la documentazione rivolta alle persone deve essere scritta in **italiano**:

- contenuto MDX;
- descrizioni delle sezioni;
- descrizioni delle stories;
- descrizioni in `argTypes`;
- commenti destinati a sviluppatori e designer;
- note e assunzioni nel riepilogo.

Possono restare in inglese:

- nomi degli export Storybook, come `Playground`, `Default`, `Loading`, `Error`;
- nomi tecnici di API e props;
- componenti MDX come `Overview`, `Section`, `SubSection`, `Primary`, `Controls`, `Story`;
- termini tecnici consolidati quando una traduzione sarebbe meno chiara.

La copy mostrata dal componente nelle stories deve essere realistica e preferibilmente
in italiano, salvo che il componente o i requisiti richiedano un’altra lingua.

---

# Principi fondamentali

## 1. Il codice è la fonte di verità

Props, stati, varianti e comportamenti devono essere ricavati principalmente da:

- sorgente del componente;
- tipi TypeScript;
- JSDoc;
- test;
- stories esistenti;
- esempi d’uso verificabili;
- requisiti forniti dallo sviluppatore.

Figma può arricchire la documentazione, ma non deve sostituire il codice come fonte di
verità per API e comportamento.

In caso di conflitto:

1. segnalare la discrepanza;
2. documentare il comportamento effettivamente supportato dal codice;
3. non generare stories per varianti presenti solo in Figma.

## 2. Non inventare

Non inventare:

- finalità del componente;
- contesti d’uso;
- comportamenti;
- linee guida di design;
- requisiti di accessibilità;
- URL GitHub;
- varianti non supportate;
- token non verificabili.

Se un’informazione non è deducibile:

- chiedere chiarimenti se è necessaria per procedere;
- altrimenti usare un TODO esplicito;
- riportare il punto nelle note finali.

Placeholder standard:

```md
<!-- TODO: confermare con lo sviluppatore -->
```

## 3. Conservare ciò che è già conforme

Se esistono stories o documentazione:

- non rigenerarle da zero;
- eseguire prima un audit;
- conservare le parti conformi;
- correggere solo le non conformità;
- aggiungere soltanto la copertura mancante;
- rimuovere esclusivamente duplicazioni esatte o contenuto dimostrabilmente non valido.

## 4. Documentare solo differenze visuali significative

Non generare il prodotto cartesiano di tutte le props.

Creare stories solo per:

- stati visivamente distinti;
- varianti importanti;
- differenze di layout;
- configurazioni utili alla design review;
- casi responsive;
- casi limite verificabili, come testo lungo o contenuto assente.

## 5. Controlli espliciti e comprensibili

Il Playground deve esporre soltanto controlli utili.

Non lasciare i Controls completamente automatici.

Le props complesse non devono essere esposte direttamente. Se influenzano in modo
rilevante l’esperienza visiva o interattiva, devono essere rappresentate tramite un arg
custom semplice e serializzabile.

---

# Input

## Input principale

Prima di procedere è necessario disporre di almeno uno dei seguenti elementi:

- contenuto completo del file `.tsx` del componente;
- path verificabile del componente nel repository.

Se il componente non è disponibile, chiederlo esplicitamente.

## Input da richiedere

Chiedere, se non già disponibili:

| Input | Obbligatorietà | Comportamento se manca |
|---|---:|---|
| File `.tsx` o path del componente | Obbligatorio | Fermarsi e richiederlo |
| Link Figma | Richiesto ma non bloccante | Chiederlo; se non disponibile, usare un TODO |
| Link GitHub del sorgente | Facoltativo | Non inventarlo; usare un TODO |
| `componentMaxWidth` | Facoltativo | Cercare una convenzione analoga, poi applicare l’euristica |
| Gerarchia Storybook | Facoltativa | Usare `Components/ComponentName` |
| Accesso a Figma MCP | Facoltativo | Procedere comunque usando il solo codice |

Il link Figma deve essere richiesto, ma la sua assenza non deve bloccare la generazione se
lo sviluppatore vuole procedere.

## Informazioni aggiuntive da analizzare

Quando disponibili, leggere anche:

- interfacce e tipi importati;
- stories esistenti;
- pagina MDX esistente;
- test;
- esempi d’uso;
- componenti analoghi;
- una story canonica recente del repository;
- una pagina MDX canonica recente del repository.

Le convenzioni effettivamente presenti nel repository prevalgono sugli esempi generici
della skill, tranne per le regole assolute definite in fondo al documento.

---

# Step 0 — Verifica delle convenzioni del repository

Prima di generare i file, verificare quando possibile:

1. posizione corrente delle stories;
2. posizione corrente delle pagine MDX;
3. path dei componenti MDX custom:
   - `Overview`;
   - `Section`;
   - `SubSection`;
4. modalità di import del componente;
5. alias TypeScript disponibili;
6. configurazione globale del tema Storybook;
7. convenzioni Chromatic;
8. stories recenti considerate canoniche.

Percorsi predefiniti, se non emerge una convenzione diversa:

- `src/stories/ComponentName.stories.tsx`;
- `src/docs/ComponentName.mdx`.

Non aggiungere un `ThemeProvider` decorator se il tema viene già applicato globalmente da
Storybook.

---

# Step 1 — Audit dei file esistenti

Se esiste già una story o una pagina MDX, eseguire l’audit prima di proporre modifiche.

## 1a. File da leggere

Cercare:

- `ComponentName.stories.tsx`;
- `ComponentName.mdx`;
- eventuali file equivalenti nella directory del componente;
- eventuali file nelle directory `stories/` o `docs/`.

Leggere integralmente i file trovati.

## 1b. Checklist delle stories

| Check | Criterio |
|---|---|
| Import Storybook | Import da `@storybook/react-vite` |
| Meta tipizzato | `Meta<typeof Component>` oppure `Meta<ComponentStoryArgs>` |
| Tipo delle stories | Coerente con il tipo usato dal meta |
| Tag di progetto | `tags: ['!dev']` presente nel meta |
| Playground | Export `Playground` presente |
| Controls espliciti | `parameters.controls.include` definito |
| `argTypes` | Controlli, descrizioni e opzioni coerenti con le props |
| Props primitive | Esposte direttamente solo se utili |
| Props complesse | Non esposte direttamente nei Controls |
| Custom args | Props complesse rilevanti rappresentate da args semplici |
| Mapping esplicito | Nessun `<Component {...args} />` nel Playground |
| Hook | Render con hook definito come funzione nominata e capitalizzata |
| Stories statiche | Autonome e comprensibili senza manipolare i Controls |
| Nessuno spread tra stories | Nessun `{ ...Default.args }` o equivalente |
| Copy realistica | Nessun placeholder come `"string"`, `"label"` o `"test"` |
| Copertura visuale | Stati e varianti significativi documentati |
| Chromatic | Viewport configurati tramite `breakpointsChromaticValues` |
| Decorator del tema | Nessun ThemeProvider ridondante |
| TypeScript | Nessun cast o spread rischioso per union complesse |

## 1c. Checklist MDX

| Check | Criterio |
|---|---|
| Import docs | Import da `@storybook/addon-docs/blocks` |
| Meta | `<Meta of={ComponentStories} />` |
| Struttura progetto | Uso di `Overview`, `Section` e `SubSection` |
| Playground | Presenza di `Primary` e `Controls` |
| Stories statiche | Riferimenti validi tramite `<Story of={...} />` |
| Lingua | Prosa in italiano |
| Verificabilità | Nessuna affermazione inventata |
| Link Figma | Presente oppure TODO esplicito |
| Link GitHub | Presente oppure TODO esplicito |
| Sviluppatori | Note tecniche presenti |
| Designer | Note visuali presenti |
| Accessibilità | Sezione presente solo se supportata dal codice |

## 1d. Classificazione delle non conformità

| Severità | Criterio |
|---|---|
| 🔴 Critica | Tipizzazione errata, import errato, Playground assente, Controls automatici, custom args non tipizzati, uso scorretto degli hook |
| 🟡 Media | Copy poco realistica, copertura incompleta, descrizioni mancanti, story ridondante, Chromatic incompleto |
| 🟢 Conforme | Parte già allineata e da preservare |

## 1e. Strategia di aggiornamento

- Conservare ogni story conforme.
- Correggere chirurgicamente i problemi 🔴 e 🟡.
- Aggiungere le stories mancanti individuate dalla story matrix.
- Non eliminare stories conformi salvo duplicazioni esatte.
- Non cambiare nomi pubblici senza necessità.
- Non modificare pattern di repository verificati senza segnalarlo.

## 1f. Report obbligatorio

Prima di mostrare i file corretti, produrre:

```md
## Audit: ComponentName

### Stories
Conformità: [N] / [N]

| Check | Stato | Azione |
|---|---|---|
| Import Storybook | ✅ | Nessuna |
| Playground | ❌ | Aggiungere il Playground |
| Controls espliciti | ❌ | Definire `parameters.controls.include` |

### Documentazione MDX
Conformità: [N] / [N]

| Check | Stato | Azione |
|---|---|---|
| Struttura MDX | ✅ | Nessuna |
| Link Figma | ❌ | Inserire TODO o link fornito |

### Elementi mantenuti
- `Default`
- `Loading`

### Elementi corretti
- `Playground` — corretta la tipizzazione degli args custom

### Elementi aggiunti
- `Error` — stato visuale supportato dal componente ma non documentato
```

Se non esistono file precedenti, dichiarare brevemente che l’audit non è applicabile e
procedere.

---

# Step 2 — Analisi del componente

## 2a. Analisi delle props

Per ogni prop registrare:

- nome;
- tipo TypeScript;
- obbligatoria o opzionale;
- valore predefinito;
- JSDoc;
- effetto sul rendering;
- classificazione;
- esposizione nel Playground;
- eventuale custom arg;
- rilevanza per l’accessibilità.

Classificazioni:

| Categoria | Significato |
|---|---|
| `visual-state` | Modifica stato o resa visuale |
| `content` | Fornisce testo o contenuto |
| `callback` | Gestisce un evento |
| `complex` | ReactNode, oggetto, render prop, slot, `sx`, ref |
| `accessibility` | Configura nome, descrizione, relazione o comportamento accessibile |

Se non esiste un’interfaccia esportata, inferire le props da:

- destrutturazione;
- annotazioni locali;
- uso JSX;
- tipi MUI estesi.

Segnalare nel riepilogo che l’interfaccia è stata inferita.

## 2b. Analisi della struttura interna

Determinare:

- componente controllato o non controllato;
- stato interno;
- uso di hook;
- uso di `children`;
- primitive MUI utilizzate;
- condizioni di rendering;
- loading;
- error;
- disabled;
- empty state;
- filled state;
- responsive behavior;
- portal o dialog;
- dipendenze da context o provider;
- gestione di focus e tastiera;
- presenza di testo troncato;
- props discriminatorie.

## 2c. Accessibilità

Individuare solo elementi verificabili:

- `aria-label`;
- `aria-labelledby`;
- `aria-describedby`;
- `alt`;
- `title`;
- `label`;
- `id`;
- associazione input/label;
- focus visibile;
- navigazione da tastiera;
- target cliccabile;
- stato disabled;
- contrasto verificabile;
- props accessibili ereditate;
- props attese ma non esposte.

Non dedurre automaticamente che un componente sia “accessibile by design”.

---

# Step 3 — Progettazione del Playground

## 3a. Props esposte direttamente

Possono essere esposte se utili e comprensibili:

- `string`;
- `number`;
- `boolean`;
- enum;
- string union;
- `variant`;
- `size`;
- `color`;
- valori visuali serializzabili.

## 3b. Props da non esporre direttamente

Non esporre direttamente:

- callback;
- funzioni;
- `ReactNode`;
- componenti React;
- render props;
- `sx`;
- `slotProps`;
- `componentsProps`;
- oggetti complessi;
- classi CSS;
- ref;
- file o dati non serializzabili.

Disabilitarle tramite `argTypes` quando utile:

```tsx
onDelete: {
  control: false,
  table: {
    disable: true,
  },
},
```

## 3c. Custom args

Se una prop complessa produce una differenza rilevante, rappresentarla tramite un arg
custom semplice.

Esempi:

| Prop reale | Custom arg |
|---|---|
| `onDelete` | `enableDelete: boolean` |
| `onClose` | `enableClose: boolean` |
| `children: ReactNode` | `content: string` |
| `icon: ReactNode` | `showIcon: boolean` |
| `cta: object` | `enableCta: boolean` |

Il custom arg:

- deve essere serializzabile;
- non deve ridefinire una prop pubblica esistente;
- deve essere chiaramente descritto come controllo Storybook;
- deve essere mappato esplicitamente sulla prop reale.

```tsx
type ComponentStoryArgs = React.ComponentProps<typeof ComponentName> & {
  enableDelete: boolean;
};

argTypes: {
  enableDelete: {
    control: 'boolean',
    description:
      'Controllo Storybook: abilita l’azione di eliminazione.',
    table: {
      category: 'Storybook controls',
    },
  },
  onDelete: {
    control: false,
    table: {
      disable: true,
    },
  },
},
```

## 3d. Controls espliciti

Definire sempre:

```tsx
parameters: {
  controls: {
    include: ['label', 'variant', 'enableDelete'],
  },
},
```

La lista deve contenere solo props semplici e custom args utili.

---

# Step 4 — Costruzione della story matrix

Derivare una matrice preliminare dal codice:

| Evidenza nel componente | Caso candidato |
|---|---|
| `loading?: boolean` | `Loading` |
| `error?: boolean` | `Error` |
| `disabled?: boolean` | `Disabled` |
| valore vuoto/pieno | `Empty` e `WithValue` |
| file valorizzato | `WithFile` |
| testo soggetto a troncamento | `WithTruncatedText` |
| icona opzionale | `WithIcon` |
| callback visualmente rilevante | Custom arg nel Playground o story dedicata |
| più `variant` | Story comparativa `Variants` |
| più `size` | Story comparativa `Sizes` |
| più colori | Story comparativa `Colors` |
| comportamento mobile distinto | `Mobile` |
| componente controllato | Story interattiva con stato locale |
| dialog/portal | Story isolata con parametri docs adeguati |

La matrice è un inventario preliminare, non un obbligo a creare una story per ogni riga.

---

# Step 5 — Consolidamento della copertura

Usare una strategia ibrida tra stories isolate e comparative.

## 5a. Stories isolate

Creare una story autonoma quando il caso:

- rappresenta uno stato importante;
- richiede interazione;
- richiede stato locale;
- ha un layout sostanzialmente diverso;
- necessita di un viewport specifico;
- deve essere verificato separatamente in Chromatic;
- rappresenta un caso limite significativo.

Casi tipici:

- `Loading`;
- `Error`;
- `Disabled`;
- `WithValue`;
- `WithTruncatedText`;
- `Mobile`;
- stato controllato o interattivo.

## 5b. Stories comparative

Raggruppare più casi in una story quando il valore principale è il confronto visivo.

Casi tipici:

- `Variants`;
- `Sizes`;
- `Colors`;
- configurazioni omogenee;
- stati statici semplici.

Usare `Stack`, `Box` o una griglia semplice, con etichette descrittive quando necessarie.

## 5c. Regola anti-duplicazione

Non generare contemporaneamente:

- `Small`, `Medium`, `Large`;
- e una story `Sizes` contenente gli stessi casi;

salvo che le stories isolate siano necessarie per:

- viewport diversi;
- interazioni diverse;
- snapshot separati;
- documentazione specifica.

## 5d. Ordine consigliato

1. `Playground`;
2. `Default`;
3. varianti comparative;
4. dimensioni e colori;
5. stati;
6. configurazioni con contenuto;
7. casi limite;
8. responsive.

`Playground` deve essere il primo export, così da poter essere usato come story primaria
nella pagina MDX.

---

# Step 6 — Generazione del file stories

## 6a. Import

Usare:

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
```

Importare `useState` o altri hook solo quando necessari.

Importare:

```tsx
import { breakpointsChromaticValues } from '@theme';
```

Usare gli alias del repository quando verificati.

## 6b. Meta senza custom args

Quando non servono custom args:

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

import { breakpointsChromaticValues } from '@theme';
import { ComponentName } from '@components/ComponentName';

const componentMaxWidth = 600;

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: ['label', 'variant', 'disabled'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth,
      ),
    },
  },
  args: {
    label: 'Continua',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Testo mostrato dal componente.',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: 'radio',
      description: 'Variante visiva del componente.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita l’interazione con il componente.',
    },
  },
  render: ({ label, variant, disabled }) => (
    <ComponentName
      label={label}
      variant={variant}
      disabled={disabled}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Playground: Story = {};
```

## 6c. Meta con custom args

Quando servono custom args:

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

import { breakpointsChromaticValues } from '@theme';
import { ComponentName } from '@components/ComponentName';

const componentMaxWidth = 600;

type ComponentStoryArgs = React.ComponentProps<typeof ComponentName> & {
  enableDelete: boolean;
};

const meta: Meta<ComponentStoryArgs> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['!dev'],
  parameters: {
    controls: {
      include: ['label', 'variant', 'enableDelete'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth,
      ),
    },
  },
  args: {
    label: 'Documento caricato',
    variant: 'filled',
    enableDelete: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Testo mostrato dal componente.',
    },
    variant: {
      options: ['filled', 'outlined'],
      control: 'radio',
      description: 'Variante visiva del componente.',
    },
    enableDelete: {
      control: 'boolean',
      description:
        'Controllo Storybook: abilita l’azione di eliminazione.',
      table: {
        category: 'Storybook controls',
      },
    },
    onDelete: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: ({ label, variant, enableDelete }) => (
    <ComponentName
      label={label}
      variant={variant}
      onDelete={enableDelete ? () => {} : undefined}
    />
  ),
};

export default meta;

type Story = StoryObj<ComponentStoryArgs>;

export const Playground: Story = {};
```

Regole:

- includere nella parte custom solo args non già presenti nelle props pubbliche;
- non ridefinire props primitive con tipi differenti;
- mantenere il tipo delle stories coerente con quello del meta;
- non usare cast `as Meta`;
- preferire un’annotazione esplicita `Meta<...>` compatibile con il progetto.

## 6d. Mapping esplicito

Nel Playground mappare sempre gli args esplicitamente:

```tsx
render: ({ label, color, enableDelete }) => (
  <ComponentName
    label={label}
    color={color}
    onDelete={enableDelete ? () => {} : undefined}
  />
),
```

Non usare:

```tsx
render: (args) => <ComponentName {...args} />,
```

Questa regola evita:

- passaggio accidentale di custom args al componente;
- errori con discriminated union;
- esposizione di props complesse;
- configurazioni non valide.

## 6e. Render con hook

Se un render usa hook React, deve essere una funzione nominata con iniziale maiuscola:

```tsx
export const Controlled: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: function RenderControlled() {
    const [value, setValue] = useState('');

    return (
      <ComponentName
        value={value}
        onChange={setValue}
      />
    );
  },
};
```

Non usare hook dentro un’arrow function assegnata a `render`.

Gli hook devono essere chiamati al livello principale della funzione, nel rispetto delle
Rules of Hooks.

## 6f. Stories statiche

Le stories statiche devono:

- essere autonome;
- usare JSX esplicito;
- usare copy realistica;
- non dipendere dagli args di altre stories;
- non usare spread tra stories;
- disabilitare i Controls quando non utili.

```tsx
export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <ComponentName
      label="Continua"
      variant="primary"
      disabled={false}
    />
  ),
};
```

Non usare:

```tsx
export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
```

## 6g. Stories comparative

```tsx
export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <Stack spacing={2}>
      <ComponentName
        label="Variante primaria"
        variant="primary"
      />
      <ComponentName
        label="Variante secondaria"
        variant="secondary"
      />
    </Stack>
  ),
};
```

## 6h. Callback

Per callback non rilevanti al caso visuale:

```tsx
onClick={() => {}}
```

Per callback che aggiornano lo stato, usare una funzione render nominata e uno stato locale.

## 6i. Valori realistici

| Tipo | Valore consigliato |
|---|---|
| Label | `"Continua"` |
| Titolo | `"Dettagli del servizio"` |
| Messaggio | Frase italiana coerente e breve |
| File | `new File([], 'documento.pdf')` |
| MIME types | `['image/png', 'application/pdf']` |
| Callback | `() => {}` |
| Boolean di stato | `true` soltanto nella story dedicata |
| Contenuto opzionale irrilevante | Omettere |

Evitare:

- `"string"`;
- `"label"`;
- `"test"`;
- lorem ipsum, salvo casi esplicitamente dedicati alla lunghezza del testo.

---

# Step 7 — Chromatic e viewport

`breakpointsChromaticValues` definisce le larghezze standard usate da Chromatic per
generare gli snapshot visuali.

Usare:

```tsx
parameters: {
  chromatic: {
    viewports: breakpointsChromaticValues.filter(
      (resolution) => resolution <= componentMaxWidth,
    ),
  },
},
```

## Determinazione di `componentMaxWidth`

Seguire questo ordine:

1. valore fornito dallo sviluppatore;
2. valore usato da componenti analoghi nel repository;
3. larghezza massima verificabile dal componente;
4. euristica.

Euristica:

| Tipo di componente | Valore |
|---|---:|
| Atomic: badge, chip, button | `400` |
| Card o tile | `600` |
| Dialog o modal | `800` |
| Form o input complesso | `900` |
| Tabelle o layout full-width | `1280` |

Se il componente è realmente full-width o cambia layout anche su viewport ampie, usare
direttamente:

```tsx
viewports: breakpointsChromaticValues
```

Riportare sempre nel riepilogo se il valore è:

- fornito;
- ricavato da una convenzione;
- inferito tramite euristica.

Non confondere i viewport Chromatic con i breakpoint MUI: i primi determinano le dimensioni
degli snapshot, non modificano il comportamento del tema.

---

# Step 8 — Figma

## 8a. Link

Chiedere sempre il link Figma.

Se disponibile:

- inserirlo nell’MDX;
- non modificarlo;
- non sostituirlo con URL inventati.

Se non disponibile e lo sviluppatore vuole procedere:

```md
- 🎨 Link Figma: <!-- TODO: confermare con lo sviluppatore -->
```

## 8b. Figma MCP

Usare Figma MCP soltanto se:

- lo strumento è disponibile;
- lo sviluppatore conferma di avere accesso;
- il link è stato fornito.

Figma MCP può essere usato per verificare:

- nomi delle varianti;
- stati;
- token;
- spacing;
- comportamento responsive;
- descrizioni ufficiali.

## 8c. Discrepanze Figma/codice

Se Figma contiene una variante non supportata dal codice:

- non generare la story;
- documentare la discrepanza nelle note.

Se il codice contiene uno stato non presente in Figma:

- generare la story se visivamente rilevante;
- segnalarlo nelle note per i designer.

---

# Step 9 — Generazione della pagina MDX

## 9a. Import

Importare i blocchi Storybook da:

```mdx
import {
  Meta,
  Title,
  Primary,
  Controls,
  Story,
} from '@storybook/addon-docs/blocks';
```

Non usare `@storybook/blocks`.

Importare i componenti custom del progetto usando i path verificati:

```mdx
import Overview from './components/Overview';
import Section from './components/Section';
import SubSection from './components/SubSection';
```

Importare le stories:

```mdx
import * as ComponentNameStories from '../stories/ComponentName.stories';
```

## 9b. Struttura base

```mdx
import {
  Meta,
  Title,
  Primary,
  Controls,
  Story,
} from '@storybook/addon-docs/blocks';

import Overview from './components/Overview';
import Section from './components/Section';
import SubSection from './components/SubSection';

import * as ComponentNameStories from '../stories/ComponentName.stories';

<Meta of={ComponentNameStories} />

<Title />

<Overview>
  <strong>ComponentName</strong> descrizione sintetica e verificabile del
  componente.
</Overview>

<Section
  title="Riferimenti"
  description="Risorse utili per confrontare implementazione e specifiche."
>
  <ul>
    <li>🎨 <a href="FIGMA_URL">Figma</a></li>
    <li>💻 <a href="GITHUB_URL">Codice sorgente</a></li>
  </ul>
</Section>

<Section
  title="Playground"
  description="Usa i controlli per verificare le configurazioni principali del componente."
>
  <Primary />
  <Controls />
</Section>

<Section
  title="Varianti e stati"
  description="Configurazioni statiche utili per confrontare l’aspetto e gli stati del componente."
>
  <SubSection title="Default">
    Descrizione sintetica della configurazione di base.

    <Story of={ComponentNameStories.Default} />
  </SubSection>

  <SubSection title="Loading">
    Descrizione verificabile dello stato di caricamento.

    <Story of={ComponentNameStories.Loading} />
  </SubSection>
</Section>

<Section
  title="Note per gli sviluppatori"
  description="Indicazioni tecniche per integrare correttamente il componente."
>
  Contenuto tecnico verificabile.
</Section>

<Section
  title="Note per i designer"
  description="Informazioni utili per la revisione visuale e il confronto con Figma."
>
  Contenuto visuale verificabile.
</Section>
```

Adattare le sottosezioni agli export realmente presenti. Non referenziare stories inesistenti.

## 9c. Overview

L’Overview deve spiegare, quando deducibile:

- che cos’è il componente;
- quale funzione svolge;
- quali configurazioni principali supporta;
- eventuale relazione con un componente MUI di base.

Non includere dettagli implementativi superflui.

Se lo scopo non è inferibile:

```mdx
<Overview>
  <!-- TODO: confermare con lo sviluppatore -->
</Overview>
```

## 9d. Playground

La sezione Playground è sempre presente.

Deve contenere:

```mdx
<Primary />
<Controls />
```

Il `Playground` deve essere il primo export delle stories.

## 9e. Varianti e stati

Creare una `SubSection` per ogni story statica o gruppo logico documentato.

Ogni sottosezione deve contenere:

- titolo coerente con l’export;
- una o due frasi in italiano;
- riferimento esatto alla story.

```mdx
<SubSection title="Varianti">
  La story confronta le varianti visive supportate dal componente.

  <Story of={ComponentNameStories.Variants} />
</SubSection>
```

## 9f. Note per gli sviluppatori

La sezione è sempre presente e può documentare:

- componente controllato o non controllato;
- callback;
- vincoli tra props;
- union discriminatorie;
- uso di `children`;
- personalizzazione MUI;
- limitazioni note;
- interfaccia TypeScript pubblica;
- breve esempio d’uso, se utile.

Non duplicare l’intera implementazione.

## 9g. Note per i designer

La sezione è sempre presente e può documentare:

- link Figma;
- varianti implementate;
- stati da considerare;
- token verificabili;
- spacing verificabile;
- comportamento responsive;
- limiti visuali;
- differenze tra codice e Figma;
- `componentMaxWidth` usato per Chromatic.

Non inventare token o regole di layout.

---

# Step 10 — Accessibilità

Creare una sezione `Accessibilità` soltanto se il codice o i requisiti mostrano elementi
rilevanti e verificabili.

Possibili sottosezioni:

- `Props rilevanti`;
- `Prop non disponibili`;
- `Focus da tastiera`;
- `Navigazione da tastiera`;
- `Area cliccabile`;
- `Contrasto`;
- `Esempio accessibile`.

Esempio:

```mdx
<Section
  title="Accessibilità"
  description="L’accessibilità finale dipende dalla corretta configurazione delle props testuali."
>
  <SubSection title="Props rilevanti">
    <ul>
      <li>
        <strong>aria-label</strong>: definisce il nome accessibile quando
        il componente non mostra un testo sufficiente.
      </li>
    </ul>
  </SubSection>

  <SubSection title="Esempio accessibile">
    ```tsx
    <ComponentName
      aria-label="Elimina il documento"
      onClick={handleDelete}
    />
    ```
  </SubSection>
</Section>
```

L’esempio accessibile:

- deve essere un code block `tsx`;
- deve usare props realmente disponibili;
- non deve essere sostituito da una story;
- deve mostrare solo il codice necessario.

Non creare una sezione generica se non emergono elementi concreti.

---

# Step 11 — Output

Produrre gli elementi nel seguente ordine.

## 11a. Audit

Se esistono file precedenti, mostrare l’audit prima dei file aggiornati.

## 11b. File stories

Mostrare il file completo:

```tsx
// src/stories/ComponentName.stories.tsx
```

## 11c. File MDX

Mostrare il file completo:

```mdx
<!-- src/docs/ComponentName.mdx -->
```

## 11d. Riepilogo

Usare questa struttura:

```md
## Output per ComponentName

### Stories generate o aggiornate ([N] totali)

- `Playground` — configurazione interattiva con Controls.
- `Default` — configurazione di base.
- `Variants` — confronto delle varianti supportate.
- `Loading` — stato di caricamento.

### Strategia di copertura

- Stories isolate: `Default`, `Loading`
- Stories comparative: `Variants`
- Casi esclusi: [motivazione]

### componentMaxWidth

`600` — inferito tramite euristica per componenti di tipo card.

### Props analizzate ([N] totali)

| Prop | Tipo | Classificazione | Playground | Gestione |
|---|---|---|---:|---|
| `label` | `string` | content | Sì | Controllo diretto |
| `variant` | `'filled' \| 'outlined'` | visual-state | Sì | Controllo diretto |
| `onDelete` | `() => void` | callback | No | Custom arg `enableDelete` |

### Controls esposti

- `label`
- `variant`
- `enableDelete`

### Props complesse gestite tramite custom controls

- `onDelete` → `enableDelete`

### Note e assunzioni

- Link Figma non fornito: inserito un TODO.
- `componentMaxWidth` inferito.
- La prop `sx` è esclusa dai Controls perché complessa.
```

---

# Step 12 — Self-check finale

Prima di consegnare l’output, verificare e riportare:

```md
## Self-check finale — Component Documentation Guidelines

### Contenuto

- [x] Descrizione verificabile dal codice o dai requisiti
- [x] Nessuna finalità inventata
- [x] Scopo del componente chiaro oppure TODO esplicito
- [x] Riferimento Figma corretto oppure TODO
- [x] Riferimento GitHub corretto oppure TODO
- [x] Contenuti utili a sviluppatori e designer
- [x] Prosa documentale in italiano

### Playground

- [x] Controls limitati alle props utili
- [x] `parameters.controls.include` presente
- [x] Props complesse escluse dai Controls diretti
- [x] Props complesse rilevanti rappresentate da custom args
- [x] Custom args distinti dalle props pubbliche
- [x] Mapping esplicito degli args

### Stories statiche

- [x] Copertura degli stati visuali rilevanti
- [x] Strategia isolata/comparativa motivata
- [x] Nessuna duplicazione non necessaria
- [x] Stories autonome
- [x] Nessuno spread tra stories
- [x] Copy realistica
- [x] Revisione possibile senza manipolare i Controls

### TypeScript

- [x] Meta e stories usano tipi coerenti
- [x] Custom args tipizzati correttamente
- [x] Nessun cast `as Meta`
- [x] Nessuno spread generico rischioso
- [x] Union discriminatorie rispettate
- [x] Render con hook definito come funzione nominata

### Storybook e Chromatic

- [x] Import da `@storybook/react-vite`
- [x] `tags: ['!dev']` presente
- [x] `breakpointsChromaticValues` configurato
- [x] `componentMaxWidth` fornito o motivato
- [x] Nessun ThemeProvider ridondante

### MDX

- [x] Import da `@storybook/addon-docs/blocks`
- [x] Uso di `Overview`, `Section` e `SubSection`
- [x] `Primary` e `Controls` presenti
- [x] Tutti i riferimenti `<Story>` puntano a export esistenti
- [x] Note per sviluppatori presenti
- [x] Note per designer presenti

### Accessibilità

- [x] Sezione presente solo se supportata dal codice
- [x] Props configurabili documentate
- [x] Nessuna raccomandazione generica inventata
- [x] Eventuale esempio mostrato in un code block TSX
```

Se una voce non è soddisfatta:

1. correggere i file prima della consegna;
2. se non è possibile correggerla per mancanza di informazioni, lasciarla non selezionata;
3. spiegare il motivo nelle note;
4. indicare la domanda aperta allo sviluppatore.

---

# Gestione degli errori e dei casi incompleti

| Situazione | Azione |
|---|---|
| Componente non disponibile | Chiedere sorgente o path |
| Props non esportate | Inferirle dal codice e segnalarlo |
| Props generiche o annidate | Usare il tipo pubblico più esterno e documentare il limite |
| Union discriminata | Evitare spread e creare configurazioni valide esplicite |
| Scopo non chiaro | Chiedere chiarimenti o inserire TODO |
| Link Figma assente | Chiederlo; se si procede, inserire TODO |
| Figma MCP assente | Procedere dal codice senza leggere Figma |
| Link GitHub assente | Non inventarlo; inserire TODO |
| Story esistente | Eseguire sempre l’audit |
| MDX esistente | Eseguire sempre l’audit |
| Nessuno stato visuale | Generare Playground e Default |
| Nessuna prop utile nei Controls | Mantenere un Playground minimo e motivarlo |
| `children: ReactNode` | Usare contenuto realistico; custom arg testuale solo se utile |
| Componente controllato | Creare render nominato con stato locale |
| Portal o dialog | Valutare docs non inline e altezza iframe |
| `componentMaxWidth` assente | Cercare analoghi e poi applicare l’euristica |
| Figma e codice divergono | Priorità al codice e nota esplicita |
| Informazioni insufficienti sull’accessibilità | Omettere la sezione o chiedere chiarimenti |

---

# Regole assolute

## Obbligatorie

- Se una story esiste, eseguire l’audit prima di proporre modifiche.
- Se un MDX esiste, eseguire l’audit prima di proporre modifiche.
- Conservare le parti già conformi.
- Importare Storybook da `@storybook/react-vite`.
- Usare `tags: ['!dev']` nel meta.
- Usare `Meta<typeof Component>` quando non esistono custom args.
- Usare `Meta<ComponentStoryArgs>` quando esistono custom args.
- Usare un tipo `StoryObj` coerente con il tipo del meta.
- Usare `argTypes` per descrivere e configurare i controlli.
- Limitare i Controls con `parameters.controls.include`.
- Non esporre direttamente props complesse.
- Rappresentare le props complesse rilevanti tramite custom args.
- Mappare esplicitamente gli args sulle props reali.
- Usare una funzione render nominata e capitalizzata quando sono presenti hook.
- Rendere autonome le stories statiche.
- Usare copy realistica.
- Configurare Chromatic con `breakpointsChromaticValues`.
- Motivare `componentMaxWidth`.
- Importare i blocchi MDX da `@storybook/addon-docs/blocks`.
- Usare la struttura `Overview`, `Section`, `SubSection`, `Primary`, `Controls`, `Story`.
- Scrivere la prosa in italiano.
- Includere note per sviluppatori e designer.
- Includere l’accessibilità solo quando verificabile.
- Non inventare link, comportamenti, varianti o linee guida.
- Eseguire il self-check finale.
- Produrre una proposta consultiva senza modificare automaticamente il repository.

## Vietate

- Non usare `@storybook/react`.
- Non usare `@storybook/blocks`.
- Non usare `tags: ['autodocs']`.
- Non omettere `tags: ['!dev']`.
- Non lasciare Controls automatici.
- Non esporre callback, ReactNode, `sx`, slot o ref direttamente.
- Non ridefinire props pubbliche dentro il tipo dei custom args.
- Non usare `<Component {...args} />` nel Playground.
- Non usare spread di args tra stories.
- Non chiamare hook dentro un render anonimo non conforme alle Rules of Hooks.
- Non usare cast `as Meta`.
- Non aggiungere un ThemeProvider decorator se il tema è già globale.
- Non generare una story per ogni combinazione possibile.
- Non duplicare stories isolate e comparative senza una motivazione.
- Non inventare il link GitHub.
- Non bloccare necessariamente il lavoro per l’assenza di Figma se lo sviluppatore vuole procedere.
- Non usare Figma come sostituto dell’analisi del codice.
- Non creare sezioni di accessibilità generiche.
- Non modificare direttamente i file senza una richiesta esplicita separata.
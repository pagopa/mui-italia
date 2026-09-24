---
applyTo: '**/*.stories.tsx,**/*.mdx'
---

# Istruzioni per la creazione di stories e documentazione Storybook

Usa queste istruzioni quando l'utente chiede di creare, aggiornare o completare una stories file Storybook per un componente React + TypeScript + MUI del repository `mui-italia`.

## Obiettivo

Generare output utili e verificabili per sviluppatori e designer, mantenendo coerenza con il design system, con le convenzioni del repository e con le API pubbliche del componente.

## Input da raccogliere prima di scrivere

Raccogli sempre questi dati (chiedendo esplicitamente ciò che manca):

- path del componente `.tsx` (o sorgente completo);
- path della stories target (`ComponentName.stories.tsx`);
- link Figma del componente (opzionale, ma consigliato);
- link GitHub sorgente (opzionale, non inventarlo se manca);
- titolo Storybook desiderato (default: `Components/ComponentName`);
- eventuale `componentMaxWidth` per Chromatic (se assente, inferiscilo e dichiaralo nelle note);
- conferma finale dell'utente prima di creare/modificare file.

## Principi non negoziabili

- Non inventare comportamento non deducibile dal codice.
- Tratta il codice del componente come fonte di verita per props e stati.
- Se una stories esiste gia, esegui audit e fix mirato; evita rigenerazioni complete non necessarie.
- Preserva le parti gia conformi e modifica solo il minimo indispensabile.
- Mantieni naming, API pubblica e stile coerenti con il repository.

## Convenzioni Storybook del repository

Per `*.stories.tsx`:

- preferisci `@storybook/react-vite`;
- importa `breakpointsChromaticValues` da `@theme` quando serve il filtro viewports;
- usa titolo gerarchico coerente (`Components/...` o se presente nel contesto locale altra gerarchia gia adottata);
- preferisci `Meta` + `satisfies Meta<typeof ComponentName>`;
- preferisci `StoryObj<typeof ComponentName>`;
- se il file esistente nella stessa area usa `StoryFn` come convenzione consolidata, puoi mantenerla per coerenza locale, documentando la scelta nelle note;
- niente spread opaco di props (`<Component {...args} />`) quando rende poco chiari vincoli o mapping;
- niente spread tra stories (`{ ...Default.args }`);
- niente `tags: ['autodocs']` aggiunti automaticamente;
- niente decorator `ThemeProvider` aggiunti automaticamente nel meta.

Per `*.mdx`:

- usa `@storybook/addon-docs/blocks` (non `@storybook/blocks`);
- struttura in stile docs del repository: intro, link utili, playground, varianti/stati, note sviluppatori, note designer;
- testi narrativi in italiano;
- sezioni tecniche Storybook (`Playground`, `Canvas`, `Controls`) con naming tecnico standard;
- includi solo contenuti verificabili dal codice o marcati con placeholder TODO esplicito.

## Procedura operativa

### 1. Analisi componente

Analizza il file componente e mappa:

- props: tipo, obbligatorieta, default, classificazione (visual state, content, callback, complex);
- stati visuali distinti (es. loading, error, disabled, varianti, size);
- eventuale modalita controlled/uncontrolled;
- props complesse rilevanti per UX da rappresentare con arg semplificati.

### 2. Verifica stories esistente

Se la stories esiste, esegui checklist:

- import corretti (`@storybook/react-vite`, `@theme` dove previsto);
- meta tipizzato correttamente;
- playground presente e utile;
- controls espliciti (non completamente automatici);
- storie statiche autoesplicative e realistiche;
- copertura degli stati visuali davvero distinti.

Classifica i problemi:

- Critico: mismatch tecnico/convenzioni forti.
- Medio: copertura incompleta o esempi poco realistici.
- OK: conforme, da preservare.

Applica fix chirurgici su Critico/Medio, preservando il resto.

### 3. Generazione/aggiornamento stories

Crea almeno:

- `Playground` con controls espliciti e soli arg utili;
- `Default` con configurazione realistica.

Aggiungi storie extra solo per stati/varianti che cambiano davvero l'output visivo o il comportamento osservabile.

Regole per i controls:

- esponi direttamente props semplici (string/number/boolean/enum/union semplici);
- non esporre direttamente callback, `ReactNode`, `sx`, `ref`, slot complessi;
- se una prop complessa e rilevante per UX, rappresentala con arg semplificato (es. `deletable` -> `onDelete`).

### 4. Generazione/aggiornamento MDX

Se richiesto dall'utente o necessario per documentare un nuovo componente pubblico:

- crea/aggiorna `ComponentName.mdx` coerente con la stories;
- collega i `Canvas` alle named exports reali della stories;
- inserisci link Figma se fornito;
- inserisci link GitHub solo se fornito, altrimenti placeholder TODO esplicito;
- includi sezione accessibilita solo quando esistono props/accessibility contract configurabili lato consumatore.

## Bilanciamento regole

Applica regole forti ma con eccezioni motivate:

- se una convenzione locale consolidata e compatibile migliora la coerenza, preservala;
- in caso di trade-off, privilegia chiarezza, verificabilita e mantenibilita;
- spiega ogni eccezione nel riepilogo finale.

## Output atteso

Quando consegni il lavoro, fornisci:

- file stories completo o patch mirata;
- file MDX completo o patch mirata (se richiesto/necessario);
- riepilogo sintetico con:
  - storie aggiunte/modificate;
  - convenzioni applicate;
  - eventuali assunzioni (es. `componentMaxWidth` inferito);
  - eventuali TODO lasciati esplicitamente per dati mancanti.

## Cosa evitare

- Non rigenerare da zero una stories gia buona.
- Non introdurre testo docs non verificabile.
- Non aggiungere refactor non richiesti fuori dallo scopo.
- Non inventare link o percorsi GitHub/Figma.
- Non ampliare il numero di stories con varianti ridondanti senza valore reale.
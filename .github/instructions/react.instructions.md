---
applyTo: '**/*.tsx,**/*.jsx'
---

# Istruzioni per la review di React

Applica i controlli seguenti ai componenti React.

## Direttiva `use client`

Ogni file che implementa un componente React deve iniziare, prima degli import, con:

```ts
'use client';
```

Non aggiungerla a file che contengono soltanto tipi, utility, test o re-export. Verifica che non venga rimossa durante refactoring o spostamenti.

## Rendering, stato e hook

Controlla:

- assenza di aggiornamenti di stato o side effect durante il rendering;
- stato derivato non duplicato e sincronizzazione corretta tra props e stato;
- rendering condizionale coerente e chiavi stabili nelle liste;
- assenza di mutazioni di props o stato;
- dipendenze corrette degli hook e assenza di closure obsolete o loop;
- cleanup di listener, timer, observer e subscription;
- gestione delle operazioni asincrone quando necessaria;
- rispetto delle Rules of Hooks.

Non richiedere memoizzazione senza un problema concreto di prestazioni o identità referenziale.

## Eventi e comportamento nativo

Controlla:

- coerenza tra eventi mouse, touch e tastiera;
- rispetto del comportamento degli elementi HTML nativi;
- stato `disabled` applicato anche agli handler;
- assenza di doppie esecuzioni;
- uso corretto di `preventDefault` e `stopPropagation`;
- composizione degli handler interni con quelli del consumatore.

## SSR e ambiente browser

Segnala accessi non protetti a `window`, `document`, `navigator` o storage, markup server/client non deterministico, hydration mismatch, side effect all’importazione e dipendenze dal layout eseguite prima del mount.

## Material UI

Verifica:

- uso corretto di `ownerState`, slot e `slotProps`;
- supporto di varianti, override del tema e API di personalizzazione previste;
- compatibilità con la prop `component`, quando supportata;
- forwarding delle props verso lo slot appropriato;
- assenza di selettori basati su dettagli interni fragili di Material UI.

## Creazione di nuovi componenti

### Naming

Ogni nuovo componente pubblico deve iniziare con il prefisso `MI` per distinguerlo dai componenti esportati da Material UI. Anche le props devono seguire normalmente il formato `MI<ComponentName>Props`.

Mantieni il naming coerente tra file, componente, props, test, documentazione ed export. Non richiedere la rinomina di componenti preesistenti non coinvolti dalla modifica.

### Definizione delle props

Le props devono in generale derivare dal componente Material UI più appropriato, preservandone tipi e comportamento. Non esporre però automaticamente tutte le possibilità di personalizzazione: escludi, per esempio tramite `Omit`, le props che permetterebbero di aggirare struttura, varianti, comportamento o stile intenzionalmente controllati.

Verifica che:

- le esclusioni siano intenzionali e non rimuovano attributi HTML necessari;
- le props già tipizzate da Material UI non vengano ridefinite senza motivo;
- le props custom abbiano scopo e comportamento chiari;
- i tipi pubblici corrispondano alle props effettivamente gestite o inoltrate.

### Attributi HTML, `sx` e forwarding

I componenti devono esporre e inoltrare all’elemento o allo slot corretto, quando applicabili:

- `id`, attributi `data-*` e `aria-*`;
- attributi ed event handler HTML compatibili;
- `className`, `style`, `sx` e `ref` quando fanno parte dell’API pubblica.

La prop `sx` dovrebbe essere normalmente disponibile, salvo motivazione concreta e documentata.

Quando le props estendono quelle di Material UI o dell’elemento HTML sottostante, raccogli e inoltra tutte quelle pubbliche non consumate esplicitamente dal componente. Verifica che:

- le rest props non vadano perse durante la destrutturazione;
- props interne non finiscano accidentalmente nel DOM;
- l’ordine degli spread non sovrascriva stati o comportamenti controllati;
- props consumate internamente non siano duplicate;
- handler interni ed esterni siano composti quando entrambi devono essere eseguiti.

### Export

Per ogni nuovo componente pubblico, esporta componente e props sia dall’`index.ts` locale sia da `components/index.ts`.

```ts
export { default as MIExample } from './MIExample';
export type { MIExampleProps } from './MIExample';
```

Segnala export mancanti, import profondi resi necessari o dettagli interni resi pubblici per errore. I componenti intenzionalmente interni non devono essere aggiunti all’entry point pubblico.

## Composizione tramite `children`

Quando il contenuto rappresenta naturalmente la struttura interna del componente, preferisci `children` a props come `content`, `header`, `footer` o `items`. Mantieni una prop dedicata quando rappresenta configurazione, valore semantico o dati che il componente deve elaborare.

Se sono supportati soltanto figli specifici, esprimi il vincolo nel tipo seguendo, quando applicabile, i pattern di `MIWizard` e `MIBreadcrumbs`. Verifica che:

- siano accettati solo i figli gestiti dall’implementazione;
- singoli elementi, collezioni, fragment, `null` e rendering condizionale siano permessi solo se realmente supportati;
- il vincolo TypeScript corrisponda al comportamento runtime;
- non si usi il generico `ReactNode` quando è necessaria una struttura precisa;
- il tipo non sia più restrittivo del comportamento effettivo.

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

Segnala:

- accessi non protetti a `window`, `document`, `navigator` o storage;
- markup server e client non deterministico;
- possibili hydration mismatch;
- side effect eseguiti durante l’importazione;
- dipendenze dal layout del browser eseguite prima del mount.

## Material UI

Verifica:

- uso corretto di `ownerState`, slot e `slotProps`;
- supporto di varianti, override del tema e API di personalizzazione previste;
- compatibilità con la prop `component`, quando supportata;
- forwarding delle props verso lo slot appropriato;
- assenza di selettori basati su dettagli interni fragili di Material UI.

## Creazione di nuovi componenti

### Naming

Ogni nuovo componente pubblico deve iniziare con il prefisso `MI` per distinguerlo dai componenti esportati da Material UI.

Anche le props devono seguire normalmente il formato `MI<ComponentName>Props`.

Mantieni il naming coerente tra file, componente, props, test, documentazione ed export. Non richiedere la rinomina di componenti preesistenti non coinvolti dalla modifica.

### Definizione delle props

Le props devono in generale derivare dal componente Material UI più appropriato, preservandone tipi e comportamento.

Non esporre però automaticamente tutte le possibilità di personalizzazione. Escludi, per esempio tramite `Omit`, le props che permetterebbero di aggirare struttura, varianti, comportamento o stile intenzionalmente controllati.

Verifica che:

- le esclusioni siano intenzionali e non rimuovano attributi HTML necessari;
- le props già tipizzate da Material UI non vengano ridefinite senza motivo;
- le props custom abbiano scopo e comportamento chiari;
- i tipi pubblici corrispondano alle props effettivamente gestite o inoltrate.

### Attributi HTML, `sx` e forwarding

I componenti devono esporre e inoltrare all’elemento o allo slot corretto, quando applicabili:

- `id`;
- attributi `data-*`;
- attributi `aria-*`;
- attributi ed event handler HTML compatibili;
- `className`, `style`, `sx` e `ref` quando fanno parte dell’API pubblica.

La prop `sx` dovrebbe essere normalmente disponibile, salvo motivazione concreta e documentata.

Quando le props estendono quelle di Material UI o dell’elemento HTML sottostante, raccogli e inoltra tutte quelle pubbliche non consumate esplicitamente dal componente.

Verifica che:

- le rest props non vadano perse durante la destrutturazione;
- le props interne non finiscano accidentalmente nel DOM;
- l’ordine degli spread non sovrascriva stati o comportamenti controllati;
- le props consumate internamente non siano duplicate;
- gli handler interni ed esterni siano composti quando entrambi devono essere eseguiti.

### Export

Per ogni nuovo componente pubblico, esporta componente e props sia dall’`index.ts` locale sia da `components/index.ts`.

```ts
export { default as MIExample } from './MIExample';
export type { MIExampleProps } from './MIExample';
```

Segnala:

- export mancanti;
- import profondi resi necessari;
- props non disponibili dall’entry point pubblico;
- dettagli interni resi pubblici per errore.

I componenti intenzionalmente interni non devono essere aggiunti all’entry point pubblico.

## Composizione tramite `children`

Quando il contenuto rappresenta naturalmente la struttura interna del componente, preferisci `children` a props come `content`, `header`, `footer` o `items`.

Mantieni una prop dedicata quando rappresenta configurazione, un valore semantico o dati che il componente deve elaborare.

Se sono supportati soltanto figli specifici, esprimi il vincolo nel tipo seguendo, quando applicabile, i pattern di `MIWizard` e `MIBreadcrumbs`.

Verifica che:

- siano accettati solo i figli gestiti dall’implementazione;
- singoli elementi, collezioni, fragment, `null` e rendering condizionale siano permessi solo se realmente supportati;
- il vincolo TypeScript corrisponda al comportamento runtime;
- non si usi il generico `ReactNode` quando è necessaria una struttura precisa;
- il tipo non sia più restrittivo del comportamento effettivo.

## Internazionalizzazione dei contenuti

La libreria è utilizzata in applicazioni multilingua. Ogni testo rivolto all’utente introdotto da un componente deve essere configurabile dall’esterno, così che il consumatore possa fornire la traduzione appropriata.

Considera testi rivolti all’utente:

- label visibili;
- titoli e descrizioni;
- placeholder;
- messaggi di errore, validazione, conferma e stato;
- testi di pulsanti, link e azioni;
- testo alternativo per contenuti informativi;
- `aria-label` e altre stringhe accessibili;
- messaggi per stati vuoti, caricamento o assenza di risultati;
- testo generato in base allo stato o ai dati del componente.

Non inserire nel componente stringhe fisse in italiano, inglese o in un’altra lingua quando possono essere mostrate o annunciate all’utente.

I testi devono essere configurabili tramite un’API pubblica intenzionale, per esempio:

- props dedicate;
- oggetti di label tipizzati;
- `children`;
- slot o componenti renderizzabili;
- callback che ricevono stato o dati e restituiscono il contenuto appropriato.

Scegli l’approccio più semplice e coerente con il componente. Evita di introdurre una dipendenza diretta da una specifica libreria di internazionalizzazione: la traduzione è responsabilità dell’applicazione che utilizza la libreria.

Quando vengono forniti valori predefiniti, verifica che:

- possano essere tutti sovrascritti dall’esterno;
- non impediscano di tradurre completamente il componente;
- siano configurabili anche i testi condizionali e dinamici;
- le label accessibili siano configurabili separatamente quando non coincidono con il testo visibile;
- il componente non imponga ordine delle parole o regole grammaticali di una singola lingua;
- plurali, quantità e valori dinamici possano essere formattati dal consumatore;
- il componente non concateni frammenti tradotti in modo da produrre frasi difficili da localizzare.

Preferisci una callback o una label completa configurabile alla concatenazione interna di stringhe.

Esempio da evitare:

```tsx
<Typography>{count} elementi selezionati</Typography>
```

Esempio preferibile:

```tsx
<Typography>{selectedItemsLabel(count)}</Typography>
```

Verifica inoltre che le props dedicate ai contenuti:

- siano tipizzate ed esportate come parte dell’API pubblica;
- siano inoltrate allo slot o all’elemento corretto;
- siano documentate nelle story e nella documentazione MDX;
- abbiano nomi che ne descrivano chiaramente utilizzo e contesto;
- non vengano sovrascritte internamente da valori hard-coded.

Non segnalare stringhe non rivolte all’utente, come identificatori tecnici, nomi di eventi, chiavi interne, valori di enum, attributi di test o messaggi destinati esclusivamente agli sviluppatori.

Segnala invece qualsiasi testo user-facing non configurabile, anche quando compare soltanto in uno stato secondario o viene esposto esclusivamente alle tecnologie assistive.

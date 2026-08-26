---
applyTo: '**/*.tsx,**/*.jsx'
---

# Istruzioni per la review di React

Oltre alle istruzioni generali, applica i controlli seguenti ai componenti React.

Ricorda che **tutti i commenti pubblicati nella pull request devono essere in inglese**.

## Props e composizione

Verifica:

- corretto inoltro di props e attributi HTML;
- corretta gestione di `className`, `style` e `sx`;
- composizione delle props senza sovrascritture involontarie;
- preservazione degli handler forniti dal consumatore;
- uso coerente dei valori di default;
- supporto corretto dei componenti controllati e non controllati;
- corretto forwarding delle `ref`;
- compatibilità con le convenzioni Material UI.

Controlla che l’ordine degli spread non sovrascriva involontariamente proprietà, attributi ARIA, callback o stili.

## Rendering e stato

Controlla:

- assenza di aggiornamenti di stato durante il rendering;
- stato derivato non inutilmente duplicato;
- sincronizzazione corretta tra props e stato;
- rendering condizionale coerente;
- chiavi stabili e univoche nelle liste;
- assenza di side effect durante il rendering;
- assenza di mutazioni di props o stato;
- comportamento coerente dopo aggiornamenti delle props.

## Hook ed effetti

Verifica:

- dipendenze corrette di `useEffect`, `useMemo` e `useCallback`;
- cleanup di listener, timer, observer e subscription;
- assenza di closure obsolete;
- cancellazione o gestione delle operazioni asincrone quando necessario;
- assenza di loop di rendering;
- rispetto delle Rules of Hooks.

Non richiedere memoizzazione senza un problema concreto di prestazioni o identità referenziale.

## Eventi e comportamento nativo

Controlla:

- coerenza tra eventi mouse, touch e tastiera;
- rispetto del comportamento degli elementi HTML nativi;
- stato `disabled` applicato anche agli handler;
- assenza di doppia esecuzione degli eventi;
- uso corretto di `preventDefault` e `stopPropagation`;
- composizione degli handler interni con quelli del consumatore.

## SSR e ambiente browser

Segnala:

- accessi non protetti a `window`, `document`, `navigator` o storage durante rendering e importazione;
- markup server e client non deterministico;
- possibili hydration mismatch;
- side effect eseguiti all’importazione del modulo;
- dipendenze dal layout del browser eseguite prima del mount.

## Material UI

Verifica:

- uso corretto di `ownerState`;
- gestione coerente di slot e `slotProps`;
- supporto delle varianti e degli override del tema;
- preservazione delle API di personalizzazione;
- compatibilità con la prop `component`, quando prevista;
- forwarding delle props verso lo slot appropriato;
- assenza di selettori dipendenti da dettagli interni fragili di Material UI;
- per i nuovi componenti pubblici, derivazione intenzionale delle props dal componente Material UI corrispondente, esclusione delle personalizzazioni non supportate e conservazione degli attributi HTML generici;
- esportazione del componente e delle relative props sia dall’`index.ts` locale sia dall’entry point pubblico `components/index.ts`.

## Creazione di nuovi componenti

Quando una pull request introduce un nuovo componente pubblico, verifica che rispetti le convenzioni seguenti.

### Naming

- Il nome del componente deve iniziare con il prefisso `MI`, per distinguerlo dai componenti esportati direttamente da Material UI.
- Anche il tipo o l’interfaccia delle props deve seguire la stessa convenzione, usando normalmente il formato `MI<ComponentName>Props`.
- Il naming deve essere coerente tra file, componente, props, test, documentazione ed export.

Esempio:

- componente: `MIButton`;
- props: `MIButtonProps`.

Segnala i nuovi componenti pubblici senza prefisso `MI`, ma non richiedere la rinomina di componenti preesistenti se la pull request non li introduce o non ne modifica l’API pubblica.

### Definizione delle props

In generale, le props di un nuovo componente devono derivare dalle props del corrispondente componente Material UI, in modo da preservarne i tipi e il comportamento compatibile.

Verifica però che non vengano esposte automaticamente tutte le possibilità di personalizzazione di Material UI. Le props che consentirebbero al consumatore di modificare aspetti intenzionalmente controllati dal componente devono essere escluse esplicitamente dall’API pubblica, per esempio tramite `Omit` o una soluzione equivalente.

Quando esamini le props, verifica che:

- derivino dal componente Material UI più appropriato, quando ne esiste uno;
- le props escluse siano intenzionali e coerenti con le responsabilità del componente;
- non siano esposte props che consentano di aggirare varianti, struttura, comportamento o stile stabiliti dal componente;
- non vengano ridefinite manualmente props già fornite correttamente dai tipi Material UI;
- le props custom abbiano un comportamento e uno scopo chiari;
- le esclusioni non rimuovano accidentalmente attributi HTML generici necessari;
- i tipi pubblici corrispondano alle props effettivamente inoltrate a runtime.

L’obiettivo è fornire un’API intenzionale e limitare le personalizzazioni non previste, senza perdere gli attributi HTML necessari per identificazione, integrazione e test.

### Attributi HTML e personalizzazione controllata

I nuovi componenti devono continuare a esporre e inoltrare, quando applicabili all’elemento root:

- `id`;
- attributi `data-*`, incluso `data-testid`;
- attributi `aria-*`;
- attributi HTML standard compatibili con l’elemento renderizzato;
- event handler HTML compatibili, salvo quelli esclusi intenzionalmente per preservare il comportamento del componente.

La prop `sx` dovrebbe essere normalmente esposta e inoltrata, salvo che esista una motivazione concreta e documentata per impedirne l’uso.

Verifica che gli attributi HTML siano inoltrati all’elemento o allo slot corretto e che non vengano persi durante la destrutturazione delle props.

L’esposizione di `sx` non deve rendere inefficaci gli stati funzionali o compromettere il comportamento del componente. Non richiedere tuttavia di bloccare modifiche puramente visuali ottenute tramite `sx`, a meno che il repository definisca esplicitamente tale vincolo.

### Export del componente

Quando viene aggiunto un componente pubblico, verifica che il relativo `index.ts` esporti sia il componente sia il tipo delle props.

Esempio atteso:

```ts
export { default as MIExample } from './MIExample';
export type { MIExampleProps } from './MIExample';
```

Verifica inoltre che sia il componente sia le props vengano riesportati dall’`index.ts` della directory `components`, affinché siano disponibili ai consumatori della libreria.

Controlla quindi entrambi i livelli di export:

1. `index.ts` del singolo componente;
2. `components/index.ts`.

Segnala:

- componente esportato senza le relative props;
- props esportate solo localmente ma non dall’entry point pubblico;
- export presenti nel file del componente ma mancanti dagli `index.ts`;
- differenze tra named export, default export e modalità documentata di importazione;
- export che rendono pubblico per errore un dettaglio interno;
- import profondi necessari perché l’entry point pubblico non esporta il nuovo componente.

Un nuovo componente destinato esclusivamente all’uso interno non deve essere aggiunto all’entry point pubblico. In tal caso, verifica che questa scelta sia intenzionale e coerente con l’uso del componente.

## Direttiva `use client`

Ogni file che implementa un componente React deve iniziare con la direttiva:

```ts
'use client';
```

La direttiva deve:

- essere la prima istruzione del file, prima degli import;
- essere presente nei file che definiscono i componenti;
- non essere aggiunta inutilmente a file contenenti soltanto tipi, utility, test o re-export;
- non essere rimossa durante refactoring o spostamenti del componente.

Quando una pull request introduce un nuovo componente o modifica un file di componente, verifica che la direttiva sia presente e posizionata correttamente.

## Composizione tramite `children`

Quando un componente deve ricevere elementi React o contenuti renderizzabili, preferisci, dove possibile, la composizione tramite `children` rispetto a props dedicate come `content`, `header`, `footer`, `items` o simili.

La composizione tramite `children` dovrebbe essere preferita quando:

- il contenuto rappresenta naturalmente la struttura interna del componente;
- consente di comporre componenti senza introdurre molte props specializzate;
- rende l’API più flessibile senza esporre personalizzazioni indesiderate;
- evita di rappresentare elementi React come dati o callback non necessari.

Non richiedere l’uso di `children` quando una prop descrive realmente una configurazione, un valore semantico o un dato strutturato che il componente deve elaborare.

### Vincoli sul tipo di `children`

Quando il componente accetta soltanto determinati componenti figli, valuta se il tipo di `children` debba esprimere esplicitamente tale vincolo, seguendo i pattern già utilizzati da `MIWizard` e `MIBreadcrumbs`.

Verifica che:

- siano accettati soltanto i tipi di figli supportati dall’implementazione;
- il tipo consenta una singola istanza o una collezione, quando entrambe sono valide;
- eventuali fragment, valori `null` e rendering condizionale siano supportati soltanto se gestiti correttamente;
- il vincolo TypeScript corrisponda ai controlli e al comportamento runtime;
- non venga usato il generico `ReactNode` quando il componente richiede una struttura più specifica;
- il tipo non sia inutilmente restrittivo rispetto al comportamento realmente supportato.

Usa `MIWizard` e `MIBreadcrumbs` come riferimenti per la composizione e la tipizzazione dei figli, senza copiarne automaticamente il modello quando il nuovo componente ha requisiti differenti.

## Forwarding delle props

Quando le props di un componente estendono quelle di Material UI o dell’elemento HTML sottostante, tutte le props pubbliche che non vengono consumate esplicitamente dal componente devono essere inoltrate all’elemento o allo slot appropriato.

Verifica che:

- le props non utilizzate siano raccolte, normalmente tramite rest properties;
- le rest props siano inoltrate al componente Material UI o all’elemento HTML corretto;
- `id`, attributi `data-*`, attributi `aria-*` e altri attributi HTML supportati non vengano persi;
- `className`, `style`, `sx`, event handler e `ref` siano preservati quando fanno parte dell’API pubblica;
- le props interne non vengano inoltrate accidentalmente al DOM;
- le props consumate internamente non siano duplicate o sovrascritte in modo involontario;
- l’ordine degli spread non permetta alle rest props di sovrascrivere stati o comportamenti che il componente deve controllare;
- gli handler interni e quelli ricevuti dal consumatore siano composti correttamente, quando entrambi devono essere eseguiti;
- le props siano inoltrate allo slot semanticamente corretto, non necessariamente sempre all’elemento root.

Esempio del pattern atteso:

```tsx
const MIExample = ({ customProperty, children, ...otherProps }: MIExampleProps) => (
  <MuiComponent {...otherProps}>{children}</MuiComponent>
);
```

Segnala la destrutturazione di props HTML o Material UI che rende impossibile utilizzare attributi pubblici dichiarati nei tipi.

---
applyTo: '**/*.ts,**/*.tsx'
---

# Istruzioni per la review di codice TypeScript

Oltre alle istruzioni generali, applica i controlli seguenti ai file TypeScript.

Ricorda che **tutti i commenti pubblicati nella pull request devono essere in inglese**.

## Correttezza dei tipi

Controlla:

- precisione dei tipi;
- gestione corretta di `undefined` e `null`;
- uso sicuro di union, generic e type guard;
- coerenza tra tipi dichiarati e comportamento runtime;
- tipi di ritorno e parametri coerenti con l’implementazione;
- corretta gestione delle proprietà opzionali;
- narrowing affidabile prima dell’accesso ai valori;
- exhaustive checking di union discriminate, quando necessario.
- uso di discriminated unions quando la validità delle props dipende da una modalità o variante;
- impossibilità, per quanto ragionevole, di rappresentare combinazioni di props non supportate;
- coerenza tra props ereditate da Material UI, attributi HTML esposti e props effettivamente inoltrate;

Segnala `any`, type assertion e cast solo quando nascondono un errore concreto o rendono possibile un uso non sicuro.

Non proporre tipi o astrazioni più complessi senza un beneficio concreto.

## API pubbliche

Verifica:

- compatibilità degli export esistenti;
- modifiche alle interfacce e ai type alias pubblici;
- restringimenti involontari dei valori accettati;
- nuove proprietà obbligatorie;
- cambiamenti nei tipi di ritorno;
- compatibilità delle definizioni con i consumatori esistenti;
- corretta esportazione dei nuovi tipi pubblici;
- coerenza tra entry point e file di implementazione.

Considera breaking change anche una modifica solamente a livello di tipi, se può interrompere la compilazione del codice dei consumatori.

## Material UI e TypeScript

Controlla:

- uso corretto dei tipi forniti da Material UI;
- module augmentation necessaria per tema, palette, varianti e component props;
- corrispondenza tra estensioni runtime del tema ed estensioni TypeScript;
- corretta tipizzazione di `sx`, `slotProps`, varianti e override;
- preservazione dei tipi durante il forwarding delle props;
- compatibilità dei componenti polimorfici e della prop `component`, quando supportati.

## Disabilitazione delle regole ESLint

Quando una pull request aggiunge o modifica commenti che disabilitano regole ESLint, come:

- `eslint-disable`;
- `eslint-enable`;
- `eslint-disable-line`;
- `eslint-disable-next-line`;

verifica che la disabilitazione sia giustificata e che non nasconda un errore, un comportamento fragile o un problema risolvibile diversamente.

In particolare, controlla che:

- sia chiaro perché la regola non può essere rispettata in quel caso;
- sia stata valutata una soluzione alternativa che non richieda la disabilitazione;
- la disabilitazione sia limitata alla singola regola interessata;
- lo scope sia il più ristretto possibile, preferendo una singola riga o il blocco minimo necessario;
- non vengano disabilitate più regole del necessario;
- non venga usato un `eslint-disable` globale quando è sufficiente `eslint-disable-next-line`;
- la disabilitazione non aggiri controlli relativi a correttezza, React Hooks, sicurezza, accessibilità o uso non sicuro dei tipi;
- il commento includa una motivazione quando la necessità non è evidente dal contesto;
- una disabilitazione preesistente non venga estesa involontariamente a nuovo codice.

Una disabilitazione ESLint non è necessariamente errata e non deve essere rifiutata automaticamente. Può essere appropriata quando la regola produce un falso positivo, quando esiste un vincolo documentato di una libreria esterna o quando la soluzione conforme alla regola peggiorerebbe concretamente correttezza o manutenibilità.

Lascia un commento di review quando la disabilitazione:

- non ha una motivazione comprensibile;
- ha uno scope più ampio del necessario;
- nasconde un problema concreto;
- può essere evitata con una soluzione semplice e più sicura;
- disabilita una regola diversa da quella effettivamente necessaria.

Nel commento, scritto sempre in inglese, indica la possibile alternativa oppure chiedi di documentare il motivo della disabilitazione.

Esempio:

> This disables the rule for the entire file, including future changes, but the exception appears to be needed only for this statement. Could we use a scoped `eslint-disable-next-line` with a short explanation instead? If the rule can be satisfied without changing the intended behavior, that would be preferable to suppressing it.

## Errori da segnalare

Segnala in particolare:

- accessi non protetti a valori opzionali;
- cast che rendono compilabile un valore incompatibile;
- union non gestite completamente;
- tipi pubblici che non descrivono il comportamento reale;
- overload incoerenti con l’implementazione;
- firme che accettano valori destinati a fallire a runtime;
- mutazioni inattese di oggetti considerati immutabili;
- esportazioni mancanti o involontariamente rimosse.
- disabilitazioni ESLint non motivate, eccessivamente ampie o usate al posto di una soluzione ragionevole;

Non lasciare commenti per semplici preferenze sintattiche se entrambe le soluzioni sono corrette e coerenti con il repository.

## Configurazioni tramite discriminated unions

Quando le props valide di un componente dipendono dal valore di una prop che ne identifica la modalità, la variante o la configurazione, preferisci una discriminated union invece di un’unica interfaccia con molte proprietà opzionali.

Segui il pattern già adottato da `MIButton`, quando applicabile.

Usa una discriminated union quando serve a:

- rendere obbligatorie props necessarie soltanto in una specifica modalità;
- impedire combinazioni di props incompatibili;
- escludere props che non hanno significato per una determinata variante;
- consentire a TypeScript di restringere correttamente i tipi nell’implementazione;
- rendere gli stati non validi non rappresentabili dall’API pubblica.

Verifica che:

- esista una proprietà discriminante con valori letterali distinti;
- ogni ramo contenga soltanto le props valide per quella configurazione;
- le proprietà obbligatorie e vietate siano espresse dai tipi;
- le props vietate siano escluse esplicitamente, usando `never` quando appropriato;
- l’implementazione esegua il narrowing attraverso la proprietà discriminante;
- i valori di default non rendano ambigua la discriminazione;
- la union rimanga compatibile con le props Material UI e HTML intenzionalmente esposte;
- test e documentazione mostrino almeno le configurazioni pubbliche rilevanti.

Esempio:

```ts
type MIExampleProps =
  | {
      variant: 'link';
      href: string;
      onConfirm?: never;
    }
  | {
      variant: 'action';
      href?: never;
      onConfirm: () => void;
    };
```

Non introdurre una discriminated union quando le props sono realmente indipendenti o quando non esistono combinazioni non valide da impedire.

Segnala invece API composte da proprietà opzionali quando consentono configurazioni invalide che saranno rifiutate o ignorate soltanto a runtime.

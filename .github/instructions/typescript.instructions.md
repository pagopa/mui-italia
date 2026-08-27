---
applyTo: '**/*.ts,**/*.tsx'
---

# Istruzioni per la review di codice TypeScript

Applica i controlli seguenti ai file TypeScript.

## Correttezza dei tipi

Controlla:

- precisione dei tipi e gestione corretta di `undefined` e `null`;
- uso sicuro di union, generic e type guard;
- coerenza tra tipi dichiarati e comportamento runtime;
- firme, parametri, ritorni e proprietà opzionali coerenti con l’implementazione;
- narrowing affidabile ed exhaustive checking delle union discriminate;
- impossibilità, per quanto ragionevole, di rappresentare combinazioni di props non supportate;
- coerenza tra props ereditate da Material UI, attributi HTML esposti e props inoltrate.

Segnala `any`, type assertion e cast solo quando nascondono un errore concreto o rendono possibile un uso non sicuro. Non proporre tipi o astrazioni più complessi senza un beneficio concreto.

## API pubbliche

Verifica:

- compatibilità di export, interfacce e type alias esistenti;
- restringimenti involontari, nuove proprietà obbligatorie o cambiamenti dei tipi di ritorno;
- corretta esportazione dei nuovi tipi pubblici;
- coerenza tra entry point, tipi e implementazione.

Considera breaking change anche una modifica soltanto a livello di tipi se può interrompere la compilazione dei consumatori.

## Material UI e TypeScript

Controlla:

- uso corretto dei tipi Material UI;
- module augmentation necessaria per tema, palette, varianti e component props;
- corrispondenza tra estensioni runtime del tema ed estensioni TypeScript;
- tipizzazione di `sx`, `slotProps`, varianti e override;
- preservazione dei tipi durante il forwarding delle props;
- compatibilità dei componenti polimorfici e della prop `component`.

## Configurazioni tramite discriminated unions

Quando props valide, obbligatorie o vietate dipendono da modalità o variante del componente, preferisci una discriminated union a un’interfaccia con molte proprietà opzionali, seguendo il pattern di `MIButton` quando applicabile.

Verifica che:

- la proprietà discriminante abbia valori letterali distinti;
- ogni ramo contenga soltanto le props valide;
- props obbligatorie e vietate siano espresse dai tipi, usando `never` quando appropriato;
- l’implementazione esegua il narrowing tramite il discriminante;
- i valori di default non rendano ambigua la discriminazione;
- la union rimanga compatibile con le props Material UI e HTML esposte;
- test e documentazione mostrino le configurazioni pubbliche rilevanti.

Non introdurre una discriminated union quando le props sono indipendenti e non esistono combinazioni invalide da impedire.

## Disabilitazione delle regole ESLint

Quando una pull request aggiunge o modifica `eslint-disable`, `eslint-enable`, `eslint-disable-line` o `eslint-disable-next-line`, verifica che la disabilitazione:

- abbia una motivazione comprensibile e non nasconda un problema concreto;
- sia necessaria dopo aver valutato alternative semplici e più sicure;
- indichi soltanto le regole interessate;
- abbia lo scope minimo, preferendo una singola riga al file intero;
- non aggiri controlli di correttezza, React Hooks, sicurezza, accessibilità o uso sicuro dei tipi;
- non estenda involontariamente un’esclusione preesistente a nuovo codice.

Una disabilitazione è accettabile per falsi positivi, vincoli documentati di librerie esterne o casi in cui rispettare la regola peggiorerebbe concretamente correttezza o manutenibilità. Se la necessità non è evidente, richiedi una breve motivazione nel commento.

## Errori da segnalare

Segnala in particolare:

- accessi non protetti a valori opzionali;
- cast che rendono compilabili valori incompatibili;
- union non gestite completamente;
- tipi pubblici non corrispondenti al comportamento reale;
- overload incoerenti con l’implementazione;
- firme che accettano valori destinati a fallire a runtime;
- mutazioni inattese di oggetti considerati immutabili;
- esportazioni mancanti o involontariamente rimosse.

Non lasciare commenti per preferenze sintattiche quando entrambe le soluzioni sono corrette e coerenti con il repository.

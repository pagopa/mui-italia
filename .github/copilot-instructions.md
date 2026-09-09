# Istruzioni generali per le code review

## Contesto del repository

Questo repository contiene una libreria TypeScript per React che estende e personalizza Material UI. Il tema e i componenti seguono i principi, le API e le convenzioni del design system di Material UI.

Durante le pull request, concentrati sulla correttezza, sulla compatibilità delle API pubbliche, sull’accessibilità, sull’internazionalizzazione, sulla coerenza con Material UI e sulla manutenibilità.

## Lingua dei commenti

**Tutti i commenti pubblicati nelle pull request devono essere scritti in inglese**, inclusi commenti inline, review summary, richieste di modifica, suggerimenti e motivazioni di approvazione.

Usa un inglese chiaro, professionale e sintetico. Non lasciare commenti in italiano.

## Priorità della review

Valuta, in ordine di importanza:

1. Bug e regressioni funzionali.
2. Problemi di sicurezza.
3. Breaking change involontarie nelle API pubbliche.
4. Problemi di accessibilità.
5. Testi rivolti all’utente non configurabili dall’esterno e quindi non traducibili.
6. Incompatibilità con React, Material UI o TypeScript.
7. Errori nella gestione del tema, delle varianti e degli stati.
8. Aumenti ingiustificati del peso della build o modifiche ai relativi limiti.
9. Test mancanti, copertura inefficace o uso eccessivo di mock.
10. Documentazione Storybook o MDX mancante per nuovi componenti pubblici.
11. Altri problemi rilevanti di prestazioni.
12. Leggibilità, complessità, duplicazione e organizzazione del codice.

Evita commenti puramente stilistici quando il problema è già gestito da formatter, linter o CI.

## Metodo di review

Prima di lasciare un commento:

- comprendi lo scopo della pull request e verifica il comportamento precedente;
- esamina il codice modificato nel suo contesto, inclusi test, documentazione ed esempi collegati;
- determina se il problema è realmente introdotto dalla pull request;
- considera l’impatto sui consumatori della libreria;
- evita problemi puramente ipotetici senza uno scenario realistico.

Commenta il codice non modificato solo quando la modifica corrente vi introduce direttamente un problema.

## API pubbliche e compatibilità

Presta particolare attenzione a:

- rimozione o rinomina di export;
- modifica di props pubbliche, valori di default o tipi accettati;
- cambiamenti del markup, delle classi, dei selettori o della struttura DOM osservabile;
- modifica del comportamento del tema e degli override;
- cambiamenti nelle peer dependency o introduzione di dipendenze runtime;
- impatto sulle modalità di importazione e sul tree shaking.

Segnala chiaramente le potenziali breaking change non documentate.

## Test unitari e copertura

Ogni nuovo componente pubblico e ogni nuovo comportamento significativo devono essere accompagnati da test unitari.

Richiedi test quando la pull request:

- introduce un componente o corregge un bug;
- aggiunge o modifica comportamento, props o valori di default;
- cambia rendering condizionale, eventi o stati interattivi;
- modifica accessibilità o navigazione da tastiera;
- introduce configurazioni tramite discriminated unions;
- introduce o modifica testi configurabili;
- cambia tipi, API pubbliche, varianti, breakpoint o override del tema.

Per un nuovo componente verifica, quando applicabile:

- rendering di base e composizione dei `children`;
- forwarding delle props HTML e Material UI esposte;
- event handler, configurazioni pubbliche e stati significativi;
- comportamento da tastiera e attributi accessibili;
- configurabilità di label visibili, messaggi e testi accessibili;
- casi limite e regressioni della logica custom.

I test devono verificare il comportamento osservabile dal consumatore con interazioni realistiche, non i dettagli interni dell’implementazione.

### Test dei contenuti configurabili

Quando un componente introduce label, messaggi o altri testi rivolti all’utente, verifica che i test:

- forniscano almeno un valore personalizzato diverso dall’eventuale default;
- dimostrino che il valore ricevuto dall’esterno viene effettivamente renderizzato o annunciato;
- coprano le label associate agli stati condizionali rilevanti;
- controllino separatamente le label accessibili quando non coincidono con il testo visibile;
- non si limitino a verificare stringhe hard-coded interne al componente.

Non è necessario testare una specifica libreria di internazionalizzazione. Deve essere verificato il contratto pubblico che consente al consumatore di fornire contenuti tradotti.

### Copertura

Non considerare sufficiente la sola presenza di un test o il superamento della soglia globale. Verifica che:

- il comportamento principale e i rami significativi siano coperti da assertion utili;
- i test falliscano se il comportamento implementato si rompe;
- le righe escluse dalla copertura abbiano una motivazione valida e circoscritta;
- soglie e configurazioni di coverage non siano ridotte o aggirate senza una giustificazione esplicita.

Una modifica alle soglie di coverage non è automaticamente errata, ma deve essere intenzionale, documentata, proporzionata e non deve nascondere codice non testato.

### Mock

Limita mock, stub e sostituzioni allo stretto necessario. Preferisci componenti, utility, provider e tema reali.

Un mock è appropriato soprattutto per dipendenze esterne, rete, comportamento non deterministico, API del browser non disponibili o componenti estranei all’unità sotto test.

Verifica che il mock:

- riproduca il contratto rilevante della dipendenza reale;
- non replichi l’implementazione sotto test;
- non preconfiguri esattamente il risultato atteso rendendo il test tautologico;
- non nasconda problemi di integrazione;
- sia limitato ai test che ne hanno bisogno;
- venga ripristinato correttamente tra i test.

Segnala test che possono produrre falsi positivi perché verificano soltanto risposte definite dai mock. Non richiedere test duplicati o test unitari per modifiche esclusivamente documentali.

## Prestazioni, sicurezza e peso della build

Segnala problemi concreti quali:

- calcoli o rendering inutilmente costosi;
- HTML non sanitizzato;
- uso non sicuro di `dangerouslySetInnerHTML`;
- URL costruiti da input non attendibile;
- esposizione di token, credenziali o informazioni sensibili.

Non suggerire `useMemo`, `useCallback` o altre ottimizzazioni senza un beneficio concreto o un problema di identità referenziale.

Il repository controlla automaticamente il peso della build. Verifica se la pull request:

- introduce dipendenze runtime, import troppo ampi o codice duplicato;
- aggiunge side effect che ostacolano il tree shaking;
- modifica entry point, export o packaging;
- aumenta significativamente il peso della build;
- modifica configurazione, valori di riferimento o soglie dell’action dedicata.

Una modifica delle soglie non è necessariamente errata. Quando un limite aumenta, verifica che:

- l’aumento derivi intenzionalmente dalle modifiche funzionali e sia documentato;
- il nuovo limite sia proporzionato ai valori misurati e non superiore al necessario;
- siano state considerate alternative ragionevoli con impatto minore;
- la modifica non nasconda una regressione non correlata;
- il controllo non venga disabilitato o reso inefficace senza una motivazione esplicita.

Se la giustificazione non è verificabile, chiedi in inglese di documentare l’aumento e i valori prodotti dalla build. Non segnalare automaticamente aumenti piccoli, attesi e adeguatamente motivati.

## Documentazione dei nuovi componenti

Ogni nuovo componente pubblico deve includere:

- una o più story nello Storybook;
- documentazione MDX sotto `docs`;
- esempi delle configurazioni pubbliche principali;
- descrizione delle props e dei comportamenti rilevanti;
- esempi accessibili e coerenti con l’uso previsto.

Verifica che documentazione e story:

- usino il nome con prefisso `MI` e gli entry point pubblici;
- siano coerenti con props, valori di default, `children` e discriminated unions;
- mostrino configurazione di base, varianti, stati e casi limite rilevanti;
- includano esempi accessibili;
- documentino tutte le label configurabili;
- mostrino almeno un esempio di personalizzazione dei testi;
- chiariscano come configurare testi visibili, messaggi dinamici e label accessibili;
- documentino eventuali callback per quantità, plurali o valori dinamici;
- non presentino i valori predefiniti come unica lingua supportata.

Non richiedere documentazione pubblica per componenti esclusivamente interni, purché tale scelta sia intenzionale.

## Leggibilità, complessità e organizzazione del codice

Preferisci soluzioni che ottengano lo stesso risultato con meno codice, duplicazioni e passaggi, senza sacrificare chiarezza, correttezza o manutenibilità.

Controlla:

- lunghezza e responsabilità di componenti, funzioni, hook e moduli;
- annidamento e condizioni eccessivamente complessi;
- duplicazioni, codice inutilizzato e nomi poco descrittivi;
- stato, effetti, wrapper o callback non necessari;
- astrazioni che aggiungono indirezione senza semplificare;
- file troppo lunghi o, al contrario, frammentazione eccessiva.

Meno righe non significa automaticamente codice migliore. Non suggerire espressioni dense o astrazioni generiche soltanto per ridurre la lunghezza.

Suggerisci una separazione quando esistono responsabilità autonome, logica riutilizzabile o blocchi difficili da testare insieme. Puoi proporre componenti, hook o funzioni pure, mantenendo però nello stesso file gli elementi brevi, locali e strettamente correlati.

Un nuovo file è giustificato quando l’elemento:

- è riutilizzato;
- ha responsabilità o complessità autonome;
- possiede test dedicati;
- migliora sensibilmente la leggibilità.

Evita nuovi file quando aumentano import, export e navigazione senza ridurre la complessità oppure anticipano un riuso soltanto ipotetico.

Commenta la leggibilità solo indicando il problema concreto e una semplificazione attuabile. Non richiedere refactoring estranei allo scopo della pull request, salvo che la modifica introduca complessità fragile o difficile da verificare.

## Formato e severità dei commenti

Ogni commento deve:

1. descrivere il problema concreto;
2. spiegare quando si manifesta;
3. indicarne l’impatto;
4. proporre, quando possibile, una correzione attuabile.

Quando la correzione è breve, locale e sicura, usa una GitHub suggestion.

Considera:

- **Blocking:** bug, regressione, vulnerabilità, breaking change involontaria, grave problema di accessibilità o disattivazione ingiustificata dei controlli sul peso della build.
- **Important:** comportamento fragile, testo user-facing non traducibile, test essenziale mancante, aumento significativo e ingiustificato del peso della build o problema concreto di manutenibilità.
- **Suggestion:** miglioramento utile ma non necessario per approvare la pull request.

Non presentare preferenze personali come problemi bloccanti.

## Cosa evitare

Non:

- riepilogare il diff tramite commenti inline o descrivere semplicemente il codice;
- ripetere lo stesso problema su più righe;
- chiedere refactoring estranei allo scopo della pull request;
- proporre modifiche puramente estetiche;
- duplicare problemi già segnalati chiaramente dalla CI;
- inventare requisiti o lasciare commenti vaghi;
- ridurre le righe rendendo il codice più denso;
- creare file o astrazioni senza una chiara responsabilità;
- approvare la pull request se rimangono problemi bloccanti.

Privilegia pochi commenti ad alto valore. Se non trovi problemi concreti, non inventare osservazioni e fornisci un’approvazione sintetica in inglese.

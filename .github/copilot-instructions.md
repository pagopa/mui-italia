# Istruzioni generali per le code review

## Contesto del repository

Questo repository contiene una libreria TypeScript per React che estende e personalizza Material UI. Il tema e i componenti seguono i principi, le API e le convenzioni del design system di Material UI.

Durante le pull request, concentrati sulla correttezza, sulla compatibilità delle API pubbliche, sull’accessibilità, sulla coerenza con Material UI e sulla manutenibilità.

## Lingua dei commenti

**Tutti i commenti pubblicati nelle pull request devono essere scritti in inglese.**

Questo requisito si applica a:

- commenti inline;
- review summary;
- richieste di modifica;
- suggerimenti;
- motivazioni di approvazione.

Usa un inglese chiaro, professionale e sintetico. Non lasciare commenti in italiano.

## Priorità della review

Valuta, in ordine di importanza:

1. Bug e regressioni funzionali.
2. Problemi di sicurezza.
3. Breaking change involontarie nelle API pubbliche.
4. Problemi di accessibilità.
5. Incompatibilità con React, Material UI o TypeScript.
6. Errori nella gestione del tema, delle varianti e degli stati.
7. Aumenti ingiustificati del peso della build o modifiche ai relativi limiti.
8. Test mancanti, copertura inefficace o uso eccessivo di mock.
9. Documentazione Storybook o MDX mancante per nuovi componenti pubblici.
10. Altri problemi rilevanti di prestazioni.
11. Leggibilità, complessità, duplicazione e organizzazione del codice.

Evita commenti puramente stilistici quando il problema è già gestito da formatter, linter o CI.

## Metodo di review

Prima di lasciare un commento:

- comprendi lo scopo della pull request;
- esamina il codice modificato nel suo contesto;
- verifica il comportamento precedente;
- controlla test, documentazione ed esempi collegati;
- determina se il problema è realmente introdotto dalla pull request;
- considera l’impatto sui consumatori della libreria;
- evita problemi puramente ipotetici senza uno scenario realistico.

Commenta il codice non modificato solo quando la modifica corrente introduce direttamente un problema in quel codice.

## API pubbliche e compatibilità

Presta particolare attenzione a:

- rimozione o rinomina di export;
- modifica di props pubbliche;
- cambiamenti dei valori di default;
- restringimento dei tipi accettati;
- cambiamenti del markup osservabile;
- modifica di classi, selettori o struttura DOM;
- modifica del comportamento del tema e degli override;
- cambiamenti nelle peer dependency;
- introduzione di nuove dipendenze runtime;
- impatto sulle modalità di importazione e sul tree shaking.

Segnala chiaramente le potenziali breaking change non documentate.

## Test unitari e copertura

Ogni nuovo componente pubblico e ogni nuovo comportamento significativo devono essere accompagnati da test unitari.

Richiedi test quando la pull request:

- introduce un nuovo componente;
- corregge un bug;
- aggiunge o modifica un comportamento;
- modifica una prop o un valore di default;
- cambia rendering condizionale, eventi o stati interattivi;
- modifica accessibilità o navigazione da tastiera;
- introduce configurazioni tramite discriminated unions;
- cambia tipi o API pubbliche;
- modifica varianti, breakpoint o override del tema.

Per un nuovo componente, verifica almeno, quando applicabile:

- rendering di base;
- forwarding delle props HTML e Material UI esposte;
- rendering e composizione dei `children`;
- esecuzione degli event handler;
- varianti e configurazioni pubbliche;
- stati disabled, error, selected o analoghi;
- comportamento da tastiera e attributi accessibili;
- casi limite significativi;
- regressioni per comportamenti che richiedono logica custom.

I test devono verificare il comportamento osservabile dal consumatore, non dettagli interni dell’implementazione. Preferisci query e interazioni che riproducano il modo in cui il componente viene utilizzato dagli utenti.

### Copertura

Verifica che i test aggiunti esercitino effettivamente il nuovo codice e i rami significativi.

Non considerare sufficiente la sola presenza di un file di test o il superamento della soglia globale. Controlla che:

- il comportamento principale sia verificato tramite assertion significative;
- varianti e rami condizionali rilevanti siano coperti;
- i test fallirebbero se il comportamento implementato si rompesse;
- la copertura non sia mantenuta aggiungendo test privi di assertion utili;
- eventuali righe escluse dalla copertura abbiano una motivazione valida e circoscritta;
- le soglie o le configurazioni di coverage non siano ridotte o aggirate senza una giustificazione esplicita.

Una modifica alle soglie di coverage non è automaticamente errata. Verifica però che sia intenzionale, documentata, proporzionata e non utilizzata per nascondere codice non testato.

### Mock

Limita mock, stub e sostituzioni allo stretto necessario.

Preferisci test che utilizzino:

- componenti reali;
- implementazioni reali delle utility interne;
- provider e tema reali;
- interazioni realistiche;
- output e comportamento osservabili.

Usa un mock quando la dipendenza reale:

- effettua chiamate di rete;
- accede a servizi esterni;
- produce comportamento non deterministico;
- dipende da API del browser non disponibili nell’ambiente di test;
- rende il test eccessivamente lento o instabile;
- non appartiene all’unità che si vuole verificare.

Quando viene introdotto un mock, verifica che:

- sia necessario per isolare una dipendenza esterna o non deterministica;
- riproduca il contratto rilevante della dipendenza reale;
- non replichi semplicemente l’implementazione sotto test;
- non preconfiguri esattamente la risposta attesa rendendo il test tautologico;
- non nasconda problemi di integrazione;
- sia limitato al test o al gruppo di test che ne ha bisogno;
- venga ripristinato correttamente tra i test;
- non sostituisca un intero componente quando è possibile renderizzarlo realmente.

Segnala test che possono produrre falsi positivi perché verificano soltanto risposte definite dal mock anziché il comportamento reale.

Non richiedere test duplicati quando il comportamento è già coperto chiaramente e non richiedere test unitari per modifiche esclusivamente documentali.

## Dipendenze, prestazioni e sicurezza

Segnala soltanto problemi concreti, tra cui:

- dipendenze runtime non necessarie;
- import che aumentano inutilmente il bundle;
- side effect eseguiti durante l’importazione;
- problemi che impediscono il tree shaking;
- rendering o calcoli costosi ripetuti;
- HTML non sanitizzato;
- uso non sicuro di `dangerouslySetInnerHTML`;
- URL costruiti usando input non attendibile;
- esposizione di token, credenziali o informazioni sensibili.

Non suggerire `useMemo`, `useCallback` o altre ottimizzazioni senza un beneficio concreto o un problema di identità referenziale.

## Peso della build

Il repository include un controllo automatico sul peso della build. Considera il peso del bundle e degli artefatti pubblicati parte della compatibilità e delle prestazioni della libreria.

Durante la review, verifica se la pull request:

- introduce nuove dipendenze runtime;
- aggiunge import che possono aumentare inutilmente il bundle;
- importa interi moduli quando sarebbero disponibili import più specifici;
- duplica codice o funzionalità già presenti;
- introduce side effect che possono impedire il tree shaking;
- modifica entry point, export o modalità di packaging;
- aumenta significativamente il peso della build;
- modifica i file di configurazione, i valori di riferimento o le soglie usate dall’action che controlla il peso della build.

Una modifica delle soglie non è necessariamente errata e non deve essere rifiutata automaticamente. Quando una pull request aumenta un limite, verifica però che:

- l’aumento sia una conseguenza intenzionale delle modifiche funzionali;
- la motivazione sia documentata nella pull request;
- il nuovo limite sia proporzionato all’aumento effettivo;
- non esista un’alternativa ragionevole con un impatto minore;
- la soglia non venga aumentata più del necessario;
- la modifica non nasconda una regressione non correlata;
- i limiti non vengano disabilitati, rimossi o resi inefficaci senza una motivazione esplicita.

Se una soglia viene modificata senza una giustificazione verificabile, lascia un commento in inglese chiedendo di documentare l’aumento e di confermare i valori prodotti dalla build.

Esempio:

> This change raises the build-size threshold, but the pull request does not explain which functional change requires the additional size or how the new limit was determined. Since increasing the threshold can make the size check pass without addressing an unintended regression, please document the measured size increase and confirm that the new limit is no higher than necessary.

Non segnalare automaticamente ogni aumento del peso della build. Lascia un commento solo quando l’aumento è significativo, inatteso, non documentato oppure ottenuto modificando i limiti senza una motivazione adeguata.

## Formato dei commenti

Ogni commento deve:

1. descrivere il problema concreto;
2. spiegare quando si manifesta;
3. indicarne l’impatto;
4. proporre, quando possibile, una correzione attuabile.

Esempio di commento:

> When `disabled` is true, this handler still invokes `onClick` for keyboard activation. This differs from the behavior of a native disabled button and may trigger actions unexpectedly. Please prevent the callback from running while the component is disabled.

Quando la correzione è breve, locale e sicura, usa una GitHub suggestion.

## Severità

Considera:

- **Blocking:** bug, regressione, vulnerabilità, breaking change involontaria, grave problema di accessibilità oppure modifica dei controlli sul peso della build che li disabilita o ne compromette l’efficacia senza una motivazione valida.
- **Important:** comportamento fragile, test essenziale mancante, aumento significativo e non giustificato del peso della build oppure problema concreto di manutenibilità.
- **Suggestion:** miglioramento utile ma non necessario per approvare la pull request.

Non presentare preferenze personali come problemi bloccanti. Non considerare bloccante un aumento del peso o dei limiti quando è intenzionale, proporzionato e adeguatamente motivato.

## Cosa evitare

Non:

- riepilogare il diff tramite commenti inline;
- descrivere semplicemente ciò che il codice fa;
- ripetere lo stesso problema su più righe;
- chiedere refactoring estranei allo scopo della pull request;
- proporre modifiche puramente estetiche;
- duplicare problemi già segnalati chiaramente dalla CI;
- inventare requisiti o convenzioni;
- lasciare commenti vaghi come “consider improving this”;
- approvare la pull request se rimangono problemi bloccanti;
- richiedere la riduzione del numero di righe quando rende il codice più denso o meno comprensibile;
- proporre la creazione di nuovi file senza una chiara separazione di responsabilità;
- suggerire astrazioni premature basate su un riuso soltanto ipotetico.

Privilegia pochi commenti ad alto valore rispetto a molti commenti marginali. Se non trovi problemi concreti, non inventare osservazioni e fornisci un’approvazione sintetica in inglese.

## Documentazione dei nuovi componenti

Ogni nuovo componente pubblico deve essere accompagnato da:

- una o più story nello Storybook;
- una pagina o un esempio MDX nella documentazione sotto `docs`;
- esempi delle configurazioni pubbliche principali;
- descrizione delle props e dei comportamenti rilevanti;
- esempi accessibili e coerenti con l’uso previsto.

Durante la review, verifica che Storybook e documentazione MDX siano coerenti con:

- nome del componente e prefisso `MI`;
- props realmente esportate;
- valori di default;
- configurazioni definite tramite discriminated unions;
- composizione tramite `children`;
- stati interattivi e varianti;
- attributi e comportamento di accessibilità;
- modalità pubblica di importazione.

Le story devono coprire almeno:

- configurazione di base;
- varianti o modalità pubbliche rilevanti;
- stati significativi, inclusi quelli interattivi o disabilitati;
- casi limite importanti, come contenuti lunghi, quando pertinenti.

La documentazione MDX deve mostrare come utilizzare il componente tramite gli entry point pubblici. Non deve dipendere da import profondi o dettagli interni.

Segnala un nuovo componente pubblico privo di story o documentazione MDX. Non richiedere documentazione pubblica per componenti esclusivamente interni, purché tale classificazione sia intenzionale e verificabile.

## Leggibilità, complessità e organizzazione del codice

Oltre a correttezza, ottimizzazione e prestazioni, valuta la leggibilità e la complessità del codice modificato.

Preferisci soluzioni che raggiungano lo stesso risultato con meno codice, meno duplicazioni e un flusso più semplice, purché non riducano chiarezza, correttezza o manutenibilità.

Durante la review, controlla:

- lunghezza e responsabilità di componenti, funzioni, hook e moduli;
- presenza di funzioni o componenti che svolgono troppe attività differenti;
- livelli eccessivi di annidamento;
- condizioni complesse o difficili da seguire;
- duplicazioni che possono essere eliminate in modo chiaro;
- variabili, funzioni e tipi con nomi poco descrittivi;
- commenti necessari soltanto perché il codice è inutilmente difficile da comprendere;
- astrazioni che aggiungono indirezione senza semplificare il codice;
- file molto lunghi che contengono responsabilità separabili;
- frammentazione eccessiva in file, componenti o utility troppo piccoli;
- codice non più utilizzato o diventato ridondante dopo la modifica.

### Riduzione del codice

Quando esistono più soluzioni equivalenti, preferisci quella che:

- contiene meno passaggi e meno duplicazioni;
- utilizza le API già disponibili nel progetto o in Material UI;
- rende evidente il flusso principale;
- evita stato, effetti, wrapper e callback non necessari;
- evita astrazioni create per un solo utilizzo quando non migliorano la comprensione;
- mantiene espliciti i comportamenti importanti;
- rimane semplice da testare e modificare.

Meno righe di codice non significa automaticamente codice migliore. Non suggerire la compressione di più operazioni in espressioni dense, condizioni difficili da leggere o astrazioni generiche soltanto per ridurre il numero di righe.

Una soluzione leggermente più lunga è preferibile quando rende più chiari il comportamento, i tipi, la gestione degli errori o i casi limite.

### Separazione delle responsabilità

Suggerisci una separazione più granulare quando un componente, una funzione o un file:

- gestisce più responsabilità indipendenti;
- contiene blocchi autonomi e riutilizzabili;
- combina rendering, trasformazione dei dati e side effect in modo difficile da seguire;
- presenta condizioni o rami che possono essere isolati con un nome significativo;
- è difficile da testare senza coinvolgere comportamenti non correlati;
- richiede frequenti modifiche in sezioni indipendenti.

Le possibili separazioni includono:

- estrazione di piccoli componenti con una responsabilità chiara;
- estrazione di hook per logica React stateful realmente autonoma;
- estrazione di funzioni pure per trasformazioni o validazioni;
- estrazione di tipi condivisi;
- separazione tra API pubblica e dettagli interni;
- suddivisione di un file quando contiene unità concettualmente indipendenti.

Non richiedere un nuovo file per ogni funzione, tipo o piccolo componente. Mantieni nello stesso file elementi brevi, strettamente correlati e utilizzati soltanto localmente, quando la loro estrazione aumenterebbe la navigazione senza migliorare la comprensione.

### Criteri per creare nuovi file

La creazione di un nuovo file è giustificata quando almeno una delle seguenti condizioni è soddisfatta:

- l’elemento estratto è riutilizzato in più punti;
- rappresenta una responsabilità autonoma;
- possiede test dedicati o una complessità significativa;
- separarlo rende sensibilmente più leggibile il flusso principale;
- costituisce una parte pubblica o concettualmente distinta del componente;
- il file originale è diventato difficile da comprendere o mantenere.

Evita invece l’estrazione quando:

- produce file contenenti soltanto poche righe prive di significato autonomo;
- aumenta il numero di import ed export senza ridurre la complessità;
- obbliga a navigare tra molti file per comprendere un unico comportamento;
- introduce livelli di indirezione non necessari;
- anticipa un riuso soltanto ipotetico.

L’obiettivo è ottenere unità coese e leggibili, non minimizzare la lunghezza dei singoli file né massimizzare il numero di file.

### Qualità dei commenti di review

Lascia un commento sulla leggibilità soltanto quando puoi indicare:

- quale parte del codice è difficile da comprendere o mantenere;
- quale complessità o duplicazione può essere rimossa;
- quale separazione renderebbe più chiara una responsabilità;
- quale soluzione più semplice conserva lo stesso comportamento.

Evita commenti generici come:

> This function is too long.

Preferisci commenti specifici e attuabili, sempre in inglese, per esempio:

> This component currently handles data normalization, interaction state, and the rendering of each item in the same block. Extracting the pure normalization logic into a local helper would make the rendering flow easier to follow and test without introducing another component or public module.

Oppure:

> These wrappers repeat the same prop mapping and do not add distinct behavior. Using the existing Material UI component directly would preserve the result while reducing duplication and the number of code paths to maintain.

Non richiedere refactoring estranei allo scopo della pull request, salvo che la modifica introduca o aumenti concretamente una complessità che rende il codice fragile o difficile da verificare.

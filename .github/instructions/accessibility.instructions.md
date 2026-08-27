---
applyTo: '**/*.tsx,**/*.jsx,**/*.mdx'
---

# Istruzioni per la review di accessibilità

Considera l’accessibilità un requisito funzionale, non un miglioramento opzionale.

## Semantica HTML

Verifica:

- uso dell’elemento HTML semanticamente corretto e preferenza per elementi nativi rispetto a ruoli ARIA equivalenti;
- gerarchia corretta delle intestazioni;
- uso appropriato di link e pulsanti;
- markup valido, senza elementi interattivi annidati;
- conservazione della semantica quando viene usata la prop `component`.

Non suggerire attributi ARIA quando un elemento HTML nativo risolve già il problema.

## Tastiera e focus

Controlla:

- raggiungibilità e attivazione da tastiera di tutti i controlli;
- ordine logico e visibilità del focus;
- assenza di focus trap involontarie e di `tabIndex` positivi;
- gestione e ripristino del focus per dialog, menu, modali e contenuti dinamici;
- equivalenza tra interazioni da mouse e tastiera.

## Nome, ruolo e stato accessibili

Verifica:

- nome accessibile per pulsanti, link, campi e controlli icon-only;
- associazione tra label, input, messaggi di errore e descrizioni;
- uso corretto di `aria-describedby`, `aria-labelledby` e `aria-label`;
- aggiornamento degli attributi ARIA in base allo stato;
- esposizione corretta di stati come expanded, selected, checked, pressed, invalid e disabled;
- assenza di attributi ARIA non validi, ridondanti o in conflitto con la semantica nativa.

## Contenuti dinamici e screen reader

Controlla:

- annunci necessari per errori e aggiornamenti dinamici, usando con prudenza le live region;
- contenuti nascosti correttamente alle tecnologie assistive;
- testo alternativo appropriato per immagini e icone informative;
- esclusione delle icone decorative dall’accessibility tree;
- istruzioni che non dipendano esclusivamente dalla percezione visiva.

## Aspetto visivo accessibile

Verifica:

- contrasto sufficiente e focus distinguibile;
- riconoscibilità degli stati interattivi;
- assenza di informazioni comunicate solo tramite colore;
- leggibilità con zoom e ridimensionamento del testo;
- assenza di contenuti essenziali tagliati ai breakpoint supportati;
- target interattivi ragionevolmente utilizzabili.

## Commenti di review

Collega ogni rilievo a un comportamento concreto: identifica l’interazione, gli utenti interessati, il risultato atteso e, quando possibile, una soluzione basata sulla semantica nativa.

Non segnalare genericamente una violazione WCAG senza spiegare come si manifesta nella modifica.

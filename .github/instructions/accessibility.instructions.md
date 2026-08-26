---
applyTo: '**/*.tsx,**/*.jsx,**/*.mdx'
---

# Istruzioni per la review di accessibilità

Considera l’accessibilità un requisito funzionale, non un miglioramento opzionale.

Oltre alle istruzioni generali, applica questi controlli a componenti ed esempi. **Tutti i commenti pubblicati nella pull request devono essere in inglese.**

## Semantica HTML

Verifica:

- uso dell’elemento HTML semanticamente corretto;
- preferenza per elementi nativi rispetto a ruoli ARIA equivalenti;
- gerarchia corretta delle intestazioni;
- uso appropriato di link e pulsanti;
- markup valido e senza elementi interattivi annidati;
- conservazione della semantica quando viene usata la prop `component`.

Non suggerire attributi ARIA quando un elemento HTML nativo risolve già il problema.

## Tastiera e focus

Controlla:

- raggiungibilità tramite tastiera di tutti i controlli;
- supporto dei tasti previsti dal pattern del componente;
- ordine del focus logico;
- focus visibile;
- assenza di focus trap involontarie;
- gestione corretta del focus per dialog, menu, modali e contenuti dinamici;
- ripristino del focus alla chiusura di overlay;
- assenza di `tabIndex` positivi;
- equivalenza tra interazioni da mouse e tastiera.

## Nome, ruolo e stato accessibili

Verifica:

- nome accessibile per pulsanti, link, campi e controlli icon-only;
- associazione tra label e input;
- associazione dei messaggi di errore e delle descrizioni;
- uso corretto di `aria-describedby`, `aria-labelledby` e `aria-label`;
- aggiornamento degli attributi ARIA in base allo stato;
- esposizione corretta di stati quali expanded, selected, checked, pressed, invalid e disabled;
- assenza di attributi ARIA non validi, ridondanti o in conflitto con la semantica nativa.

## Contenuti dinamici e screen reader

Controlla:

- annunci necessari per errori e aggiornamenti dinamici;
- uso prudente di live region;
- contenuti nascosti correttamente anche alle tecnologie assistive, quando necessario;
- testo alternativo appropriato per immagini e icone informative;
- esclusione delle icone decorative dall’accessibility tree;
- presenza di istruzioni che non dipendano esclusivamente dalla percezione visiva.

## Aspetto visivo accessibile

Verifica:

- contrasto sufficiente;
- stato di focus distinguibile;
- stati `hover`, `focus`, `active`, `disabled` ed `error` riconoscibili;
- assenza di informazioni comunicate solo tramite colore;
- leggibilità con zoom e ridimensionamento del testo;
- assenza di contenuti essenziali tagliati ai breakpoint supportati;
- target interattivi ragionevolmente utilizzabili.

## Qualità dei commenti

Quando segnali un problema:

- identifica l’interazione coinvolta;
- spiega quali utenti ne sono interessati;
- indica il comportamento atteso;
- suggerisci l’uso di semantica nativa quando possibile.

Esempio:

> This clickable `div` cannot be reached or activated with the keyboard. Users who navigate without a pointer therefore cannot trigger the action. Please render it as a `button`, or implement the equivalent focus and keyboard behavior if a native button cannot be used.

Non segnalare problemi WCAG generici senza collegarli a un comportamento concreto introdotto dalla pull request.

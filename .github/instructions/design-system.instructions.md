---
applyTo: '**/*.ts,**/*.tsx,**/*.jsx,**/*.mdx'
---

# Istruzioni per la review del design system

Oltre alle istruzioni generali, verifica che le modifiche rimangano coerenti con il tema, i principi e le convenzioni di Material UI.

Tutti i commenti pubblicati nella pull request devono essere in inglese.

**Tutti i commenti pubblicati nella pull request devono essere in inglese.**

## Token e tema

Controlla che, quando appropriato:

- colori, spaziature, breakpoint e tipografia provengano dal tema;
- bordi, ombre e raggi usino i token esistenti;
- non vengano introdotti valori hard-coded che impediscono la personalizzazione;
- gli stili supportino temi personalizzati;
- estensioni runtime del tema siano accompagnate dai tipi TypeScript necessari;
- i valori semantici siano preferiti ai riferimenti puramente visuali.

Non segnalare ogni valore letterale: commenta solo quelli che introducono incoerenza, duplicazione o impediscono la personalizzazione.

## Componenti, varianti e stati

Verifica:

- coerenza con i componenti esistenti;
- riuso dei pattern già presenti;
- comportamento coerente delle varianti;
- gestione di dimensioni, densità e breakpoint;
- copertura degli stati `hover`, `focus`, `active`, `selected`, `disabled` ed `error`;
- coerenza tra styling e API pubblica;
- assenza di combinazioni di props che producano stati visivi incoerenti;
- compatibilità con gli override del tema.

## CSS e override

Controlla:

- selettori non eccessivamente specifici;
- assenza di dipendenza da strutture DOM fragili;
- scope corretto degli stili;
- assenza di effetti globali involontari;
- ordine e precedenza prevedibili degli override;
- compatibilità con `sx`, `styleOverrides` e varianti Material UI;
- comportamento corretto nei breakpoint supportati;
- assenza di duplicazioni significative di regole già disponibili nel tema.

## Personalizzazione

Verifica che i consumatori possano ancora:

- personalizzare colori e tipografia;
- applicare `className`, `style` o `sx`, quando supportati;
- usare gli override Material UI previsti;
- estendere varianti e palette;
- sostituire slot o componenti, quando l’API lo prevede;
- usare il componente senza dipendere da dettagli interni.

Segnala valori o regole che rendono inefficaci le personalizzazioni documentate.

## Documentazione ed esempi MDX

Controlla che:

- nuove varianti e API siano documentate;
- import e nomi delle props siano corretti;
- gli esempi siano coerenti con l’implementazione;
- gli esempi mostrino pattern accessibili;
- i valori di default documentati siano aggiornati;
- eventuali breaking change siano evidenziate;
- gli snippet TypeScript siano validi;
- gli esempi non introducano utilizzi sconsigliati del design system.

## Responsive design

Verifica:

- comportamento ai breakpoint supportati;
- assenza di overflow o contenuti essenziali tagliati;
- conservazione dell’ordine logico del contenuto;
- usabilità dei controlli su viewport ridotte;
- assenza di layout basati su dimensioni rigide non necessarie;
- coerenza tra comportamento responsive e token del tema.

## Accesso al tema

I componenti devono utilizzare il tema attualmente fornito dal `ThemeProvider`, evitando di dipendere direttamente da una specifica istanza del tema definita nel repository.

Per accedere al tema, preferisci i meccanismi forniti da Material UI:

- callback del tema nelle funzioni `styled`;
- callback della prop `sx`;
- hook `useTheme`, quando il tema è necessario nella logica del componente;
- callback e API equivalenti che ricevono il tema attivo.

Non importare direttamente l’istanza concreta del tema nei componenti, perché questo:

- lega il componente a una specifica configurazione;
- ignora il tema attualmente fornito dal `ThemeProvider`;
- impedisce o limita la personalizzazione da parte dei consumatori;
- può produrre incoerenze quando sono presenti più temi o modalità differenti.

Esempio da evitare:

```ts
import { theme } from '../../theme';

const color = theme.palette.primary.main;
```

Esempio preferibile con `styled`:

```ts
const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
}));
```

Esempio preferibile con `sx`:

```tsx
<Box
  sx={(theme) => ({
    color: theme.palette.text.primary,
  })}
/>
```

Esempio preferibile nella logica del componente:

```ts
const theme = useTheme();
```

Una dipendenza diretta da una configurazione statica può essere appropriata soltanto nel codice che crea o compone il tema stesso. Non deve essere usata nei componenti che consumano il tema.

## Uso semantico dei token

Verifica che i token del tema siano scelti in base al significato dell’elemento, non soltanto perché il valore visivo corrente sembra corretto.

In particolare:

- usa `palette.text.*` per testo e contenuti con funzione testuale;
- usa `palette.background.*` per superfici e sfondi;
- usa i colori semantici come `primary`, `secondary`, `error`, `warning`, `info` e `success` secondo il ruolo dell’elemento;
- usa i token dedicati ad action e stati interattivi per hover, selected, disabled e focus, quando appropriato;
- usa `spacing`, `typography`, `shape`, `shadows` e `breakpoints` per il rispettivo scopo;
- non riutilizzare un token semanticamente scorretto soltanto perché al momento contiene il colore desiderato;
- evita valori hard-coded quando esiste un token semanticamente appropriato;
- verifica che il token continui ad avere senso con temi personalizzati, modalità differenti e variazioni future della palette.

Per esempio, non usare `palette.text.primary` per colorare un bordo, uno sfondo o un elemento puramente decorativo, salvo che tale elemento debba intenzionalmente seguire il colore del testo.

Quando non esiste un token semanticamente adatto, valuta se sia preferibile introdurre un token dedicato nel tema invece di riutilizzarne uno con significato diverso.

Segnala un uso semanticamente improprio quando può:

- produrre risultati incoerenti con un tema personalizzato;
- interrompere il comportamento in modalità diverse;
- rendere il design system difficile da evolvere;
- associare involontariamente elementi diversi allo stesso token;
- compromettere contrasto o riconoscibilità degli stati.

Non commentare una scelta soltanto perché sarebbe possibile utilizzare un token diverso: deve esistere un problema concreto di semantica, personalizzazione o coerenza.

## Unità di misura e dimensioni

Evita valori dimensionali specifici e hard-coded, come `16px`, quando è disponibile un token del tema semanticamente appropriato.

Quando possibile, usa:

- `theme.spacing` per spaziature e distanze;
- `theme.typography` per dimensioni, pesi e interlinea del testo;
- `theme.shape` per i raggi;
- `theme.breakpoints` per il comportamento responsive;
- gli altri token del tema coerenti con il significato della proprietà.

Il token deve essere scelto in base al significato semantico, non soltanto perché produce lo stesso valore numerico desiderato.

Esempio da evitare quando esiste un token appropriato:

```ts
const Root = styled('div')({
  padding: '16px',
});
```

Esempio preferibile:

```ts
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));
```

### Misure specifiche

Una misura specifica può essere appropriata quando rappresenta:

- un requisito tecnico non espresso dal tema;
- uno spessore grafico preciso, come un bordo sottile;
- una dimensione necessaria per allinearsi a un asset;
- un vincolo documentato del componente;
- un valore che non appartiene alla scala semantica del tema.

Quando è necessario introdurre una misura specifica, verifica che l’unità sia adatta al comportamento richiesto e all’accessibilità.

In particolare:

- preferisci `rem` per misure correlate alla tipografia e per dimensioni che devono adattarsi alle impostazioni del testo;
- valuta unità relative per spaziature e dimensioni che devono scalare con il testo o con il contenitore;
- usa `%`, unità viewport o container query soltanto quando coerenti con il layout desiderato;
- evita dimensioni rigide che possono tagliare il contenuto quando aumenta lo zoom o la dimensione del testo;
- evita altezze fisse per contenitori di testo quando il contenuto può andare su più righe;
- verifica il comportamento con zoom del browser, ridimensionamento del testo, contenuti lunghi e localizzazione;
- non sostituire automaticamente tutti i valori in `px`: valuta il ruolo concreto della misura.

L’uso dei pixel non è vietato in assoluto. Può essere appropriato, per esempio, per bordi o dettagli grafici che devono mantenere uno spessore preciso. Deve invece essere esaminato attentamente quando controlla:

- dimensioni del testo;
- spaziature correlate al testo;
- altezza o larghezza di elementi contenenti testo;
- target interattivi;
- layout che devono adattarsi allo zoom;
- contenitori soggetti a contenuti dinamici.

Segnala un valore hard-coded quando esiste un token del tema semanticamente corretto oppure quando la misura rigida può compromettere zoom, ridimensionamento del testo, responsive design o personalizzazione del tema.

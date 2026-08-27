---
applyTo: '**/*.ts,**/*.tsx,**/*.jsx,**/*.mdx'
---

# Istruzioni per la review del design system

Verifica che le modifiche rimangano coerenti con il tema, i principi e le convenzioni di Material UI.

## Token e tema

Controlla che:

- colori, spaziature, breakpoint, tipografia, bordi, ombre e raggi usino token appropriati quando disponibili;
- non vengano introdotti valori hard-coded che impediscono la personalizzazione;
- gli stili supportino temi personalizzati;
- estensioni runtime del tema siano accompagnate dai tipi TypeScript necessari;
- i token siano scelti per significato, non soltanto per il valore visivo corrente.

Non segnalare ogni valore letterale: commenta solo quelli che introducono incoerenza, duplicazione o problemi di personalizzazione e accessibilità.

## Accesso al tema

I componenti devono usare il tema attualmente fornito dal `ThemeProvider` tramite:

- callback di `styled`;
- callback della prop `sx`;
- `useTheme`, quando serve nella logica del componente;
- API equivalenti che ricevono il tema attivo.

Non importare nei componenti l’istanza concreta del tema definita nel repository: li legherebbe a una configurazione specifica, ignorando il tema del consumatore. L’import diretto è appropriato soltanto nel codice che crea o compone il tema stesso.

Esempio da evitare:

```ts
import { theme } from '../../theme';

const color = theme.palette.primary.main;
```

Esempio preferibile:

```ts
const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
}));
```

## Uso semantico dei token

Usa:

- `palette.text.*` per testo e contenuti con funzione testuale;
- `palette.background.*` per superfici e sfondi;
- `primary`, `secondary`, `error`, `warning`, `info` e `success` secondo il ruolo dell’elemento;
- token dedicati ad action e stati interattivi quando appropriato;
- `spacing`, `typography`, `shape`, `shadows` e `breakpoints` per il rispettivo scopo.

Non usare, per esempio, `palette.text.primary` per un bordo, uno sfondo o un elemento decorativo solo perché ha il colore desiderato. Quando manca un token adatto, valuta un token dedicato anziché riutilizzarne uno semanticamente scorretto.

Segnala una scelta quando può produrre incoerenze con temi personalizzati, modalità differenti, contrasto o futura evoluzione del design system.

## Unità di misura e dimensioni

Evita valori dimensionali hard-coded, come `16px`, quando esiste un token semanticamente appropriato. Preferisci in particolare `theme.spacing`, `theme.typography`, `theme.shape` e `theme.breakpoints`.

Una misura specifica è accettabile per requisiti tecnici, spessori grafici precisi, allineamento ad asset o vincoli non espressi dal tema. In tali casi verifica che l’unità sia adeguata:

- preferisci `rem` per tipografia e dimensioni che devono adattarsi alle impostazioni del testo;
- usa unità relative per elementi e spaziature che devono scalare con testo o contenitore;
- evita dimensioni e altezze rigide che tagliano testo o contenuto con zoom, localizzazione o viewport ridotte;
- valuta target interattivi e comportamento responsive;
- non sostituire automaticamente ogni `px`: bordi e dettagli grafici possono richiedere precisione fissa.

## Componenti, varianti e stati

Verifica:

- coerenza con componenti e pattern esistenti;
- comportamento delle varianti, delle dimensioni e dei breakpoint;
- copertura degli stati `hover`, `focus`, `active`, `selected`, `disabled` ed `error`;
- coerenza tra styling e API pubblica;
- assenza di combinazioni di props visivamente incoerenti;
- compatibilità con gli override del tema.

## CSS, personalizzazione e responsive design

Controlla:

- selettori non eccessivamente specifici o dipendenti da strutture DOM fragili;
- scope degli stili e assenza di effetti globali involontari;
- precedenza prevedibile e compatibilità con `sx`, `styleOverrides` e varianti Material UI;
- assenza di duplicazioni di regole già offerte dal tema;
- possibilità di personalizzare colori, tipografia, slot e componenti secondo l’API pubblica;
- assenza di overflow, contenuti tagliati o dimensioni rigide non necessarie;
- conservazione dell’ordine logico e usabilità su viewport ridotte.

## Documentazione ed esempi MDX

Controlla che nuove varianti e API siano documentate, che import, props e valori di default corrispondano all’implementazione, che gli snippet siano validi e accessibili e che eventuali breaking change siano evidenziate.

import{j as e}from"./iframe-CIrS23cw.js";import{u as t,M as s,T as c,P as d,b as p,S as n}from"./blocks-BPOB3-oT.js";import{O as m}from"./Overview-Qd8tkI-9.js";import{S as a,a as r}from"./SubSection-C9cZoWSd.js";import{M as x,S as h,B as j,F as u,a as g,b,Z as v,L as f,c as z}from"./MIProgressKpiCard.stories-CM1cwo8E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Thcbd2iF.js";import"./index-Ck8gTmYH.js";import"./Box-B2Z1B47M.js";import"./Typography-BznXhrek.js";import"./DefaultPropsProvider-Cq_c-I1J.js";import"./styled-C6B4F5zM.js";import"./MIProgressKpiCard-Bkk5VQ5k.js";import"./MIPaper-C8Wzwzrh.js";import"./Paper-BbB74qzV.js";import"./Stack-gyLBVwLA.js";import"./createStack-x8p8tqwj.js";import"./useThemeProps-CyhfWAEl.js";import"./CheckCircle-3KM0rA6p.js";import"./createSvgIcon-DOz7MUQP.js";import"./SvgIcon-CmWwVM1A.js";import"./LinearProgress-CQTWn0UO.js";import"./Stack-DY7YTe1w.js";import"./Tooltip-BP0xFDve.js";import"./Grow-DOpMj5Vc.js";import"./useTheme-DrsUlJ74.js";import"./utils-DdJQOc7R.js";import"./TransitionGroupContext-CP3rn5E1.js";import"./useForkRef-CBQP0s6I.js";import"./getReactElementRef-x6XiUDE9.js";import"./useControlled-g_lSaZ2g.js";import"./resolveComponentProps-BM5yZ89Q.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-Y2KCO7Vt.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-WI67lwan.js";import"./useSlotProps-IC8Zf0Uw.js";import"./IconButton-DpnRDzTp.js";import"./ButtonBase-BfUaq9Uf.js";function l(o){const i={code:"code",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:x}),`
`,e.jsx(c,{}),`
`,e.jsx(m,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MIProgressKpiCard"}),` visualizza l'avanzamento di uno o più indicatori rispetto a
un denominatore comune. Mostra la percentuale complessiva, una barra per ogni indicatore e il
relativo rapporto numeratore/denominatore, all'interno di una card basata su MIPaper.`]})}),`
`,e.jsx(a,{title:"Riferimenti",description:"Risorse utili per confrontare implementazione e specifiche.",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:["🎨 ",e.jsx("a",{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?m=auto&node-id=9698-58980&t=wqEItqfyio2ilk70-1",children:"Figma"})]})}),e.jsx("li",{children:"💻 Codice sorgente: "})]})}),`
`,e.jsxs(a,{title:"Playground",description:"Usa i controlli per modificare i dati della card e verificarne il risultato live.",children:[e.jsx(d,{}),e.jsx(p,{})]}),`
`,e.jsx(a,{title:"Utilizzo",description:"Passa il totale di riferimento a denominator e gli indicatori da visualizzare a bars.",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { MIProgressKpiCard } from '@pagopa/mui-italia';

<MIProgressKpiCard
	title="Notifiche inviate"
	denominator={10000}
	bars={[
		{ label: 'PEC', numerator: 6000 },
		{ label: 'App IO', numerator: 2500, variant: 'small' },
	]}
/>
`})})}),`
`,e.jsxs(a,{title:"Props",description:"La card riceve il denominatore comune e un array di indicatori.",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"title"})})," obbligatoria - il titolo della card."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"denominator"})}),` obbligatoria - il valore totale usato per calcolare
percentuale e avanzamento di ogni barra.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"bars"})})," obbligatoria - l'array degli indicatori da visualizzare."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"icon"})})," - un elemento React visualizzato nell'intestazione."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"tooltipText"})}),` - il testo mostrato nel tooltip dell'intestazione.
Se assente, l'icona informativa non viene mostrata.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"tooltipAriaLabel"})}),` - il nome accessibile del pulsante che apre il
tooltip. Se assente viene usato `,e.jsx("code",{children:"tooltipText"}),"."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"localeFormat"})}),` - il locale usato per formattare i numeri
(predefinito `,e.jsx("code",{children:"it-IT"}),")."]})})]}),e.jsx(r,{title:"Dati di una barra",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"numerator"})})," obbligatoria - il valore raggiunto dall'indicatore."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"label"})})," - l'etichetta visualizzata sopra la barra."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"variant"})})," - ",e.jsx("code",{children:"regular"}),` (predefinita) mostra una barra
alta 16px; `,e.jsx("code",{children:"small"})," una barra alta 8px."]})})]})})]}),`
`,e.jsxs(a,{title:"Varianti e stati",description:"Configurazioni statiche utili per confrontare l'aspetto e gli stati del componente.",children:[e.jsxs(r,{title:"Configurazione di base",children:[e.jsx(i.p,{children:"Card con un solo indicatore, senza icona, tooltip né label."}),e.jsx(n,{of:h})]}),e.jsxs(r,{title:"Varianti della barra",children:[e.jsxs(i.p,{children:["Confronto tra la variante ",e.jsx("code",{children:"regular"})," (16px) e la variante ",e.jsx("code",{children:"small"})," (8px)."]}),e.jsx(n,{of:j})]}),e.jsxs(r,{title:"Completamento",children:[e.jsx(i.p,{children:`Quando il numeratore di una barra è maggiore o uguale al denominatore, la barra diventa verde
e viene visualizzata un'icona di conferma. Se la somma dei numeratori supera il denominatore,
il componente segnala la condizione nella console.`}),e.jsx(n,{of:u})]}),e.jsxs(r,{title:"Con icona e tooltip",children:[e.jsx(i.p,{children:"Intestazione completa di icona e pulsante informativo con tooltip."}),e.jsx(n,{of:g})]}),e.jsxs(r,{title:"Più indicatori",children:[e.jsxs(i.p,{children:[`Tutte le barre condividono lo stesso denominatore e la percentuale mostrata è la somma delle
percentuali delle singole barre. Usa una label per distinguere gli indicatori e la variante
`,e.jsx("code",{children:"small"})," per ridurre l'enfasi visiva di una barra secondaria."]}),e.jsx(n,{of:b})]}),e.jsxs(r,{title:"Denominatore nullo",children:[e.jsxs(i.p,{children:["Con ",e.jsx("code",{children:"denominator"})," pari a 0 o negativo la percentuale è 0% e le barre restano vuote."]}),e.jsx(n,{of:v})]}),e.jsxs(r,{title:"Numeri e percentuali",children:[e.jsxs(i.p,{children:["Numeratore e denominatore usano ",e.jsx("code",{children:"Intl.NumberFormat"}),` con separatore delle migliaia
secondo `,e.jsx("code",{children:"localeFormat"}),": con ",e.jsx("code",{children:"it-IT"}),", ad esempio, ",e.jsx("code",{children:"6000"}),` viene
mostrato come `,e.jsx("code",{children:"6.000"}),". La percentuale complessiva mostra al massimo un decimale."]}),e.jsx(n,{of:f})]}),e.jsxs(r,{title:"Titolo lungo",children:[e.jsx(i.p,{children:"Il titolo non viene troncato e va a capo all'interno della larghezza fissa della card."}),e.jsx(n,{of:z})]})]}),`
`,e.jsx(a,{title:"Note per gli sviluppatori",description:"Indicazioni tecniche per integrare correttamente il componente.",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Il componente è stateless: tutti i valori arrivano dalle props."}),e.jsx("li",{children:e.jsx(i.p,{children:`L'avanzamento di ogni barra è limitato al 100%, mentre la percentuale complessiva non viene
limitata: se la somma dei numeratori supera il denominatore può superare il 100%.`})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("code",{children:"localeFormat"}),` è opzionale: se omessa, i numeri vengono formattati con
`,e.jsx("code",{children:"it-IT"}),"."]})})]})}),`
`,e.jsx(a,{title:"Note per i designer",description:"Informazioni utili per la revisione visuale e il confronto con Figma.",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Card MIPaper outlined con larghezza fissa di 204px, padding 24px e border radius 16px."}),e.jsx("li",{children:e.jsxs(i.p,{children:["Barra: traccia ",e.jsx("code",{children:"neutral.grey[100]"}),", avanzamento ",e.jsx("code",{children:"blue[500]"}),`,
completamento `,e.jsx("code",{children:"success[700]"})," con icona di conferma."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:["Titolo e label usano ",e.jsx("code",{children:"neutral.grey[700]"}),`; l'icona informativa usa
`,e.jsx("code",{children:"blue[500]"}),"."]})}),e.jsx("li",{children:e.jsx(i.p,{children:"Gli snapshot Chromatic usano solo i viewport fino a 400px, perché la card ha larghezza fissa."})})]})}),`
`,e.jsxs(a,{title:"Accessibilità",description:"Il nome accessibile delle barre e del tooltip dipende dalle props testuali.",children:[e.jsx(r,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"label"}),": se presente, ogni barra (",e.jsx("code",{children:"progressbar"}),`) è associata alla
propria label tramite `,e.jsx("code",{children:"aria-labelledby"}),`; altrimenti viene usato il titolo della
card.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"tooltipAriaLabel"}),`: definisce il nome accessibile del pulsante che apre il
tooltip; in sua assenza viene usato `,e.jsx("code",{children:"tooltipText"}),"."]})})]})}),e.jsx(r,{title:"Colore e completamento",children:e.jsx(i.p,{children:`Il completamento è indicato dal colore e da un'icona, ma il rapporto numeratore/denominatore
resta sempre visibile come testo.`})}),e.jsx(r,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIProgressKpiCard
	title="Fallite"
	tooltipText="Notifiche non recapitate, suddivise per causa."
	tooltipAriaLabel="Informazioni su Fallite"
	denominator={100}
	bars={[
		{ numerator: 20, label: 'Destinatario errato' },
		{ numerator: 10, label: 'Destinatario deceduto' },
	]}
/>
`})})})]})]})}function te(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{te as default};

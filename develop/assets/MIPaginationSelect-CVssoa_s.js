import{j as e}from"./iframe-D2suRgZv.js";import{u as r,M as a,T as l,P as s,b as p}from"./blocks-nbgg0lEQ.js";import{O as c}from"./Overview-ofxCZEB8.js";import{S as n}from"./SubSection-C-qSqd5n.js";import{M as m}from"./MIPaginationSelect.stories-Cw0IUhWf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLZ6Eal3.js";import"./index-pAvcHujp.js";import"./Box-BNZMBwnq.js";import"./Typography-lSWCvWZi.js";import"./DefaultPropsProvider-C9pPN9CS.js";import"./styled-Dg4SAjqP.js";import"./MIPaginationSelect-mffV-740.js";import"./MISelect-CPMPNPmp.js";import"./MIChip-iZfFU_sA.js";import"./useTheme-Bi1oBoTE.js";import"./CloseRounded-McL9W7IC.js";import"./createSvgIcon-DXqKnqxi.js";import"./SvgIcon-B5OBknnD.js";import"./Chip-I0bPiofp.js";import"./useForkRef-qR2CMe6R.js";import"./ButtonBase-c57h5RGA.js";import"./TransitionGroupContext-CriRyQ-M.js";import"./FormControl-DzwesfYS.js";import"./useFormControl-DXVtAMUG.js";import"./isMuiElement-CeAhVz4v.js";import"./FormHelperText-c3zNDyRr.js";import"./ReportRounded-COTB_Pli.js";import"./MenuItem-Ceqw7wmD.js";import"./ListContext-BKluAAv5.js";import"./listItemIconClasses-BZiNTu4y.js";import"./listItemTextClasses-BHd_NcUe.js";import"./dividerClasses-BpObdQ9j.js";import"./Select-eRe3sMiv.js";import"./FormLabel-CF2gGhV_.js";import"./Menu-BT8kIIn1.js";import"./useSlotProps-BbqPJ-Qx.js";import"./resolveComponentProps-AZibFEcc.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CMMaOTor.js";import"./Grow-pOX774nb.js";import"./utils-Lq2e-y9I.js";import"./getReactElementRef-CIHR9XSW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-ynsoB7Od.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BeL3h0Wm.js";import"./Backdrop-Cge0zgS_.js";import"./List-PzIdTtaY.js";import"./useControlled-D3dyN2al.js";import"./Input-Uyp5dc_d.js";import"./KeyboardArrowDown-Cji0jxVC.js";import"./Stack-DtDOdr4h.js";import"./createStack-vlnaEldP.js";import"./useThemeProps-BNDYbDbX.js";function t(o){const i={code:"code",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MIPaginationSelect"}),` e un selettore singolo per il numero di righe per pagina che sarà esclusivamente utilizzato
all'interno del componente  `,e.jsx("code",{children:"MIPagination"}),`.
Compone MISelect e mostra la label accanto al campo, senza label flottante.`]})}),`
`,e.jsx(n,{title:"Riferimenti",description:"Risorse per il confronto con le specifiche.",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=1504-9763&m=dev",children:e.jsx(i.p,{children:"Figma"})})}),e.jsxs("li",{children:["Link sorgente GitHub: ",e.jsx("a",{href:"https://raw.githubusercontent.com/pagopa/mui-italia/refs/heads/develop/src/components/MIPaginationSelect/MIPaginationSelect.tsx",children:"MIPaginationSelect.tsx"})]})]})}),`
`,e.jsxs(n,{title:"Playground",description:"Modifica lingua e label con i Controls e seleziona un valore.",children:[e.jsx(s,{}),e.jsx(p,{})]}),`
`,e.jsxs(n,{title:"Note per gli sviluppatori",description:"API e integrazione.",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:["Questo componente non è pensato per essere utilizzato al di fuori di ",e.jsx("code",{children:"MIPagination"}),". Per questo motivo non è esportato come parte dell'API pubblica."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:["L API espone ",e.jsx("code",{children:"options"}),", ",e.jsx("code",{children:"value"})," e ",e.jsx("code",{children:"onChange"}),`,
selezionate dalle props di MISelect tramite Pick, oltre a `,e.jsx("code",{children:"label"})," e ",e.jsx("code",{children:"locale"}),` opzionali.
Senza una label personalizzata, il testo è «Elementi per pagina» per `,e.jsx("code",{children:'locale="it"'}),` (predefinito)
e «Rows perpage» per `,e.jsx("code",{children:'locale="en"'}),`. Entrambe le props sono configurabili tramite
`,e.jsx("code",{children:"itemsPerPageOptions"})," di ",e.jsx("code",{children:"MIPagination"}),`.
Usa value e onChange per controllare la selezione dall'applicazione.
Non sono presenti opzioni predefinite.`]})}),e.jsx("li",{children:e.jsx(i.p,{children:"Il componente non cambia automaticamente il numero di pagina e non modifica MIPagination."})})]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { MIPagination } from '@pagopa/mui-italia';

<MIPagination
  count={pageCount}
  itemsPerPageOptions={{
    label: 'Righe per pagina',
    options: [10, 20],
    limit: pageSize,
    onLimitChange: setPageSize,
  }}
/>;
`})})]}),`
`,e.jsx(n,{title:"Note per i designer",description:"Layout e confronto visuale.",children:e.jsxs("ul",{children:[e.jsx("li",{children:"La label viene mostrata a sinistra del selettore, come nel riferimento Figma."}),e.jsx("li",{children:e.jsxs(i.p,{children:["Lo spazio tra campo e label usa ",e.jsx("code",{children:"theme.spacing(1.5)"}),`. Il selettore mantiene il
raggio di MISelect e usa colori e tipografia del tema attivo.`]})})]})}),`
`,e.jsxs(n,{title:"Accessibilita",description:"Associazione della label e nome accessibile.",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[`Su desktop la label visibile è associata al combobox con un ID univoco.
Su mobile la label non è visibile, ma viene usata come nome accessibile.
È possibile impostare un nome diverso con `,e.jsx("code",{children:"itemsPerPageOptions.inputProps['aria-label']"}),"."]})}),e.jsx("li",{children:"Il menu conserva la gestione da tastiera del Select MUI-Italia."})]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIPaginationSelect
  label="Numero di righe per pagina"
  options={[{ value: 20, label: '20' }]}
  value={pageSize}
  onChange={(event) => setPageSize(Number(event.target.value))}
/>
`})})]})]})}function ge(o={}){const{wrapper:i}={...r(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(t,{...o})}):t(o)}export{ge as default};

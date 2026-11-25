import{j as e}from"./iframe-6MQXqINC.js";import{u as r,M as a,T as l,P as s,b as p}from"./blocks-Bm0C6tGr.js";import{O as c}from"./Overview-CDm_skf4.js";import{S as n}from"./SubSection-BtLGqxDB.js";import{M as m}from"./MIPaginationSelect.stories-BsqFXaMe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cnm0vLjP.js";import"./index-D2qA3XRf.js";import"./Box-BM6HyTMd.js";import"./Typography-C7bhwkwa.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./styled-CKtE3LBS.js";import"./MIPaginationSelect-Bh5IQkKo.js";import"./MISelect-CMAX3WFx.js";import"./MIChip-7x9u9-Rn.js";import"./useTheme-CT6pqya3.js";import"./CloseRounded-GL_zD5Am.js";import"./createSvgIcon-DyGXVuQl.js";import"./SvgIcon-CMBky-ty.js";import"./Chip-BR9y8VzM.js";import"./useForkRef-yWUxwg9H.js";import"./ButtonBase-BspQdHa2.js";import"./TransitionGroupContext-ChxoeE96.js";import"./FormControl-kWoj5W_b.js";import"./useFormControl-BqsLhE_K.js";import"./isMuiElement-DP4_cKxi.js";import"./FormHelperText-CKAbLsC3.js";import"./ReportRounded-CqAg8072.js";import"./MenuItem-B5uyZdG5.js";import"./ListContext-Pcr2Hw3F.js";import"./listItemIconClasses-B9nyDx1m.js";import"./listItemTextClasses-htoWa2RV.js";import"./dividerClasses-CgxMar12.js";import"./Select-zw3pOinR.js";import"./FormLabel-DQUl9tFQ.js";import"./Menu-DgrH3aSW.js";import"./useSlotProps-Pf3Any7V.js";import"./resolveComponentProps-CsVhd-mo.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Cz0z0t-m.js";import"./Grow-dpu60i7m.js";import"./utils-BEe1xe9s.js";import"./getReactElementRef-CqbYMo6Z.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal--lygC2oe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BBKilzSC.js";import"./Backdrop-CS-DBVpF.js";import"./List-Ca5ihrnF.js";import"./useControlled-D936bGT3.js";import"./Input-Bq1_T5sI.js";import"./KeyboardArrowDown-DfBx9JJw.js";import"./Stack-pgcfqz6O.js";import"./createStack-DCKb-Y1i.js";import"./useThemeProps-DOMPMilT.js";function t(o){const i={code:"code",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
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

import{j as e}from"./iframe-2X3ZxJBB.js";import{u as r,M as a,T as l,P as s,b as p}from"./blocks-CXHNBczh.js";import{O as c}from"./Overview-CUxyxRnC.js";import{S as n}from"./SubSection-DGLZAtY3.js";import{M as m}from"./MIPaginationSelect.stories-BEkb15s-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./Box-CrLbxOmH.js";import"./Typography-BsD0WLvF.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./styled-CSThg6ob.js";import"./MIPaginationSelect-DHFtZIZL.js";import"./MISelect-DYQEq86N.js";import"./MIChip-DziE6FFm.js";import"./useTheme-TBw-fLAI.js";import"./CloseRounded-6baHLOnR.js";import"./createSvgIcon-C6YSOS6Z.js";import"./SvgIcon-Dw8LRDkt.js";import"./Chip-N3qhrTJQ.js";import"./useForkRef-vrRRETjr.js";import"./ButtonBase-DaB6vsJo.js";import"./TransitionGroupContext-ConkyLn2.js";import"./FormControl-IIFpe4k9.js";import"./useFormControl-DO1qolWe.js";import"./isMuiElement-ChQHbYBN.js";import"./FormHelperText-DJQclYT4.js";import"./ReportRounded-D0wU4IF0.js";import"./MenuItem-Ct8xFbQ7.js";import"./ListContext-DcRMFQ6t.js";import"./listItemIconClasses-a3ro4LW1.js";import"./listItemTextClasses-CMLDIYs0.js";import"./dividerClasses-Bp6JYho7.js";import"./Select-G1bl72FW.js";import"./FormLabel-CMvR64BL.js";import"./Menu-Cyha9DVS.js";import"./useSlotProps-BelVuA1F.js";import"./resolveComponentProps-oklE-LaI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DaiBjWjc.js";import"./Grow-DZErd4bm.js";import"./utils-B9Xpknxo.js";import"./getReactElementRef-DjnmNWy7.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CZ0ZrDHY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CvLWWrVj.js";import"./Backdrop-CvgmQxSL.js";import"./List-CYwNHAQZ.js";import"./useControlled-DW2ZXwWK.js";import"./Input-DdvRIc7U.js";import"./KeyboardArrowDown-ChXD91Z3.js";import"./Stack-DTXm74ga.js";import"./createStack-DnFOZl0w.js";import"./useThemeProps-LHtsqqCJ.js";function t(o){const i={code:"code",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
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

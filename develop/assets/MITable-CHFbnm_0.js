import{j as e}from"./iframe-2X3ZxJBB.js";import{u as s,M as l,T as c,P as d,b as p,c as a}from"./blocks-CXHNBczh.js";import{O as m}from"./Overview-CUxyxRnC.js";import{S as n,a as o}from"./SubSection-DGLZAtY3.js";import{M as h,W as x,L as u,a as j}from"./MITable.stories-oH7bQcEj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./Box-CrLbxOmH.js";import"./Typography-BsD0WLvF.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./styled-CSThg6ob.js";import"./MIButton-wpGHPRSR.js";import"./MISpinner-DiRVcUVt.js";import"./CircularProgress-0YH-WQHr.js";import"./Skeleton-Dlb4y-KW.js";import"./useTheme-TBw-fLAI.js";import"./Button-CKt4qX6J.js";import"./ButtonBase-DaB6vsJo.js";import"./TransitionGroupContext-ConkyLn2.js";import"./useForkRef-vrRRETjr.js";import"./MITable-C2mrUVRq.js";import"./MIDivider-D6uqdSLv.js";import"./Divider-DONa4uoR.js";import"./dividerClasses-Bp6JYho7.js";import"./MIPagination-C8zPf7hq.js";import"./MIPaginationSelect-DHFtZIZL.js";import"./MISelect-DYQEq86N.js";import"./MIChip-DziE6FFm.js";import"./CloseRounded-6baHLOnR.js";import"./createSvgIcon-C6YSOS6Z.js";import"./SvgIcon-Dw8LRDkt.js";import"./Chip-N3qhrTJQ.js";import"./FormControl-IIFpe4k9.js";import"./useFormControl-DO1qolWe.js";import"./isMuiElement-ChQHbYBN.js";import"./FormHelperText-DJQclYT4.js";import"./ReportRounded-D0wU4IF0.js";import"./MenuItem-Ct8xFbQ7.js";import"./ListContext-DcRMFQ6t.js";import"./listItemIconClasses-a3ro4LW1.js";import"./listItemTextClasses-CMLDIYs0.js";import"./Select-G1bl72FW.js";import"./FormLabel-CMvR64BL.js";import"./Menu-Cyha9DVS.js";import"./useSlotProps-BelVuA1F.js";import"./resolveComponentProps-oklE-LaI.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DaiBjWjc.js";import"./Grow-DZErd4bm.js";import"./utils-B9Xpknxo.js";import"./getReactElementRef-DjnmNWy7.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CZ0ZrDHY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CvLWWrVj.js";import"./Backdrop-CvgmQxSL.js";import"./List-CYwNHAQZ.js";import"./useControlled-DW2ZXwWK.js";import"./Input-DdvRIc7U.js";import"./KeyboardArrowDown-ChXD91Z3.js";import"./Stack-DTXm74ga.js";import"./createStack-DnFOZl0w.js";import"./useThemeProps-LHtsqqCJ.js";import"./Pagination-w9YDjiju.js";import"./IconButton-BfpSD8Vi.js";function r(t){const i={a:"a",code:"code",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(m,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MITable"}),` visualizza dati strutturati in righe e colonne, adattando il layout al
breakpoint: su desktop usa una tabella, mentre su mobile presenta ogni riga come coppie
intestazione/valore. Le colonne possono includere intestazioni ordinabili, con la logica di
ordinamento gestita dal consumatore; sono inoltre disponibili azioni per riga e paginazione
opzionale.`]})}),`
`,e.jsx(n,{title:"Riferimenti",description:"Specifiche usate per l'implementazione del componente.",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[`🎨
`,e.jsx(i.a,{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=1344-42521&m=dev",rel:"nofollow",children:"Desktop"})]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[`🎨
`,e.jsx(i.a,{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=1359-30426&m=dev",rel:"nofollow",children:"Mobile"})]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[`Source:
`,e.jsx(i.a,{href:"https://github.com/pagopa/mui-italia/blob/main/src/components/MITable/MITable.tsx",rel:"nofollow",children:"MITable.tsx"})]})})]})}),`
`,e.jsxs(n,{title:"Playground",description:"Usa i controlli per attivare il caricamento e mostrare o nascondere la paginazione.",children:[e.jsx(d,{}),e.jsx(p,{})]}),`
`,e.jsxs(n,{title:"Larghezza delle colonne",children:[e.jsxs(i.p,{children:["Su desktop, le colonne non di azione possono impostare ",e.jsx("code",{children:"minWidth"}),` e
`,e.jsx("code",{children:"maxWidth"})," con un numero in pixel o una stringa CSS. Con ",e.jsx("code",{children:"maxWidth"}),`,
il contenuto è limitato a tale larghezza e il testo lungo va a capo anche in assenza di spazi;
i contenuti personalizzati devono consentire il ritorno a capo. La larghezza è riferita al
contenuto, esclusa la spaziatura della cella, ed è usata anche come larghezza preferita della
colonna: la disposizione automatica della tabella può comunque distribuire lo spazio disponibile
tra le colonne. Le larghezze non si applicano al layout mobile a blocchi.`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const columns = [
  { id: 'name', header: 'Nome', maxWidth: 200, renderCell: (row) => row.name },
];
`})})]}),`
`,e.jsxs(n,{title:"Ordinamento e azioni",description:"Le colonne possono essere marcate come ordinabili e ogni riga può esporre azioni custom.",children:[e.jsxs(o,{title:"Intestazioni ordinabili",children:[e.jsxs(i.p,{children:[`Le colonne con sortable attivo mostrano il controllo di ordinamento. La logica di sorting
resta responsabilità del consumatore e può essere gestita tramite la prop `,e.jsx("code",{children:"onSort"}),`
delle colonne.`]}),e.jsxs(i.p,{children:["Se ",e.jsx("code",{children:"sortable"})," è ",e.jsx("code",{children:"true"}),`, l’icona di sorting è mostrata in stato attivo.
Per annunciare la direzione corrente ai lettori di schermo è necessario valorizzare
esplicitamente `,e.jsx("code",{children:"sortDirection"})," con ",e.jsx("code",{children:"asc"})," o ",e.jsx("code",{children:"desc"}),` sulla colonna
attualmente ordinata.`]})]}),e.jsxs(o,{title:"Righe senza azioni",children:[e.jsx(i.p,{children:"Le action di riga sono opzionali."}),e.jsx(a,{of:x})]})]}),`
`,e.jsxs(n,{title:"Caricamento",description:"Usa isLoading durante il caricamento iniziale o l'aggiornamento dei dati.",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"isLoading"})," (predefinita a ",e.jsx("code",{children:"false"}),`) mostra 10 righe skeleton,
indipendentemente da `,e.jsx("code",{children:"rows"}),` e dalla paginazione, tramite il componente interno
`,e.jsx("code",{children:"MITableSkeleton"}),`. Il layout si adatta a desktop e mobile; intestazioni e
paginazione restano visibili. Durante il caricamento non vengono chiamati
`,e.jsx("code",{children:"renderCell"})," e ",e.jsx("code",{children:"getRowId"}),"."]}),e.jsxs(i.p,{children:["La tabella desktop e il contenitore mobile espongono ",e.jsx("code",{children:'aria-busy="true"'}),`,
mentre i placeholder sono nascosti alle tecnologie assistive.
Il nome accessibile resta configurabile tramite `,e.jsx("code",{children:"desktopTableProps"})," e ",e.jsx("code",{children:"mobileTableProps"}),", come nella story seguente."]}),e.jsx(a,{of:u}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MITable
  columns={columns}
  rows={rows}
  isLoading={isLoading}
  desktopTableProps={{ 'aria-label': 'Transazioni' }}
  mobileTableProps={{ 'aria-label': 'Transazioni' }}
/>
`})})]}),`
`,e.jsxs(n,{title:"Paginazione",description:"La paginazione è opzionale e integra il componente MIPagination.",children:[e.jsx(o,{title:"Con paginazione",children:e.jsxs(i.p,{children:["Quando è presente la prop ",e.jsx("code",{children:"pagination"}),`, MITable mostra il pager in coda. Il selettore righe per
pagina è opzionale e può essere configurato tramite `,e.jsx("code",{children:"itemsPerPageOptions"}),"."]})}),e.jsxs(o,{title:"Senza paginazione",children:[e.jsxs(i.p,{children:["Se la prop ",e.jsx("code",{children:"pagination"})," non viene passata, la tabella mostra solo intestazioni e righe dati."]}),e.jsx(a,{of:j})]})]}),`
`,e.jsxs(n,{title:"Accessibilità",description:"L’accessibilità finale dipende dalla configurazione di label e azioni fornite dal consumatore.",children:[e.jsx(o,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"rows"}),": array dei dati da mostrare. Ogni elemento viene passato a"," ",`
`,e.jsx("code",{children:"renderCell"}),` delle colonne. Con un array vuoto vengono mostrate solo le
intestazioni, salvo quando `,e.jsx("code",{children:"isLoading"})," è attivo."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"isLoading"}),`: mostra 10 righe skeleton ed espone lo stato
`,e.jsx("code",{children:"aria-busy"})," sul layout attivo. I placeholder non vengono annunciati."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"getRowId"}),`: restituisce un identificativo stabile e univoco per riga, usato
come `,e.jsx("code",{children:"key"}),` React e per gli id delle label mobile. Se omessa si usa l’indice, che
è sconsigliato quando le righe possono essere riordinate o paginate.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"containerProps"}),`: permette di passare attributi HTML/ARIA al contenitore
esterno del componente (ad esempio `,e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"className"}),`,
`,e.jsx("code",{children:"aria-labelledby"}),")."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"desktopTableProps"})," e ",e.jsx("strong",{children:"mobileTableProps"}),`: permettono di
assegnare attributi distinti all’elemento `,e.jsx("code",{children:"table"}),` desktop e all’equivalente
mobile, inclusi i riferimenti per il nome accessibile.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"isAction"}),` sulle colonne: i contenuti interattivi delle colonne azione devono
avere un nome accessibile appropriato, specialmente nei casi icon-only.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"renderCell"}),` su ciascuna colonna: in layout mobile il contenuto mostrato è
interamente responsabilità del consumatore, inclusi eventuali label testuali o icone
aggiuntive.`]})})]})}),e.jsx(o,{title:"Semantica",children:e.jsxs(i.p,{children:[`In desktop MITable usa elementi nativi table, thead, tbody, tr e td. In mobile il layout è a
blocchi, quindi la comprensione dipende dal contenuto reso in `,e.jsx("code",{children:"renderCell"}),"."]})}),e.jsx(o,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const rows = [{ id: '1', status: 'Completed' }];

<MITable
  columns={[
    {
      id: 'status',
      header: 'Status',
      renderCell: (row) => row.status,
    },
    {
      id: 'actions',
      header: '',
      isAction: true,
      renderCell: (row) => (
        <IconButton aria-label={\`Open row actions for \${row.id}\`}>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ]}
  getRowId={(row) => row.id}
  rows={rows}
  pagination={{
    count: 10,
    page: 1,
    onChange: () => {},
    itemsPerPageOptions: {
      options: [10, 24, 36],
      limit: 10,
      onLimitChange: () => {},
    },
  }}
/>
`})})})]})]})}function ke(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{ke as default};

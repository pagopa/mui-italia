import{j as e}from"./iframe-BZIr8g2c.js";import{u as s,M as l,T as c,P as d,b as p,c as t}from"./blocks-CuVapLBE.js";import{O as m}from"./Overview-TmkMPB67.js";import{S as n,a as o}from"./SubSection-C_182hhD.js";import{M as h,W as x,L as u,a as j}from"./MITable.stories-DGfAtV-n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfggY3cO.js";import"./index-BtLnuvOH.js";import"./Box-CxskQ7_0.js";import"./Typography-vGKoBJGT.js";import"./DefaultPropsProvider-26RYHGpy.js";import"./styled-C74EMrKI.js";import"./MIButton-rc8jaRq5.js";import"./MISpinner-cfrOMiKq.js";import"./CircularProgress-BIMVnv2X.js";import"./Skeleton-BnQy_s6U.js";import"./useTheme-Bb7eOhg8.js";import"./Button-CqYutGHV.js";import"./ButtonBase-o94ykCQy.js";import"./TransitionGroupContext-DcnNMgGE.js";import"./useForkRef-DwqDbAPd.js";import"./MITable-BldkB0JF.js";import"./MIDivider-BKNUyRhd.js";import"./Divider-BAZxNrD6.js";import"./dividerClasses-BfEzi3l-.js";import"./MIPagination-DusT-clv.js";import"./MISelect-CQ5Hx0kQ.js";import"./KeyboardArrowDown-CQ4goqtF.js";import"./createSvgIcon-C2s2QPWS.js";import"./SvgIcon-qyfv5-Sn.js";import"./Select-C7e1HFLo.js";import"./Menu-JnJsfbez.js";import"./useSlotProps-C-ZiyOKo.js";import"./resolveComponentProps-DG62WAbE.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DJswL_QY.js";import"./Grow-B_rkVyMY.js";import"./utils-GyIikVxa.js";import"./getReactElementRef-BF20Trkt.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CCI1fG2s.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DliXxA7l.js";import"./Backdrop-DvtVq_rs.js";import"./List-ua1mvM97.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Bjia_CyW.js";import"./useFormControl-RHDNhnP9.js";import"./Input-D99-c0NK.js";import"./Stack-BwQghZEn.js";import"./createStack-B6gidCWk.js";import"./useThemeProps-DlSsAtHo.js";import"./MenuItem-yXl6cyCa.js";import"./listItemIconClasses-DxfdBKOU.js";import"./listItemTextClasses-A3kv6QSE.js";import"./Pagination-BN0A0Ppn.js";import"./MIChip-C4gzGImr.js";import"./CloseRounded-BMtL8BW5.js";import"./Chip-35vfU7Ca.js";import"./IconButton-LLQHYNQL.js";function r(a){const i={a:"a",code:"code",p:"p",pre:"pre",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
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
attualmente ordinata.`]})]}),e.jsxs(o,{title:"Righe senza azioni",children:[e.jsx(i.p,{children:"Le action di riga sono opzionali."}),e.jsx(t,{of:x})]})]}),`
`,e.jsxs(n,{title:"Caricamento",description:"Usa isLoading durante il caricamento iniziale o l'aggiornamento dei dati.",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"isLoading"})," (predefinita a ",e.jsx("code",{children:"false"}),`) mostra 10 righe skeleton,
indipendentemente da `,e.jsx("code",{children:"rows"}),` e dalla paginazione, tramite il componente interno
`,e.jsx("code",{children:"MITableSkeleton"}),`. Il layout si adatta a desktop e mobile; intestazioni e
paginazione restano visibili. Durante il caricamento non vengono chiamati
`,e.jsx("code",{children:"renderCell"})," e ",e.jsx("code",{children:"getRowId"}),"."]}),e.jsxs(i.p,{children:["La tabella desktop e il contenitore mobile espongono ",e.jsx("code",{children:'aria-busy="true"'}),`,
mentre i placeholder sono nascosti alle tecnologie assistive.
Il nome accessibile resta configurabile tramite `,e.jsx("code",{children:"desktopTableProps"})," e ",e.jsx("code",{children:"mobileTableProps"}),", come nella story seguente."]}),e.jsx(t,{of:u}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MITable
  columns={columns}
  rows={rows}
  isLoading={isLoading}
  desktopTableProps={{ 'aria-label': 'Transazioni' }}
  mobileTableProps={{ 'aria-label': 'Transazioni' }}
/>
`})})]}),`
`,e.jsxs(n,{title:"Paginazione",description:"La paginazione è opzionale e integra il componente MIPagination.",children:[e.jsx(o,{title:"Con paginazione",children:e.jsxs(i.p,{children:["Quando è presente la prop ",e.jsx("code",{children:"pagination"}),`, MITable mostra il pager in coda. Il selettore righe per
pagina è opzionale e può essere configurato tramite `,e.jsx("code",{children:"itemsPerPageOptions"}),"."]})}),e.jsxs(o,{title:"Senza paginazione",children:[e.jsxs(i.p,{children:["Se la prop ",e.jsx("code",{children:"pagination"})," non viene passata, la tabella mostra solo intestazioni e righe dati."]}),e.jsx(t,{of:j})]})]}),`
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
`})})})]})]})}function Me(a={}){const{wrapper:i}={...s(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(r,{...a})}):r(a)}export{Me as default};

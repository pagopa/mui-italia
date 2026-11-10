import{j as e,r as k,B as x,b as R,p as S}from"./iframe-DqKsui2S.js";import{M as o}from"./MIAccordion-DW0ISxce.js";import{S as h}from"./Stack-BNTagQR0.js";import{A as T}from"./Avatar-C_syDAjx.js";import{C as P}from"./CheckCircle-CImwMqKi.js";import{c as _}from"./createSvgIcon-bbdnzGJh.js";import{T as v}from"./Typography-DaPIykBW.js";const D=_(e.jsx("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"}),"ImageOutlined"),{useArgs:V}=__STORYBOOK_MODULE_PREVIEW_API__,I=900,i={none:void 0,icon:e.jsx(D,{sx:{color:"text.secondary",fontSize:S(24)}}),status:e.jsx(P,{color:"success",sx:{fontSize:S(24)}}),avatar:e.jsx(T,{component:"span",sx:{width:32,height:32,fontSize:"0.875rem",bgcolor:"primary.main"},children:"MR"})},L=[{label:"Denominazione",value:"Comune di Milano"},{label:"Codice fiscale",value:"01199250158"},{label:"Indirizzo PEC",value:"protocollo@pec.comune.milano.it"}],O=[{label:"Referente",value:"Mario Rossi"},{label:"Email",value:"mario.rossi@comune.milano.it"}],n=({title:t="Dati dell'ente",rows:r=L,titleComponent:s="p"})=>e.jsxs(x,{children:[e.jsx(v,{component:s,sx:{m:0,color:"text.secondary",fontSize:"0.875rem",fontWeight:600,textTransform:"uppercase"},children:t}),e.jsx(x,{component:"dl",sx:{m:0,"& > div + div":{borderTop:"1px solid",borderColor:"divider"}},children:r.map(({label:a,value:c})=>e.jsxs(x,{sx:{py:1.5},children:[e.jsx(v,{component:"dt",sx:{color:"text.secondary",fontSize:"0.875rem"},children:a}),e.jsx(v,{component:"dd",sx:{m:0,fontSize:"0.875rem",fontWeight:600},children:c})]},a))})]}),w={title:"Components/MIAccordion",component:o,tags:["!dev"],parameters:{layout:"padded",chromatic:{viewports:R.filter(t=>t<=I)},controls:{include:["title","description","badge","badgeColor","badgeVariant","iconOption","headingLevel","expanded","disabled","loading"]}},decorators:[t=>e.jsx(x,{sx:{width:"100%",maxWidth:I,mx:"auto"},children:e.jsx(t,{})})],args:{title:"Configurazione del servizio",description:"Verifica i dati prima di proseguire.",badge:"Attivo",badgeColor:"neutral",badgeVariant:"filled",iconOption:"icon",headingLevel:3,expanded:!1,disabled:!1,loading:!1},argTypes:{title:{control:{type:"text"},description:"Titolo dell'item, sempre visibile nell'header. Uso standard (aderente al Figma e accessibile): una stringa, con badge e badgeProps per lo stato. Contenuti personalizzati sono ammessi, ma senza elementi interattivi.",table:{category:"MIAccordion",type:{summary:"ReactNode"}}},description:{control:{type:"text"},description:"Testo secondario, visibile solo quando l'item è aperto. Solo testo.",table:{category:"MIAccordion",type:{summary:"string"}}},badge:{control:{type:"text"},description:"Testo del badge, reso come MIChip sotto il titolo.",table:{category:"MIAccordion",type:{summary:"string"}}},headingLevel:{options:[2,3,4,5,6],control:{type:"select"},description:"Livello dell'heading che contiene l'header.",table:{category:"MIAccordion",defaultValue:{summary:"3"}}},disabled:{control:{type:"boolean"},description:"Blocca l'apertura e la chiusura dell'item.",table:{category:"MIAccordion",defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"Mostra lo skeleton al posto del contenuto. Il componente non annuncia il caricamento: lo fa la pagina con la sua live region.",table:{category:"MIAccordion",defaultValue:{summary:"false"}}},expanded:{control:{type:"boolean"},description:"Stato aperto/chiuso in modalità controllata, da usare insieme a onChange. Nel Playground si aggiorna anche cliccando sull'header.",table:{category:"MIAccordion",type:{summary:"boolean"}}},iconOption:{options:["none","icon","status","avatar"],control:{type:"radio"},description:"Preset Storybook per la prop icon.",table:{category:"Storybook controls"}},badgeColor:{options:["neutral","default","info","success","warning","error","highlight"],control:{type:"select"},description:"Colore del badge (badgeProps.color).",table:{category:"Storybook controls"}},badgeVariant:{options:["filled","outlined"],control:{type:"radio"},description:"Variante del badge (badgeProps.variant).",table:{category:"Storybook controls"}}},render:function({title:r,description:s,badge:a,badgeColor:c,badgeVariant:y,iconOption:f="none",headingLevel:C,expanded:j=!1,disabled:M,loading:A}){const[,z]=V();return e.jsx(o,{title:r,description:s,badge:a,badgeProps:{color:c,variant:y},icon:i[f],headingLevel:C,expanded:j,onChange:(G,E)=>z({expanded:E}),disabled:M,loading:A,children:e.jsx(n,{})})}},d={},B=[{icon:!0,badge:!0,description:!0},{icon:!0,badge:!0,description:!1},{icon:!0,badge:!1,description:!0},{icon:!0,badge:!1,description:!1},{icon:!1,badge:!0,description:!0},{icon:!1,badge:!0,description:!1},{icon:!1,badge:!1,description:!0},{icon:!1,badge:!1,description:!1}],l={parameters:{controls:{disable:!0},docs:{description:{story:"Le 8 combinazioni di icona, badge e descrizione, chiuse e aperte. Titolo e chevron non cambiano mai posizione."}}},render:()=>e.jsx(h,{spacing:2,children:[!1,!0].flatMap(t=>B.map(({icon:r,badge:s,description:a})=>{const c=[r&&"icona",s&&"badge",a&&"descrizione"].filter(Boolean).join(", ");return e.jsx(o,{title:`${t?"Aperto":"Chiuso"}: ${c||"solo titolo"}`,icon:r?i.icon:void 0,badge:s?"Stato":void 0,description:a?"Testo di supporto":void 0,defaultExpanded:t,children:e.jsx(n,{})},`${t}-${c}`)}))})},p={parameters:{controls:{disable:!0},docs:{description:{story:"La prop icon accetta icone semplici, icone di stato colorate o avatar. MIAccordion non ne modifica colore né dimensione."}}},render:()=>e.jsxs(h,{spacing:2,children:[e.jsx(o,{title:"Icona semplice",icon:i.icon,children:e.jsx(n,{})}),e.jsx(o,{title:"Icona di stato",icon:i.status,children:e.jsx(n,{})}),e.jsx(o,{title:"Avatar",icon:i.avatar,badge:"Referente",children:e.jsx(n,{})})]})},u={parameters:{controls:{disable:!0},docs:{description:{story:"Da disabilitato l'item ha sfondo grigio, icona, titolo e badge attenuati e il badge diventa outlined mantenendo il suo colore."}}},render:()=>e.jsxs(h,{spacing:2,children:[e.jsx(o,{title:"Regole di inoltro",icon:i.icon,badge:"Stato",disabled:!0,children:e.jsx(n,{})}),e.jsx(o,{title:"Badge colorato",icon:i.status,badge:"Attivo",badgeProps:{color:"success"},disabled:!0,children:e.jsx(n,{})}),e.jsx(o,{title:"Disabilitato e aperto",badge:"Stato",disabled:!0,defaultExpanded:!0,children:e.jsx(n,{})})]})},m={parameters:{controls:{disable:!0},docs:{description:{story:"Durante il caricamento solo il contenuto diventa skeleton: l'header resta visibile e cliccabile."}}},render:()=>e.jsx(o,{title:"Configurazione del servizio",icon:i.icon,badge:"Stato",description:"Non mostrata durante il caricamento",loading:!0,defaultExpanded:!0,children:e.jsx(n,{})})},$=[{id:"dati",title:"Informazioni generali"},{id:"config",title:"Configurazione del servizio"},{id:"inoltro",title:"Regole di inoltro"}],g={parameters:{controls:{disable:!0},docs:{description:{story:"Più item impilati con 16px di spazio. Il gruppo lo gestisce la pagina: in questo esempio, con expanded e onChange, si apre un item alla volta."}}},render:function(){const[r,s]=k.useState("dati");return e.jsx(h,{spacing:2,children:$.map(({id:a,title:c})=>e.jsx(o,{title:c,icon:i.icon,expanded:r===a,onChange:(y,f)=>s(f?a:!1),children:e.jsx(n,{})},a))})}},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{title:"Titolo molto lungo che va a capo su più righe per verificare che icona e chevron restino allineati in alto anche su viewport strette",icon:i.avatar,badge:"Badge con un testo più lungo del solito",description:"Descrizione lunga che occupa più righe e deve restare leggibile, con la giusta spaziatura rispetto all'header e al contenuto sottostante.",defaultExpanded:!0,children:[e.jsx(n,{titleComponent:"h4"}),e.jsx(n,{title:"Contatti",rows:O,titleComponent:"h4"})]})},F=["Playground","SlotCombinations","IconVariants","Disabled","Loading","Group","StressTest"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Le 8 combinazioni di icona, badge e descrizione, chiuse e aperte. Titolo e chevron non cambiano mai posizione.'
      }
    }
  },
  render: () => <Stack spacing={2}>
      {[false, true].flatMap(expanded => slotCombinations.map(({
      icon,
      badge,
      description
    }) => {
      const name = [icon && 'icona', badge && 'badge', description && 'descrizione'].filter(Boolean).join(', ');
      return <MIAccordion key={\`\${expanded}-\${name}\`} title={\`\${expanded ? 'Aperto' : 'Chiuso'}: \${name || 'solo titolo'}\`} icon={icon ? icons.icon : undefined} badge={badge ? 'Stato' : undefined} description={description ? 'Testo di supporto' : undefined} defaultExpanded={expanded}>
              <SampleContent />
            </MIAccordion>;
    }))}
    </Stack>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'La prop icon accetta icone semplici, icone di stato colorate o avatar. MIAccordion non ne modifica colore né dimensione.'
      }
    }
  },
  render: () => <Stack spacing={2}>
      <MIAccordion title="Icona semplice" icon={icons.icon}>
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Icona di stato" icon={icons.status}>
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Avatar" icon={icons.avatar} badge="Referente">
        <SampleContent />
      </MIAccordion>
    </Stack>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Da disabilitato l'item ha sfondo grigio, icona, titolo e badge attenuati e il badge diventa outlined mantenendo il suo colore."
      }
    }
  },
  render: () => <Stack spacing={2}>
      <MIAccordion title="Regole di inoltro" icon={icons.icon} badge="Stato" disabled>
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Badge colorato" icon={icons.status} badge="Attivo" badgeProps={{
      color: 'success'
    }} disabled>
        <SampleContent />
      </MIAccordion>
      <MIAccordion title="Disabilitato e aperto" badge="Stato" disabled defaultExpanded>
        <SampleContent />
      </MIAccordion>
    </Stack>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Durante il caricamento solo il contenuto diventa skeleton: l'header resta visibile e cliccabile."
      }
    }
  },
  render: () => <MIAccordion title="Configurazione del servizio" icon={icons.icon} badge="Stato" description="Non mostrata durante il caricamento" loading defaultExpanded>
      <SampleContent />
    </MIAccordion>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Più item impilati con 16px di spazio. Il gruppo lo gestisce la pagina: in questo esempio, con expanded e onChange, si apre un item alla volta.'
      }
    }
  },
  render: function RenderGroup() {
    const [expanded, setExpanded] = useState<string | false>('dati');
    return <Stack spacing={2}>
        {groupItems.map(({
        id,
        title
      }) => <MIAccordion key={id} title={title} icon={icons.icon} expanded={expanded === id} onChange={(_, isExpanded) => setExpanded(isExpanded ? id : false)}>
            <SampleContent />
          </MIAccordion>)}
      </Stack>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIAccordion title="Titolo molto lungo che va a capo su più righe per verificare che icona e chevron restino allineati in alto anche su viewport strette" icon={icons.avatar} badge="Badge con un testo più lungo del solito" description="Descrizione lunga che occupa più righe e deve restare leggibile, con la giusta spaziatura rispetto all'header e al contenuto sottostante." defaultExpanded>
      <SampleContent titleComponent="h4" />
      <SampleContent title="Contatti" rows={contactRows} titleComponent="h4" />
    </MIAccordion>
}`,...b.parameters?.docs?.source}}};const J=Object.freeze(Object.defineProperty({__proto__:null,Disabled:u,Group:g,IconVariants:p,Loading:m,Playground:d,SlotCombinations:l,StressTest:b,__namedExportsOrder:F,default:w},Symbol.toStringTag,{value:"Module"}));export{u as D,g as G,p as I,m as L,J as M,l as S,b as a};

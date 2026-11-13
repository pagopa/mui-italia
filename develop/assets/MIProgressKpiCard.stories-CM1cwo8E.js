import{j as e,b as P,p as b}from"./iframe-CIrS23cw.js";import{M as r}from"./MIProgressKpiCard-Bkk5VQ5k.js";import{S as g}from"./Stack-DY7YTe1w.js";import{c as h}from"./createSvgIcon-DOz7MUQP.js";const C=h(e.jsx("path",{d:"m4.01 6.03 7.51 3.22-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3 2 10l15 2-15 2 .01 7L23 12z"}),"SendOutlined"),M=400,u=()=>e.jsx(C,{sx:a=>({color:a.colors.neutral.grey[300],width:b(24),height:b(24)})}),j={title:"Components/MIProgressKpiCard",component:r,tags:["!dev"],parameters:{layout:"centered",controls:{include:["title","denominator","numerator","barLabel","barVariant","showIcon","tooltipText","tooltipAriaLabel","localeFormat"]},chromatic:{viewports:P.filter(a=>a<=M)}},args:{title:"Inviate",denominator:1e4,numerator:6e3,barLabel:"",barVariant:"regular",showIcon:!1,tooltipText:"",tooltipAriaLabel:"",localeFormat:"it-IT"},argTypes:{title:{control:"text",description:"Titolo della card. Viene usato anche come nome accessibile delle barre senza label.",table:{category:"MIProgressKpiCard",type:{summary:"string"}}},denominator:{control:{type:"number",min:0},description:"Totale di riferimento comune a tutte le barre. Con valore 0 o negativo percentuale e avanzamento sono 0.",table:{category:"MIProgressKpiCard",type:{summary:"number"}}},tooltipText:{control:"text",description:"Testo del tooltip informativo. Se vuoto, l’icona informativa non viene mostrata.",table:{category:"MIProgressKpiCard",type:{summary:"string"}}},tooltipAriaLabel:{control:"text",description:"Nome accessibile del pulsante del tooltip. Se assente viene usato tooltipText.",table:{category:"MIProgressKpiCard",type:{summary:"string"}}},localeFormat:{options:["it-IT","en-US"],control:"radio",description:"Locale usato da Intl.NumberFormat per percentuale, numeratori e denominatore.",table:{category:"MIProgressKpiCard",type:{summary:"string"},defaultValue:{summary:"it-IT"}}},numerator:{control:{type:"number",min:0},description:"Controllo Storybook: numerator della barra mostrata nel Playground.",table:{category:"Storybook controls"}},barLabel:{control:"text",description:"Controllo Storybook: label della barra. Se vuota, la label non viene mostrata.",table:{category:"Storybook controls"}},barVariant:{options:["regular","small"],control:"radio",description:"Controllo Storybook: variant della barra (16px o 8px di altezza).",table:{category:"Storybook controls"}},showIcon:{control:"boolean",description:"Controllo Storybook: mostra un’icona di esempio nell’intestazione.",table:{category:"Storybook controls"}},icon:{control:!1,table:{disable:!0}},bars:{control:!1,table:{disable:!0}}},render:({title:a,denominator:I,numerator:v,barLabel:x,barVariant:T,showIcon:S,tooltipText:y,tooltipAriaLabel:f,localeFormat:F})=>e.jsx(r,{title:a,icon:S?e.jsx(u,{}):void 0,tooltipText:y||void 0,tooltipAriaLabel:f||void 0,denominator:I,localeFormat:F,bars:[{numerator:v,label:x||void 0,variant:T}]})},t={controls:{disable:!0}},o={},i={parameters:t,render:()=>e.jsx(r,{title:"Inviate",denominator:1e4,localeFormat:"it-IT",bars:[{numerator:6e3}]})},n={parameters:t,render:()=>e.jsxs(g,{direction:"row",spacing:2,alignItems:"flex-start",children:[e.jsx(r,{title:"Inviate",denominator:1e4,localeFormat:"it-IT",bars:[{numerator:6e3,variant:"regular"}]}),e.jsx(r,{title:"Inviate",denominator:1e4,localeFormat:"it-IT",bars:[{numerator:6e3,variant:"small"}]})]})},s={parameters:t,render:()=>e.jsx(r,{title:"Lette",denominator:1e4,localeFormat:"it-IT",bars:[{numerator:1e4}]})},l={parameters:t,render:()=>e.jsx(r,{title:"Inviate",icon:e.jsx(u,{}),tooltipText:"Numero di notifiche inviate rispetto al totale delle notifiche da inviare.",tooltipAriaLabel:"Informazioni su Inviate",denominator:1e4,localeFormat:"it-IT",bars:[{numerator:1e4}]})},c={parameters:t,render:()=>e.jsx(r,{title:"Fallite",icon:e.jsx(u,{}),tooltipText:"Notifiche non recapitate, suddivise per causa.",tooltipAriaLabel:"Informazioni su Fallite",denominator:100,localeFormat:"it-IT",bars:[{numerator:20,label:"Destinatario errato"},{numerator:10,label:"Destinatario deceduto",variant:"small"}]})},m={parameters:t,render:()=>e.jsx(r,{title:"Inviate",denominator:0,localeFormat:"it-IT",bars:[{numerator:0}]})},d={parameters:t,render:()=>e.jsxs(g,{direction:"row",spacing:2,alignItems:"flex-start",children:[e.jsx(r,{title:"Inviate",denominator:3e4,localeFormat:"it-IT",bars:[{numerator:1e4}]}),e.jsx(r,{title:"Sent",denominator:3e4,localeFormat:"en-US",bars:[{numerator:1e4}]})]})},p={parameters:t,render:()=>e.jsx(r,{title:"Notifiche consegnate tramite domicilio digitale",icon:e.jsx(u,{}),tooltipText:"Notifiche consegnate al domicilio digitale del destinatario.",tooltipAriaLabel:"Informazioni su Notifiche consegnate tramite domicilio digitale",denominator:1e4,localeFormat:"it-IT",bars:[{numerator:4500}]})},L=["Playground","Simple","BarVariants","Full","FullWithIconAndTooltip","MultipleBars","ZeroDenominator","LocaleFormats","LongTitle"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <MIProgressKpiCard title="Inviate" denominator={10000} localeFormat="it-IT" bars={[{
    numerator: 6000
  }]} />
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <Stack direction="row" spacing={2} alignItems="flex-start">
      <MIProgressKpiCard title="Inviate" denominator={10000} localeFormat="it-IT" bars={[{
      numerator: 6000,
      variant: 'regular'
    }]} />
      <MIProgressKpiCard title="Inviate" denominator={10000} localeFormat="it-IT" bars={[{
      numerator: 6000,
      variant: 'small'
    }]} />
    </Stack>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <MIProgressKpiCard title="Lette" denominator={10000} localeFormat="it-IT" bars={[{
    numerator: 10000
  }]} />
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <MIProgressKpiCard title="Inviate" icon={<KpiIcon />} tooltipText="Numero di notifiche inviate rispetto al totale delle notifiche da inviare." tooltipAriaLabel="Informazioni su Inviate" denominator={10000} localeFormat="it-IT" bars={[{
    numerator: 10000
  }]} />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <MIProgressKpiCard title="Fallite" icon={<KpiIcon />} tooltipText="Notifiche non recapitate, suddivise per causa." tooltipAriaLabel="Informazioni su Fallite" denominator={100} localeFormat="it-IT" bars={[{
    numerator: 20,
    label: 'Destinatario errato'
  }, {
    numerator: 10,
    label: 'Destinatario deceduto',
    variant: 'small'
  }]} />
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <MIProgressKpiCard title="Inviate" denominator={0} localeFormat="it-IT" bars={[{
    numerator: 0
  }]} />
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <Stack direction="row" spacing={2} alignItems="flex-start">
      <MIProgressKpiCard title="Inviate" denominator={30000} localeFormat="it-IT" bars={[{
      numerator: 10000
    }]} />
      <MIProgressKpiCard title="Sent" denominator={30000} localeFormat="en-US" bars={[{
      numerator: 10000
    }]} />
    </Stack>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: staticParameters,
  render: () => <MIProgressKpiCard title="Notifiche consegnate tramite domicilio digitale" icon={<KpiIcon />} tooltipText="Notifiche consegnate al domicilio digitale del destinatario." tooltipAriaLabel="Informazioni su Notifiche consegnate tramite domicilio digitale" denominator={10000} localeFormat="it-IT" bars={[{
    numerator: 4500
  }]} />
}`,...p.parameters?.docs?.source}}};const N=Object.freeze(Object.defineProperty({__proto__:null,BarVariants:n,Full:s,FullWithIconAndTooltip:l,LocaleFormats:d,LongTitle:p,MultipleBars:c,Playground:o,Simple:i,ZeroDenominator:m,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{n as B,s as F,d as L,N as M,i as S,m as Z,l as a,c as b,p as c};

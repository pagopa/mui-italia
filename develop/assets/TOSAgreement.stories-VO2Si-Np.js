import{b as a,j as o}from"./iframe-CIrS23cw.js";import{T as t}from"./TOSAgreement-DvDPRrFn.js";import{F as c}from"./FormControlLabel-wEjKpIwR.js";import{S as m}from"./Switch-DN4Pci2O.js";import{T as s}from"./Typography-BznXhrek.js";import{L as e}from"./Link-DLKUyWms.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-DY7YTe1w.js";import"./styled-C6B4F5zM.js";import"./createStack-x8p8tqwj.js";import"./useThemeProps-CyhfWAEl.js";import"./DefaultPropsProvider-Cq_c-I1J.js";import"./Button-BnqwMWPM.js";import"./ButtonBase-BfUaq9Uf.js";import"./TransitionGroupContext-CP3rn5E1.js";import"./useForkRef-CBQP0s6I.js";import"./useFormControl-AfRdBBdD.js";import"./SwitchBase-CU63Qr-j.js";import"./useControlled-g_lSaZ2g.js";const A={title:"Components/TOSAgreement",component:t,parameters:{chromatic:{viewports:a}},args:{productName:"MUI Italia",description:"Prima di entrare, leggi e accetta l’Informativa Privacy e i Termini e condizioni d’uso. Potrai consultarli di nuovo quando vuoi: li trovi sempre in fondo alla pagina.",confirmBtnLabel:"Accedi",confirmBtnError:!1},argTypes:{productName:{control:"text"},description:{control:"text"},sx:{table:{disable:!0}},confirmBtnDisabled:{options:[!0,!1],control:{type:"boolean"}},confirmBtnLabel:{control:"text"},confirmBtnError:{options:[!0,!1],control:{type:"boolean"}}}},r=n=>{const i=o.jsxs(s,{color:"text.secondary",children:["Dichiaro di aver letto e accettato l’",o.jsx(e,{underline:"hover",href:"#",children:"Informativa Privacy"})," ","e i"," ",o.jsx(e,{underline:"hover",href:"#",children:"Termini e condizioni d’uso"})," ","di MUI Italia"]});return o.jsx(t,{...n,onConfirm:()=>console.log("Confermato"),children:o.jsx(c,{control:o.jsx(m,{sx:{margin:2},name:"accepted"}),label:i})})},O=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const SwitchLabel = <Typography color="text.secondary">
      Dichiaro di aver letto e accettato l’
      <Link underline="hover" href="#">
        Informativa Privacy
      </Link>{' '}
      e i{' '}
      <Link underline="hover" href="#">
        Termini e condizioni d’uso
      </Link>{' '}
      di MUI Italia
    </Typography>;
  return <TOSAgreement {...args} onConfirm={() => console.log('Confermato')}>
      <FormControlLabel control={<Switch sx={{
      margin: 2
    }} name="accepted" />} label={SwitchLabel} />
    </TOSAgreement>;
}`,...r.parameters?.docs?.source}}};export{r as Default,O as __namedExportsOrder,A as default};

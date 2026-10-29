import{b as n,j as o}from"./iframe-rw-T87Ps.js";import{T as t}from"./TOSAgreement-Bzx2nlfB.js";import{F as c}from"./FormControlLabel-BLqcvmRg.js";import{S as m}from"./Switch-Dw1VOoam.js";import{T as s}from"./Typography-DIxyHfgM.js";import{L as e}from"./Link-CnIokF59.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-DK8xaQOE.js";import"./styled-BbRqDVtB.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./Button-DRjStLay.js";import"./ButtonBase-B-e_mOzE.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./useForkRef-D1JMp28z.js";import"./useFormControl-BGFJEerR.js";import"./SwitchBase-DWOufolV.js";import"./useControlled-Bvt6qr0H.js";const A={title:"Components/TOSAgreement",component:t,parameters:{chromatic:{viewports:n}},args:{productName:"MUI Italia",description:"Prima di entrare, leggi e accetta l’Informativa Privacy e i Termini e condizioni d’uso. Potrai consultarli di nuovo quando vuoi: li trovi sempre in fondo alla pagina.",confirmBtnLabel:"Accedi",confirmBtnError:!1},argTypes:{productName:{control:"text"},description:{control:"text"},sx:{table:{disable:!0}},confirmBtnDisabled:{options:[!0,!1],control:{type:"boolean"}},confirmBtnLabel:{control:"text"},confirmBtnError:{options:[!0,!1],control:{type:"boolean"}}}},r=i=>{const a=o.jsxs(s,{color:"text.secondary",children:["Dichiaro di aver letto e accettato l’",o.jsx(e,{underline:"hover",href:"#",children:"Informativa Privacy"})," ","e i"," ",o.jsx(e,{underline:"hover",href:"#",children:"Termini e condizioni d’uso"})," ","di MUI Italia"]});return o.jsx(t,{...i,onConfirm:()=>console.log("Confermato"),children:o.jsx(c,{control:o.jsx(m,{sx:{margin:2},name:"accepted"}),label:a})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const O=["Default"];export{r as Default,O as __namedExportsOrder,A as default};

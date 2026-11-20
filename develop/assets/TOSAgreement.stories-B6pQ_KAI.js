import{b as a,j as o}from"./iframe-CL-nofVy.js";import{T as t}from"./TOSAgreement-CQEq3-7W.js";import{F as c}from"./FormControlLabel-7nVK7Kwx.js";import{S as m}from"./Switch-Cz9Uv8lN.js";import{T as s}from"./Typography-Cz4LsPd3.js";import{L as e}from"./Link-BuOu9Kes.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-BGzxD5bO.js";import"./styled-ovOPsWgk.js";import"./createStack-LmgpXbRG.js";import"./useThemeProps-DdJlTd84.js";import"./DefaultPropsProvider-CUarE2Ck.js";import"./Button-CuoZ7k1t.js";import"./ButtonBase-DHfqvIli.js";import"./TransitionGroupContext-C7nOtKIy.js";import"./useForkRef-FJdE9ynN.js";import"./useFormControl-DTE0iEpa.js";import"./SwitchBase-DfW3LzbY.js";import"./useControlled-Cm-FkzkU.js";const A={title:"Components/TOSAgreement",component:t,parameters:{chromatic:{viewports:a}},args:{productName:"MUI Italia",description:"Prima di entrare, leggi e accetta l’Informativa Privacy e i Termini e condizioni d’uso. Potrai consultarli di nuovo quando vuoi: li trovi sempre in fondo alla pagina.",confirmBtnLabel:"Accedi",confirmBtnError:!1},argTypes:{productName:{control:"text"},description:{control:"text"},sx:{table:{disable:!0}},confirmBtnDisabled:{options:[!0,!1],control:{type:"boolean"}},confirmBtnLabel:{control:"text"},confirmBtnError:{options:[!0,!1],control:{type:"boolean"}}}},r=n=>{const i=o.jsxs(s,{color:"text.secondary",children:["Dichiaro di aver letto e accettato l’",o.jsx(e,{underline:"hover",href:"#",children:"Informativa Privacy"})," ","e i"," ",o.jsx(e,{underline:"hover",href:"#",children:"Termini e condizioni d’uso"})," ","di MUI Italia"]});return o.jsx(t,{...n,onConfirm:()=>console.log("Confermato"),children:o.jsx(c,{control:o.jsx(m,{sx:{margin:2},name:"accepted"}),label:i})})},O=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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

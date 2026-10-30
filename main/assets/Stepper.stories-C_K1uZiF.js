import{j as e,B as p}from"./iframe-CDfDAPFk.js";import{S as s,a as n,b as i}from"./Stepper-DJgUAA47.js";import{T as c}from"./Typography-9AQN7ayB.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./styled-tN4ayshy.js";import"./createSvgIcon-BbEuUIJp.js";import"./SvgIcon-C-yBIyJ3.js";const v={title:"MUI Components/Navigation/Stepper",component:s},l=["Intestazione","Destinatario","Allegati"],r=()=>e.jsx(p,{sx:{width:"100%"},children:e.jsx(s,{activeStep:1,children:l.map(t=>e.jsx(n,{children:e.jsx(i,{children:t})},t))})});r.parameters={controls:{hideNoControlsWarning:!0}};r.decorators=[t=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"#F5F5F5"},children:e.jsx(t,{})})];const a=()=>e.jsx(p,{sx:{width:"100%"},children:e.jsx(s,{activeStep:1,alternativeLabel:!0,children:l.map(t=>e.jsx(n,{children:e.jsx(i,{children:t})},t))})});a.decorators=[t=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"#F5F5F5"},children:e.jsx(t,{})})];const o=()=>e.jsx(p,{sx:{width:"100%"},children:e.jsx(s,{activeStep:1,children:l.map(t=>e.jsx(n,{children:e.jsx(i,{optional:e.jsx(c,{variant:"caption",children:"Testo facoltativo"}),children:t})},t))})});o.decorators=[t=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"#F5F5F5"},children:e.jsx(t,{})})];const g=["Default","AlternativeLabel","OptionalText"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Box sx={{
  width: '100%'
}}>
    <Stepper activeStep={1}>
      {steps.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
  </Box>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Box sx={{
  width: '100%'
}}>
    <Stepper activeStep={1} alternativeLabel>
      {steps.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
  </Box>`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Box sx={{
  width: '100%'
}}>
    <Stepper activeStep={1}>
      {steps.map(label => <Step key={label}>
          <StepLabel optional={<Typography variant="caption">Testo facoltativo</Typography>}>
            {label}
          </StepLabel>
        </Step>)}
    </Stepper>
  </Box>`,...o.parameters?.docs?.source}}};export{a as AlternativeLabel,r as Default,o as OptionalText,g as __namedExportsOrder,v as default};

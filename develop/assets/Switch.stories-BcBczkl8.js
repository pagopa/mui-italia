import{j as r}from"./iframe-ByoTlC9Q.js";import{S as t}from"./Switch-cZ9NnfK0.js";import{F as l}from"./FormGroup-BTtaas_b.js";import{F as i}from"./FormControlLabel-C3qvJ8-b.js";import{F as n}from"./FormHelperText-iOgwlluV.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DGsnD8AD.js";import"./SwitchBase-krrlSf08.js";import"./styled-1Q9tXkxe.js";import"./useFormControl-BO0lhaAJ.js";import"./useControlled-BB-IPjV-.js";import"./ButtonBase-BEVN0AM_.js";import"./TransitionGroupContext-Ccv7Y6Ew.js";import"./useForkRef-DBOtKc3X.js";import"./Typography-BUFn3w4e.js";import"./Stack-BUBEZOaa.js";import"./createStack-DJUqnC-m.js";import"./useThemeProps-bqWK05tC.js";const D={title:"MUI Components/Inputs/Switch",component:t,args:{color:"default"},argTypes:{color:{options:["primary","error"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{options:["medium","small"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}}}}},p=c=>r.jsx(t,{...c}),e=p.bind({});e.args={color:"primary"};const o=p.bind({});o.args={disabled:!0};const a=()=>r.jsx(l,{children:r.jsx(i,{control:r.jsx(t,{sx:{mx:1.5},defaultChecked:!0}),label:"Label"})}),s=()=>r.jsx(l,{children:r.jsx(i,{disabled:!0,control:r.jsx(t,{sx:{mx:1.5}}),label:"Label"})}),m=()=>r.jsxs(l,{children:[r.jsx(i,{control:r.jsx(t,{color:"error",sx:{mx:1.5}}),label:"Label"}),r.jsx(n,{error:!0,children:"Helper Text"})]}),E=["Primary","Disabled","WithLabel","DisabledWithLabel","ErrorWithHelperText"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <FormGroup>
    <FormControlLabel control={<Switch sx={{
    mx: 1.5
  }} defaultChecked />} label="Label" />
  </FormGroup>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <FormGroup>
    <FormControlLabel disabled control={<Switch sx={{
    mx: 1.5
  }} />} label="Label" />
  </FormGroup>`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <FormGroup>
    <FormControlLabel control={<Switch color="error" sx={{
    mx: 1.5
  }} />} label="Label" />
    <FormHelperText error>Helper Text</FormHelperText>
  </FormGroup>`,...m.parameters?.docs?.source}}};export{o as Disabled,s as DisabledWithLabel,m as ErrorWithHelperText,e as Primary,a as WithLabel,E as __namedExportsOrder,D as default};

import{j as a}from"./iframe-6MQXqINC.js";import{M as o}from"./MIStepper-DrDSau4O.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CT6pqya3.js";import"./styled-CKtE3LBS.js";import"./Stack-pgcfqz6O.js";import"./createStack-DCKb-Y1i.js";import"./useThemeProps-DOMPMilT.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./CircularProgress-BmVfC5ye.js";import"./Typography-C7bhwkwa.js";import"./Stepper-Cxz-z0Id.js";import"./createSvgIcon-DyGXVuQl.js";import"./SvgIcon-CMBky-ty.js";const I={title:"Components/MIStepper"},p=[{label:"Personal data"},{label:"Review"},{label:"Confirmation"}],e={render:()=>a.jsx(o,{steps:p,activeStep:0})},r={render:()=>a.jsx(o,{steps:p,activeStep:1})},t={render:()=>a.jsx(o,{steps:p,activeStep:2})},s={render:()=>a.jsx(o,{activeStep:1,steps:[{label:"Insert personal and contact information"},{label:"Review all entered information before submitting"},{label:"Confirm and complete the wizard flow"}]})},w=["FirstStep","MiddleStep","LastStep","LongLabels"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <MIStepper steps={steps} activeStep={0} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <MIStepper steps={steps} activeStep={1} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <MIStepper steps={steps} activeStep={2} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <MIStepper activeStep={1} steps={[{
    label: 'Insert personal and contact information'
  }, {
    label: 'Review all entered information before submitting'
  }, {
    label: 'Confirm and complete the wizard flow'
  }]} />
}`,...s.parameters?.docs?.source}}};export{e as FirstStep,t as LastStep,s as LongLabels,r as MiddleStep,w as __namedExportsOrder,I as default};

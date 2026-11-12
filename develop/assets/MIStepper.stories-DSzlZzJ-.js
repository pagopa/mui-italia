import{j as a}from"./iframe-QS4E-7kp.js";import{M as o}from"./MIStepper-CbuNZRz1.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-DtdRabi7.js";import"./styled-Cp8mViLI.js";import"./Stack-COT3Y9GX.js";import"./createStack-BvVMW1Js.js";import"./useThemeProps-BMid6KCD.js";import"./DefaultPropsProvider-DskoNSvz.js";import"./CircularProgress-BmTBIjL5.js";import"./Typography-BhBBVfSC.js";import"./Stepper-ffOzKjhR.js";import"./createSvgIcon-DZMTz-8P.js";import"./SvgIcon-DPFPFDDJ.js";const I={title:"Components/MIStepper"},p=[{label:"Personal data"},{label:"Review"},{label:"Confirmation"}],e={render:()=>a.jsx(o,{steps:p,activeStep:0})},r={render:()=>a.jsx(o,{steps:p,activeStep:1})},t={render:()=>a.jsx(o,{steps:p,activeStep:2})},s={render:()=>a.jsx(o,{activeStep:1,steps:[{label:"Insert personal and contact information"},{label:"Review all entered information before submitting"},{label:"Confirm and complete the wizard flow"}]})},w=["FirstStep","MiddleStep","LastStep","LongLabels"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

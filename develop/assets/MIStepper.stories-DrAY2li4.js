import{j as a}from"./iframe-rw-T87Ps.js";import{M as o}from"./MIStepper-XKq3xnaw.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-xu0WuyZg.js";import"./styled-BbRqDVtB.js";import"./Stack-DK8xaQOE.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./CircularProgress-BIQxSTrT.js";import"./Typography-DIxyHfgM.js";import"./Stepper-Bvlcbq1b.js";import"./createSvgIcon-BLI2zqKg.js";import"./SvgIcon-BqyspOV3.js";const I={title:"Components/MIStepper"},p=[{label:"Personal data"},{label:"Review"},{label:"Confirmation"}],e={render:()=>a.jsx(o,{steps:p,activeStep:0})},r={render:()=>a.jsx(o,{steps:p,activeStep:1})},t={render:()=>a.jsx(o,{steps:p,activeStep:2})},s={render:()=>a.jsx(o,{activeStep:1,steps:[{label:"Insert personal and contact information"},{label:"Review all entered information before submitting"},{label:"Confirm and complete the wizard flow"}]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const w=["FirstStep","MiddleStep","LastStep","LongLabels"];export{e as FirstStep,t as LastStep,s as LongLabels,r as MiddleStep,w as __namedExportsOrder,I as default};

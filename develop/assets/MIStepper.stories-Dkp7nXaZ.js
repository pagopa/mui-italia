import{j as a}from"./iframe-5Wy2T5h3.js";import{M as o}from"./MIStepper-_pVvcz7J.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BId1B-vw.js";import"./styled-CRUdqmCq.js";import"./Stack-Dp12Lk8P.js";import"./createStack-C9bYgYmk.js";import"./useThemeProps-emZ_TIsH.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./CircularProgress-CHOTLCxY.js";import"./Typography-D0v0-SYT.js";import"./Stepper-CL5A2m74.js";import"./createSvgIcon-DmL99QgT.js";import"./SvgIcon-DdZ_-XQg.js";const I={title:"Components/MIStepper"},p=[{label:"Personal data"},{label:"Review"},{label:"Confirmation"}],e={render:()=>a.jsx(o,{steps:p,activeStep:0})},r={render:()=>a.jsx(o,{steps:p,activeStep:1})},t={render:()=>a.jsx(o,{steps:p,activeStep:2})},s={render:()=>a.jsx(o,{activeStep:1,steps:[{label:"Insert personal and contact information"},{label:"Review all entered information before submitting"},{label:"Confirm and complete the wizard flow"}]})},w=["FirstStep","MiddleStep","LastStep","LongLabels"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

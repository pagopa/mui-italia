import{j as a}from"./iframe-DqKsui2S.js";import{M as o}from"./MIStepper-CymP1GY8.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-D3Y4xEPH.js";import"./styled-Df695Bk_.js";import"./Stack-BNTagQR0.js";import"./createStack-CqPDIsXo.js";import"./useThemeProps-BkF6htZ6.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./CircularProgress-D5LKQyge.js";import"./Typography-DaPIykBW.js";import"./Stepper-CnDOHfKP.js";import"./createSvgIcon-bbdnzGJh.js";import"./SvgIcon-DZqMrxle.js";const I={title:"Components/MIStepper"},p=[{label:"Personal data"},{label:"Review"},{label:"Confirmation"}],e={render:()=>a.jsx(o,{steps:p,activeStep:0})},r={render:()=>a.jsx(o,{steps:p,activeStep:1})},t={render:()=>a.jsx(o,{steps:p,activeStep:2})},s={render:()=>a.jsx(o,{activeStep:1,steps:[{label:"Insert personal and contact information"},{label:"Review all entered information before submitting"},{label:"Confirm and complete the wizard flow"}]})},w=["FirstStep","MiddleStep","LastStep","LongLabels"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

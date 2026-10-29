import{r as d,j as t,B as r}from"./iframe-5Wy2T5h3.js";import{M as s}from"./MITooltip-Dz7z1UTW.js";import{B as m}from"./Button-CkvxX6Vq.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-CiX2F41V.js";import"./useForkRef-DuMiwuLC.js";import"./utils-CKabMFkr.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B6IXuIKB.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./Grow-DTVxn6k3.js";import"./useTheme-BId1B-vw.js";import"./styled-CRUdqmCq.js";import"./useControlled-DH6ZUxJF.js";import"./resolveComponentProps-B7ZPKosw.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-C4ztzk0k.js";import"./Portal-CR8ib3oi.js";import"./useSlotProps-CsI9Chwd.js";import"./ButtonBase-BhLrVkcf.js";const y={title:"Components/MITooltip",component:s,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=i=>t.jsx(s,{...i}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(s,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},O=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function RenderWithState(args) {
    const [disabled, setDisable] = useState(false);
    return <Box p="8px" border="1px solid blue" borderRadius="4px" width="300px">
        <MITooltip {...args} disabled={disabled}>
          <Box>Hover on this text to see the tooltip appears.</Box>
        </MITooltip>
        <Button sx={{
        mt: '10px'
      }} variant="contained" onClick={() => setDisable(prev => !prev)} size="small">
          {disabled ? 'Enable tooltip' : 'Disable tooltip'}
        </Button>
      </Box>;
  }
}`,...e.parameters?.docs?.source}}};export{o as DefaultTooltip,e as DisableTooltp,O as __namedExportsOrder,y as default};

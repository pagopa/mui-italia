import{r as d,j as t,B as r}from"./iframe--Veu_H0i.js";import{M as s}from"./MITooltip-Dq4V2VMz.js";import{B as m}from"./Button--MV15_HC.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-Bt_endzG.js";import"./useForkRef-BylnVgws.js";import"./utils-D-va7lpp.js";import"./TransitionGroupContext-DGEyIdyq.js";import"./index-KVX4_Kyo.js";import"./index-D22e8-md.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DT3BT9g5.js";import"./DefaultPropsProvider-CvO-XTiv.js";import"./Grow-BL3mP394.js";import"./useTheme-CfF9d9rw.js";import"./styled-CSprtNKk.js";import"./useControlled-NqxH3zvr.js";import"./resolveComponentProps-DBw8yxvm.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-Dh99vMcU.js";import"./Portal-DfWvea1R.js";import"./useSlotProps-C-enEAQe.js";import"./ButtonBase-B0hIrA6B.js";const y={title:"Components/MITooltip",component:s,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=i=>t.jsx(s,{...i}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(s,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},O=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

import{r as d,j as t,B as r}from"./iframe-BFNOB_y6.js";import{M as i}from"./MITooltip-DNt0BunJ.js";import{B as m}from"./Button-CbWtR1KO.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-GEzhqVpU.js";import"./useForkRef-BF9WlKKq.js";import"./getReactElementRef-CFBcUj76.js";import"./TransitionGroupContext-Bm58Dos8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-WxUKUKb4.js";import"./DefaultPropsProvider-B_LwGPKB.js";import"./Grow-BgyZl9O2.js";import"./useTheme-C9FgiBBS.js";import"./styled-Cz4HiKLZ.js";import"./utils-CR8_5X8g.js";import"./index-Ci01uZSO.js";import"./index-BGbn-GBN.js";import"./useControlled-5Imp6Mv6.js";import"./resolveComponentProps-D8tPrrtR.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CgcW6KIP.js";import"./Portal-DWClkEhw.js";import"./useSlotProps-D9ohKvxR.js";import"./ButtonBase-BAsQVFTs.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{o as DefaultTooltip,e as DisableTooltp,q as __namedExportsOrder,O as default};

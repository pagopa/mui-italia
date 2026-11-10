import{r as d,j as t,B as r}from"./iframe-DqKsui2S.js";import{M as i}from"./MITooltip-D9TPv0-f.js";import{B as m}from"./Button-BmaoHrVN.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-ZJq2kqt7.js";import"./useForkRef-CLmtxq_Y.js";import"./getReactElementRef-D1eMIxFv.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CK5bd1Eb.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./Grow-DmB0QswF.js";import"./useTheme-D3Y4xEPH.js";import"./styled-Df695Bk_.js";import"./utils-CWuA1miZ.js";import"./index-CvYkzCFT.js";import"./index-PZjx7uM8.js";import"./useControlled-D38WY-ee.js";import"./resolveComponentProps-CrsE4bTA.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B9n-3G_q.js";import"./Portal-D_iRFePj.js";import"./useSlotProps-D5tRl93H.js";import"./ButtonBase-BDS4PFr6.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

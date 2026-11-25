import{r as d,j as t,B as r}from"./iframe-2X3ZxJBB.js";import{M as i}from"./MITooltip-ByHMPaXO.js";import{B as m}from"./Button-CKt4qX6J.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-BS-7LfGQ.js";import"./useForkRef-vrRRETjr.js";import"./getReactElementRef-DjnmNWy7.js";import"./TransitionGroupContext-ConkyLn2.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-EErz-2xG.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./Grow-DZErd4bm.js";import"./useTheme-TBw-fLAI.js";import"./styled-CSThg6ob.js";import"./utils-B9Xpknxo.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./useControlled-DW2ZXwWK.js";import"./resolveComponentProps-oklE-LaI.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CVHqR-IG.js";import"./Portal-CvLWWrVj.js";import"./useSlotProps-BelVuA1F.js";import"./ButtonBase-DaB6vsJo.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

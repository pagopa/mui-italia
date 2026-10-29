import{r as d,j as t,B as r}from"./iframe-EJCMhezF.js";import{M as s}from"./MITooltip-CZvC6-8P.js";import{B as m}from"./Button-DLK5id5n.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-BmYBP7d5.js";import"./useForkRef-CLOggWa6.js";import"./utils-DPT7uM0p.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./index-CD7GOfqp.js";import"./index-C4_o-THT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-9ygRFVOQ.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./Grow-DG6YlP3O.js";import"./useTheme-C9TzCYyI.js";import"./styled-DRDTacfX.js";import"./useControlled-jZUpVj1n.js";import"./resolveComponentProps-FNbyDh7J.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-D0nUCfi9.js";import"./Portal-DkwA15hK.js";import"./useSlotProps-BQCHbPnp.js";import"./ButtonBase-BYlwM-_S.js";const y={title:"Components/MITooltip",component:s,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=i=>t.jsx(s,{...i}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(s,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},O=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

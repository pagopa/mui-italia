import{r as d,j as t,B as r}from"./iframe-Do2iWwl6.js";import{M as s}from"./MITooltip-DRZ003Ib.js";import{B as m}from"./Button-Y3u7qjJ7.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-DaP_vx8K.js";import"./useForkRef-CTzFoPWU.js";import"./utils-D8T4Hx0W.js";import"./TransitionGroupContext-dRzt1ax4.js";import"./index-NHoFLGkq.js";import"./index-CmeO_OfC.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cxp_pYZ7.js";import"./DefaultPropsProvider-Bbc_N8dw.js";import"./Grow-B9IQJKeu.js";import"./useTheme-D6XEe0y0.js";import"./styled-DraHPSrp.js";import"./useControlled-BYPQNnls.js";import"./resolveComponentProps-lqsoT0q7.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B_GgxjJJ.js";import"./Portal-CHXDxYw6.js";import"./useSlotProps-DXm84P3q.js";import"./ButtonBase-BzG1LjfL.js";const y={title:"Components/MITooltip",component:s,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=i=>t.jsx(s,{...i}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(s,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},O=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

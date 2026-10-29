import{j as o,B as l}from"./iframe-EJCMhezF.js";import{T as n}from"./Tag-CSy4E7LJ.js";import{T as i}from"./TagGroup-BwTqjVfL.js";import{T as m}from"./Typography-DLgU8XWP.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-CZvC6-8P.js";import"./ClickAwayListener-BmYBP7d5.js";import"./useForkRef-CLOggWa6.js";import"./utils-DPT7uM0p.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./index-CD7GOfqp.js";import"./index-C4_o-THT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-9ygRFVOQ.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./Grow-DG6YlP3O.js";import"./useTheme-C9TzCYyI.js";import"./styled-DRDTacfX.js";import"./useControlled-jZUpVj1n.js";import"./resolveComponentProps-FNbyDh7J.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-D0nUCfi9.js";import"./Portal-DkwA15hK.js";import"./useSlotProps-BQCHbPnp.js";import"./InfoRounded-D_q1V56E.js";import"./createSvgIcon-BPgnJqPn.js";import"./SvgIcon-BAFrDdJe.js";import"./ReportRounded-t8P7ALQ-.js";import"./CheckCircleRounded-ByW3-t5s.js";import"./Stack-CNPuMEtv.js";import"./createStack-CnssCp4U.js";import"./useThemeProps-D0yria0o.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],q={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),H=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
  border: \`1px solid blue\`,
  borderRadius: '5px'
}}>
    <Typography variant="body1">Tags must be in this Box</Typography>
    <hr />
    <TagGroup {...args}>
      <>
        {groupLabels.map((item: string, i: number) => <Tag key={\`\${i}-\${item}\`} value={item} />)}
        <Tag value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue" mode="truncate" />
      </>
    </TagGroup>
  </Box>`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
  border: \`1px solid blue\`,
  borderRadius: '5px'
}}>
    <Typography variant="body1">Tags must be in this Box</Typography>
    <hr />
    <TagGroup {...args}>
      <>
        {groupLabels.map((item: string, i: number) => <Tag key={\`\${i}-\${item}\`} value={item} />)}
        <Tag value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue" mode="wrap" />
      </>
    </TagGroup>
  </Box>`,...p.parameters?.docs?.source}}};export{s as Default,t as TruncateValueTag,p as WrapValueTag,H as __namedExportsOrder,q as default};

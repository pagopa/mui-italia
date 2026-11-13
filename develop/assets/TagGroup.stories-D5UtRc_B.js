import{j as o,B as l}from"./iframe-CIrS23cw.js";import{T as n}from"./Tag-BNlOilCg.js";import{T as i}from"./TagGroup-BL0BCyfK.js";import{T as m}from"./Typography-BznXhrek.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-B6wBMBOB.js";import"./ClickAwayListener-DM0M8gbV.js";import"./useForkRef-CBQP0s6I.js";import"./getReactElementRef-x6XiUDE9.js";import"./TransitionGroupContext-CP3rn5E1.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BP0xFDve.js";import"./DefaultPropsProvider-Cq_c-I1J.js";import"./Grow-DOpMj5Vc.js";import"./useTheme-DrsUlJ74.js";import"./styled-C6B4F5zM.js";import"./utils-DdJQOc7R.js";import"./index-Thcbd2iF.js";import"./index-Ck8gTmYH.js";import"./useControlled-g_lSaZ2g.js";import"./resolveComponentProps-BM5yZ89Q.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-Y2KCO7Vt.js";import"./Portal-WI67lwan.js";import"./useSlotProps-IC8Zf0Uw.js";import"./InfoRounded-DIc6SqpP.js";import"./createSvgIcon-DOz7MUQP.js";import"./SvgIcon-CmWwVM1A.js";import"./ReportRounded-Dygfj1An.js";import"./CheckCircleRounded-DyPfH9_T.js";import"./Stack-DY7YTe1w.js";import"./createStack-x8p8tqwj.js";import"./useThemeProps-CyhfWAEl.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
  </Box>`,...p.parameters?.docs?.source}}};export{s as Default,t as TruncateValueTag,p as WrapValueTag,J as __namedExportsOrder,H as default};

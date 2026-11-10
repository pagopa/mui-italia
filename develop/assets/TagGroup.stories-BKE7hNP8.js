import{j as o,B as l}from"./iframe-UeoK4583.js";import{T as n}from"./Tag-DT-Usnhn.js";import{T as i}from"./TagGroup-DNtkEjnN.js";import{T as m}from"./Typography-YbG83az4.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-CIBWHr5e.js";import"./ClickAwayListener-CjqP5S75.js";import"./useForkRef-BhHiLiTZ.js";import"./getReactElementRef-CUTSO03e.js";import"./TransitionGroupContext-3bEoF1vn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BoonbA0I.js";import"./DefaultPropsProvider-B8X_jXFd.js";import"./Grow-BkOU8FEv.js";import"./useTheme-Co2ufE29.js";import"./styled-CvWxMvRN.js";import"./utils-C24Gt4bt.js";import"./index-YdzIi5gF.js";import"./index-CL3xlXTf.js";import"./useControlled-BCpt8X85.js";import"./resolveComponentProps-Wl6qOvm4.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-DbFwpgr2.js";import"./Portal-CV74gxTU.js";import"./useSlotProps-BZSRsv06.js";import"./InfoRounded-2XQRycbe.js";import"./createSvgIcon-BDmnSp2b.js";import"./SvgIcon-CnC7-k0D.js";import"./ReportRounded-B2ykWDSy.js";import"./CheckCircleRounded-HI8stX5i.js";import"./Stack-BTEqUilJ.js";import"./createStack-Bfosn5Ob.js";import"./useThemeProps-BqxHGDEW.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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

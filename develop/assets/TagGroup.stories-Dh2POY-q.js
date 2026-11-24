import{j as o,B as l}from"./iframe-BZIr8g2c.js";import{T as n}from"./Tag-BYRXgsdn.js";import{T as i}from"./TagGroup-CFraHoue.js";import{T as m}from"./Typography-vGKoBJGT.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-CIvNb5Gv.js";import"./ClickAwayListener-Dh0UJLR3.js";import"./useForkRef-DwqDbAPd.js";import"./getReactElementRef-BF20Trkt.js";import"./TransitionGroupContext-DcnNMgGE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-MYdIKGtS.js";import"./DefaultPropsProvider-26RYHGpy.js";import"./Grow-B_rkVyMY.js";import"./useTheme-Bb7eOhg8.js";import"./styled-C74EMrKI.js";import"./utils-GyIikVxa.js";import"./index-BfggY3cO.js";import"./index-BtLnuvOH.js";import"./useControlled-Bjia_CyW.js";import"./resolveComponentProps-DG62WAbE.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B-FdMq7D.js";import"./Portal-DliXxA7l.js";import"./useSlotProps-C-ZiyOKo.js";import"./InfoRounded-C3txPAXr.js";import"./createSvgIcon-C2s2QPWS.js";import"./SvgIcon-qyfv5-Sn.js";import"./ReportRounded-BkobS5F0.js";import"./CheckCircleRounded-BAM8ygVN.js";import"./Stack-BwQghZEn.js";import"./createStack-B6gidCWk.js";import"./useThemeProps-DlSsAtHo.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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

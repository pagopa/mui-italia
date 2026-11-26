import{j as o,B as l}from"./iframe-D2suRgZv.js";import{T as n}from"./Tag-C2RzJ-MU.js";import{T as i}from"./TagGroup-Bx4KquVE.js";import{T as m}from"./Typography-lSWCvWZi.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-C54T0IgN.js";import"./ClickAwayListener-CZAltqB4.js";import"./useForkRef-qR2CMe6R.js";import"./getReactElementRef-CIHR9XSW.js";import"./TransitionGroupContext-CriRyQ-M.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-uFVXYQtE.js";import"./DefaultPropsProvider-C9pPN9CS.js";import"./Grow-pOX774nb.js";import"./useTheme-Bi1oBoTE.js";import"./styled-Dg4SAjqP.js";import"./utils-Lq2e-y9I.js";import"./index-DLZ6Eal3.js";import"./index-pAvcHujp.js";import"./useControlled-D3dyN2al.js";import"./resolveComponentProps-AZibFEcc.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-DniiYakM.js";import"./Portal-BeL3h0Wm.js";import"./useSlotProps-BbqPJ-Qx.js";import"./InfoRounded-DnEn62Y9.js";import"./createSvgIcon-DXqKnqxi.js";import"./SvgIcon-B5OBknnD.js";import"./ReportRounded-COTB_Pli.js";import"./CheckCircleRounded-DRkGx-QE.js";import"./Stack-DtDOdr4h.js";import"./createStack-vlnaEldP.js";import"./useThemeProps-BNDYbDbX.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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

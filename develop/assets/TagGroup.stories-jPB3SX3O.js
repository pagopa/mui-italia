import{j as o,B as l}from"./iframe-DLqg6HX8.js";import{T as n}from"./Tag-DthUR7-r.js";import{T as i}from"./TagGroup-DCCfki3c.js";import{T as m}from"./Typography-B2s-Ogo4.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-DgwiZwGz.js";import"./ClickAwayListener-DM8TkaKY.js";import"./useForkRef-QQIssf4j.js";import"./getReactElementRef-B76VvR63.js";import"./TransitionGroupContext-BdgLX1mE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cb79e5j6.js";import"./DefaultPropsProvider-C0MVbvlw.js";import"./Grow-CMZG1PpA.js";import"./useTheme-B4I3gTml.js";import"./styled-BxDKlw5F.js";import"./utils-BL_otCjh.js";import"./index-DByGtAqR.js";import"./index-DsQGSP8e.js";import"./useControlled-DsPdphLt.js";import"./resolveComponentProps-DL8-z4ZK.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BCZh1Fjo.js";import"./Portal-qD7zO2ig.js";import"./useSlotProps-qdPkKgV-.js";import"./InfoRounded-mxsxvtS-.js";import"./createSvgIcon-ByJkEFeY.js";import"./SvgIcon-CvcryhUT.js";import"./ReportRounded-CydRpYo4.js";import"./CheckCircleRounded-Bfp1sqEz.js";import"./Stack-HIKfxa6A.js";import"./createStack-BfPdT95z.js";import"./useThemeProps-DzmpdBgt.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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

import{j as o,B as l}from"./iframe-6MQXqINC.js";import{T as n}from"./Tag-BYwP8dE4.js";import{T as i}from"./TagGroup-uWJdPggt.js";import{T as m}from"./Typography-C7bhwkwa.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-AuBMe-Ym.js";import"./ClickAwayListener-DJl9XTe3.js";import"./useForkRef-yWUxwg9H.js";import"./getReactElementRef-CqbYMo6Z.js";import"./TransitionGroupContext-ChxoeE96.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-qSW196tL.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./Grow-dpu60i7m.js";import"./useTheme-CT6pqya3.js";import"./styled-CKtE3LBS.js";import"./utils-BEe1xe9s.js";import"./index-Cnm0vLjP.js";import"./index-D2qA3XRf.js";import"./useControlled-D936bGT3.js";import"./resolveComponentProps-CsVhd-mo.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-XDIFCNJR.js";import"./Portal-BBKilzSC.js";import"./useSlotProps-Pf3Any7V.js";import"./InfoRounded-Tc4Obl95.js";import"./createSvgIcon-DyGXVuQl.js";import"./SvgIcon-CMBky-ty.js";import"./ReportRounded-CqAg8072.js";import"./CheckCircleRounded-BTz-lAva.js";import"./Stack-pgcfqz6O.js";import"./createStack-DCKb-Y1i.js";import"./useThemeProps-DOMPMilT.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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

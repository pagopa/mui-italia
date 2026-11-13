import{j as o,B as l}from"./iframe-BFNOB_y6.js";import{T as n}from"./Tag-C7o726K5.js";import{T as i}from"./TagGroup-CrJZkGlN.js";import{T as m}from"./Typography-D1Awp86s.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-DNt0BunJ.js";import"./ClickAwayListener-GEzhqVpU.js";import"./useForkRef-BF9WlKKq.js";import"./getReactElementRef-CFBcUj76.js";import"./TransitionGroupContext-Bm58Dos8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-WxUKUKb4.js";import"./DefaultPropsProvider-B_LwGPKB.js";import"./Grow-BgyZl9O2.js";import"./useTheme-C9FgiBBS.js";import"./styled-Cz4HiKLZ.js";import"./utils-CR8_5X8g.js";import"./index-Ci01uZSO.js";import"./index-BGbn-GBN.js";import"./useControlled-5Imp6Mv6.js";import"./resolveComponentProps-D8tPrrtR.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CgcW6KIP.js";import"./Portal-DWClkEhw.js";import"./useSlotProps-D9ohKvxR.js";import"./InfoRounded-uOklx2_l.js";import"./createSvgIcon-Dxz1zQvO.js";import"./SvgIcon-z4cUbE7h.js";import"./ReportRounded-DNWzJTti.js";import"./CheckCircleRounded-DQnTWx0m.js";import"./Stack-CehYqifs.js";import"./createStack-B-aQrxBG.js";import"./useThemeProps-vnOneH-r.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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

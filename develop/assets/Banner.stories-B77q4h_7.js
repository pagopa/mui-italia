import{j as a,B as b,b as O}from"./iframe-rw-T87Ps.js";import{B as y}from"./Banner-CZyb4eQw.js";import"./preload-helper-PPVm8Dsz.js";import"./Illustration-BYeuaVgT.js";import"./styled-BbRqDVtB.js";import"./SvgIcon-BqyspOV3.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./EmojiObjectsOutlined-CsaBi1H4.js";import"./createSvgIcon-BLI2zqKg.js";import"./ButtonNaked-FPXFSsNP.js";import"./Button-DRjStLay.js";import"./ButtonBase-B-e_mOzE.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./useForkRef-D1JMp28z.js";import"./Typography-DIxyHfgM.js";import"./IconButton-DPI2uUBc.js";import"./Close-Bz3kceLW.js";import"./Chip-DG7bXvP3.js";import"./Stack-DK8xaQOE.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";import"./useTheme-xu0WuyZg.js";const h=900,e="Titolo del banner",r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",E="Vai all'iniziativa",o="Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",H={title:"Components/Banner",component:y,args:{enableClose:!0,enableCta:!0},parameters:{chromatic:{viewports:O.filter(t=>t<=h)}},decorators:[t=>a.jsx(b,{sx:{p:2,pb:4,boxSizing:"border-box",width:"100%"},children:a.jsx(b,{sx:{maxWidth:"100%",mx:"auto"},children:a.jsx(t,{})})})],argTypes:{color:{control:{type:"radio"},options:["white","info"]},variant:{control:{type:"radio"},options:["primary","secondary","tertiary"]},title:{control:{type:"text"}},message:{control:{type:"text"}},badge:{control:{type:"text"}},enableClose:{control:{type:"boolean"}},enableCta:{control:{type:"boolean"}},icon:{control:{disable:!0}},illustration:{control:{disable:!0}},onClose:{table:{disable:!0}},cta:{table:{disable:!0}}},render:t=>{const{enableClose:L,enableCta:u,cta:T,...U}=t,S=T??(u?{label:E,onClick:()=>{}}:void 0);return a.jsx(y,{...U,onClose:L?()=>{}:void 0,cta:S})}},n={args:{color:"white",variant:"primary",title:e,message:r,badge:"Novità",closeAriaLabel:"Chiudi il banner","data-testid":"banner-container"}},s={args:{color:"white",variant:"secondary",title:e,message:r}},i={args:{color:"white",variant:"tertiary",title:e,message:r}},c={args:{color:"info",variant:"primary",title:e,message:r,badge:"Novità"}},l={args:{color:"white",variant:"primary",title:e,message:r,badge:"Novità",cta:{label:E,href:"https://test.com",target:"_self"}}},m={args:{color:"white",variant:"secondary",title:e,message:r,cta:{label:E,href:"https://test.com",target:"_blank"}}},p={args:{color:"white",variant:"tertiary",title:e,message:r,cta:{label:E,href:"https://test.com",target:"_blank"}}},d={args:{color:"white",variant:"primary",title:`Very long title ${o}`,message:`${o}${o}${o}`,badge:`Novità-${o}`}},g={args:{color:"white",variant:"secondary",title:`Very long title ${o} ${o}`,message:`${o}${o}${o}`}},_={args:{color:"white",variant:"tertiary",title:`Very long title ${o}`,message:`${o}${o}${o}`}},N={args:{color:"info",variant:"primary",title:`Very long title: ${o}`,message:`${o}${o}${o}`,badge:`Novità-${o}`}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
    closeAriaLabel: 'Chiudi il banner',
    'data-testid': 'banner-container'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    variant: 'secondary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    variant: 'tertiary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'info',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    variant: 'primary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    badge: 'Novità',
    cta: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self'
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    variant: 'secondary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    cta: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_blank'
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'white',
    variant: 'tertiary',
    title: DEFAULT_TITLE,
    message: DEFAULT_MESSAGE,
    cta: {
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_blank'
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'white',\n    variant: 'primary',\n    title: `Very long title ${LONG_UNBROKEN}`,\n    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,\n    badge: `Novità-${LONG_UNBROKEN}`\n  }\n}",...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'white',\n    variant: 'secondary',\n    title: `Very long title ${LONG_UNBROKEN} ${LONG_UNBROKEN}`,\n    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`\n  }\n}",...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'white',\n    variant: 'tertiary',\n    title: `Very long title ${LONG_UNBROKEN}`,\n    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`\n  }\n}",..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'info',\n    variant: 'primary',\n    title: `Very long title: ${LONG_UNBROKEN}`,\n    message: `${LONG_UNBROKEN}${LONG_UNBROKEN}${LONG_UNBROKEN}`,\n    badge: `Novità-${LONG_UNBROKEN}`\n  }\n}",...N.parameters?.docs?.source}}};const J=["Default","Secondary","Tertiary","BackgroundInfo","Primary_LinkCta_Self","Secondary_LinkCta_Blank","Tertiary_LinkCta_Blank","Stress_Primary_Unbroken","Stress_Secondary_Unbroken","Stress_Tertiary_Unbroken","Stress_Primary_InfoBg_Unbroken"];export{c as BackgroundInfo,n as Default,l as Primary_LinkCta_Self,s as Secondary,m as Secondary_LinkCta_Blank,N as Stress_Primary_InfoBg_Unbroken,d as Stress_Primary_Unbroken,g as Stress_Secondary_Unbroken,_ as Stress_Tertiary_Unbroken,i as Tertiary,p as Tertiary_LinkCta_Blank,J as __namedExportsOrder,H as default};

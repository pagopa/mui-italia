import{b as m,j as o,B as c}from"./iframe-CDfDAPFk.js";import{P as i}from"./ProfileItem-CG9b27mz.js";import{S as p}from"./Stack-CQ_WFl_6.js";const n=360,d={title:"Components/ProfileItem",component:i,args:{profileInitials:"EC",profileName:"Ente Creditore",caption:"Stai operando come",switchLabel:"Cambia profilo",showSwitchProfile:!0,onSwitchProfile:()=>{console.log("Clicked/Tapped on switch profile")}},decorators:[e=>o.jsx(c,{sx:{maxWidth:n,backgroundColor:"#F5F5F5",p:2},children:o.jsx(e,{})})],parameters:{chromatic:{viewports:m.filter(e=>e<=640)}}},l=e=>o.jsx(i,{...e}),t=l.bind({}),a=e=>o.jsx(c,{sx:{width:72},children:o.jsx(i,{...e})}),s=()=>o.jsx(p,{gap:2,sx:{maxWidth:n},children:o.jsx(i,{profileInitials:"IT",profileName:"Intermediario Tecnologico",onSwitchProfile:()=>{console.log("Clicked/Tapped on switch profile")}})}),r=l.bind({});r.args={showSwitchProfile:!1};const f=["Default","Compact","LongProfileName","WithoutSwitchProfile"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <ProfileItem {...args} />",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Box sx={{
  width: 72
}}>
    <ProfileItem {...args} />
  </Box>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Stack gap={2} sx={{
  maxWidth: componentMaxWidth
}}>
    <ProfileItem profileInitials="IT" profileName="Intermediario Tecnologico" onSwitchProfile={() => {
    console.log('Clicked/Tapped on switch profile');
  }} />
  </Stack>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <ProfileItem {...args} />",...r.parameters?.docs?.source}}};const x=Object.freeze(Object.defineProperty({__proto__:null,Compact:a,Default:t,LongProfileName:s,WithoutSwitchProfile:r,__namedExportsOrder:f,default:d},Symbol.toStringTag,{value:"Module"}));export{a as C,t as D,s as L,x as P,r as W};

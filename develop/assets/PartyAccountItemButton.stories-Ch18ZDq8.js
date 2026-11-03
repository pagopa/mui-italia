import{b as N,j as i,r as f}from"./iframe--Veu_H0i.js";import{P as u}from"./PartyAccountItemButton-CKZPvVQX.js";import{T as C}from"./Tag-BleE56RJ.js";import{S as h}from"./Stack-2Zj6C8pl.js";import{B as v}from"./Button--MV15_HC.js";import"./preload-helper-PPVm8Dsz.js";import"./PartyAvatar-Dw6kuY7r.js";import"./Avatar-BEoBk9nv.js";import"./DefaultPropsProvider-CvO-XTiv.js";import"./createSvgIcon-CpLUNxU5.js";import"./SvgIcon-BVB0onhD.js";import"./styled-CSprtNKk.js";import"./useSlot-C5NXWzB0.js";import"./resolveComponentProps-DBw8yxvm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BylnVgws.js";import"./Tooltip-DT3BT9g5.js";import"./Grow-BL3mP394.js";import"./useTheme-CfF9d9rw.js";import"./utils-D-va7lpp.js";import"./TransitionGroupContext-DGEyIdyq.js";import"./index-KVX4_Kyo.js";import"./index-D22e8-md.js";import"./useControlled-NqxH3zvr.js";import"./Popper-Dh99vMcU.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DfWvea1R.js";import"./useSlotProps-C-enEAQe.js";import"./Typography-DTg26sul.js";import"./MITooltip-Dq4V2VMz.js";import"./ClickAwayListener-Bt_endzG.js";import"./InfoRounded-C3GFEUp4.js";import"./ReportRounded-CKvFCXgg.js";import"./CheckCircleRounded-35t4fl-J.js";import"./createStack-CtTbzIgR.js";import"./useThemeProps-Yc7VDqz2.js";import"./ButtonBase-B0hIrA6B.js";const e="https://assets.cdn.io.italia.it/logos/organizations/",y=[{image:`${e}1199250158.png`,name:"Comune di Milano",role:"Referente amministrativo"},{image:`${e}2438750586.png`,name:"Comune di Roma",role:"Referente amministrativo"},{image:`${e}162210348.png`,name:"Comune di Parma",role:"Referente amministrativo"},{image:`${e}82003830161.png`,name:"Comune di Sotto il Monte Giovanni XXIII",role:"Referente amministrativo"},{image:`${e}172960361.png`,name:"Comune di Castelfranco Emilia",role:"Referente amministrativo"},{image:`${e}82001510492.png`,name:"Comune di Campo nell'Elba",role:"Referente amministrativo"},{image:`${e}117100537.png`,name:"Comune di Castiglione della Pescaia",role:"Referente amministrativo"},{image:`${e}142680669.png`,name:"Comune di Pescasseroli"},{image:`${e}81000410688.png`,name:"Comune di San Valentino in Abruzzo Citeriore"},{image:`${e}189800204.png`,name:"Comune di Mantova",role:"Referente amministrativo"},{image:`${e}82002590105.png`,name:"Comune di Ne",role:"Referente amministrativo"},{image:`${e}74260845.png`,name:"Comune di Agrigento",role:"Referente amministrativo"},{image:`${e}80001950403.png`,name:"Comune di Castrocaro Terme e Terra del Sole",role:"Referente amministrativo"},{image:void 0,name:"Ente senza stemma",role:"Referente amministrativo"},{image:void 0,name:`Commissario straordinario per la realizzazione di
    approdi temporanei e di interventi complementari per la
    salvaguardia di Venezia e della sua laguna e ulteriori
    interventi per la salvaguardia della laguna di Venezia`,role:"Operatore - Operatore API Operatore - Operatore API"},{image:`${e}172960361.png`,name:"Amministrazione Comunale",role:"Referente amministrativo",parentName:"Comune di Castelfranco Emilia"}],d={image:`${e}172960361.png`,name:"Amministrazione Comunale",role:"Referente amministrativo",parentName:"Comune di Castelfranco Emilia"},x=i.jsx(C,{variant:"warning",value:"Da completare"}),I=400,n=[],S=a=>{if(n.length===0)for(const[t]of a.entries())n.push(t);const s=Math.floor(Math.random()*n.length),g=n[s];return n.splice(s,1),a.indexOf(a[g])},de={title:"Components/PartyAccountItemButton",component:u,parameters:{layout:"padded",chromatic:{viewports:N.filter(a=>a<=I)}}},l=a=>{const[s,g]=f.useState(0),t=y[s],P=()=>{const R=S(y);g(R)};return i.jsxs(h,{gap:2,alignItems:"flex-start",sx:{maxWidth:I},children:[i.jsx(v,{variant:"contained",onClick:P,children:"Get random Party"}),i.jsx(u,{...a,image:t.image,partyName:t.name,partyRole:t.role,parentPartyName:t.parentName})]})},p=l.bind({}),r=l.bind({});r.args={disabled:!0,endSlot:x};const o=l.bind({});o.args={selectedItem:!0};const m=l.bind({});m.args={endSlot:x};const c=()=>i.jsx(u,{image:d.image,partyName:d.name,partyRole:d.role,parentPartyName:d.parentName}),pe=["Default","Disabled","Selected","WithTag","WithParentName"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = partyMockImages[randomIndex];
  const getRandomParty = () => {
    const randomNumber = randomValueFromArray(partyMockImages);
    setRandomIndex(randomNumber);
  };
  return <Stack gap={2} alignItems="flex-start" sx={{
    maxWidth: componentMaxWidth
  }}>
      <Button variant="contained" onClick={getRandomParty}>
        Get random Party
      </Button>

      <PartyAccountItemButton {...args} image={item.image} partyName={item.name} partyRole={item.role} parentPartyName={item.parentName} />
    </Stack>;
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = partyMockImages[randomIndex];
  const getRandomParty = () => {
    const randomNumber = randomValueFromArray(partyMockImages);
    setRandomIndex(randomNumber);
  };
  return <Stack gap={2} alignItems="flex-start" sx={{
    maxWidth: componentMaxWidth
  }}>
      <Button variant="contained" onClick={getRandomParty}>
        Get random Party
      </Button>

      <PartyAccountItemButton {...args} image={item.image} partyName={item.name} partyRole={item.role} parentPartyName={item.parentName} />
    </Stack>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = partyMockImages[randomIndex];
  const getRandomParty = () => {
    const randomNumber = randomValueFromArray(partyMockImages);
    setRandomIndex(randomNumber);
  };
  return <Stack gap={2} alignItems="flex-start" sx={{
    maxWidth: componentMaxWidth
  }}>
      <Button variant="contained" onClick={getRandomParty}>
        Get random Party
      </Button>

      <PartyAccountItemButton {...args} image={item.image} partyName={item.name} partyRole={item.role} parentPartyName={item.parentName} />
    </Stack>;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = partyMockImages[randomIndex];
  const getRandomParty = () => {
    const randomNumber = randomValueFromArray(partyMockImages);
    setRandomIndex(randomNumber);
  };
  return <Stack gap={2} alignItems="flex-start" sx={{
    maxWidth: componentMaxWidth
  }}>
      <Button variant="contained" onClick={getRandomParty}>
        Get random Party
      </Button>

      <PartyAccountItemButton {...args} image={item.image} partyName={item.name} partyRole={item.role} parentPartyName={item.parentName} />
    </Stack>;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => <PartyAccountItemButton image={itemWithParentName.image} partyName={itemWithParentName.name} partyRole={itemWithParentName.role} parentPartyName={itemWithParentName.parentName} />",...c.parameters?.docs?.source}}};export{p as Default,r as Disabled,o as Selected,c as WithParentName,m as WithTag,pe as __namedExportsOrder,de as default};

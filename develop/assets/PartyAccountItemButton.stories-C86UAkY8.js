import{b as N,j as i,r as f}from"./iframe-DqKsui2S.js";import{P as u}from"./PartyAccountItemButton-B1iFVUR8.js";import{T as C}from"./Tag-CyM-D6sf.js";import{S as h}from"./Stack-BNTagQR0.js";import{B as v}from"./Button-BmaoHrVN.js";import"./preload-helper-PPVm8Dsz.js";import"./PartyAvatar-BmI6iJ2-.js";import"./Avatar-C_syDAjx.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./createSvgIcon-bbdnzGJh.js";import"./SvgIcon-DZqMrxle.js";import"./styled-Df695Bk_.js";import"./useSlot-DVeJmqma.js";import"./resolveComponentProps-CrsE4bTA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CLmtxq_Y.js";import"./Tooltip-CK5bd1Eb.js";import"./Grow-DmB0QswF.js";import"./useTheme-D3Y4xEPH.js";import"./utils-CWuA1miZ.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./index-CvYkzCFT.js";import"./index-PZjx7uM8.js";import"./getReactElementRef-D1eMIxFv.js";import"./useControlled-D38WY-ee.js";import"./Popper-B9n-3G_q.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D_iRFePj.js";import"./useSlotProps-D5tRl93H.js";import"./Typography-DaPIykBW.js";import"./MITooltip-D9TPv0-f.js";import"./ClickAwayListener-ZJq2kqt7.js";import"./InfoRounded-CIMm_6LL.js";import"./ReportRounded-D1KaQaKz.js";import"./CheckCircleRounded-C1HdPW6D.js";import"./createStack-CqPDIsXo.js";import"./useThemeProps-BkF6htZ6.js";import"./ButtonBase-BDS4PFr6.js";const e="https://assets.cdn.io.italia.it/logos/organizations/",y=[{image:`${e}1199250158.png`,name:"Comune di Milano",role:"Referente amministrativo"},{image:`${e}2438750586.png`,name:"Comune di Roma",role:"Referente amministrativo"},{image:`${e}162210348.png`,name:"Comune di Parma",role:"Referente amministrativo"},{image:`${e}82003830161.png`,name:"Comune di Sotto il Monte Giovanni XXIII",role:"Referente amministrativo"},{image:`${e}172960361.png`,name:"Comune di Castelfranco Emilia",role:"Referente amministrativo"},{image:`${e}82001510492.png`,name:"Comune di Campo nell'Elba",role:"Referente amministrativo"},{image:`${e}117100537.png`,name:"Comune di Castiglione della Pescaia",role:"Referente amministrativo"},{image:`${e}142680669.png`,name:"Comune di Pescasseroli"},{image:`${e}81000410688.png`,name:"Comune di San Valentino in Abruzzo Citeriore"},{image:`${e}189800204.png`,name:"Comune di Mantova",role:"Referente amministrativo"},{image:`${e}82002590105.png`,name:"Comune di Ne",role:"Referente amministrativo"},{image:`${e}74260845.png`,name:"Comune di Agrigento",role:"Referente amministrativo"},{image:`${e}80001950403.png`,name:"Comune di Castrocaro Terme e Terra del Sole",role:"Referente amministrativo"},{image:void 0,name:"Ente senza stemma",role:"Referente amministrativo"},{image:void 0,name:`Commissario straordinario per la realizzazione di
    approdi temporanei e di interventi complementari per la
    salvaguardia di Venezia e della sua laguna e ulteriori
    interventi per la salvaguardia della laguna di Venezia`,role:"Operatore - Operatore API Operatore - Operatore API"},{image:`${e}172960361.png`,name:"Amministrazione Comunale",role:"Referente amministrativo",parentName:"Comune di Castelfranco Emilia"}],d={image:`${e}172960361.png`,name:"Amministrazione Comunale",role:"Referente amministrativo",parentName:"Comune di Castelfranco Emilia"},x=i.jsx(C,{variant:"warning",value:"Da completare"}),I=400,n=[],S=a=>{if(n.length===0)for(const[t]of a.entries())n.push(t);const s=Math.floor(Math.random()*n.length),g=n[s];return n.splice(s,1),a.indexOf(a[g])},pe={title:"Components/PartyAccountItemButton",component:u,parameters:{layout:"padded",chromatic:{viewports:N.filter(a=>a<=I)}}},l=a=>{const[s,g]=f.useState(0),t=y[s],P=()=>{const R=S(y);g(R)};return i.jsxs(h,{gap:2,alignItems:"flex-start",sx:{maxWidth:I},children:[i.jsx(v,{variant:"contained",onClick:P,children:"Get random Party"}),i.jsx(u,{...a,image:t.image,partyName:t.name,partyRole:t.role,parentPartyName:t.parentName})]})},p=l.bind({}),r=l.bind({});r.args={disabled:!0,endSlot:x};const o=l.bind({});o.args={selectedItem:!0};const m=l.bind({});m.args={endSlot:x};const c=()=>i.jsx(u,{image:d.image,partyName:d.name,partyRole:d.role,parentPartyName:d.parentName}),ce=["Default","Disabled","Selected","WithTag","WithParentName"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => <PartyAccountItemButton image={itemWithParentName.image} partyName={itemWithParentName.name} partyRole={itemWithParentName.role} parentPartyName={itemWithParentName.parentName} />",...c.parameters?.docs?.source}}};export{p as Default,r as Disabled,o as Selected,c as WithParentName,m as WithTag,ce as __namedExportsOrder,pe as default};

import{b as f,j as n,r as P}from"./iframe-DLqg6HX8.js";import{P as c}from"./PartyAccountItem-BAr5XCBP.js";import{S as I}from"./Stack-HIKfxa6A.js";import{B as N}from"./Button-BALsOiSe.js";import"./preload-helper-PPVm8Dsz.js";import"./PartyAvatar-wqHYplqY.js";import"./Avatar-CExfA48X.js";import"./DefaultPropsProvider-C0MVbvlw.js";import"./createSvgIcon-ByJkEFeY.js";import"./SvgIcon-CvcryhUT.js";import"./styled-BxDKlw5F.js";import"./useSlot-BjGfkBjj.js";import"./resolveComponentProps-DL8-z4ZK.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-QQIssf4j.js";import"./Tooltip-Cb79e5j6.js";import"./Grow-CMZG1PpA.js";import"./useTheme-B4I3gTml.js";import"./utils-BL_otCjh.js";import"./TransitionGroupContext-BdgLX1mE.js";import"./index-DByGtAqR.js";import"./index-DsQGSP8e.js";import"./getReactElementRef-B76VvR63.js";import"./useControlled-DsPdphLt.js";import"./Popper-BCZh1Fjo.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-qD7zO2ig.js";import"./useSlotProps-qdPkKgV-.js";import"./Typography-B2s-Ogo4.js";import"./createStack-BfPdT95z.js";import"./useThemeProps-DzmpdBgt.js";import"./ButtonBase-ChpoghoR.js";const e="https://assets.cdn.io.italia.it/logos/organizations/",l=[{image:`${e}81000410688.png`,name:"Comune di San Valentino in Abruzzo Citeriore"},{image:`${e}1199250158.png`,name:"Comune di Milano",role:"Referente amministrativo"},{image:`${e}2438750586.png`,name:"Comune di Roma",role:"Referente amministrativo"},{image:`${e}162210348.png`,name:"Comune di Parma",role:"Referente amministrativo"},{image:`${e}82003830161.png`,name:"Comune di Sotto il Monte Giovanni XXIII",role:"Referente amministrativo"},{image:`${e}172960361.png`,name:"Comune di Castelfranco Emilia",role:"Referente amministrativo"},{image:`${e}82001510492.png`,name:"Comune di Campo nell'Elba",role:"Referente amministrativo"},{image:`${e}117100537.png`,name:"Comune di Castiglione della Pescaia",role:"Referente amministrativo"},{image:`${e}142680669.png`,name:"Comune di Pescasseroli"},{image:`${e}189800204.png`,name:"Comune di Mantova",role:"Referente amministrativo"},{image:`${e}82002590105.png`,name:"Comune di Ne",role:"Referente amministrativo"},{image:`${e}74260845.png`,name:"Comune di Agrigento",role:"Referente amministrativo"},{image:`${e}80001950403.png`,name:"Comune di Castrocaro Terme e Terra del Sole",role:"Referente amministrativo"},{image:void 0,name:"Ente senza stemma",role:"Referente amministrativo"},{image:`${e}339370272.png`,name:`Commissario straordinario per la realizzazione di
    approdi temporanei e di interventi complementari per la
    salvaguardia di Venezia e della sua laguna e ulteriori
    interventi per la salvaguardia della laguna di Venezia`,role:"Operatore - Operatore API Operatore - Operatore API"},{image:`${e}172960361.png`,name:"Amministrazione Comunale",role:"Referente amministrativo",parentName:"Comune di Castelfranco Emilia"}],s={image:`${e}172960361.png`,name:"Amministrazione Comunale",role:"Referente amministrativo",parentName:"Comune di Castelfranco Emilia"},g=500,r=[],C=a=>{if(r.length===0)for(const[t]of a.entries())r.push(t);const i=Math.floor(Math.random()*r.length),d=r[i];return r.splice(i,1),a.indexOf(a[d])},ee={title:"Components/PartyAccountItem",component:c,decorators:[a=>n.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:n.jsx(a,{})})],parameters:{chromatic:{viewports:f.filter(a=>a<=g)}}},u=a=>{const[i,d]=P.useState(0),t=l[i],y=()=>{const x=C(l);d(x)};return n.jsxs(I,{gap:2,alignItems:"flex-start",sx:{maxWidth:g},children:[n.jsx(N,{variant:"contained",onClick:y,children:"Get random Party"}),n.jsx(c,{...a,image:t.image,partyName:t.name,partyRole:t.role,parentPartyName:t.parentName})]})},m=u.bind({});m.args={noWrap:!1};const o=u.bind({});o.args={noWrap:!0};const p=()=>n.jsx(c,{image:s.image,partyName:s.name,partyRole:s.role,parentPartyName:s.parentName}),ae=["Default","NoWrap","WithParentName"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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

      <PartyAccountItem {...args} image={item.image} partyName={item.name} partyRole={item.role} parentPartyName={item.parentName} />
    </Stack>;
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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

      <PartyAccountItem {...args} image={item.image} partyName={item.name} partyRole={item.role} parentPartyName={item.parentName} />
    </Stack>;
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => <PartyAccountItem image={itemWithParentName.image} partyName={itemWithParentName.name} partyRole={itemWithParentName.role} parentPartyName={itemWithParentName.parentName} />",...p.parameters?.docs?.source}}};export{m as Default,o as NoWrap,p as WithParentName,ae as __namedExportsOrder,ee as default};

import{r as g,j as e}from"./iframe-5Wy2T5h3.js";import{P as p}from"./PartyAvatar-BR5Zi_wB.js";import{S as l}from"./Stack-Dp12Lk8P.js";import{T as d}from"./Typography-D0v0-SYT.js";import{B as u}from"./Button-CkvxX6Vq.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CTCI9O2F.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./createSvgIcon-DmL99QgT.js";import"./SvgIcon-DdZ_-XQg.js";import"./styled-CRUdqmCq.js";import"./useSlot-D4ce67Ds.js";import"./resolveComponentProps-B7ZPKosw.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DuMiwuLC.js";import"./createStack-C9bYgYmk.js";import"./useThemeProps-emZ_TIsH.js";import"./ButtonBase-BhLrVkcf.js";import"./TransitionGroupContext-BnCUWMPb.js";const a="https://assets.cdn.io.italia.it/logos/organizations/",s=[{image:`${a}1199250158.png`,name:"Comune di Milano"},{image:`${a}2438750586.png`,name:"Comune di Roma"},{image:`${a}162210348.png`,name:"Comune di Parma"},{image:`${a}82003830161.png`,name:"Comune di Sotto il Monte Giovanni XXIII"},{image:`${a}172960361.png`,name:"Comune di Castelfranco Emilia"},{image:`${a}82001510492.png`,name:"Comune di Campo nell'Elba"},{image:`${a}117100537.png`,name:"Comune di Castiglione della Pescaia"},{image:`${a}142680669.png`,name:"Comune di Pescasseroli"},{image:`${a}81000410688.png`,name:"Comune di San Valentino in Abruzzo Citeriore"},{image:`${a}189800204.png`,name:"Comune di Mantova"},{image:`${a}82002590105.png`,name:"Comune di Ne"},{image:`${a}74260845.png`,name:"Comune di Agrigento"},{image:void 0,name:"Ente senza stemma"}],t=[],y=n=>{if(t.length===0)for(const[i]of n.entries())t.push(i);const o=Math.floor(Math.random()*t.length),r=t[o];return t.splice(o,1),n.indexOf(n[r])},B={title:"Components/PartyAvatar",component:p,decorators:[n=>e.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:e.jsx(n,{})})]},m=()=>{const[n,o]=g.useState(0),r=s[n],i=()=>{const c=y(s);o(c)};return e.jsxs(l,{gap:2,alignItems:"flex-start",children:[e.jsx(p,{customSrc:r.image,customAlt:r.name}),e.jsxs("div",{children:[e.jsx(d,{variant:"overline",children:"Party:"}),e.jsx(d,{variant:"h6",children:s[n].name})]}),e.jsx(u,{variant:"contained",onClick:i,children:"Get random Party"})]})},N=["Default"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = partyMockImages[randomIndex];
  const getRandomParty = () => {
    const randomNumber = randomValueFromArray(partyMockImages);
    setRandomIndex(randomNumber);
  };
  return <Stack gap={2} alignItems="flex-start">
      <PartyAvatar customSrc={item.image} customAlt={item.name} />
      <div>
        <Typography variant="overline">Party:</Typography>
        <Typography variant="h6">{partyMockImages[randomIndex].name}</Typography>
      </div>
      <Button variant="contained" onClick={getRandomParty}>
        Get random Party
      </Button>
    </Stack>;
}`,...m.parameters?.docs?.source}}};export{m as Default,N as __namedExportsOrder,B as default};

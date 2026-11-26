import{r as g,j as e}from"./iframe-D2suRgZv.js";import{P as p}from"./PartyAvatar-f8hNxW6o.js";import{S as l}from"./Stack-DtDOdr4h.js";import{T as d}from"./Typography-lSWCvWZi.js";import{B as u}from"./Button-2-Dq0vFn.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-ZhpBnu-A.js";import"./DefaultPropsProvider-C9pPN9CS.js";import"./createSvgIcon-DXqKnqxi.js";import"./SvgIcon-B5OBknnD.js";import"./styled-Dg4SAjqP.js";import"./useSlot-8bFmuISO.js";import"./resolveComponentProps-AZibFEcc.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-qR2CMe6R.js";import"./AccountBalanceRounded-YANSxUTR.js";import"./createStack-vlnaEldP.js";import"./useThemeProps-BNDYbDbX.js";import"./ButtonBase-c57h5RGA.js";import"./TransitionGroupContext-CriRyQ-M.js";const a="https://assets.cdn.io.italia.it/logos/organizations/",s=[{image:`${a}1199250158.png`,name:"Comune di Milano"},{image:`${a}2438750586.png`,name:"Comune di Roma"},{image:`${a}162210348.png`,name:"Comune di Parma"},{image:`${a}82003830161.png`,name:"Comune di Sotto il Monte Giovanni XXIII"},{image:`${a}172960361.png`,name:"Comune di Castelfranco Emilia"},{image:`${a}82001510492.png`,name:"Comune di Campo nell'Elba"},{image:`${a}117100537.png`,name:"Comune di Castiglione della Pescaia"},{image:`${a}142680669.png`,name:"Comune di Pescasseroli"},{image:`${a}81000410688.png`,name:"Comune di San Valentino in Abruzzo Citeriore"},{image:`${a}189800204.png`,name:"Comune di Mantova"},{image:`${a}82002590105.png`,name:"Comune di Ne"},{image:`${a}74260845.png`,name:"Comune di Agrigento"},{image:void 0,name:"Ente senza stemma"}],t=[],y=n=>{if(t.length===0)for(const[i]of n.entries())t.push(i);const o=Math.floor(Math.random()*t.length),r=t[o];return t.splice(o,1),n.indexOf(n[r])},N={title:"Components/PartyAvatar",component:p,decorators:[n=>e.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:e.jsx(n,{})})]},m=()=>{const[n,o]=g.useState(0),r=s[n],i=()=>{const c=y(s);o(c)};return e.jsxs(l,{gap:2,alignItems:"flex-start",children:[e.jsx(p,{customSrc:r.image,customAlt:r.name}),e.jsxs("div",{children:[e.jsx(d,{variant:"overline",children:"Party:"}),e.jsx(d,{variant:"h6",children:s[n].name})]}),e.jsx(u,{variant:"contained",onClick:i,children:"Get random Party"})]})},V=["Default"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{m as Default,V as __namedExportsOrder,N as default};

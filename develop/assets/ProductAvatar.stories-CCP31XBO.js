import{r as m,j as o}from"./iframe-EJCMhezF.js";import{P as c}from"./ProductAvatar-DF8oBSlw.js";import{S as x}from"./Stack-CNPuMEtv.js";import{T as i}from"./Typography-DLgU8XWP.js";import{B as v}from"./Button-DLK5id5n.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DRDTacfX.js";import"./createStack-CnssCp4U.js";import"./useThemeProps-D0yria0o.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./ButtonBase-BYlwM-_S.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./useForkRef-CLOggWa6.js";const e={"prod-io":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-io/logo.svg",background:"#0073E6",title:"App Io"},"prod-io-premium":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-io-premium/logo.svg",background:"#0073E6",title:"App Io Premium"},"prod-ciban":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-ciban/logo.svg",background:"#008CA8",title:"Check-IBAN"},"prod-pn":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-pn/logo.svg",background:"#0066CC",title:"Piattaforma Notifiche"},"prod-interop":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-interop/logo.svg",background:void 0,title:"PDND"},"prod-cgn":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-cgn/logo.png",background:void 0,title:"Carta Giovani"},"prod-pagopa":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-pagopa/logo.svg",background:"#0066CC",title:"Pagamenti pagoPA"}},n=[],k=t=>{if(n.length===0)for(const[a]of t.entries())n.push(a);const s=Math.floor(Math.random()*n.length),r=n[s];return n.splice(s,1),t.indexOf(t[r])},R={title:"Components/ProductAvatar",component:c,decorators:[t=>o.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:o.jsx(t,{})})]},l=()=>{const[t,s]=m.useState(0),r=Object.keys(e)[t],a=e[r].url,d=e[r].background,p=e[r].title+" logo",g=()=>{const u=k(Object.keys(e));s(u)};return o.jsxs(x,{gap:2,alignItems:"flex-start",children:[o.jsx(c,{logoUrl:a,logoBgColor:d,logoAltText:p,size:"small"}),o.jsx(c,{logoUrl:a,logoBgColor:d,logoAltText:p}),o.jsx(c,{logoUrl:a,logoBgColor:d,logoAltText:p,size:"large"}),o.jsxs("div",{children:[o.jsx(i,{variant:"overline",children:"Product:"}),o.jsx(i,{variant:"h6",children:e[r].title})]}),o.jsx(v,{variant:"contained",onClick:g,children:"Get random product"})]})},S=["Default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = Object.keys(productMockImages)[randomIndex] as keyof typeof productMockImages;
  const url = productMockImages[item].url;
  const bgColor = productMockImages[item].background;
  const altText = productMockImages[item].title + ' logo';
  const getRandomProduct = () => {
    const randomNumber = randomValueFromArray(Object.keys(productMockImages));
    setRandomIndex(randomNumber);
  };
  return <Stack gap={2} alignItems="flex-start">
      <ProductAvatar logoUrl={url} logoBgColor={bgColor} logoAltText={altText} size="small" />
      <ProductAvatar logoUrl={url} logoBgColor={bgColor} logoAltText={altText} />
      <ProductAvatar logoUrl={url} logoBgColor={bgColor} logoAltText={altText} size="large" />
      <div>
        <Typography variant="overline">Product:</Typography>
        <Typography variant="h6">{productMockImages[item].title}</Typography>
      </div>
      <Button variant="contained" onClick={getRandomProduct}>
        Get random product
      </Button>
    </Stack>;
}`,...l.parameters?.docs?.source}}};export{l as Default,S as __namedExportsOrder,R as default};

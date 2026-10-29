import{r as m,j as o}from"./iframe-rw-T87Ps.js";import{P as d}from"./ProductAvatar-DKgAZsD7.js";import{S as x}from"./Stack-DK8xaQOE.js";import{T as i}from"./Typography-DIxyHfgM.js";import{B as v}from"./Button-DRjStLay.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-BbRqDVtB.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./ButtonBase-B-e_mOzE.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./useForkRef-D1JMp28z.js";const e={"prod-io":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-io/logo.svg",background:"#0073E6",title:"App Io"},"prod-io-premium":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-io-premium/logo.svg",background:"#0073E6",title:"App Io Premium"},"prod-ciban":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-ciban/logo.svg",background:"#008CA8",title:"Check-IBAN"},"prod-pn":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-pn/logo.svg",background:"#0066CC",title:"Piattaforma Notifiche"},"prod-interop":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-interop/logo.svg",background:void 0,title:"PDND"},"prod-cgn":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-cgn/logo.png",background:void 0,title:"Carta Giovani"},"prod-pagopa":{url:"https://dev.selfcare.pagopa.it/resources/products/prod-pagopa/logo.svg",background:"#0066CC",title:"Pagamenti pagoPA"}},s=[],k=t=>{if(s.length===0)for(const[a]of t.entries())s.push(a);const l=Math.floor(Math.random()*s.length),r=s[l];return s.splice(l,1),t.indexOf(t[r])},R={title:"Components/ProductAvatar",component:d,decorators:[t=>o.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:o.jsx(t,{})})]},c=()=>{const[t,l]=m.useState(0),r=Object.keys(e)[t],a=e[r].url,n=e[r].background,p=e[r].title+" logo",g=()=>{const u=k(Object.keys(e));l(u)};return o.jsxs(x,{gap:2,alignItems:"flex-start",children:[o.jsx(d,{logoUrl:a,logoBgColor:n,logoAltText:p,size:"small"}),o.jsx(d,{logoUrl:a,logoBgColor:n,logoAltText:p}),o.jsx(d,{logoUrl:a,logoBgColor:n,logoAltText:p,size:"large"}),o.jsxs("div",{children:[o.jsx(i,{variant:"overline",children:"Product:"}),o.jsx(i,{variant:"h6",children:e[r].title})]}),o.jsx(v,{variant:"contained",onClick:g,children:"Get random product"})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const S=["Default"];export{c as Default,S as __namedExportsOrder,R as default};

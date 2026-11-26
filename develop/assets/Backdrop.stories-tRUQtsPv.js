import{r as p,j as o}from"./iframe-D2suRgZv.js";import{B as r}from"./Backdrop-Cge0zgS_.js";import{B as c}from"./Button-2-Dq0vFn.js";import{T as i}from"./Typography-lSWCvWZi.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C9pPN9CS.js";import"./styled-Dg4SAjqP.js";import"./useTheme-Bi1oBoTE.js";import"./utils-Lq2e-y9I.js";import"./TransitionGroupContext-CriRyQ-M.js";import"./index-DLZ6Eal3.js";import"./index-pAvcHujp.js";import"./useForkRef-qR2CMe6R.js";import"./getReactElementRef-CIHR9XSW.js";import"./ButtonBase-c57h5RGA.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return <>
      <Button variant="contained" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop open={open} onClick={handleClose}>
        <Typography color="white" variant="h3">
          Click/Tap to close
        </Typography>
      </Backdrop>
    </>;
}`,...e.parameters?.docs?.source}}};export{e as Default,v as __namedExportsOrder,S as default};

import{r as p,j as o}from"./iframe-UeoK4583.js";import{B as r}from"./Backdrop-DO2_7rty.js";import{B as c}from"./Button-D0Khv6Ir.js";import{T as i}from"./Typography-YbG83az4.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-B8X_jXFd.js";import"./styled-CvWxMvRN.js";import"./useTheme-Co2ufE29.js";import"./utils-C24Gt4bt.js";import"./TransitionGroupContext-3bEoF1vn.js";import"./index-YdzIi5gF.js";import"./index-CL3xlXTf.js";import"./useForkRef-BhHiLiTZ.js";import"./getReactElementRef-CUTSO03e.js";import"./ButtonBase-DADYQYz3.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

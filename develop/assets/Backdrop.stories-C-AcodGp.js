import{r as p,j as o}from"./iframe-QS4E-7kp.js";import{B as r}from"./Backdrop-Bx_L-Dsc.js";import{B as c}from"./Button-BhwEEpAB.js";import{T as i}from"./Typography-BhBBVfSC.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DskoNSvz.js";import"./styled-Cp8mViLI.js";import"./useTheme-DtdRabi7.js";import"./utils-9SvnuSH6.js";import"./TransitionGroupContext-UHTf2kEp.js";import"./index-CIqeYx7Z.js";import"./index-Dh03kj_h.js";import"./useForkRef-CBZLFoQR.js";import"./getReactElementRef-Bpxh3ycP.js";import"./ButtonBase-C5zr_SjN.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

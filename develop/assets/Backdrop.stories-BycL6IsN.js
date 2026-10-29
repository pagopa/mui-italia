import{r as p,j as o}from"./iframe-5Wy2T5h3.js";import{B as r}from"./Backdrop-2_UANPKd.js";import{B as c}from"./Button-CkvxX6Vq.js";import{T as i}from"./Typography-D0v0-SYT.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./styled-CRUdqmCq.js";import"./useTheme-BId1B-vw.js";import"./utils-CKabMFkr.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./useForkRef-DuMiwuLC.js";import"./ButtonBase-BhLrVkcf.js";const O={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const S=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};export{e as Default,S as __namedExportsOrder,O as default};

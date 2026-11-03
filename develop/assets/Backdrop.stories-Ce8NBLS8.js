import{r as p,j as o}from"./iframe--Veu_H0i.js";import{B as r}from"./Backdrop-DReJv6gb.js";import{B as c}from"./Button--MV15_HC.js";import{T as i}from"./Typography-DTg26sul.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CvO-XTiv.js";import"./styled-CSprtNKk.js";import"./useTheme-CfF9d9rw.js";import"./utils-D-va7lpp.js";import"./TransitionGroupContext-DGEyIdyq.js";import"./index-KVX4_Kyo.js";import"./index-D22e8-md.js";import"./useForkRef-BylnVgws.js";import"./ButtonBase-B0hIrA6B.js";const O={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const S=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

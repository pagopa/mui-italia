import{r as p,j as o}from"./iframe-CDfDAPFk.js";import{B as r}from"./Backdrop-UssTTFwn.js";import{B as c}from"./Button-BiDoaYB9.js";import{T as i}from"./Typography-9AQN7ayB.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./styled-tN4ayshy.js";import"./useTheme-DDUJVjwp.js";import"./utils-DcX_SmDN.js";import"./TransitionGroupContext-BpFr0Sds.js";import"./index-Bnc84QHD.js";import"./index-D3KWgPQG.js";import"./useForkRef-CNIqWbEd.js";import"./ButtonBase-WCmC4j5j.js";const O={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const S=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

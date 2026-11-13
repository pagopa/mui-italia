import{r as p,j as o}from"./iframe-DLqg6HX8.js";import{B as r}from"./Backdrop-BPTkEcRC.js";import{B as c}from"./Button-BALsOiSe.js";import{T as i}from"./Typography-B2s-Ogo4.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C0MVbvlw.js";import"./styled-BxDKlw5F.js";import"./useTheme-B4I3gTml.js";import"./utils-BL_otCjh.js";import"./TransitionGroupContext-BdgLX1mE.js";import"./index-DByGtAqR.js";import"./index-DsQGSP8e.js";import"./useForkRef-QQIssf4j.js";import"./getReactElementRef-B76VvR63.js";import"./ButtonBase-ChpoghoR.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

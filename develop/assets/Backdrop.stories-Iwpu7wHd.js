import{r as p,j as o}from"./iframe-EJCMhezF.js";import{B as r}from"./Backdrop-BuDdHXf6.js";import{B as c}from"./Button-DLK5id5n.js";import{T as i}from"./Typography-DLgU8XWP.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./styled-DRDTacfX.js";import"./useTheme-C9TzCYyI.js";import"./utils-DPT7uM0p.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./index-CD7GOfqp.js";import"./index-C4_o-THT.js";import"./useForkRef-CLOggWa6.js";import"./ButtonBase-BYlwM-_S.js";const O={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const S=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

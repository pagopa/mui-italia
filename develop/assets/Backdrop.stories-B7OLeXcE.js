import{r as p,j as o}from"./iframe-rw-T87Ps.js";import{B as r}from"./Backdrop-DnG8wF6D.js";import{B as c}from"./Button-DRjStLay.js";import{T as i}from"./Typography-DIxyHfgM.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./styled-BbRqDVtB.js";import"./useTheme-xu0WuyZg.js";import"./utils-z-7-CUm-.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";import"./useForkRef-D1JMp28z.js";import"./ButtonBase-B-e_mOzE.js";const O={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,O as default};

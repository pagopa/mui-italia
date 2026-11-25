import{r as p,j as o}from"./iframe-2X3ZxJBB.js";import{B as r}from"./Backdrop-CvgmQxSL.js";import{B as c}from"./Button-CKt4qX6J.js";import{T as i}from"./Typography-BsD0WLvF.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./styled-CSThg6ob.js";import"./useTheme-TBw-fLAI.js";import"./utils-B9Xpknxo.js";import"./TransitionGroupContext-ConkyLn2.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./useForkRef-vrRRETjr.js";import"./getReactElementRef-DjnmNWy7.js";import"./ButtonBase-DaB6vsJo.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

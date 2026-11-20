import{r as p,j as o}from"./iframe-CL-nofVy.js";import{B as r}from"./Backdrop-BI0vZlIF.js";import{B as c}from"./Button-CuoZ7k1t.js";import{T as i}from"./Typography-Cz4LsPd3.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CUarE2Ck.js";import"./styled-ovOPsWgk.js";import"./useTheme-D4iwhroH.js";import"./utils-DWjdt6ri.js";import"./TransitionGroupContext-C7nOtKIy.js";import"./index-B36LPZwX.js";import"./index-BAHv-n70.js";import"./useForkRef-FJdE9ynN.js";import"./getReactElementRef-BJzfQJXO.js";import"./ButtonBase-DHfqvIli.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

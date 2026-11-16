import{r as p,j as o}from"./iframe-ByoTlC9Q.js";import{B as r}from"./Backdrop-BHTk6LYe.js";import{B as c}from"./Button-DITFemx5.js";import{T as i}from"./Typography-BUFn3w4e.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DGsnD8AD.js";import"./styled-1Q9tXkxe.js";import"./useTheme-ce18xD2I.js";import"./utils-x3U2XCHh.js";import"./TransitionGroupContext-Ccv7Y6Ew.js";import"./index-C3HY6R9u.js";import"./index-C0xsyHpE.js";import"./useForkRef-DBOtKc3X.js";import"./getReactElementRef-CP3g2otq.js";import"./ButtonBase-BEVN0AM_.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

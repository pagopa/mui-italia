import{r as p,j as o}from"./iframe-BFNOB_y6.js";import{B as r}from"./Backdrop-tMu91c7w.js";import{B as c}from"./Button-CbWtR1KO.js";import{T as i}from"./Typography-D1Awp86s.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-B_LwGPKB.js";import"./styled-Cz4HiKLZ.js";import"./useTheme-C9FgiBBS.js";import"./utils-CR8_5X8g.js";import"./TransitionGroupContext-Bm58Dos8.js";import"./index-Ci01uZSO.js";import"./index-BGbn-GBN.js";import"./useForkRef-BF9WlKKq.js";import"./getReactElementRef-CFBcUj76.js";import"./ButtonBase-BAsQVFTs.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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

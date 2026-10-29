import{j as o,B as f}from"./iframe-rw-T87Ps.js";import{T as e}from"./Tag-mVUTLFWS.js";import{S as d}from"./Stack-DK8xaQOE.js";import{T as b}from"./Typography-DIxyHfgM.js";import{c as S}from"./createSvgIcon-BLI2zqKg.js";import{A as r}from"./AttachFileRounded-Ru6MLoHm.js";const T=S(o.jsx("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7"}),"LocalOfferRounded"),u=S(o.jsx("path",{d:"m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"}),"StarRounded"),I={none:void 0,star:u,attachFile:r,localOffer:T},C=["info","warning","error","success"],w=a=>C.includes(a),x=a=>"value"in a?a.value:"Tag Content",y=a=>"mode"in a?a.mode:void 0,h=(a,p)=>{const t={...p?{root:{borderColor:p}}:{},...a?{icon:{color:a}}:{}};return Object.keys(t).length>0?t:void 0},P=a=>{const{iconName:p,customIconColor:t,customBorderColor:j}=a,m=a.variant??"default",g=I[p],v=a["aria-label"];return m==="only-icon"?o.jsx(e,{variant:"only-icon",icon:g??r,"aria-label":v,slotProps:h(t,void 0)}):w(m)?o.jsx(e,{variant:m,value:x(a),mode:y(a),"aria-label":v}):o.jsx(e,{variant:"default",value:x(a),mode:y(a),icon:g,"aria-label":v,slotProps:h(t,j)})},R={title:"Components/Tag",component:e,parameters:{layout:"centered",controls:{include:["value","variant","mode","iconName","customIconColor","customBorderColor","aria-label"]}},args:{value:"Tag Content",variant:"default",mode:void 0,iconName:"star",customIconColor:"",customBorderColor:"","aria-label":void 0},argTypes:{value:{control:{type:"text"},description:"Testo visualizzato nel Tag. Non è disponibile per la variante only-icon.",if:{arg:"variant",neq:"only-icon"}},variant:{options:["default","info","warning","error","success","only-icon"],control:{type:"select"},description:"Variante visiva del Tag."},mode:{options:[void 0,"truncate","wrap"],control:{type:"select"},description:"Gestione del testo quando il valore supera lo spazio disponibile: truncate o wrap."},iconName:{options:["none","star","attachFile","localOffer"],control:{type:"select"},description:"Controllo Storybook: seleziona una delle icone di esempio da passare alla prop icon.",table:{category:"Storybook controls"}},customIconColor:{control:{type:"color"},description:"Controllo Storybook: imposta slotProps.icon.color per le varianti default e only-icon.",table:{category:"Storybook controls"}},customBorderColor:{control:{type:"color"},description:"Controllo Storybook: imposta slotProps.root.borderColor per la variante default.",table:{category:"Storybook controls"}},"aria-label":{control:{type:"text"},description:"Etichetta accessibile. È particolarmente rilevante quando il Tag mostra solo un’icona."}},render:P},n={},i={parameters:{controls:{disable:!0}},render:()=>o.jsxs(d,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,alignItems:"center",children:[o.jsx(e,{variant:"default",value:"Default",icon:u}),o.jsx(e,{variant:"info",value:"Info"}),o.jsx(e,{variant:"warning",value:"Warning"}),o.jsx(e,{variant:"error",value:"Error"}),o.jsx(e,{variant:"success",value:"Success"}),o.jsx(e,{variant:"only-icon",icon:r,"aria-label":"Allegato"})]})},l={parameters:{controls:{disable:!0}},render:()=>o.jsxs(d,{spacing:2,children:[o.jsx(b,{variant:"body2",children:"Personalizzazione della variante default tramite slotProps."}),o.jsxs(d,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,children:[o.jsx(e,{variant:"default",value:"Icona blu",icon:u,slotProps:{icon:{color:"#0073E6"}}}),o.jsx(e,{variant:"default",value:"Bordo viola",icon:T,slotProps:{root:{borderColor:"#6B46C1"}}}),o.jsx(e,{variant:"default",value:"Icona e bordo",icon:r,slotProps:{root:{borderColor:"#D97706"},icon:{color:"#D97706"}}})]})]})},s={parameters:{controls:{disable:!0}},render:()=>o.jsxs(d,{spacing:3,children:[o.jsxs(f,{width:"220px",p:2,sx:{border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsx(b,{variant:"body2",mb:1,children:'mode="truncate"'}),o.jsx(e,{variant:"default",icon:r,value:"Valore molto lungo che viene troncato quando lo spazio disponibile è limitato",mode:"truncate"})]}),o.jsxs(f,{width:"220px",p:2,sx:{border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsx(b,{variant:"body2",mb:1,children:'mode="wrap"'}),o.jsx(e,{variant:"default",icon:r,value:"Valoremoltolungochepuòandareacapoquandolospaceèlimitato",mode:"wrap"})]})]})},c={parameters:{controls:{disable:!0}},render:()=>o.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[o.jsx(e,{variant:"only-icon",icon:r,"aria-label":"Allegato"}),o.jsx(e,{variant:"only-icon",icon:u,"aria-label":"Preferito",slotProps:{icon:{color:"#0073E6"}}})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap alignItems="center">
      <Tag variant="default" value="Default" icon={StarRoundedIcon} />
      <Tag variant="info" value="Info" />
      <Tag variant="warning" value="Warning" />
      <Tag variant="error" value="Error" />
      <Tag variant="success" value="Success" />
      <Tag variant="only-icon" icon={AttachFileRoundedIcon} aria-label="Allegato" />
    </Stack>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={2}>
      <Typography variant="body2">
        Personalizzazione della variante default tramite slotProps.
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Tag variant="default" value="Icona blu" icon={StarRoundedIcon} slotProps={{
        icon: {
          color: '#0073E6'
        }
      }} />

        <Tag variant="default" value="Bordo viola" icon={LocalOfferRoundedIcon} slotProps={{
        root: {
          borderColor: '#6B46C1'
        }
      }} />

        <Tag variant="default" value="Icona e bordo" icon={AttachFileRoundedIcon} slotProps={{
        root: {
          borderColor: '#D97706'
        },
        icon: {
          color: '#D97706'
        }
      }} />
      </Stack>
    </Stack>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={3}>
      <Box width="220px" p={2} sx={{
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1
    }}>
        <Typography variant="body2" mb={1}>
          mode="truncate"
        </Typography>
        <Tag variant="default" icon={AttachFileRoundedIcon} value="Valore molto lungo che viene troncato quando lo spazio disponibile è limitato" mode="truncate" />
      </Box>

      <Box width="220px" p={2} sx={{
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1
    }}>
        <Typography variant="body2" mb={1}>
          mode="wrap"
        </Typography>
        <Tag variant="default" icon={AttachFileRoundedIcon} value="Valoremoltolungochepuòandareacapoquandolospaceèlimitato" mode="wrap" />
      </Box>
    </Stack>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="row" spacing={1} alignItems="center">
      <Tag variant="only-icon" icon={AttachFileRoundedIcon} aria-label="Allegato" />
      <Tag variant="only-icon" icon={StarRoundedIcon} aria-label="Preferito" slotProps={{
      icon: {
        color: '#0073E6'
      }
    }} />
    </Stack>
}`,...c.parameters?.docs?.source}}};const k=["Playground","Variants","DefaultCustomization","ValueModes","OnlyIcon"],D=Object.freeze(Object.defineProperty({__proto__:null,DefaultCustomization:l,OnlyIcon:c,Playground:n,ValueModes:s,Variants:i,__namedExportsOrder:k,default:R},Symbol.toStringTag,{value:"Module"}));export{l as D,c as O,D as T,i as V,s as a};

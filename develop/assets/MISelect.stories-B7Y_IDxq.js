import{r as a,j as e,B as V}from"./iframe-6MQXqINC.js";import{a as r}from"./MISelect-CMAX3WFx.js";import{M as _}from"./MIChip-7x9u9-Rn.js";import{M as w}from"./MISingleDropdownItem-CYnWeoVO.js";import{M as B}from"./MICheckbox-BS7kaGJC.js";import{M as E}from"./MenuItem-B5uyZdG5.js";import{L as U}from"./LocationOn-DXVSAAiO.js";import{S as I}from"./Stack-pgcfqz6O.js";import{I as L}from"./InputAdornment-CFx-VP39.js";import{A as W}from"./AccountBalance-BoiK_rG2.js";import{T as z}from"./Typography-C7bhwkwa.js";const S=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],y=[{value:"all",label:"Tutti gli stati"},{value:"delivered",label:"Consegnata"},{value:"deposited",label:"Depositata"},{value:"forwarding",label:"In inoltro"}],A=[{value:"direzione-mobilita",label:"Direzione Mobilità",description:"Comune di Milano"},{value:"ufficio-permessi-ztl",label:"Ufficio permessi ZTL - Direzione Mobilità",description:"Ente Parent"},{value:"uo-aoo",label:"UO - AOO",description:"Ente Parent"},{value:"pagopa",label:"PagoPA S.p.A."},{value:"regione-lombardia",label:"Regione Lombardia"}],q={title:"Components/MISelect",component:r,tags:["!dev"],parameters:{layout:"centered",controls:{include:["labelText","helperText","selectedValue","selectedValues","multiple","disabled","error","required","name","open"]}},args:{labelText:"Seleziona un valore",helperText:"",selectedValue:"2",selectedValues:["1"],multiple:!1,disabled:!1,error:!1,required:!1,name:"example-select",open:!1},argTypes:{labelText:{control:{type:"text"},description:"Controllo Storybook: testo usato per InputLabel e prop label.",table:{category:"Storybook controls"}},helperText:{control:{type:"text"},description:"Testo di supporto gestito e associato al campo da MISelect.",table:{category:"MISelect"}},selectedValue:{control:{type:"text"},description:"Controllo Storybook: valore selezionato in modalita singola.",if:{arg:"multiple",eq:!1},table:{category:"Storybook controls"}},selectedValues:{control:{type:"object"},description:"Controllo Storybook: valori selezionati in modalita multipla.",if:{arg:"multiple",eq:!0},table:{category:"Storybook controls"}},multiple:{control:{type:"boolean"},description:"Abilita la selezione multipla.",table:{category:"MISelect"}},disabled:{control:{type:"boolean"},description:"Disabilita l interazione del campo.",table:{category:"MISelect"}},error:{control:{type:"boolean"},description:"Abilita lo stato di errore.",table:{category:"MISelect"}},required:{control:{type:"boolean"},description:"Imposta il campo come obbligatorio.",table:{category:"MISelect"}},name:{control:{type:"text"},description:"Nome inoltrato all input nativo nascosto.",table:{category:"MISelect"}},open:{control:{type:"boolean"},description:"Controlla programmaticamente l apertura del menu.",table:{category:"MISelect"}},onChange:{control:!1,table:{type:{summary:'SelectProps["onChange"]'}}},getChipDeleteAriaLabel:{control:!1,description:"Personalizza il nome accessibile del pulsante di rimozione di ciascun chip.",table:{category:"MISelect"}},options:{control:!1,table:{type:{summary:"ReadonlyArray<MISelectOption>"}}},renderOptions:{control:!1,description:"Personalizza il componente di ogni opzione; il default e MISelectItem."},label:{control:!1},labelId:{control:!1}},render:function(i){const{labelText:s,helperText:t,selectedValue:o,selectedValues:l,multiple:n,disabled:j,error:P,required:N,name:R,open:h}=i,[x,C]=a.useState(o),[M,O]=a.useState(l),[D,f]=a.useState(h);a.useEffect(()=>{C(o)},[o]),a.useEffect(()=>{O(Array.isArray(l)?l:[])},[l]),a.useEffect(()=>{f(h)},[h]);const k=n?Array.isArray(M)?M:[]:Array.isArray(x)?"":x;return e.jsx(r,{fullWidth:!0,options:S,label:s,multiple:n,disabled:j,error:P,required:N,name:R,open:D,onOpen:()=>f(!0),onClose:()=>f(!1),value:k,onChange:T=>{if(n){const v=T.target.value;O(Array.isArray(v)?v:[v]);return}C(T.target.value)},helperText:t})}},c={},p={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica degli stati principali: default, error e disabled."}}},render:()=>e.jsxs(I,{spacing:3,sx:{minWidth:320},children:[e.jsx(r,{fullWidth:!0,options:S,label:"Default",value:"2",onChange:()=>console.log("Default select changed")}),e.jsx(V,{children:e.jsx(r,{fullWidth:!0,options:S,label:"Errore",value:"",onChange:()=>{},error:!0,helperText:"Selezione non valida"})}),e.jsx(r,{fullWidth:!0,options:S,label:"Disabilitato",value:"1",onChange:()=>{},disabled:!0})]})},u={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Confronto tra selezione singola e multipla. In modalita multipla, i valori selezionati vengono mostrati come MIChip."}}},render:function(){const[i,s]=a.useState("delivered"),[t,o]=a.useState(["delivered","deposited"]);return e.jsxs(I,{spacing:3,sx:{minWidth:320},children:[e.jsx(r,{fullWidth:!0,label:"Selezione singola",options:y,value:i,onChange:l=>s(l.target.value)}),e.jsx(r,{fullWidth:!0,label:"Selezione multipla",options:y,multiple:!0,value:t,onChange:l=>o(l.target.value)})]})}},d={parameters:{controls:{disable:!0},docs:{description:{story:"renderOptions sostituisce MISelectItem con un componente personalizzato. Il componente deve inoltrare ref e props MUI e ricevere value, disabled e il contenuto dell opzione."}}},render:function(){const[i,s]=a.useState("delivered");return e.jsx(r,{fullWidth:!0,label:"Stato della notifica",options:y,value:i,onChange:t=>s(t.target.value),renderOptions:t=>e.jsxs(E,{value:t.value,disabled:t.disabled,children:[e.jsx(U,{"aria-hidden":"true",fontSize:"small",sx:{mr:1}}),t.label]})})}},m={parameters:{controls:{disable:!0},docs:{description:{story:"Menu multi-selezione di enti composto con MISingleDropdownItem, con contenuti e stati ispirati al riferimento Figma."}}},render:function(){const[i,s]=a.useState(["direzione-mobilita","ufficio-permessi-ztl","uo-aoo"]);return e.jsx(r,{label:"Cerca per erogatore",multiple:!0,options:A,value:i,onChange:t=>{const o=t.target.value;s(Array.isArray(o)?o.map(String):[String(o)])},renderValue:()=>e.jsx(_,{label:i.length,onDelete:()=>s([])}),renderOptions:t=>{const o=A.find(n=>n.value===t.value),l=i.includes(String(t.value));return e.jsx(w,{value:t.value,centralSlot:e.jsxs(e.Fragment,{children:[e.jsx(z,{component:"span",variant:"subtitle1",sx:n=>({fontSize:n.typography.pxToRem(14),lineHeight:n.typography.pxToRem(24)}),children:o?.label}),o?.description&&e.jsx(z,{component:"span",variant:"subtitle2",sx:n=>({color:n.palette.text.secondary,fontSize:n.typography.pxToRem(14),lineHeight:n.typography.pxToRem(20)}),children:o.description})]}),leftSlot:e.jsx(V,{component:"span",sx:n=>({alignItems:"center",backgroundColor:n.colors.neutral.grey[50],borderRadius:1,color:n.colors.neutral.grey[300],display:"inline-flex",height:32,justifyContent:"center",width:32}),children:e.jsx(W,{fontSize:"small"})}),rightSlot:l?void 0:e.jsx(B,{checked:!1,disableRipple:!0,inputProps:{"aria-hidden":!0},tabIndex:-1,sx:{p:0,pointerEvents:"none"}})})}})}},g={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Icona contestuale a sinistra tramite startAdornment, negli stati default ed errore."}}},render:()=>e.jsx(I,{spacing:3,sx:{minWidth:320},children:e.jsx(r,{fullWidth:!0,label:"Ente",options:S,value:"1",onChange:()=>{},startAdornment:e.jsx(L,{position:"start",children:e.jsx(W,{})})})})},H=["Playground","States","SingleAndMultiple","CustomOptions","WithSingleDropdownItems","WithDecorativeIcon"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica degli stati principali: default, error e disabled.'
      }
    }
  },
  render: () => <Stack spacing={3} sx={{
    minWidth: 320
  }}>
      <MISelect fullWidth options={BASIC_OPTIONS} label="Default" value="2" onChange={() => console.log('Default select changed')} />

      <Box>
        <MISelect fullWidth options={BASIC_OPTIONS} label="Errore" value="" onChange={() => undefined} error helperText="Selezione non valida" />
      </Box>

      <MISelect fullWidth options={BASIC_OPTIONS} label="Disabilitato" value="1" onChange={() => undefined} disabled />
    </Stack>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Confronto tra selezione singola e multipla. In modalita multipla, i valori selezionati vengono mostrati come MIChip.'
      }
    }
  },
  render: function RenderSingleAndMultiple() {
    const [singleValue, setSingleValue] = useState<unknown>('delivered');
    const [multipleValue, setMultipleValue] = useState<unknown>(['delivered', 'deposited']);
    return <Stack spacing={3} sx={{
      minWidth: 320
    }}>
        <MISelect fullWidth label="Selezione singola" options={STATUS_OPTIONS} value={singleValue} onChange={event => setSingleValue(event.target.value)} />

        <MISelect fullWidth label="Selezione multipla" options={STATUS_OPTIONS} multiple value={multipleValue} onChange={event => setMultipleValue(event.target.value)} />
      </Stack>;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'renderOptions sostituisce MISelectItem con un componente personalizzato. Il componente deve inoltrare ref e props MUI e ricevere value, disabled e il contenuto dell opzione.'
      }
    }
  },
  render: function RenderCustomOptions() {
    const [value, setValue] = useState<unknown>('delivered');
    return <MISelect fullWidth label="Stato della notifica" options={STATUS_OPTIONS} value={value} onChange={event => setValue(event.target.value)} renderOptions={option => <MenuItem value={option.value} disabled={option.disabled}>
            <LocationOnIcon aria-hidden="true" fontSize="small" sx={{
        mr: 1
      }} />
            {option.label}
          </MenuItem>} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Menu multi-selezione di enti composto con MISingleDropdownItem, con contenuti e stati ispirati al riferimento Figma.'
      }
    }
  },
  render: function RenderWithSingleDropdownItems() {
    const [selectedValues, setSelectedValues] = useState<Array<string>>(['direzione-mobilita', 'ufficio-permessi-ztl', 'uo-aoo']);
    return <MISelect label="Cerca per erogatore" multiple options={ORGANIZATION_OPTIONS} value={selectedValues} onChange={event => {
      const nextValue = event.target.value;
      setSelectedValues(Array.isArray(nextValue) ? nextValue.map(String) : [String(nextValue)]);
    }} renderValue={() => <MIChip label={selectedValues.length} onDelete={() => setSelectedValues([])} />} renderOptions={option => {
      const organization = ORGANIZATION_OPTIONS.find(item => item.value === option.value);
      const isSelected = selectedValues.includes(String(option.value));
      return <MISingleDropdownItem value={option.value} centralSlot={<>
                    <Typography component="span" variant='subtitle1' sx={theme => ({
          fontSize: theme.typography.pxToRem(14),
          lineHeight: theme.typography.pxToRem(24)
        })}>
                      {organization?.label}
                    </Typography>
                    {organization?.description && <Typography component="span" variant="subtitle2" sx={theme => ({
          color: theme.palette.text.secondary,
          fontSize: theme.typography.pxToRem(14),
          lineHeight: theme.typography.pxToRem(20)
        })}>
                        {organization.description}
                      </Typography>}
                  </>} leftSlot={<Box component="span" sx={theme => ({
        alignItems: 'center',
        backgroundColor: theme.colors.neutral.grey[50],
        borderRadius: 1,
        color: theme.colors.neutral.grey[300],
        display: 'inline-flex',
        height: 32,
        justifyContent: 'center',
        width: 32
      })}>
                    <AccountBalanceIcon fontSize="small" />
                  </Box>} rightSlot={isSelected ? undefined : <MICheckbox checked={false} disableRipple inputProps={{
        'aria-hidden': true
      }} tabIndex={-1} sx={{
        p: 0,
        pointerEvents: 'none'
      }} />} />;
    }} />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Icona contestuale a sinistra tramite startAdornment, negli stati default ed errore.'
      }
    }
  },
  render: () => <Stack spacing={3} sx={{
    minWidth: 320
  }}>
      <MISelect fullWidth label="Ente" options={BASIC_OPTIONS} value="1" onChange={() => undefined} startAdornment={<InputAdornment position="start">
            <AccountBalanceIcon />
          </InputAdornment>} />
    </Stack>
}`,...g.parameters?.docs?.source}}};const ne=Object.freeze(Object.defineProperty({__proto__:null,CustomOptions:d,Playground:c,SingleAndMultiple:u,States:p,WithDecorativeIcon:g,WithSingleDropdownItems:m,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{d as C,ne as M,p as S,g as W,u as a,m as b};

import{r as p,j as e,B as T}from"./iframe-EJCMhezF.js";import{M as U}from"./MIChip-B5V5L31C.js";import{M as a}from"./MISelect-C7iknP_t.js";import{M as t,a as $}from"./MIFormHelperText-kpOt1WeU.js";import{M as o}from"./MenuItem-Dy-9dW-p.js";import{I as i}from"./InputLabel-B7uC80Bx.js";import{I as A}from"./InputAdornment-DZAd-Jsb.js";import{A as z}from"./AccountBalance-DbEe6GqV.js";import{S as j}from"./Stack-CNPuMEtv.js";import{R}from"./ReportRounded-t8P7ALQ-.js";const G=(r,l)=>{let u=l;return p.Children.forEach(r,c=>{const d=p.isValidElement(c)?c.props:void 0;d&&d.value===l&&(u=d.children)}),u},J=({children:r,value:l,onChange:u,name:c,getChipDeleteAriaLabel:d})=>function(n){const g=b=>I=>{I.stopPropagation(),u({target:{value:l.filter(h=>h!==b),name:c}})};return e.jsx(T,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:n.map(b=>{const I=G(r,b);return e.jsx(U,{label:I,color:"neutral","aria-label":d?.(I),onMouseDown:h=>h.stopPropagation(),onDelete:g(b)},String(b))})})},s=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],q=[{value:"all",label:"Tutti gli stati"},{value:"delivered",label:"Consegnata"},{value:"deposited",label:"Depositata"},{value:"forwarding",label:"In inoltro"}],K={title:"Components/MISelect",component:a,tags:["!dev"],parameters:{layout:"centered",controls:{include:["labelText","helperText","optionPreset","selectedValue","selectedValues","multiple","disabled","readOnly","error","required","name","open"]}},args:{labelText:"Seleziona un valore",helperText:"",optionPreset:"basic",selectedValue:"2",selectedValues:["1"],multiple:!1,disabled:!1,readOnly:!1,error:!1,required:!1,name:"example-select",open:!1},argTypes:{labelText:{control:{type:"text"},description:"Controllo Storybook: testo usato per InputLabel e prop label.",table:{category:"Storybook controls"}},helperText:{control:{type:"text"},description:"Controllo Storybook: testo visualizzato sotto al campo.",table:{category:"Storybook controls"}},optionPreset:{options:["basic","status"],control:{type:"radio"},description:"Controllo Storybook: set di opzioni usato come children del Select.",table:{category:"Storybook controls"}},selectedValue:{control:{type:"text"},description:"Controllo Storybook: valore selezionato in modalita singola.",if:{arg:"multiple",eq:!1},table:{category:"Storybook controls"}},selectedValues:{control:{type:"object"},description:"Controllo Storybook: valori selezionati in modalita multipla.",if:{arg:"multiple",eq:!0},table:{category:"Storybook controls"}},multiple:{control:{type:"boolean"},description:"Abilita la selezione multipla.",table:{category:"MISelect"}},disabled:{control:{type:"boolean"},description:"Disabilita l interazione del campo.",table:{category:"MISelect"}},readOnly:{control:{type:"boolean"},description:"Rende il componente non apribile in sola lettura.",table:{category:"MISelect"}},error:{control:{type:"boolean"},description:"Abilita lo stato di errore.",table:{category:"MISelect"}},required:{control:{type:"boolean"},description:"Imposta il campo come obbligatorio.",table:{category:"MISelect"}},name:{control:{type:"text"},description:"Nome inoltrato all input nativo nascosto.",table:{category:"MISelect"}},open:{control:{type:"boolean"},description:"Controlla programmaticamente l apertura del menu.",table:{category:"MISelect"}},onChange:{control:!1,table:{type:{summary:'SelectProps["onChange"]'}}},children:{control:!1,table:{type:{summary:"ReactNode"}}},label:{control:!1},labelId:{control:!1}},render:function(l){const{labelText:u,helperText:c,optionPreset:d,selectedValue:m,selectedValues:n,multiple:g,disabled:b,readOnly:I,error:h,required:F,name:V,open:O}=l,D=p.useMemo(()=>d==="status"?q:s,[d]),[L,k]=p.useState(m),[P,N]=p.useState(n),[H,W]=p.useState(O);p.useEffect(()=>{k(m)},[m]),p.useEffect(()=>{N(Array.isArray(n)?n:[])},[n]),p.useEffect(()=>{W(O)},[O]);const E="mi-select-playground-label",_=c?"mi-select-playground-helper":void 0,w=g?Array.isArray(P)?P:[]:Array.isArray(L)?"":L;return e.jsx(T,{sx:{minWidth:280},children:e.jsxs(t,{fullWidth:!0,error:h,disabled:b,required:F,children:[e.jsx(i,{id:E,children:u}),e.jsx(a,{labelId:E,label:u,multiple:g,disabled:b,readOnly:I,error:h,required:F,name:V,open:H,onOpen:()=>W(!0),onClose:()=>W(!1),value:w,onChange:v=>{if(g){const B=v.target.value;N(Array.isArray(B)?B:[B]);return}k(v.target.value)},"aria-describedby":_,children:D.map(v=>e.jsx(o,{value:v.value,children:v.label},v.value))}),c?e.jsx($,{id:_,children:c}):null]})})}},S={},x={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica degli stati principali: default, error, disabled e readOnly."}}},render:()=>{const r="mi-select-states";return e.jsxs(j,{spacing:3,sx:{minWidth:320},children:[e.jsxs(t,{fullWidth:!0,children:[e.jsx(i,{id:`${r}-default-label`,children:"Default"}),e.jsx(a,{labelId:`${r}-default-label`,label:"Default",value:"2",onChange:()=>{},children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`default-${l.value}`))})]}),e.jsxs(t,{fullWidth:!0,error:!0,children:[e.jsx(i,{id:`${r}-error-label`,children:"Errore"}),e.jsx(a,{labelId:`${r}-error-label`,label:"Errore",value:"",onChange:()=>{},error:!0,"aria-describedby":`${r}-error-helper`,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`error-${l.value}`))}),e.jsxs($,{id:`${r}-error-helper`,sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(R,{color:"error",fontSize:"small"}),"Selezione non valida"]})]}),e.jsxs(t,{fullWidth:!0,disabled:!0,children:[e.jsx(i,{id:`${r}-disabled-label`,children:"Disabilitato"}),e.jsx(a,{labelId:`${r}-disabled-label`,label:"Disabilitato",value:"1",onChange:()=>{},disabled:!0,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`disabled-${l.value}`))})]}),e.jsxs(t,{fullWidth:!0,children:[e.jsx(i,{id:`${r}-readonly-label`,children:"Sola lettura"}),e.jsx(a,{labelId:`${r}-readonly-label`,label:"Sola lettura",value:"3",onChange:()=>{},readOnly:!0,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`readonly-${l.value}`))})]})]})}},f={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Confronto tra configurazione a selezione singola e multipla."}}},render:()=>e.jsxs(j,{spacing:3,sx:{minWidth:320},children:[e.jsxs(t,{fullWidth:!0,children:[e.jsx(i,{id:"mi-select-single-label",children:"Selezione singola"}),e.jsx(a,{labelId:"mi-select-single-label",label:"Selezione singola",value:"delivered",onChange:()=>{},children:q.map(r=>e.jsx(o,{value:r.value,children:r.label},`single-${r.value}`))})]}),e.jsxs(t,{fullWidth:!0,children:[e.jsx(i,{id:"mi-select-multiple-label",children:"Selezione multipla"}),e.jsx(a,{labelId:"mi-select-multiple-label",label:"Selezione multipla",multiple:!0,value:["delivered","deposited"],onChange:()=>{},children:q.map(r=>e.jsx(o,{value:r.value,children:r.label},`multiple-${r.value}`))})]})]})},M={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Icona contestuale a sinistra tramite startAdornment, negli stati default ed errore."}}},render:()=>{const r="mi-select-icon";return e.jsxs(j,{spacing:3,sx:{minWidth:320},children:[e.jsxs(t,{fullWidth:!0,children:[e.jsx(i,{id:`${r}-default-label`,children:"Ente"}),e.jsx(a,{labelId:`${r}-default-label`,label:"Ente",value:"1",onChange:()=>{},startAdornment:e.jsx(A,{position:"start",children:e.jsx(z,{})}),children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`icon-default-${l.value}`))})]}),e.jsxs(t,{fullWidth:!0,error:!0,children:[e.jsx(i,{id:`${r}-error-label`,children:"Ente"}),e.jsx(a,{labelId:`${r}-error-label`,label:"Ente",value:"",onChange:()=>{},error:!0,"aria-describedby":`${r}-error-helper`,startAdornment:e.jsx(A,{position:"start",children:e.jsx(z,{})}),children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`icon-error-${l.value}`))}),e.jsxs($,{id:`${r}-error-helper`,sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(R,{color:"error",fontSize:"small"}),"Some details error"]})]})]})}},y={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Selezione multipla con valori mostrati come MIChip rimovibili tramite la prop renderValue, icona contestuale e campo obbligatorio. Ogni chip espone un pulsante di rimozione che aggiorna la selezione senza aprire il menu."}}},render:function(){const l="mi-select-multiple-chips-label",[u,c]=p.useState(["1","2"]),d=n=>{c(n.target.value)},m=s.map(n=>e.jsx(o,{value:n.value,children:n.label},`multiple-chips-${n.value}`));return e.jsx(T,{sx:{minWidth:320},children:e.jsxs(t,{fullWidth:!0,required:!0,children:[e.jsx(i,{id:l,children:"Label text"}),e.jsx(a,{labelId:l,label:"Label text",required:!0,multiple:!0,value:u,onChange:d,renderValue:J({children:m,value:u,onChange:d,name:"multiple-chips",getChipDeleteAriaLabel:n=>`Rimuovi ${n}`}),startAdornment:e.jsx(A,{position:"start",children:e.jsx(z,{})}),children:m})]})})}},C={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Casi di campo obbligatorio: vuoto, valorizzato e in errore. La prop required su MIFormControl aggiunge l asterisco alla label, mentre su MISelect viene inoltrata all input nativo."}}},render:()=>{const r="mi-select-required";return e.jsxs(j,{spacing:3,sx:{minWidth:320},children:[e.jsxs(t,{fullWidth:!0,required:!0,children:[e.jsx(i,{id:`${r}-empty-label`,children:"Obbligatorio"}),e.jsx(a,{labelId:`${r}-empty-label`,label:"Obbligatorio",name:"required-empty",value:"",onChange:()=>{},required:!0,"aria-describedby":`${r}-empty-helper`,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`required-empty-${l.value}`))}),e.jsx($,{id:`${r}-empty-helper`,children:"Campo obbligatorio"})]}),e.jsxs(t,{fullWidth:!0,required:!0,children:[e.jsx(i,{id:`${r}-filled-label`,children:"Obbligatorio valorizzato"}),e.jsx(a,{labelId:`${r}-filled-label`,label:"Obbligatorio valorizzato",name:"required-filled",value:"2",onChange:()=>{},required:!0,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`required-filled-${l.value}`))})]}),e.jsxs(t,{fullWidth:!0,required:!0,error:!0,children:[e.jsx(i,{id:`${r}-error-label`,children:"Obbligatorio in errore"}),e.jsx(a,{labelId:`${r}-error-label`,label:"Obbligatorio in errore",name:"required-error",value:"",onChange:()=>{},required:!0,error:!0,"aria-describedby":`${r}-error-helper`,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`required-error-${l.value}`))}),e.jsx($,{id:`${r}-error-helper`,children:"Seleziona un valore per proseguire"})]}),e.jsxs(t,{fullWidth:!0,required:!0,disabled:!0,children:[e.jsx(i,{id:`${r}-disabled-label`,children:"Obbligatorio disabilitato"}),e.jsx(a,{labelId:`${r}-disabled-label`,label:"Obbligatorio disabilitato",name:"required-disabled",value:"1",onChange:()=>{},required:!0,disabled:!0,children:s.map(l=>e.jsx(o,{value:l.value,children:l.label},`required-disabled-${l.value}`))})]})]})}},Q=["Playground","States","SingleAndMultiple","WithDecorativeIcon","MultipleWithChips","Required"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"{}",...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica degli stati principali: default, error, disabled e readOnly.'
      }
    }
  },
  render: () => {
    const labelIdBase = 'mi-select-states';
    return <Stack spacing={3} sx={{
      minWidth: 320
    }}>
        <MIFormControl fullWidth>
          <InputLabel id={\`\${labelIdBase}-default-label\`}>Default</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-default-label\`} label="Default" value="2" onChange={() => undefined}>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`default-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
        </MIFormControl>

        <MIFormControl fullWidth error>
          <InputLabel id={\`\${labelIdBase}-error-label\`}>Errore</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-error-label\`} label="Errore" value="" onChange={() => undefined} error aria-describedby={\`\${labelIdBase}-error-helper\`}>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`error-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
          <MIFormHelperText id={\`\${labelIdBase}-error-helper\`} sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
            <ReportRoundedIcon color="error" fontSize="small" />
            Selezione non valida
          </MIFormHelperText>
        </MIFormControl>

        <MIFormControl fullWidth disabled>
          <InputLabel id={\`\${labelIdBase}-disabled-label\`}>Disabilitato</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-disabled-label\`} label="Disabilitato" value="1" onChange={() => undefined} disabled>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`disabled-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
        </MIFormControl>

        <MIFormControl fullWidth>
          <InputLabel id={\`\${labelIdBase}-readonly-label\`}>Sola lettura</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-readonly-label\`} label="Sola lettura" value="3" onChange={() => undefined} readOnly>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`readonly-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
        </MIFormControl>
      </Stack>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Confronto tra configurazione a selezione singola e multipla.'
      }
    }
  },
  render: () => <Stack spacing={3} sx={{
    minWidth: 320
  }}>
      <MIFormControl fullWidth>
        <InputLabel id="mi-select-single-label">Selezione singola</InputLabel>
        <MISelect labelId="mi-select-single-label" label="Selezione singola" value="delivered" onChange={() => undefined}>
          {STATUS_OPTIONS.map(item => <MenuItem key={\`single-\${item.value}\`} value={item.value}>
              {item.label}
            </MenuItem>)}
        </MISelect>
      </MIFormControl>

      <MIFormControl fullWidth>
        <InputLabel id="mi-select-multiple-label">Selezione multipla</InputLabel>
        <MISelect labelId="mi-select-multiple-label" label="Selezione multipla" multiple value={['delivered', 'deposited']} onChange={() => undefined}>
          {STATUS_OPTIONS.map(item => <MenuItem key={\`multiple-\${item.value}\`} value={item.value}>
              {item.label}
            </MenuItem>)}
        </MISelect>
      </MIFormControl>
    </Stack>
}`,...f.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
  render: () => {
    const labelIdBase = 'mi-select-icon';
    return <Stack spacing={3} sx={{
      minWidth: 320
    }}>
        <MIFormControl fullWidth>
          <InputLabel id={\`\${labelIdBase}-default-label\`}>Ente</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-default-label\`} label="Ente" value="1" onChange={() => undefined} startAdornment={<InputAdornment position="start">
                <AccountBalanceIcon />
              </InputAdornment>}>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`icon-default-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
        </MIFormControl>

        <MIFormControl fullWidth error>
          <InputLabel id={\`\${labelIdBase}-error-label\`}>Ente</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-error-label\`} label="Ente" value="" onChange={() => undefined} error aria-describedby={\`\${labelIdBase}-error-helper\`} startAdornment={<InputAdornment position="start">
                <AccountBalanceIcon />
              </InputAdornment>}>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`icon-error-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
          <MIFormHelperText id={\`\${labelIdBase}-error-helper\`} sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
            <ReportRoundedIcon color="error" fontSize="small" />
            Some details error
          </MIFormHelperText>
        </MIFormControl>
      </Stack>;
  }
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Selezione multipla con valori mostrati come MIChip rimovibili tramite la prop renderValue, icona contestuale e campo obbligatorio. Ogni chip espone un pulsante di rimozione che aggiorna la selezione senza aprire il menu.'
      }
    }
  },
  render: function MultipleWithChipsExample() {
    const labelId = 'mi-select-multiple-chips-label';
    const [values, setValues] = useState<Array<string>>(['1', '2']);
    const handleChange = (event: SelectChangeEvent<unknown>) => {
      setValues(event.target.value as Array<string>);
    };
    const chipOptions = BASIC_OPTIONS.map(item => <MenuItem key={\`multiple-chips-\${item.value}\`} value={item.value}>
        {item.label}
      </MenuItem>);
    return <Box sx={{
      minWidth: 320
    }}>
        <MIFormControl fullWidth required>
          <InputLabel id={labelId}>Label text</InputLabel>
          <MISelect labelId={labelId} label="Label text" required multiple value={values} onChange={handleChange} renderValue={createChipsRenderValue({
          children: chipOptions,
          value: values,
          onChange: handleChange,
          name: 'multiple-chips',
          getChipDeleteAriaLabel: label => \`Rimuovi \${label}\`
        })} startAdornment={<InputAdornment position="start">
                <AccountBalanceIcon />
              </InputAdornment>}>
            {chipOptions}
          </MISelect>
        </MIFormControl>
      </Box>;
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Casi di campo obbligatorio: vuoto, valorizzato e in errore. La prop required su MIFormControl aggiunge l asterisco alla label, mentre su MISelect viene inoltrata all input nativo.'
      }
    }
  },
  render: () => {
    const labelIdBase = 'mi-select-required';
    return <Stack spacing={3} sx={{
      minWidth: 320
    }}>
        <MIFormControl fullWidth required>
          <InputLabel id={\`\${labelIdBase}-empty-label\`}>Obbligatorio</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-empty-label\`} label="Obbligatorio" name="required-empty" value="" onChange={() => undefined} required aria-describedby={\`\${labelIdBase}-empty-helper\`}>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`required-empty-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
          <MIFormHelperText id={\`\${labelIdBase}-empty-helper\`}>Campo obbligatorio</MIFormHelperText>
        </MIFormControl>

        <MIFormControl fullWidth required>
          <InputLabel id={\`\${labelIdBase}-filled-label\`}>Obbligatorio valorizzato</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-filled-label\`} label="Obbligatorio valorizzato" name="required-filled" value="2" onChange={() => undefined} required>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`required-filled-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
        </MIFormControl>

        <MIFormControl fullWidth required error>
          <InputLabel id={\`\${labelIdBase}-error-label\`}>Obbligatorio in errore</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-error-label\`} label="Obbligatorio in errore" name="required-error" value="" onChange={() => undefined} required error aria-describedby={\`\${labelIdBase}-error-helper\`}>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`required-error-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
          <MIFormHelperText id={\`\${labelIdBase}-error-helper\`}>
            Seleziona un valore per proseguire
          </MIFormHelperText>
        </MIFormControl>

        <MIFormControl fullWidth required disabled>
          <InputLabel id={\`\${labelIdBase}-disabled-label\`}>Obbligatorio disabilitato</InputLabel>
          <MISelect labelId={\`\${labelIdBase}-disabled-label\`} label="Obbligatorio disabilitato" name="required-disabled" value="1" onChange={() => undefined} required disabled>
            {BASIC_OPTIONS.map(item => <MenuItem key={\`required-disabled-\${item.value}\`} value={item.value}>
                {item.label}
              </MenuItem>)}
          </MISelect>
        </MIFormControl>
      </Stack>;
  }
}`,...C.parameters?.docs?.source}}};const ie=Object.freeze(Object.defineProperty({__proto__:null,MultipleWithChips:y,Playground:S,Required:C,SingleAndMultiple:f,States:x,WithDecorativeIcon:M,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{ie as M,C as R,x as S,M as W,f as a,y as b};

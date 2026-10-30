import{j as e,B as r}from"./iframe-CDfDAPFk.js";import{M as o}from"./MIAlert-Ctx5Le-q.js";import{S as h}from"./Stack-CQ_WFl_6.js";import{T as b}from"./Typography-9AQN7ayB.js";const C="Titolo default dell'Alert",x="Aggiungi un messaggio esplicativo sul motivo della segnalazione.",u="Ok, ho capito!",g="Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",N={title:"Components/MIAlert",component:o,parameters:{layout:"padded",controls:{include:["variant","severity","title","content","ctaWrapSize","enableAction","actionType","actionLabel","actionHref","openInNewTab"]}},args:{variant:"default",severity:"success",title:C,content:x,ctaWrapSize:"normal",enableAction:!0,actionType:"link",actionLabel:u,actionHref:"https://test.com",openInNewTab:!1},argTypes:{severity:{description:"Severità dell’alert. Determina colore e icona.",control:{type:"radio"},options:["success","error","info","warning"],table:{type:{summary:"'success' | 'info' | 'warning' | 'error'"},defaultValue:{summary:"success"}}},variant:{description:"Variante dell’alert. `default` supporta titolo e CTA; `header` non supporta né titolo né CTA.",control:{type:"radio"},options:["default","header"],table:{type:{summary:"'default' | 'header'"},defaultValue:{summary:"default"}}},title:{description:"Titolo dell’alert. Disponibile solo per la variante `default`.",control:{type:"text"},table:{type:{summary:"string"}}},ctaWrapSize:{description:"Soglia usata per determinare quando la CTA va a capo rispetto al contenuto: `tight`, `normal` o `wide`.",control:{type:"radio"},options:["tight","normal","wide"],table:{type:{summary:"'tight' | 'normal' | 'wide'"},defaultValue:{summary:"normal"}}},content:{description:"Controllo Storybook: testo usato come children del componente.",control:{type:"text"},table:{category:"Storybook controls"}},enableAction:{description:"Controllo Storybook: abilita o disabilita la CTA.",control:{type:"boolean"},table:{category:"Storybook controls"}},actionType:{description:"Controllo Storybook: tipo di CTA da generare.",control:{type:"radio"},options:["link","button"],if:{arg:"enableAction",eq:!0},table:{category:"Storybook controls"}},actionLabel:{description:"Controllo Storybook: etichetta visibile della CTA.",control:{type:"text"},if:{arg:"enableAction",eq:!0},table:{category:"Storybook controls"}},actionHref:{description:"Controllo Storybook: URL usato quando la CTA è di tipo link.",control:{type:"text"},if:{arg:"enableAction",eq:!0},table:{category:"Storybook controls"}},openInNewTab:{description:"Controllo Storybook: apre il link in una nuova scheda quando la CTA è di tipo link.",control:{type:"boolean"},if:{arg:"enableAction",eq:!0},table:{category:"Storybook controls"}},children:{control:!1,table:{disable:!0}},action:{control:!1,table:{disable:!0}},sx:{control:!1,table:{disable:!0}}},render:({variant:t="default",severity:A="success",title:S,content:k,ctaWrapSize:f="normal",enableAction:j,actionType:M,actionLabel:y,actionHref:I,openInNewTab:z,id:T,children:w})=>{const v=k??w??x;if(t==="header")return e.jsx(o,{id:T,variant:"header",severity:A,ctaWrapSize:f,children:v});const E=j&&y?M==="button"?{label:y,onClick:()=>console.log("MIAlert CTA clicked")}:{label:y,href:I,target:z?"_blank":"_self"}:void 0;return e.jsx(o,{id:T,variant:"default",severity:A,title:S,action:E,ctaWrapSize:f,children:e.jsx(b,{variant:"body1",children:v})})}},n={},a={parameters:{controls:{disable:!0}},render:()=>e.jsx(h,{spacing:2,sx:{width:720,maxWidth:"100%"},children:["success","info","warning","error"].map(t=>e.jsxs(o,{severity:t,title:`Severity ${t}`,children:["Messaggio di esempio per la severità ",e.jsx("strong",{children:t}),"."]},t))})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs(h,{spacing:3,sx:{width:720,maxWidth:"100%"},children:[e.jsxs(r,{children:[e.jsx(b,{variant:"subtitle2",sx:{mb:1},children:"Default"}),e.jsx(o,{severity:"success",title:C,children:x})]}),e.jsxs(r,{children:[e.jsx(b,{variant:"subtitle2",sx:{mb:1},children:"Header"}),e.jsx(o,{variant:"header",severity:"success",children:"Messaggio compatto per la variante header."})]})]})},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs(h,{spacing:2,sx:{width:720,maxWidth:"100%"},children:[e.jsxs(o,{severity:"info",title:"CTA link",action:{label:u,href:"https://test.com",target:"_self"},children:["La CTA viene renderizzata come link quando riceve la prop ",e.jsx("code",{children:"href"}),"."]}),e.jsxs(o,{severity:"warning",title:"CTA bottone",action:{label:u,onClick:()=>console.log("MIAlert CTA clicked")},children:["La CTA viene renderizzata come bottone quando riceve una callback ",e.jsx("code",{children:"onClick"}),"."]})]})},l={parameters:{controls:{disable:!0}},render:()=>e.jsx(h,{spacing:3,sx:{width:720,maxWidth:"100%"},children:["tight","normal","wide"].map(t=>e.jsxs(r,{children:[e.jsxs(b,{variant:"subtitle2",sx:{mb:1},children:["ctaWrapSize: ",t]}),e.jsx(r,{sx:{width:488,maxWidth:"100%"},children:e.jsx(o,{severity:"info",title:"Container stretto",ctaWrapSize:t,action:{label:u,href:"https://test.com"},children:"Il contenuto dell’alert e la CTA si adattano alla larghezza disponibile del contenitore."})})]},t))})},c={args:{title:void 0,enableAction:!1}},d={args:{enableAction:!1}},p={parameters:{controls:{disable:!0}},render:()=>e.jsx(o,{severity:"error",title:"Titolo dell'Alert",children:e.jsxs(r,{component:"span",children:["Non è stato possibile completare alcuni passaggi. Controlla i seguenti elementi:",e.jsxs(r,{component:"ul",sx:{my:1,pl:2.5},children:[e.jsx("li",{children:"Verifica i dati anagrafici inseriti"}),e.jsx("li",{children:"Controlla l’indirizzo email"}),e.jsxs("li",{children:["Consulta la"," ",e.jsx(r,{component:"a",href:"https://test.com",target:"_blank",rel:"noopener noreferrer",children:"guida online"})," ","per maggiori dettagli"]})]})]})})},m={parameters:{controls:{disable:!0}},render:()=>e.jsx(o,{severity:"warning",title:`Very long title ${g}`,action:{label:u,href:"https://test.com"},children:`${g}${g}${g}`})},_=["Playground","Severities","Variants","CtaExamples","CtaWrapSizes","NoTitle","NoCta","CustomNodeDescription","StressUnbroken"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={2} sx={{
    width: 720,
    maxWidth: '100%'
  }}>
      {(['success', 'info', 'warning', 'error'] as const).map(severity => <MIAlert key={severity} severity={severity} title={\`Severity \${severity}\`}>
          Messaggio di esempio per la severità <strong>{severity}</strong>.
        </MIAlert>)}
    </Stack>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={3} sx={{
    width: 720,
    maxWidth: '100%'
  }}>
      <Box>
        <Typography variant="subtitle2" sx={{
        mb: 1
      }}>
          Default
        </Typography>
        <MIAlert severity="success" title={DEFAULT_TITLE}>
          {DEFAULT_MESSAGE}
        </MIAlert>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{
        mb: 1
      }}>
          Header
        </Typography>
        <MIAlert variant="header" severity="success">
          Messaggio compatto per la variante header.
        </MIAlert>
      </Box>
    </Stack>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={2} sx={{
    width: 720,
    maxWidth: '100%'
  }}>
      <MIAlert severity="info" title="CTA link" action={{
      label: DEFAULT_CTA,
      href: 'https://test.com',
      target: '_self'
    }}>
        La CTA viene renderizzata come link quando riceve la prop <code>href</code>.
      </MIAlert>

      <MIAlert severity="warning" title="CTA bottone" action={{
      label: DEFAULT_CTA,
      onClick: () => console.log('MIAlert CTA clicked')
    }}>
        La CTA viene renderizzata come bottone quando riceve una callback <code>onClick</code>.
      </MIAlert>
    </Stack>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={3} sx={{
    width: 720,
    maxWidth: '100%'
  }}>
      {(['tight', 'normal', 'wide'] as const).map(ctaWrapSize => <Box key={ctaWrapSize}>
          <Typography variant="subtitle2" sx={{
        mb: 1
      }}>
            ctaWrapSize: {ctaWrapSize}
          </Typography>

          <Box sx={{
        width: 488,
        maxWidth: '100%'
      }}>
            <MIAlert severity="info" title="Container stretto" ctaWrapSize={ctaWrapSize} action={{
          label: DEFAULT_CTA,
          href: 'https://test.com'
        }}>
              Il contenuto dell’alert e la CTA si adattano alla larghezza disponibile del
              contenitore.
            </MIAlert>
          </Box>
        </Box>)}
    </Stack>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    enableAction: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    enableAction: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIAlert severity="error" title="Titolo dell'Alert">
      <Box component="span">
        Non è stato possibile completare alcuni passaggi. Controlla i seguenti elementi:
        <Box component="ul" sx={{
        my: 1,
        pl: 2.5
      }}>
          <li>Verifica i dati anagrafici inseriti</li>
          <li>Controlla l’indirizzo email</li>
          <li>
            Consulta la{' '}
            <Box component="a" href="https://test.com" target="_blank" rel="noopener noreferrer">
              guida online
            </Box>{' '}
            per maggiori dettagli
          </li>
        </Box>
      </Box>
    </MIAlert>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIAlert severity="warning" title={\`Very long title \${LONG_UNBROKEN}\`} action={{
    label: DEFAULT_CTA,
    href: 'https://test.com'
  }}>
      {\`\${LONG_UNBROKEN}\${LONG_UNBROKEN}\${LONG_UNBROKEN}\`}
    </MIAlert>
}`,...m.parameters?.docs?.source}}};const D=Object.freeze(Object.defineProperty({__proto__:null,CtaExamples:s,CtaWrapSizes:l,CustomNodeDescription:p,NoCta:d,NoTitle:c,Playground:n,Severities:a,StressUnbroken:m,Variants:i,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{s as C,D as M,a as S,i as V,l as a,p as b,m as c};

import{r as i,j as e,B as s}from"./iframe-CDfDAPFk.js";import{C as c}from"./CodeInput-NPGPAxLB.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-DDUJVjwp.js";import"./styled-tN4ayshy.js";import"./FormLabel-DIGu85nT.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./useFormControl-Ci-4e5y_.js";import"./Stack-CQ_WFl_6.js";import"./createStack-D3UHGSp-.js";import"./useThemeProps-DVJ-9e3j.js";import"./Typography-9AQN7ayB.js";const F={title:"Components/CodeInput",component:c,argTypes:{label:{control:"text"}}},r="OTP Code",C="Insert Code:",n=o=>{const[a,t]=i.useState(o.value??"");return i.useEffect(()=>{t(o.value??"")},[o.value]),e.jsxs(s,{children:[e.jsx(c,{...o,value:a,onChange:t}),e.jsx(s,{mt:2,fontSize:"0.75rem",color:"text.secondary",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Value:"})," ",a]})})]})},d={render:n,args:{length:5,ariaLabel:r}},u={render:n,args:{length:5,label:C},parameters:{docs:{description:{story:"Renders an internal label linked to the input via htmlFor/id. This is the recommended setup when a visible label is present."}}}},p={render:n,args:{length:6,label:C,helperText:"Enter the verification code sent via SMS"}},m={render:n,args:{length:5,value:"12345",ariaLabel:r}},h={render:n,args:{length:8,encrypted:!0,value:"password",ariaLabel:r}},g={render:n,args:{length:6,inputMode:"numeric",helperText:"Only numbers allowed – mobile keyboard test",ariaLabel:r}},x={render:n,args:{length:10,value:"123456",ariaLabel:r}},S={render:n,args:{length:6,error:!0,helperText:"Invalid code format",value:"abc",ariaLabel:r}},v={render:n,args:{length:5,value:"",helperText:"Enter the verification code sent via SMS",ariaLabel:r}},b={render:n,args:{length:5,value:"12345",readOnly:!0,helperText:"Code is read-only",ariaLabel:r},parameters:{docs:{description:{story:"Displays a pre-filled code in read-only mode. The input is non-editable and no caret is shown."}}}},f={render:function(){const[a,t]=i.useState("");return e.jsxs(s,{children:[e.jsx(c,{ariaLabel:r,length:5,onChange:t}),e.jsx(s,{mt:2,fontSize:"0.75rem",color:"text.secondary",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Value:"})," ",a]})})]})}},T={render:function(a){const[t,l]=i.useState("1234");return e.jsxs(s,{children:[e.jsx(c,{...a,length:6,value:t,onChange:l,helperText:"Click reset while caret is inside",ariaLabel:r}),e.jsxs(s,{mt:2,display:"flex",gap:1,children:[e.jsx("button",{onClick:()=>l(""),children:"Reset value to empty"}),e.jsx("button",{onClick:()=>l("9876"),children:"Set value to 9876"})]}),e.jsxs(s,{mt:1,fontSize:"0.75rem",color:"text.secondary",children:[e.jsx("strong",{children:"Value:"})," ",t]})]})}},y={render:function(a){const[t,l]=i.useState("1234");return i.useEffect(()=>{const j=setTimeout(()=>{l("987")},5e3);return()=>clearTimeout(j)},[]),e.jsxs(s,{children:[e.jsx("p",{children:"Place the caret inside the CodeInput and wait 5 seconds."}),e.jsx(c,{...a,length:6,value:t,onChange:l,ariaLabel:r})]})}},z=["Default","WithLabel","WithLabelAndHelperText","Prefilled","Encrypted","NumericInputMode","LongCode","WithError","WithHelperText","ReadOnly","Uncontrolled","ResetWhileFocused","ProgrammaticUpdateWhileFocused"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 5,
    ariaLabel
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 5,
    label
  },
  parameters: {
    docs: {
      description: {
        story: 'Renders an internal label linked to the input via htmlFor/id. This is the recommended setup when a visible label is present.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 6,
    label,
    helperText: 'Enter the verification code sent via SMS'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 5,
    value: '12345',
    ariaLabel
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 8,
    encrypted: true,
    value: 'password',
    ariaLabel
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 6,
    inputMode: 'numeric',
    helperText: 'Only numbers allowed – mobile keyboard test',
    ariaLabel
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 10,
    value: '123456',
    ariaLabel
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 6,
    error: true,
    helperText: 'Invalid code format',
    value: 'abc',
    ariaLabel
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 5,
    value: '',
    helperText: 'Enter the verification code sent via SMS',
    ariaLabel
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: StatefulTemplate,
  args: {
    length: 5,
    value: '12345',
    readOnly: true,
    helperText: 'Code is read-only',
    ariaLabel
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a pre-filled code in read-only mode. The input is non-editable and no caret is shown.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function RenderWithState() {
    const [value, setValue] = useState('');
    return <Box>
        <CodeInput ariaLabel={ariaLabel} length={5} onChange={setValue} />
        <Box mt={2} fontSize="0.75rem" color="text.secondary">
          <div>
            <strong>Value:</strong> {value}
          </div>
        </Box>
      </Box>;
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function RenderWithState(args) {
    const [value, setValue] = useState('1234');
    return <Box>
        <CodeInput {...args} length={6} value={value} onChange={setValue} helperText="Click reset while caret is inside" ariaLabel={ariaLabel} />

        <Box mt={2} display="flex" gap={1}>
          <button onClick={() => setValue('')}>Reset value to empty</button>
          <button onClick={() => setValue('9876')}>Set value to 9876</button>
        </Box>

        <Box mt={1} fontSize="0.75rem" color="text.secondary">
          <strong>Value:</strong> {value}
        </Box>
      </Box>;
  }
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function RenderWithState(args) {
    const [value, setValue] = useState('1234');
    useEffect(() => {
      const id = setTimeout(() => {
        // simulate an external update (e.g., from WebSocket / API)
        setValue('987');
      }, 5000);
      return () => clearTimeout(id);
    }, []);
    return <Box>
        <p>Place the caret inside the CodeInput and wait 5 seconds.</p>
        <CodeInput {...args} length={6} value={value} onChange={setValue} ariaLabel={ariaLabel} />
      </Box>;
  }
}`,...y.parameters?.docs?.source}}};export{d as Default,h as Encrypted,x as LongCode,g as NumericInputMode,m as Prefilled,y as ProgrammaticUpdateWhileFocused,b as ReadOnly,T as ResetWhileFocused,f as Uncontrolled,S as WithError,v as WithHelperText,u as WithLabel,p as WithLabelAndHelperText,z as __namedExportsOrder,F as default};

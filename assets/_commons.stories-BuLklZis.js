import{j as e,T as v}from"./TopicMapContextProvider-DN-dBUAE.js";import{A as f}from"./Attribution-BFW70_nY.js";import{G as A,M as b}from"./MenuFooter-CUl3V6sd.js";import{a as C}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./index-RYns6xqu.js";import"./_baseClone-WMB_q0Oe.js";import"./_getPrototype-Dwr3C2Zh.js";import"./index-DNUR7M9R.js";import"./index-BTM6MDJA.js";import"./index-DvoZgHAm.js";import"./v4-CQkTLCs1.js";const j="0.11.5",S=()=>j,y=S(),E={title:"Commons",args:{applicationName:"GreatApp",applicationVersion:"abcd"},argTypes:{applicationName:{control:"text",description:"Name of the application"},applicationVersion:{control:"text",description:"Version of the application"}}},r={render:()=>e.jsx("div",{children:y})},t={render:g=>e.jsx(f,{...g})},o={render:()=>e.jsx(A,{})},n={render:()=>e.jsx(v,{appKey:"storybook-appkey",children:e.jsx(b,{title:"TopicMaps Wuppertal",version:"1.23.0",setAppMenuActiveMenuSection:C("setAppMenuActiveMenuSection")})})};var i,a,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div>{wuppertalCollabProjectVersion}</div>
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var s,c,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // @ts-expect-error: TODO: fix type
  render: args => <Attribution {...args} />
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <GenericDigitalTwinReferenceTextComponent />
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var x,M,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter title="TopicMaps Wuppertal" version={"1.23.0"} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const z=["version","attribution","genericDigitalTwinReferenceTextComponent","MenuFußzeile"];export{n as MenuFußzeile,z as __namedExportsOrder,t as attribution,E as default,o as genericDigitalTwinReferenceTextComponent,r as version};

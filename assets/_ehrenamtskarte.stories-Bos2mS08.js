import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{a as l}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as m}from"./TopicMapContextProvider-CE5Y0gYG.js";import{L as o}from"./index-BnP8LAH_.js";import"./index-DQ2WTIsS.js";import"./v4-CQkTLCs1.js";import"./_baseClone-l33DXZiU.js";import"./_getPrototype-DVol2gLu.js";import"./index-BjW3CJxX.js";import"./index-hiYxhEkP.js";const h=({title:n="Filter, Merkliste und Kompaktanleitung"})=>n,p=({setAppMenuActiveMenuSection:n})=>e.jsxs("span",{children:["Wählen Sie Ihre Such- und Ausschlussbedingungen in den"," ",e.jsx(o,{className:"useAClassNameToRenderProperLink",to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("filter"),children:"Filtern"})," ","aus, um die angezeigten Angebote an Ihre Interessen anzupassen (alternativ über die Einstellungen unter den darunter folgenden Leitfragen). Über"," ",e.jsx(o,{className:"useAClassNameToRenderProperLink",to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("merkliste"),children:"meine Merkliste"})," ","erreichen Sie die Liste der Angebote, die Sie festgehalten haben. Wählen Sie"," ",e.jsx(o,{className:"useAClassNameToRenderProperLink",to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("help"),children:"Kompaktanleitung"})," ","für detailliertere Bedienungsinformationen."]});p.__docgenInfo={description:"",methods:[],displayName:"MenuIntroduction"};const v={title:"Ehrenamtskarte"},r={render:()=>e.jsx(h,{})},t={render:()=>e.jsx(m,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(p,{setAppMenuActiveMenuSection:l("setAppMenuActiveMenuSection")})})})};var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const C=["TitleMenu","IntroductionMenu"];export{t as IntroductionMenu,r as TitleMenu,C as __namedExportsOrder,v as default};

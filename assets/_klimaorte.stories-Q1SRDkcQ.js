import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as R}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as K}from"./TopicMapContextProvider-BxaVHvAq.js";import{L as p,s as b}from"./index-BTM6MDJA.js";import{A as N}from"./Attribution-CQL1DozA.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./_baseClone-WMB_q0Oe.js";import"./_getPrototype-Dwr3C2Zh.js";import"./index-DNUR7M9R.js";import"./index-DvoZgHAm.js";const z="Klimaort | Stadtteil | Adresse",B=({appMode:n="ORTE"})=>n==="ORTE"?"Filter | Einstellungen | Anleitung":"Einstellungen | Anleitung",F=({title:n="Keine Klimarouten gefunden"})=>n,L=({appMode:n="ORTE"})=>n==="ORTE"?"Meine Klimaorte, Einstellungen und Kompaktanleitung":"Einstellungen und Kompaktanleitung",O=({setAppMenuActiveMenuSection:n,appMode:u})=>e.jsx("span",{children:e.jsxs("span",{children:[u==="ORTE"&&e.jsxs("span",{children:["Benutzen Sie die Auswahlmöglichkeiten unter"," ",e.jsx(p,{className:"useAClassNameToRenderProperLink",to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("filter"),children:"Meine Klimaorte"}),", um die in der Karte angezeigten vorbildlichen Klimaorte auf die für Sie relevanten Themen zu beschränken."]}),"Über"," ",e.jsx(p,{className:"useAClassNameToRenderProperLink",to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("settings"),children:"Einstellungen"})," ","können Sie die Darstellung der Hintergrundkarte und der klimarelevanten Themen an Ihre Interesse anpassen. Wählen Sie die"," ",e.jsx(p,{className:"useAClassNameToRenderProperLink",to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>n("help"),children:"Kompaktanleitung"})," ","für detailliertere Bedienungsinformationen."]})});O.__docgenInfo={description:"",methods:[],displayName:"MenuIntroduction",props:{setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""},appMode:{required:!0,tsType:{name:"string"},description:""}}};const C=({title:n=document.title,version:u,setAppMenuActiveMenuSection:P})=>e.jsxs("div",{style:{fontSize:"11px"},children:[e.jsx("b",{children:"Hintergrundkarten"}),": Stadtkarte 2.0 © RVR | True Orthophoto 2022 © Stadt Wuppertal"," ",e.jsx("a",{className:"pleaseRenderAsLink",onClick:()=>{P("help"),b.scrollTo("Datengrundlage",{containerId:"myMenu"})},children:"(Details und Nutzungsbedingungen)"}),e.jsx("br",{}),e.jsx(N,{applicationName:n,applicationVersion:u})]});C.__docgenInfo={description:"",methods:[],displayName:"MenuFooter",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"document.title",computed:!0}},version:{required:!0,tsType:{name:"string"},description:""},setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const X={title:"Klimaorte"},r={render:()=>e.jsx("div",{children:z})},t={render:()=>e.jsx(F,{})},o={render:()=>e.jsx(B,{appMode:"ORTE"})},i={render:()=>e.jsx(L,{appMode:"ORTE"})},s={render:()=>e.jsx(K,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(O,{setAppMenuActiveMenuSection:R("setAppMenuActiveMenuSection"),appMode:"ORTE"})})})},a={render:()=>e.jsx(K,{appKey:"storybook-appkey",children:e.jsx(C,{title:"Klimaortkarte Wuppertal",version:"xyz",setAppMenuActiveMenuSection:R("setAppMenuActiveMenuSection")})})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,M;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(M=(g=t.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var T,x,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip appMode="ORTE" />;
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,v,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle appMode="ORTE" />;
  }
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var A,S,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} appMode="ORTE" />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,I,E;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter title="Klimaortkarte Wuppertal" version={"xyz"} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Y=["TextInSearchPlaceholder","TextInInfoBoxTitle","menuTooltipString","TitleMenu","IntroductionMenu","MenuFußzeile"];export{s as IntroductionMenu,a as MenuFußzeile,t as TextInInfoBoxTitle,r as TextInSearchPlaceholder,i as TitleMenu,Y as __namedExportsOrder,X as default,o as menuTooltipString};

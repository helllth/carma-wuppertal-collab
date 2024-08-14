import{j as e}from"./jsx-runtime-DEdD30eg.js";import{A as F,G as E,a as G,T as W,M as Q,b as Z,S as H,L as U,I as _,c as n,d as q}from"./TopicMapContextProvider-DXV9ciee.js";import{a as O}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./index-RYns6xqu.js";import"./_baseClone-BMRAXyjt.js";import"./_getPrototype-Dwr3C2Zh.js";import"./index-DvoZgHAm.js";import"./index-DNUR7M9R.js";import"./v4-CQkTLCs1.js";const J="0.20.0",X=()=>J,Y=X(),ce={title:"Commons",args:{applicationName:"GreatApp",applicationVersion:"abcd"},argTypes:{applicationName:{control:"text",description:"Name of the application"},applicationVersion:{control:"text",description:"Version of the application"}}},r={render:()=>e.jsx("div",{children:Y})},t={render:V=>e.jsx(F,{...V})},a={render:()=>e.jsx(E,{})},i={render:()=>e.jsx(G,{})},s={render:()=>e.jsx(W,{appKey:"storybook-appkey",children:e.jsx(Q,{title:"TopicMaps Wuppertal",version:"1.23.0",setAppMenuActiveMenuSection:O("setAppMenuActiveMenuSection")})})},o={render:()=>e.jsx(Z,{})},c={render:()=>e.jsx(H,{})},d={render:()=>e.jsx(U,{})},l={render:()=>e.jsx(_,{pretext:e.jsxs("p",{children:["Um direkt zu einer P+R- oder B+R-Anlage zu gelangen, geben Sie den Anfang des Namens der Anlage im Eingabefeld links unten ein (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Sie können auch andere Suchbegriffe eingeben, nämlich Stadtteil (Stadtbezirk oder Quartier), Adresse, Straßenname oder POI. Durch das in der Auswahlliste vorangestellte Symbol erkennen Sie, ob es sich bei einem Treffer um eine ",e.jsx(n,{name:"car"})," P+R-Anlage, eine ",e.jsx(n,{name:"bicycle"})," ","B+R-Anlage, einen ",e.jsx(n,{name:"circle"})," Stadtbezirk, ein"," ",e.jsx(n,{name:"pie-chart"})," Quartier, eine ",e.jsx(n,{name:"home"})," Adresse, eine ",e.jsx(n,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen"," ",e.jsx(n,{name:"tag"})," POI, die ",e.jsx(n,{name:"tags"})," alternative Bezeichnung eines POI, eine ",e.jsx(n,{name:"child"})," ","Kindertageseinrichtung oder eine ",e.jsx(n,{name:"graduation-cap"}),' Schule handelt. Tipp: Durch Eingabe von "P+" oder "B+" erzeugen Sie eine vollständige Auswahlliste aller P+R- bzw. B+R-Anlagen.']}),posttext:e.jsxs("p",{children:["Wenn Sie die Karte wie oben beschrieben auf eine P+R- bzw. B+R-Anlage positionieren, erhält diese sofort den Fokus, sodass die zugehörigen Informationen direkt in der Info-Box angezeigt werden. Voraussetzung dafür ist, dass die aktuellen"," ",e.jsx(q,{to:"MeinThemenstadtplan",containerId:"myMenu",onClick:()=>O("filter"),className:"renderAsLink",children:"Filtereinstellungen"})," ","die Darstellung der Anlage in der Karte erlauben."]})})};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div>{wuppertalCollabProjectVersion}</div>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  // @ts-expect-error: TODO: fix type
  render: args => <Attribution {...args} />
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <GenericDigitalTwinReferenceTextComponent />
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,A,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <GenericDigitalTwinReferenceSection />
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var k,w,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter title="TopicMaps Wuppertal" version={"1.23.0"} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,R,P;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <MeinStandortText />
}`,...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var M,v,B;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <StadtplanTagNachtText />
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var D,y,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <LuftbildkarteText />
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var K,L,N;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <InKartePositionierenText pretext={<p>
          Um direkt zu einer P+R- oder B+R-Anlage zu gelangen, geben Sie den
          Anfang des Namens der Anlage im Eingabefeld links unten ein
          (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden
          Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben,
          wird der Inhalt der Auswahlliste angepasst.) Sie können auch andere
          Suchbegriffe eingeben, nämlich Stadtteil (Stadtbezirk oder Quartier),
          Adresse, Straßenname oder POI. Durch das in der Auswahlliste
          vorangestellte Symbol erkennen Sie, ob es sich bei einem Treffer um
          eine <Icon name="car" /> P+R-Anlage, eine <Icon name="bicycle" />{" "}
          B+R-Anlage, einen <Icon name="circle" /> Stadtbezirk, ein{" "}
          <Icon name="pie-chart" /> Quartier, eine <Icon name="home" /> Adresse,
          eine <Icon name="road" /> Straße ohne zugeordnete Hausnummern, einen{" "}
          <Icon name="tag" /> POI, die <Icon name="tags" /> alternative
          Bezeichnung eines POI, eine <Icon name="child" />{" "}
          Kindertageseinrichtung oder eine <Icon name="graduation-cap" /> Schule
          handelt. Tipp: Durch Eingabe von "P+" oder "B+" erzeugen Sie eine
          vollständige Auswahlliste aller P+R- bzw. B+R-Anlagen.
        </p>} posttext={<p>
          Wenn Sie die Karte wie oben beschrieben auf eine P+R- bzw. B+R-Anlage
          positionieren, erhält diese sofort den Fokus, sodass die zugehörigen
          Informationen direkt in der Info-Box angezeigt werden. Voraussetzung
          dafür ist, dass die aktuellen{" "}
          <Link to="MeinThemenstadtplan" containerId="myMenu" onClick={() => action("filter")} className="renderAsLink">
            Filtereinstellungen
          </Link>{" "}
          die Darstellung der Anlage in der Karte erlauben.
        </p>} />
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const de=["version","attribution","genericDigitalTwinReferenceTextComponent","genericDigitalTwinReferenceSection","MenuFußzeile","StandortText","StadtplanTagNacht","LuftbildkarteSimpleText","TextInKartePositionieren"];export{d as LuftbildkarteSimpleText,s as MenuFußzeile,c as StadtplanTagNacht,o as StandortText,l as TextInKartePositionieren,de as __namedExportsOrder,t as attribution,ce as default,i as genericDigitalTwinReferenceSection,a as genericDigitalTwinReferenceTextComponent,r as version};
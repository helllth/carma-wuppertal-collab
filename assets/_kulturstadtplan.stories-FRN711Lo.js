import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-CM0pFb8Z.js";import{I as n,G,T as R}from"./TopicMapContextProvider-CP0Zqk_V.js";import{L as g,s as H,C as U}from"./ConfigurableDocBlocks-Di_Z0dSE.js";import{A as Z}from"./Attribution-CQL1DozA.js";import{F as q,f as Q}from"./index-CHuQbwgX.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./index-DNUR7M9R.js";import"./_baseClone-BMRAXyjt.js";import"./_getPrototype-Dwr3C2Zh.js";import"./index-DvoZgHAm.js";import"./LicenseStadtplanTagNacht-Xztwg1qv.js";import"./GenericHelpTextForMyLocation-Z8hHIcj0.js";const X="Stadtteil | Adresse | POI",Y=()=>"Mein Kulturstadtplan | Einstellungen | Kompaktanleitung",J=()=>"Keine POI gefunden!",W=({setAppMenuVisible:t,setAppMenuActiveMenuSection:h})=>e.jsxs("p",{children:["Für mehr POI Ansicht mit ",e.jsx(n,{name:"minus-square"})," verkleinern. Um nach Themenfeldern zu filtern, das",e.jsxs("a",{onClick:()=>{t(!0),h("filter")},className:"renderAsLink",children:[" ","Menü ",e.jsx(n,{name:"bars",style:{color:"black"}})," ","öffnen."]})]});W.__docgenInfo={description:"",methods:[],displayName:"InfoBoxTextContent"};const $=()=>"Mein Kulturstadtplan, Einstellungen und Kompaktanleitung",V=({setAppMenuActiveMenuSection:t})=>e.jsxs("span",{children:["Der ",e.jsx("strong",{children:"Kulturstadtplan Wuppertal"})," präsentiert Ihnen alle Points Of Interest (POI) aus unserem Open-Data-Datensatz"," ",e.jsx("a",{href:"https://offenedaten-wuppertal.de/dataset/interessante-orte-wuppertal-poi",target:"_opendata",children:"Interessante Orte Wuppertal (POI)"}),", die dort als kultureller Veranstaltungsort eingeordnet sind. Unter"," ",e.jsx(g,{to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("filter"),className:"renderAsLink",children:"Mein Kulturstadtplan"})," ","können Sie die angezeigten POI auf die Kategorien beschränken, die Sie interessieren oder nach den jeweils angebotenen Veranstaltungsarten filtern. Über"," ",e.jsx(g,{to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("settings"),className:"renderAsLink",children:"Einstellungen"})," ","können Sie die Karten- und POI-Darstellung an Ihre Vorlieben anpassen. Wählen Sie"," ",e.jsx(g,{to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>t("help"),className:"renderAsLink",children:"Kompaktanleitung"})," ","für detailliertere Bedienungsinformationen."]});V.__docgenInfo={description:"",methods:[],displayName:"MenuIntroduction",props:{setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const L=({title:t=document.title,version:h,setAppMenuActiveMenuSection:_})=>e.jsxs("div",{style:{fontSize:"11px"},children:[e.jsx("b",{children:"Hintergrundkarten"}),": Stadtkarte 2.0 © RVR | True Orthophoto 2022 © Stadt Wuppertal"," ",e.jsx("a",{className:"pleaseRenderAsLink",onClick:()=>{_("help"),H.scrollTo("Datengrundlage",{containerId:"myMenu"})},children:"(Details und Nutzungsbedingungen)"}),e.jsx("br",{}),e.jsx(Z,{applicationName:t,applicationVersion:h})]});L.__docgenInfo={description:"",methods:[],displayName:"MenuFooter",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"document.title",computed:!0}},version:{required:!0,tsType:{name:"string"},description:""},setAppMenuActiveMenuSection:{required:!0,tsType:{name:"signature",type:"function",raw:"(arg: string) => void",signature:{arguments:[{type:{name:"string"},name:"arg"}],return:{name:"void"}}},description:""}}};const ee=""+new URL("MeinStandpunktMarkerDoppel-63B_eDGU.jpg",import.meta.url).href,ne=""+new URL("MeinStandpunktMarkerMitKompass-CjzOs80a.jpg",import.meta.url).href,te=""+new URL("bergische_musikschule-D5ux1_Cv.png",import.meta.url).href,re=""+new URL("kontakthof-DQ-8siqn.png",import.meta.url).href,ie=""+new URL("veranstaltungsorte_zusammen-BCnsHzuo.png",import.meta.url).href,se=""+new URL("AdressMarker-DMhvmSxh.jpg",import.meta.url).href,N=()=>e.jsx(G,{sectionKey:"help",sectionBsStyle:"default",sectionTitle:"Kompaktanleitung",sectionContent:e.jsx(U,{configs:[{type:"FAQS",configs:[{title:"Datengrundlage",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Der ",e.jsx("strong",{children:"Kulturstadtplan Wuppertal"})," bietet ihnen die folgenden Hintergrundkarten an, die auf verschiedenen Geodatendiensten und Geodaten basieren:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Stadtplan (Tag | Nacht)"}),": Kartendienst (WMS) des Regionalverbandes Ruhr (RVR). Datengrundlage: ",e.jsx("strong",{children:"Stadtkarte 2.0"}),". Wöchentlich in einem automatischen Prozess aktualisierte Zusammenführung des Straßennetzes der OpenStreetMap mit Amtlichen Geobasisdaten des Landes NRW aus den Fachverfahren ALKIS (Gebäude, Flächennutzungen) und ATKIS (Gewässer). © RVR und Kooperationspartner (",e.jsx("a",{target:"_legal",href:"https://www.govdata.de/dl-de/by-2-0",children:"Datenlizenz Deutschland - Namensnennung - Version 2.0"}),"). Lizenzen der Ausgangsprodukte:"," ",e.jsx("a",{target:"_legal",href:"https://www.govdata.de/dl-de/zero-2-0",children:"Datenlizenz Deutschland - Zero - Version 2.0"})," ","(Amtliche Geobasisdaten) und"," ",e.jsx("a",{target:"_legal",href:"https://www.opendatacommons.org/licenses/odbl/1.0/",children:"ODbL"})," ","(OpenStreetMap contributors)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Luftbildkarte"}),": (1) Kartendienst (WMS) der Stadt Wuppertal. Datengrundlage:"," ",e.jsx("strong",{children:"True Orthophoto aus Bildflug vom 16.03.2022"}),", hergestellt durch Aerowest GmbH/Dortmund, Bodenauflösung 10 cm. (True Orthophoto: Aus Luftbildern mit hoher Längs- und Querüberdeckung in einem automatisierten Bildverarbeitungsprozess berechnetes Bild in Parallelprojektion, also ohne Gebäudeverkippung und sichttote Bereiche.) © Stadt Wuppertal (",e.jsx("a",{target:"_legal",href:"https://www.wuppertal.de/geoportal/Nutzungsbedingungen/NB-GDIKOM-C_Geodaten.pdf",children:"NB-GDIKOM C"}),"). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR). Datengrundlagen:"," ",e.jsx("strong",{children:"Stadtkarte 2.0"})," und"," ",e.jsx("strong",{children:"Kartenschrift aus der Stadtkarte 2.0"}),". (Details s. Hintergrundkarte Stadtplan)."]})]}),e.jsxs("p",{children:["Zusätzlich nutzt der Kulturstadtplan für die Themendarstellung den Datensatz"," ",e.jsx("a",{target:"_legal",href:"https://offenedaten-wuppertal.de/dataset/veranstaltungsorte-wuppertal",children:"Veranstaltungsorte Wuppertal"})," ","aus dem Open-Data-Angebot der Stadt Wuppertal."]})]})}},{title:"Kartendarstellung der POI",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[" ",e.jsxs("p",{children:['Die POI der kulturellen Einrichtungen werden in der Karte durch Punktsymbole in Form von Piktogrammen mit farbigem Hintergrund dargestellt. Für einige klar definier- und unterscheidbare Kategorien (Clubs, Filmtheater, Museen und Galerien, Theater) verwenden wir feste Kombinationen von Piktogramm und Hintergrundfarbe. In der Kategorie "Sonstige Veranstaltungsorte" werden dagegen verschiedene Piktogramme mit der gleichen Hintergrundfarbe (Ocker) verwendet. Hierunter fallen zum einen Einrichtungen mit einem individuellen Profil, die unterschiedlichen Veranstaltungsarten Raum geben'," ",e.jsx("img",{alt:"Cluster",height:"20",src:re}),". Zum anderen umfasst diese Kategorie alle POI, die nur in zweiter Linie Veranstaltungsorte sind. So ist z. B. die Bergische Musikschule"," ",e.jsx("img",{alt:"Cluster",height:"20",src:te})," ","in erster Linie als Bildungseinrichtung eingestuft, in der aber auch Konzerte, Lesungen und Theateraufführungen stattfinden."]}),e.jsxs("p",{children:["Räumlich nah beieinander liegende Veranstaltungsorte werden standardmäßig maßstabsabhängig zu größeren Punkten zusammengefasst, mit der Anzahl der repräsentierten POI im Zentrum"," ",e.jsx("img",{alt:"Cluster",height:"30",src:ie}),". Vergrößern Sie ein paar Mal durch direktes Anklicken eines solchen Punktes oder mit ",e.jsx(n,{name:"plus"})," ","die Darstellung, so werden die zusammengefassten POI Schritt für Schritt in die kleineren Symbole für die konkreten Einzel-POI zerlegt. Ab einer bestimmten Maßstabsstufe (Zoomstufe 12) führt ein weiterer Klick dazu, dass eine Explosionsgraphik der zusammengefassten POI angezeigt wird."]})]})}},{title:"POI auswählen und abfragen",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Bewegen Sie den Mauszeiger im Kartenfenster auf einen konkreten Einzel-POI, um sich seine Bezeichnung anzeigen zu lassen. Ein Klick auf das zugehörige POI-Symbol setzt den Fokus auf diesen POI. Er wird dann blau hinterlegt und die zugehörigen Informationen (Bezeichnung, Info-Text und ggf. Adresse) werden in der Info-Box (unten rechts) angezeigt. (Auf einem Tablet-PC wird der Fokus durch das erste Antippen des Angebots gesetzt, das zweite Antippen blendet die Bezeichnung ein.) Außerdem werden Ihnen in der Info-Box weiterführende (Kommunikations-) Links zum POI angezeigt: ",e.jsx(n,{name:"external-link-square"})," ","Internet, ",e.jsx(n,{name:"envelope-square"})," E-Mail und"," ",e.jsx(n,{name:"phone"})," Telefon. Bei POI, zu denen im Terminkalender von"," ",e.jsx("a",{href:"https://wuppertal-live.de",children:"www.wuppertal-live.de"})," ","Veranstaltungen geführt werden, finden sie zusätzlich noch eine ",e.jsx(n,{name:"calendar"})," Verknüpfung zu wuppertal-live.de, wo sie für viele Veranstaltungen auch Online-Tickets erwerben können."]}),e.jsxs("p",{children:["Wenn Sie noch nicht aktiv einen bestimmten POI im aktuellen Kartenausschnitt selektiert haben, wird der Fokus automatisch auf den nördlichsten POI gesetzt. Mit den Funktionen ",e.jsx("a",{children:"<<"})," vorheriger Treffer und ",e.jsx("a",{children:">>"})," nächster Treffer können Sie in nördlicher bzw. südlicher Richtung alle aktuell im Kartenfenster angezeigten POI durchmustern."]}),e.jsxs("p",{children:["Mit der Schaltfläche"," ",e.jsx(n,{name:"chevron-circle-down"})," im dunkelgrau abgesetzten rechten Rand der Info-Box lässt sich diese so verkleinern, dass nur noch die Kategorisierung und die Bezeichnung des POI sowie die Link-Symbole angezeigt werden - nützlich für Endgeräte mit kleinem Display. Mit der Schaltfläche"," ",e.jsx(n,{name:"chevron-circle-up"})," an derselben Stelle können Sie die Info-Box dann wieder vollständig einblenden."]})]})}},{title:"In Karte positionieren",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:["Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben Sie den Anfang eines Stadtteils (Stadtbezirk oder Quartier), einer Adresse, eines Straßennamens oder eines POI im Eingabefeld links unten ein (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Durch das vorangestellte Symbol erkennen Sie, ob es sich dabei um einen ",e.jsx(n,{name:"circle"})," Stadtbezirk, ein"," ",e.jsx(n,{name:"pie-chart"})," Quartier, eine"," ",e.jsx(n,{name:"home"})," Adresse, eine"," ",e.jsx(n,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen ",e.jsx(n,{name:"tag"})," POI, die"," ",e.jsx(n,{name:"tags"})," alternative Bezeichnung eines POI, eine ",e.jsx(n,{name:"child"})," Kindertageseinrichtung oder eine ",e.jsx(n,{name:"graduation-cap"})," Schule handelt."]}),e.jsxs("p",{children:["Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie (Adresse, Straße, POI) wird außerdem ein großer Maßstab (Zoomstufe 14) eingestellt und ein Marker"," ",e.jsx("img",{alt:"Cluster",src:se})," auf der Zielposition platziert. Bei Suchbegriffen mit Flächengeometrie (Stadtbezirk, Quartier) wird der Maßstab so eingestellt, dass die Fläche vollständig dargestellt werden kann. Zusätzlich wird der Bereich außerhalb dieser Fläche abgedunkelt (Spotlight-Effekt)."]}),e.jsxs("p",{children:["Durch Anklicken des Werkzeugs ",e.jsx(n,{name:"times"})," ","links neben dem Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker bzw. Abdunklung, Löschen des Textes im Eingabefeld)."]})]})}},{title:"Mein Standort",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:['Das Werkzeug "Mein Standort"'," ",e.jsx(q,{icon:Q})," ","funktioniert so wie hier beschrieben nur auf mobilen Endgeräten wie Smartphones und Tablet-PC's, die i. d. R. mit einem GNSS-Empfänger als Positionssensor ausgestattet sind (GNSS steht für Global Navigation Satellite Systems, z.B."," ",e.jsx("a",{target:"_info",href:"https://dvw.de/sites/default/files/landesverein-bayern/VeroeffentlichungenMitteilungen1996_4/DVW_1996_4_Schlie%C3%9Fer_GPS_Systemgrundlagen.pdf",children:"GPS"}),'). Mit dem ersten Antippen dieses Werkzeugs aktivieren Sie den "Follow me"-Modus, erkennbar an der orangefarbigen Darstellung des Werkzeug-Symbols. Ggf. werden Sie vom Browser bzw. dem Betriebssystem Ihres Endgerätes zur Freigabe der Lokalisierung aufgefordert. Die Karte wird auf Ihren aktuellen Standort zentriert, der mit einem blauen Kreissymbol'," ",e.jsx("img",{alt:"MeinStandpunktMarker",src:ne})," ","markiert wird. Das kleine blaue Dreieck am Rand dieses Standortsymbols zeigt Ihre aktuelle Blickrichtung an (genauer: die Richtung, in die Ihr Endgerät zeigt). Das Standortsymbol ist umgeben von einem zweiten Kreis mit transparenter, blauer Füllung, dessen Radius die Unsicherheit der Positionsbestimmung angibt"," ",e.jsx("img",{alt:"MeinStandpunktMarkerDoppel",src:ee}),'. Durch Antippen dieses Kreises können Sie einen Texthinweis mit einer konkreten Angabe der aktuellen Positionsgenauigkeit einblenden. Dieser Hinweis kann durch das Antippen einer beliebigen Stelle außerhalb seines Textfeldes geschlossen werden. Wenn Sie sich mit Ihrem Endgerät bewegen (z. B. bei einer Wanderung), wird Ihre aktuelle Position im "Follow me"-Modus in schneller Folge neu bestimmt und stets in der Mitte der Karte angezeigt. Die Karte wird dazu automatisiert nachgeführt. Ein weiteres Antippen von "Mein Standort" schaltet die Anzeige Ihrer Position wieder ab (schwarzes Werkzeug-Symbol).'," "]}),e.jsxs("p",{children:['Wenn Sie die Karte im aktivierten "Follow me"-Modus manuell verschieben, wird der "Follow me"-Modus unterbrochen, erkennbar an einer blauen Darstellung des Werkzeug-Symbols. Ihr aktueller Standort wird weiterhin angezeigt und in schneller Folge aktualisiert. Der Kartenausschnitt wird jetzt aber nicht mehr automatisch an den aktuellen Standort angepasst. Bei fortgesetzter Bewegung in eine Richtung wird das Standortsymbol daher vom Zentrum zum Rand des Kartenfensters wandern und dann verschwinden - Ihr Standort liegt jetzt nicht mehr im aktuell eingestellten Kartenausschnitt! In diesem Fall führt ein erneutes Antippen von "Mein Standort" dazu, dass wieder in den "Follow me"-Modus zurückgewechselt wird. Wenn Ihr aktueller Standort dagegen noch in der Karte sichtbar ist, wird durch diese Aktion die Anzeige der Position abgeschaltet (schwarzes Werkzeug-Symbol). Sie können die Unterbrechung des "Follow me"-Modus bei einer Wanderung o. ä. nutzen, wenn Sie sich die vor Ihnen liegende Strecke in der Karte anschauen wollen. Verschieben Sie dazu den Kartenausschnitt manuell auf den Abschnitt Ihres Interesses. Ihr aktueller Standort wird dann zumeist nicht mehr dargestellt werden können. Der "Follow me"-Modus wird unterbrochen (blaues Werkzeug-Symbol). Wenn Sie sich ausreichend über den weiteren Streckenverlauf informiert haben, reaktivieren Sie durch erneutes Antippen von "Mein Standort" den "Follow me"-Modus und setzen die Karte damit wieder auf Ihren aktuellen Standort zurück.'," "]}),e.jsx("p",{children:"Noch ein Hinweis zur Genauigkeit: Die Richtigkeit der Positionsanzeige ist nicht garantiert. Ihre Genauigkeit hängt von verschiedenen Faktoren ab, u. a. von der Qualität des GNSS-Empfängers in Ihrem Endgerät, der Umgebungssituation (z. B. hohe Gebäude oder spiegelnde Oberflächen in der Nachbarschaft) sowie der Methode, mit der Ihr Endgerät und der von Ihnen verwendete Browser die Position bestimmen."})]})}},{title:"Mein Kulturstadtplan",bsStyle:"primary",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[" ",e.jsxs("p",{children:['Unter "',e.jsx("strong",{children:"Mein Kulturstadtplan"}),'" finden sie im Anwendungsmenü zwei alternative Möglichkeiten vor, die Menge der angezeigten POI gemäß Ihren Vorlieben einzuschränken. Auf zwei angedeuteten Karteikarten wird zum einen das Filtern nach Kategorien von Einrichtungen angeboten, zum anderen das Filtern nach Kategorien von Veranstaltungen, die an den zugehörigen POI typischerweise angeboten werden. Der Titel der gerade nicht sichtbaren Karteikarte wird als ',e.jsx("a",{children:"Hyperlink"})," dargestellt Zum Wechsel zwischen den beiden Karteikarten klicken Sie auf den jeweils verfügbaren Link."]}),e.jsx("p",{children:"Auf den beiden Karteikarten wird Ihnen eine Liste von Einrichtungs- bzw. Veranstaltungskategorien angeboten. Die Auswahl erfolgt durch Anklicken des (leeren) Kontrollkästchens vor dem jeweiligen Listenelement, die Abwahl durch erneutes Anklicken dieses Kästchens. Die beiden Filterbereiche werden nicht logisch miteinander verknüpft. Für die Filterung wird immer nur die Auswahl auf der im Anwendungsmenü sichtbaren Karteikarte ausgewertet."}),e.jsx("p",{children:"Als Vorschau für die Wirkung ihrer Filtereinstellungen wird Ihnen auf beiden Karteikarten ein Donut-Diagramm angezeigt, das die Anzahl der herausgefilterten POI und ihre Verteilung auf die Einrichtungskategorien anzeigt. Bewegen Sie dazu den Mauszeiger auf eines der farbigen Segmente des Diagramms. (Bei einem Gerät mit Touchscreen tippen Sie auf eines der farbigen Segmente.)"})]})}},{title:"Einstellungen",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:e.jsxs("div",{children:[e.jsxs("p",{children:['Unter "',e.jsx("strong",{children:"Einstellungen"}),'" können Sie im Anwendungsmenü ',e.jsx(n,{name:"bars"})," ",'festlegen, wie die POI und die Hintergrundkarte angezeigt werden sollen. Zu den POI können Sie auswählen, ob Ihre unter "',e.jsx("strong",{children:"Mein Kulturstadtplan"}),'" festgelegte Filterung in einer Titelzeile ausgeprägt wird oder nicht. Weiter können Sie festlegen, ob räumlich nah beieinander liegende POI maßstabsabhängig zu einem Punktsymbol zusammengefasst werden oder nicht. Unter "',e.jsx("em",{children:e.jsx("strong",{children:"Symbolgröße"})}),'" können Sie in Abhängigkeit von Ihrer Bildschirmauflösung und Ihrem Sehvermögen auswählen, ob die POI mit kleinen (25 Pixel), mittleren (35 Pixel) oder großen (45 Pixel) Symbolen angezeigt werden.']}),e.jsxs("p",{children:['Unter "',e.jsx("em",{children:e.jsx("strong",{children:"Hintergrundkarte"})}),'" können Sie auswählen, ob Sie die standardmäßig aktivierte farbige Hintergrundkarte verwenden möchten ("',e.jsx("em",{children:"Stadtplan (Tag)"}),'") oder lieber eine invertierte Graustufenkarte ("',e.jsx("em",{children:"Stadtplan (Nacht)"}),'"), zu der uns die von vielen PKW-Navis bei Dunkelheit eingesetzte Darstellungsweise inspiriert hat.'," ",e.jsx("strong",{children:"Hinweis:"})," Der Stadtplan (Nacht) wird Ihnen nur angeboten, wenn Ihr Browser CSS3-Filtereffekte unterstützt, also z. B. nicht beim Microsoft Internet Explorer. Die Nacht-Karte erzeugt einen deutlicheren Kontrast mit den farbigen POI-Symbolen, die unterschiedlichen Flächennutzungen in der Hintergrundkarte lassen sich aber nicht mehr so gut unterscheiden wie in der Tag-Karte. Als dritte Möglichkeit steht eine Luftbildkarte zur Verfügung, die die Anschaulichkeit des Luftbildes mit der Eindeutigkeit des Stadtplans (Kartenschrift, durchscheinende Linien) verbindet."," "]}),e.jsx("p",{children:"Im Vorschaubild sehen Sie direkt die prinzipielle Wirkung ihrer Einstellungen."})]})}},{title:"Personalisierung",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:e.jsx("p",{children:"Ihre Filterauswahl und Einstellungen bleiben auch nach einem Neustart der Anwendung erhalten. (Es sei denn, Sie löschen den Browser-Verlauf einschließlich der gehosteten App-Daten.) Damit können Sie unseren Kulturstadtplan mit wenigen Klicks dauerhaft für sich optimieren."})}}]}]})},"help");N.__docgenInfo={description:"",methods:[],displayName:"KompaktanleitungSection"};const we={title:"Kulturstadtplan"},r={render:()=>e.jsx("div",{children:X})},i={render:()=>e.jsx(J,{})},s={render:()=>e.jsx(W,{setAppMenuVisible:c("setAppMenuVisible"),setAppMenuActiveMenuSection:c("setAppMenuActiveMenuSection")})},a={render:()=>e.jsx(Y,{})},d={render:()=>e.jsx($,{})},o={render:()=>e.jsx(R,{appKey:"storybook-appkey",children:e.jsx("div",{children:e.jsx(V,{setAppMenuActiveMenuSection:c("setAppMenuActiveMenuSection")})})})},l={render:()=>e.jsx(R,{appKey:"storybook-appkey",children:e.jsx(L,{title:"TopicMaps Wuppertal",version:"Version 1.23.0",setAppMenuActiveMenuSection:c("setAppMenuActiveMenuSection")})})},u={render:()=>{const t={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return e.jsx("div",{id:"myMenu",style:t,children:e.jsx(N,{})})}};var m,p,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  }
}`,...(k=(p=r.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var f,b,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextTitle />;
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var w,x,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <InfoBoxTextContent setAppMenuVisible={action("setAppMenuVisible")} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />;
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var M,v,j;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <MenuTooltip />;
  }
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,A,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <MenuTitle />;
  }
}`,...(y=(A=d.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var K,P,T;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
        </div>
      </TopicMapContextProvider>;
  }
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var B,D,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter title="TopicMaps Wuppertal" version={"Version 1.23.0"} setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var C,E,F;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh"
    };
    return <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>;
  }
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const xe=["TextInSearchPlaceholder","TextInInfoBoxTitle","TextInInfoBoxContent","menuTooltipString","TitleMenu","IntroductionMenu","MenuFußzeile","Kompaktanleitung"];export{o as IntroductionMenu,u as Kompaktanleitung,l as MenuFußzeile,s as TextInInfoBoxContent,i as TextInInfoBoxTitle,r as TextInSearchPlaceholder,d as TitleMenu,xe as __namedExportsOrder,we as default,a as menuTooltipString};

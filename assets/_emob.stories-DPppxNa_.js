import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{v as Nt}from"./v4-CQkTLCs1.js";import{G as Tt,I as y,a as Lt,D as Mt,T as Vn}from"./TopicMapContextProvider-zIzECei2.js";import{g as Kn,C as _t,L as me}from"./ConfigurableDocBlocks-DgOPAvLI.js";import{C as Ft,a as Rt}from"./LicenseStadtplanTagNacht-Jq_qgxbj.js";import{P as g}from"./index-BjW3CJxX.js";import{R as D,r as Dt}from"./index-DQ2WTIsS.js";import"./_baseClone-B9S_lTXv.js";import"./_getPrototype-DVol2gLu.js";import"./index-hiYxhEkP.js";const{addons:Bt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:sn}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:Wt}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var Gt="storybook/actions",Vt=`${Gt}/action-event`,Kt={depth:10,clearOnStoryChange:!0,limit:50},Yn=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:Yn(t,n)},Yt=e=>!!(typeof e=="object"&&e&&Yn(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),Ut=e=>{if(Yt(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),a=t==null?void 0:t.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(a.constructor.prototype)}),n}return e},Ht=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Nt():Date.now().toString(36)+Math.random().toString(36).substring(2);function Xt(e,n={}){let t={...Kt,...n},a=function(...r){var h,m;if(n.implicit){let v=(h="__STORYBOOK_PREVIEW__"in sn?sn.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(v){let k=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),E=new Wt({phase:v.phase,name:e,deprecated:k});if(k)console.warn(E);else throw E}}let i=Bt.getChannel(),s=Ht(),l=5,c=r.map(Ut),f=r.length>1?c:c[0],d={id:s,count:0,data:{name:e,args:f},options:{...t,maxDepth:l+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(Vt,d)};return a.isAction=!0,a.implicit=n.implicit,a}const on=()=>{};let He={},Un={},Hn=null,Xn={mark:on,measure:on};try{typeof window<"u"&&(He=window),typeof document<"u"&&(Un=document),typeof MutationObserver<"u"&&(Hn=MutationObserver),typeof performance<"u"&&(Xn=performance)}catch{}const{userAgent:ln=""}=He.navigator||{},W=He,p=Un,cn=Hn,ce=Xn;W.document;const F=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",$n=~ln.indexOf("MSIE")||~ln.indexOf("Trident/");var b="classic",qn="duotone",O="sharp",P="sharp-duotone",$t=[b,qn,O,P],qt={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},fn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Zt=["kit"],Qt=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Jt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ea={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},na={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},ta={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},aa={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ra={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ia={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Zn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},sa=["solid","regular","light","thin","duotone","brands"],Qn=[1,2,3,4,5,6,7,8,9,10],oa=Qn.concat([11,12,13,14,15,16,17,18,19,20]),ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},la=[...Object.keys(aa),...sa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ne.GROUP,ne.SWAP_OPACITY,ne.PRIMARY,ne.SECONDARY].concat(Qn.map(e=>"".concat(e,"x"))).concat(oa.map(e=>"w-".concat(e))),ca={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ua={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},un={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",Ie=16,Jn="fa",et="svg-inline--fa",H="data-fa-i2svg",ze="data-fa-pseudo-element",da="data-fa-pseudo-element-pending",Xe="data-prefix",$e="data-icon",dn="fontawesome-i2svg",ma="async",ga=["HTML","HEAD","STYLE","SCRIPT"],nt=(()=>{try{return!0}catch{return!1}})(),tt=[b,O,P];function oe(e){return new Proxy(e,{get(n,t){return t in n?n[t]:n[b]}})}const at={...Zn};at[b]={...Zn[b],...fn.kit,...fn["kit-duotone"]};const Y=oe(at),Ne={...ia};Ne[b]={...Ne[b],...un.kit,...un["kit-duotone"]};const ie=oe(Ne),Te={...ra};Te[b]={...Te[b],...ua.kit};const U=oe(Te),Le={...ta};Le[b]={...Le[b],...fa.kit};const ha=oe(Le),pa=Qt,rt="fa-layers-text",ba=Jt,ya={...qt};oe(ya);const va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=ne,Q=new Set;Object.keys(ie[b]).map(Q.add.bind(Q));Object.keys(ie[O]).map(Q.add.bind(Q));Object.keys(ie[P]).map(Q.add.bind(Q));const xa=[...Zt,...la],ae=W.FontAwesomeConfig||{};function ka(e){var n=p.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Sa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[t,a]=n;const r=Sa(ka(t));r!=null&&(ae[a]=r)});const it={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jn,replacementClass:et,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ae.familyPrefix&&(ae.cssPrefix=ae.familyPrefix);const J={...it,...ae};J.autoReplaceSvg||(J.observeMutations=!1);const u={};Object.keys(it).forEach(e=>{Object.defineProperty(u,e,{enumerable:!0,set:function(n){J[e]=n,re.forEach(t=>t(u))},get:function(){return J[e]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){J.cssPrefix=e,re.forEach(n=>n(u))},get:function(){return J.cssPrefix}});W.FontAwesomeConfig=u;const re=[];function wa(e){return re.push(e),()=>{re.splice(re.indexOf(e),1)}}const R=Ie,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Aa(e){if(!e||!F)return;const n=p.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;const t=p.head.childNodes;let a=null;for(let r=t.length-1;r>-1;r--){const i=t[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return p.head.insertBefore(n,a),e}const Ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function se(){let e=12,n="";for(;e-- >0;)n+=Ea[Math.random()*62|0];return n}function ee(e){const n=[];for(let t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function qe(e){return e.classList?ee(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function st(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oa(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,'="').concat(st(e[t]),'" '),"").trim()}function ve(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,": ").concat(e[t].trim(),";"),"")}function Ze(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function Pa(e){let{transform:n,containerWidth:t,iconWidth:a}=e;const r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Ca(e){let{transform:n,width:t=Ie,height:a=Ie,startCentered:r=!1}=e,i="";return r&&$n?i+="translate(".concat(n.x/R-t/2,"em, ").concat(n.y/R-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(n.x/R,"em), calc(-50% + ").concat(n.y/R,"em)) "):i+="translate(".concat(n.x/R,"em, ").concat(n.y/R,"em) "),i+="scale(".concat(n.size/R*(n.flipX?-1:1),", ").concat(n.size/R*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var ja=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ot(){const e=Jn,n=et,t=u.cssPrefix,a=u.replacementClass;let r=ja;if(t!==e||a!==n){const i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(l,".".concat(a))}return r}let mn=!1;function Ee(){u.autoAddCss&&!mn&&(Aa(ot()),mn=!0)}var Ia={mixout(){return{dom:{css:ot,insertCss:Ee}}},hooks(){return{beforeDOMElementCreation(){Ee()},beforeI2svg(){Ee()}}}};const _=W||{};_[M]||(_[M]={});_[M].styles||(_[M].styles={});_[M].hooks||(_[M].hooks={});_[M].shims||(_[M].shims=[]);var N=_[M];const lt=[],ct=function(){p.removeEventListener("DOMContentLoaded",ct),pe=1,lt.map(e=>e())};let pe=!1;F&&(pe=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),pe||p.addEventListener("DOMContentLoaded",ct));function za(e){F&&(pe?setTimeout(e,0):lt.push(e))}function le(e){const{tag:n,attributes:t={},children:a=[]}=e;return typeof e=="string"?st(e):"<".concat(n," ").concat(Oa(t),">").concat(a.map(le).join(""),"</").concat(n,">")}function gn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Oe=function(n,t,a,r){var i=Object.keys(n),s=i.length,l=t,c,f,d;for(a===void 0?(c=1,d=n[i[0]]):(c=0,d=a);c<s;c++)f=i[c],d=l(d,n[f],f,n);return d};function Na(e){const n=[];let t=0;const a=e.length;for(;t<a;){const r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<a){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}function Me(e){const n=Na(e);return n.length===1?n[0].toString(16):null}function Ta(e,n){const t=e.length;let a=e.charCodeAt(n),r;return a>=55296&&a<=56319&&t>n+1&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function hn(e){return Object.keys(e).reduce((n,t)=>{const a=e[t];return!!a.icon?n[a.iconName]=a.icon:n[t]=a,n},{})}function _e(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=t,r=hn(n);typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(e,hn(n)):N.styles[e]={...N.styles[e]||{},...r},e==="fas"&&_e("fa",n)}const{styles:K,shims:La}=N,Ma={[b]:Object.values(U[b]),[O]:Object.values(U[O]),[P]:Object.values(U[P])};let Qe=null,ft={},ut={},dt={},mt={},gt={};const _a={[b]:Object.keys(Y[b]),[O]:Object.keys(Y[O]),[P]:Object.keys(Y[P])};function Fa(e){return~xa.indexOf(e)}function Ra(e,n){const t=n.split("-"),a=t[0],r=t.slice(1).join("-");return a===e&&r!==""&&!Fa(r)?r:null}const ht=()=>{const e=a=>Oe(K,(r,i,s)=>(r[s]=Oe(i,a,{}),r),{});ft=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),ut=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),gt=e((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(l=>{a[l]=i}),a});const n="far"in K||u.autoFetchSvg,t=Oe(La,(a,r)=>{const i=r[0];let s=r[1];const l=r[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});dt=t.names,mt=t.unicodes,Qe=xe(u.styleDefault,{family:u.familyDefault})};wa(e=>{Qe=xe(e.styleDefault,{family:u.familyDefault})});ht();function Je(e,n){return(ft[e]||{})[n]}function Da(e,n){return(ut[e]||{})[n]}function B(e,n){return(gt[e]||{})[n]}function pt(e){return dt[e]||{prefix:null,iconName:null}}function Ba(e){const n=mt[e],t=Je("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function G(){return Qe}const en=()=>({prefix:null,iconName:null,rest:[]});function xe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=b}=n,a=Y[t][e],r=ie[t][e]||ie[t][a],i=e in N.styles?e:null;return r||i||null}const Wa={[b]:Object.keys(U[b]),[O]:Object.keys(U[O]),[P]:Object.keys(U[P])};function ke(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=n,a={[b]:"".concat(u.cssPrefix,"-").concat(b),[O]:"".concat(u.cssPrefix,"-").concat(O),[P]:"".concat(u.cssPrefix,"-").concat(P)};let r=null,i=b;const s=$t.filter(c=>c!==qn);s.forEach(c=>{(e.includes(a[c])||e.some(f=>Wa[c].includes(f)))&&(i=c)});const l=e.reduce((c,f)=>{const d=Ra(u.cssPrefix,f);if(K[f]?(f=Ma[i].includes(f)?ha[i][f]:f,r=f,c.prefix=f):_a[i].indexOf(f)>-1?(r=f,c.prefix=xe(f,{family:i})):d?c.iconName=d:f!==u.replacementClass&&!s.some(h=>f===a[h])&&c.rest.push(f),!t&&c.prefix&&c.iconName){const h=r==="fa"?pt(c.iconName):{},m=B(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!u.autoFetchSvg&&(c.prefix="fas")}return c},en());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===O&&(K.fass||u.autoFetchSvg)&&(l.prefix="fass",l.iconName=B(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===P&&(K.fasds||u.autoFetchSvg)&&(l.prefix="fasds",l.iconName=B(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=G()||"fas"),l}class Ga{constructor(){this.definitions={}}add(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},_e(i,r[i]);const s=U[b][i];s&&_e(s,r[i]),ht()})}reset(){this.definitions={}}_pullDefinitions(n,t){const a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:l}=a[r],c=l[2];n[i]||(n[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(n[i][f]=l)}),n[i][s]=l}),n}}let pn=[],$={};const Z={},Va=Object.keys(Z);function Ka(e,n){let{mixoutsTo:t}=n;return pn=e,$={},Object.keys(Z).forEach(a=>{Va.indexOf(a)===-1&&delete Z[a]}),pn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(t[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{t[i]||(t[i]={}),t[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{$[s]||($[s]=[]),$[s].push(i[s])})}a.provides&&a.provides(Z)}),t}function Fe(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];return($[e]||[]).forEach(s=>{n=s.apply(null,[n,...a])}),n}function X(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];($[e]||[]).forEach(i=>{i.apply(null,t)})}function V(){const e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[e]?Z[e].apply(null,n):void 0}function Re(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e;const t=e.prefix||G();if(n)return n=B(t,n)||n,gn(bt.definitions,t,n)||gn(N.styles,t,n)}const bt=new Ga,Ya=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,X("noAuto")},Ua={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(X("beforeI2svg",e),V("pseudoElements2svg",e),V("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=e;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,za(()=>{Xa({autoReplaceSvgRoot:n}),X("watch",e)})}},Ha={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=xe(e[0]);return{prefix:t,iconName:B(t,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(pa))){const n=ke(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||G(),iconName:B(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){const n=G();return{prefix:n,iconName:B(n,e)||e}}}},C={noAuto:Ya,config:u,dom:Ua,parse:Ha,library:bt,findIconDefinition:Re,toHtml:le},Xa=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=p}=e;(Object.keys(N.styles).length>0||u.autoFetchSvg)&&F&&u.autoReplaceSvg&&C.dom.i2svg({node:n})};function Se(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>le(t))}}),Object.defineProperty(e,"node",{get:function(){if(!F)return;const t=p.createElement("div");return t.innerHTML=e.html,t.children}}),e}function $a(e){let{children:n,main:t,mask:a,attributes:r,styles:i,transform:s}=e;if(Ze(s)&&t.found&&!a.found){const{width:l,height:c}=t,f={x:l/c/2,y:.5};r.style=ve({...i,"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:n}]}function qa(e){let{prefix:n,iconName:t,children:a,attributes:r,symbol:i}=e;const s=i===!0?"".concat(n,"-").concat(u.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function nn(e){const{icons:{main:n,mask:t},prefix:a,iconName:r,transform:i,symbol:s,title:l,maskId:c,titleId:f,extra:d,watchable:h=!1}=e,{width:m,height:v}=t.found?t:n,k=a==="fak",E=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(j=>d.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(d.classes).join(" ");let x={children:[],attributes:{...d.attributes,"data-prefix":a,"data-icon":r,class:E,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)}};const w=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};h&&(x.attributes[H]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||se())},children:[l]}),delete x.attributes.title);const S={...x,prefix:a,iconName:r,main:n,mask:t,maskId:c,transform:i,symbol:s,styles:{...w,...d.styles}},{children:A,attributes:L}=t.found&&n.found?V("generateAbstractMask",S)||{children:[],attributes:{}}:V("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=A,S.attributes=L,s?qa(S):$a(S)}function bn(e){const{content:n,width:t,height:a,transform:r,title:i,extra:s,watchable:l=!1}=e,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};l&&(c[H]="");const f={...s.styles};Ze(r)&&(f.transform=Ca({transform:r,startCentered:!0,width:t,height:a}),f["-webkit-transform"]=f.transform);const d=ve(f);d.length>0&&(c.style=d);const h=[];return h.push({tag:"span",attributes:c,children:[n]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Za(e){const{content:n,title:t,extra:a}=e,r={...a.attributes,...t?{title:t}:{},class:a.classes.join(" ")},i=ve(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[n]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}const{styles:Pe}=N;function De(e){const n=e[0],t=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:t,icon:r}}const Qa={found:!1,width:512,height:512};function Ja(e,n){!nt&&!u.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Be(e,n){let t=n;return n==="fa"&&u.styleDefault!==null&&(n=G()),new Promise((a,r)=>{if(t==="fa"){const i=pt(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Pe[n]&&Pe[n][e]){const i=Pe[n][e];return a(De(i))}Ja(e,n),a({...Qa,icon:u.showMissingIcons&&e?V("missingIconAbstract")||{}:{}})})}const yn=()=>{},We=u.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:yn,measure:yn},te='FA "6.6.0"',er=e=>(We.mark("".concat(te," ").concat(e," begins")),()=>yt(e)),yt=e=>{We.mark("".concat(te," ").concat(e," ends")),We.measure("".concat(te," ").concat(e),"".concat(te," ").concat(e," begins"),"".concat(te," ").concat(e," ends"))};var tn={begin:er,end:yt};const ge=()=>{};function vn(e){return typeof(e.getAttribute?e.getAttribute(H):null)=="string"}function nr(e){const n=e.getAttribute?e.getAttribute(Xe):null,t=e.getAttribute?e.getAttribute($e):null;return n&&t}function tr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(u.replacementClass)}function ar(){return u.autoReplaceSvg===!0?he.replace:he[u.autoReplaceSvg]||he.replace}function rr(e){return p.createElementNS("http://www.w3.org/2000/svg",e)}function ir(e){return p.createElement(e)}function vt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=e.tag==="svg"?rr:ir}=n;if(typeof e=="string")return p.createTextNode(e);const a=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(vt(i,{ceFn:t}))}),a}function sr(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const he={replace:function(e){const n=e[0];if(n.parentNode)if(e[1].forEach(t=>{n.parentNode.insertBefore(vt(t),n)}),n.getAttribute(H)===null&&u.keepOriginalSource){let t=p.createComment(sr(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(e){const n=e[0],t=e[1];if(~qe(n).indexOf(u.replacementClass))return he.replace(e);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const i=t[0].attributes.class.split(" ").reduce((s,l)=>(l===u.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}const r=t.map(i=>le(i)).join(`
`);n.setAttribute(H,""),n.innerHTML=r}};function xn(e){e()}function xt(e,n){const t=typeof n=="function"?n:ge;if(e.length===0)t();else{let a=xn;u.mutateApproach===ma&&(a=W.requestAnimationFrame||xn),a(()=>{const r=ar(),i=tn.begin("mutate");e.map(r),i(),t()})}}let an=!1;function kt(){an=!0}function Ge(){an=!1}let be=null;function kn(e){if(!cn||!u.observeMutations)return;const{treeCallback:n=ge,nodeCallback:t=ge,pseudoElementsCallback:a=ge,observeMutationsRoot:r=p}=e;be=new cn(i=>{if(an)return;const s=G();ee(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!vn(l.addedNodes[0])&&(u.searchPseudoElements&&a(l.target),n(l.target)),l.type==="attributes"&&l.target.parentNode&&u.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&vn(l.target)&&~va.indexOf(l.attributeName))if(l.attributeName==="class"&&nr(l.target)){const{prefix:c,iconName:f}=ke(qe(l.target));l.target.setAttribute(Xe,c||s),f&&l.target.setAttribute($e,f)}else tr(l.target)&&t(l.target)})}),F&&be.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function or(){be&&be.disconnect()}function lr(e){const n=e.getAttribute("style");let t=[];return n&&(t=n.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),t}function cr(e){const n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=ke(qe(e));return r.prefix||(r.prefix=G()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Da(r.prefix,e.innerText)||Je(r.prefix,Me(e.innerText))),!r.iconName&&u.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function fr(e){const n=ee(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return u.autoA11y&&(t?n["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||se()):(n["aria-hidden"]="true",n.focusable="false")),n}function ur(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:a,rest:r}=cr(e),i=fr(e),s=Fe("parseNodeAttributes",{},e);let l=n.styleParser?lr(e):[];return{iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i},...s}}const{styles:dr}=N;function St(e){const n=u.autoReplaceSvg==="nest"?Sn(e,{styleParser:!1}):Sn(e);return~n.extra.classes.indexOf(rt)?V("generateLayersText",e,n):V("generateSvgReplacementMutation",e,n)}let T=new Set;tt.map(e=>{T.add("fa-".concat(e))});Object.keys(Y[b]).map(T.add.bind(T));Object.keys(Y[O]).map(T.add.bind(T));Object.keys(Y[P]).map(T.add.bind(T));T=[...T];function wn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const t=p.documentElement.classList,a=d=>t.add("".concat(dn,"-").concat(d)),r=d=>t.remove("".concat(dn,"-").concat(d)),i=u.autoFetchSvg?T:tt.map(d=>"fa-".concat(d)).concat(Object.keys(dr));i.includes("fa")||i.push("fa");const s=[".".concat(rt,":not([").concat(H,"])")].concat(i.map(d=>".".concat(d,":not([").concat(H,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=ee(e.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const c=tn.begin("onTree"),f=l.reduce((d,h)=>{try{const m=St(h);m&&d.push(m)}catch(m){nt||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(f).then(m=>{xt(m,()=>{a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),c(),d()})}).catch(m=>{c(),h(m)})})}function mr(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;St(e).then(t=>{t&&xt([t],n)})}function gr(e){return function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(n||{}).icon?n:Re(n||{});let{mask:r}=t;return r&&(r=(r||{}).icon?r:Re(r||{})),e(a,{...t,mask:r})}}const hr=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=z,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:l=null,classes:c=[],attributes:f={},styles:d={}}=n;if(!e)return;const{prefix:h,iconName:m,icon:v}=e;return Se({type:"icon",...e},()=>(X("beforeDOMElementCreation",{iconDefinition:e,params:n}),u.autoA11y&&(s?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(l||se()):(f["aria-hidden"]="true",f.focusable="false")),nn({icons:{main:De(v),mask:r?De(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:{...z,...t},symbol:a,title:s,maskId:i,titleId:l,extra:{attributes:f,styles:d,classes:c}})))};var pr={mixout(){return{icon:gr(hr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=wn,e.nodeCallback=mr,e}}},provides(e){e.i2svg=function(n){const{node:t=p,callback:a=()=>{}}=n;return wn(t,a)},e.generateSvgReplacementMutation=function(n,t){const{iconName:a,title:r,titleId:i,prefix:s,transform:l,symbol:c,mask:f,maskId:d,extra:h}=t;return new Promise((m,v)=>{Promise.all([Be(a,s),f.iconName?Be(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[E,x]=k;m([n,nn({icons:{main:E,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:r,titleId:i,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){let{children:t,attributes:a,main:r,transform:i,styles:s}=n;const l=ve(s);l.length>0&&(a.style=l);let c;return Ze(i)&&(c=V("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(c||r.icon),{children:t,attributes:a}}}},br={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=n;return Se({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:e,params:n});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...t].join(" ")},children:a}]})}}}},yr={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:a=[],attributes:r={},styles:i={}}=n;return Se({type:"counter",content:e},()=>(X("beforeDOMElementCreation",{content:e,params:n}),Za({content:e.toString(),title:t,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},vr={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=z,title:a=null,classes:r=[],attributes:i={},styles:s={}}=n;return Se({type:"text",content:e},()=>(X("beforeDOMElementCreation",{content:e,params:n}),bn({content:e,transform:{...z,...t},title:a,extra:{attributes:i,styles:s,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(n,t){const{title:a,transform:r,extra:i}=t;let s=null,l=null;if($n){const c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,bn({content:n.innerHTML,width:s,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const xr=new RegExp('"',"ug"),An=[1105920,1112319],En={FontAwesome:{normal:"fas",400:"fas"},...na,...ea,...ca},Ve=Object.keys(En).reduce((e,n)=>(e[n.toLowerCase()]=En[n],e),{}),kr=Object.keys(Ve).reduce((e,n)=>{const t=Ve[n];return e[n]=t[900]||[...Object.entries(t)][0][1],e},{});function Sr(e){const n=e.replace(xr,""),t=Ta(n,0),a=t>=An[0]&&t<=An[1],r=n.length===2?n[0]===n[1]:!1;return{value:Me(r?n[0]:n),isSecondary:a||r}}function wr(e,n){const t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(Ve[t]||{})[r]||kr[t]}function On(e,n){const t="".concat(da).concat(n.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(t)!==null)return a();const s=ee(e.children).filter(m=>m.getAttribute(ze)===n)[0],l=W.getComputedStyle(e,n),c=l.getPropertyValue("font-family"),f=c.match(ba),d=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(s&&!f)return e.removeChild(s),a();if(f&&h!=="none"&&h!==""){const m=l.getPropertyValue("content");let v=wr(c,d);const{value:k,isSecondary:E}=Sr(m),x=f[0].startsWith("FontAwesome");let w=Je(v,k),S=w;if(x){const A=Ba(k);A.iconName&&A.prefix&&(w=A.iconName,v=A.prefix)}if(w&&!E&&(!s||s.getAttribute(Xe)!==v||s.getAttribute($e)!==S)){e.setAttribute(t,S),s&&e.removeChild(s);const A=ur(),{extra:L}=A;L.attributes[ze]=n,Be(w,v).then(j=>{const It=nn({...A,icons:{main:j,mask:en()},prefix:v,iconName:S,extra:L,watchable:!0}),we=p.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=It.map(zt=>le(zt)).join(`
`),e.removeAttribute(t),a()}).catch(r)}else a()}else a()})}function Ar(e){return Promise.all([On(e,"::before"),On(e,"::after")])}function Er(e){return e.parentNode!==document.head&&!~ga.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pn(e){if(F)return new Promise((n,t)=>{const a=ee(e.querySelectorAll("*")).filter(Er).map(Ar),r=tn.begin("searchPseudoElements");kt(),Promise.all(a).then(()=>{r(),Ge(),n()}).catch(()=>{r(),Ge(),t()})})}var Or={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Pn,e}}},provides(e){e.pseudoElements2svg=function(n){const{node:t=p}=n;u.searchPseudoElements&&Pn(t)}}};let Cn=!1;var Pr={mixout(){return{dom:{unwatch(){kt(),Cn=!0}}}},hooks(){return{bootstrap(){kn(Fe("mutationObserverCallbacks",{}))},noAuto(){or()},watch(e){const{observeMutationsRoot:n}=e;Cn?Ge():kn(Fe("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const jn=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return t.flipX=!0,t;if(i&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(i){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},n)};var Cr={mixout(){return{parse:{transform:e=>jn(e)}}},hooks(){return{parseNodeAttributes(e,n){const t=n.getAttribute("data-fa-transform");return t&&(e.transform=jn(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:t,transform:a,containerWidth:r,iconWidth:i}=n;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:d,path:h};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...m.path}}]}]}}}};const Ce={x:0,y:0,width:"100%",height:"100%"};function In(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function jr(e){return e.tag==="g"?e.children:[e]}var Ir={hooks(){return{parseNodeAttributes(e,n){const t=n.getAttribute("data-fa-mask"),a=t?ke(t.split(" ").map(r=>r.trim())):en();return a.prefix||(a.prefix=G()),e.mask=a,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:t,attributes:a,main:r,mask:i,maskId:s,transform:l}=n;const{width:c,icon:f}=r,{width:d,icon:h}=i,m=Pa({transform:l,containerWidth:d,iconWidth:c}),v={tag:"rect",attributes:{...Ce,fill:"white"}},k=f.children?{children:f.children.map(In)}:{},E={tag:"g",attributes:{...m.inner},children:[In({tag:f.tag,attributes:{...f.attributes,...m.path},...k})]},x={tag:"g",attributes:{...m.outer},children:[E]},w="mask-".concat(s||se()),S="clip-".concat(s||se()),A={tag:"mask",attributes:{...Ce,id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,x]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:jr(h)},A]};return t.push(L,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")"),...Ce}}),{children:t,attributes:a}}}},zr={provides(e){let n=!1;W.matchMedia&&(n=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const t=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return n||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),t.push(s),t.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:n?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),n||t.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Nr={hooks(){return{parseNodeAttributes(e,n){const t=n.getAttribute("data-fa-symbol"),a=t===null?!1:t===""?!0:t;return e.symbol=a,e}}}},Tr=[Ia,pr,br,yr,vr,Or,Pr,Cr,Ir,zr,Nr];Ka(Tr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const Ke=C.parse;C.findIconDefinition;C.toHtml;const Lr=C.icon;C.layer;C.text;C.counter;function zn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?zn(Object(t),!0).forEach(function(a){q(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):zn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function ye(e){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ye(e)}function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Mr(e,n){if(e==null)return{};var t={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function _r(e,n){if(e==null)return{};var t=Mr(e,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function Ye(e){return Fr(e)||Rr(e)||Dr(e)||Br()}function Fr(e){if(Array.isArray(e))return Ue(e)}function Rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dr(e,n){if(e){if(typeof e=="string")return Ue(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ue(e,n)}}function Ue(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Br(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wr(e){var n,t=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,s=e.shake,l=e.flash,c=e.spin,f=e.spinPulse,d=e.spinReverse,h=e.pulse,m=e.fixedWidth,v=e.inverse,k=e.border,E=e.listItem,x=e.flip,w=e.size,S=e.rotation,A=e.pull,L=(n={"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":m,"fa-inverse":v,"fa-border":k,"fa-li":E,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},q(n,"fa-".concat(w),typeof w<"u"&&w!==null),q(n,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),q(n,"fa-pull-".concat(A),typeof A<"u"&&A!==null),q(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(L).map(function(j){return L[j]?j:null}).filter(function(j){return j})}function Gr(e){return e=e-0,e===e}function wt(e){return Gr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Vr=["style"];function Kr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Yr(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),r=wt(t.slice(0,a)),i=t.slice(a+1).trim();return r.startsWith("webkit")?n[Kr(r)]=i:n[r]=i,n},{})}function At(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(c){return At(e,c)}),r=Object.keys(n.attributes||{}).reduce(function(c,f){var d=n.attributes[f];switch(f){case"class":c.attrs.className=d,delete n.attributes.class;break;case"style":c.attrs.style=Yr(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=d:c.attrs[wt(f)]=d}return c},{attrs:{}}),i=t.style,s=i===void 0?{}:i,l=_r(t,Vr);return r.attrs.style=I(I({},r.attrs.style),s),e.apply(void 0,[n.tag,I(I({},r.attrs),l)].concat(Ye(a)))}var Et=!1;try{Et=!0}catch{}function Ur(){if(!Et&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nn(e){if(e&&ye(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ke.icon)return Ke.icon(e);if(e===null)return null;if(e&&ye(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function je(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?q({},e,n):{}}var Tn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},rn=D.forwardRef(function(e,n){var t=I(I({},Tn),e),a=t.icon,r=t.mask,i=t.symbol,s=t.className,l=t.title,c=t.titleId,f=t.maskId,d=Nn(a),h=je("classes",[].concat(Ye(Wr(t)),Ye((s||"").split(" ")))),m=je("transform",typeof t.transform=="string"?Ke.transform(t.transform):t.transform),v=je("mask",Nn(r)),k=Lr(d,I(I(I(I({},h),m),v),{},{symbol:i,title:l,titleId:c,maskId:f}));if(!k)return Ur("Could not find icon",d),null;var E=k.abstract,x={ref:n};return Object.keys(t).forEach(function(w){Tn.hasOwnProperty(w)||(x[w]=t[w])}),Hr(E[0],x)});rn.displayName="FontAwesomeIcon";rn.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Hr=At.bind(null,D.createElement);const Xr={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},$r=window.location.origin+window.location.pathname,Ot=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 524.197 523.652"
 xmlns:xlink="http://www.w3.org/1999/xlink">
 <g id="Ebene_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="bg-fill" fill="#003B80" d="M52.3641 0l418.923 0c28.8003,0 52.3641,23.5638 52.3641,52.3641l0 418.923c0,28.8003 -23.5638,52.3641 -52.3641,52.3641l-418.923 0c-28.8003,0 -52.3641,-23.5638 -52.3641,-52.3641l0 -418.923c0,-28.8003 23.5638,-52.3641 52.3641,-52.3641z"/>
  <path class="fg-fill" fill="white" fill-rule="nonzero" d="M126.923 496.835c-15.5305,0 -29.5952,-6.29848 -39.7761,-16.4793 -10.1808,-10.1808 -16.4793,-24.2461 -16.4793,-39.7766 0,-15.5305 6.29848,-29.5957 16.4793,-39.7761 10.1808,-10.1808 24.2456,-16.4793 39.7761,-16.4793 15.5315,0 29.5957,6.29848 39.7766,16.4793 10.1808,10.1803 16.4793,24.2456 16.4793,39.7761 0,15.5315 -6.29848,29.5957 -16.4793,39.7766 -10.1808,10.1808 -24.2451,16.4793 -39.7766,16.4793zm-21.2639 -34.9914c5.44179,5.44179 12.9609,8.80887 21.2639,8.80887 8.30354,0 15.8227,-3.36708 21.2644,-8.80887 5.44179,-5.44179 8.80887,-12.9609 8.80887,-21.2644 0,-8.30354 -3.36708,-15.8221 -8.80887,-21.2639 -5.44179,-5.44179 -12.9609,-8.80887 -21.2644,-8.80887 -8.30302,0 -15.8221,3.36708 -21.2639,8.80887 -5.44179,5.44179 -8.80887,12.9604 -8.80887,21.2639 0,8.30302 3.36708,15.8227 8.80887,21.2644z"/>
  <path class="fg-fill" fill="white" fill-rule="nonzero" d="M381.68 496.835c-15.5305,0 -29.5952,-6.29848 -39.7761,-16.4793 -10.1808,-10.1808 -16.4793,-24.2461 -16.4793,-39.7766 0,-15.5305 6.29848,-29.5957 16.4793,-39.7761 10.1808,-10.1808 24.2456,-16.4793 39.7761,-16.4793 15.5315,0 29.5957,6.29848 39.7766,16.4793 10.1808,10.1803 16.4793,24.2456 16.4793,39.7761 0,15.5315 -6.29848,29.5957 -16.4793,39.7766 -10.1808,10.1808 -24.2451,16.4793 -39.7766,16.4793zm-21.2639 -34.9914c5.44179,5.44179 12.9609,8.80887 21.2639,8.80887 8.30354,0 15.8227,-3.36708 21.2644,-8.80887 5.44179,-5.44179 8.80887,-12.9609 8.80887,-21.2644 0,-8.30354 -3.36708,-15.8221 -8.80887,-21.2639 -5.44179,-5.44179 -12.9609,-8.80887 -21.2644,-8.80887 -8.30302,0 -15.8221,3.36708 -21.2639,8.80887 -5.44179,5.44179 -8.80887,12.9604 -8.80887,21.2639 0,8.30302 3.36708,15.8227 8.80887,21.2644z"/>
  <path class="fg-fill" fill="white" d="M162.067 335.351l259.09 0c-1.42957,-4.27771 -2.75493,-8.68686 -4.09653,-13.151 -7.69087,-21.8096 -15.4702,-46.2374 -37.1175,-50.2239 -20.4475,-3.76558 -39.9253,-5.37057 -58.738,-5.76802 -28.6008,-0.604818 -51.8059,1.55682 -59.8576,3.14505 -20.1213,3.97033 -33.9222,17.1627 -48.4032,31.0054 -4.36778,4.1756 -8.7942,8.40723 -13.7951,12.7771 -0.320998,0.280677 -0.654564,0.537267 -0.99808,0.771339 -9.39326,7.08972 -19.2185,13.3201 -29.4413,18.3592 -2.1941,1.08134 -4.40862,2.11084 -6.64304,3.08483zm-115.49 97.9187c-18.5724,-10.8354 -25.4259,-27.3419 -24.1681,-46.7553 2.84605,-43.9281 44.7429,-49.1206 106.943,-62.3418 0.579682,-0.239832 1.18974,-0.430442 1.82597,-0.56502 9.81375,-2.08152 19.2683,-5.5062 28.3364,-9.97609 9.13772,-4.50445 17.845,-10.0133 26.1067,-16.2442 4.30913,-3.77343 8.68424,-7.95584 13.0012,-12.0827 16.7296,-15.9918 32.6727,-31.2332 58.738,-36.376 8.8162,-1.73905 33.8635,-4.11381 64.251,-3.47076 19.8307,0.418921 42.0372,2.11398 63.6457,6.09373 45.7284,8.42032 41.1396,54.6326 73.7678,77.8612 9.47233,6.74359 13.9935,10.7998 22.7317,18.1718 40.007,33.7499 19.5359,100.733 -21.6389,99.5278l-0.328853 -0.00261826c0.179089,-2.15326 0.271775,-4.33112 0.271775,-6.53046 0,-21.4655 -8.70466,-40.9045 -22.7762,-54.975 -14.0716,-14.0716 -33.51,-22.7762 -54.9761,-22.7762 -21.4655,0 -40.9045,8.70466 -54.975,22.7762 -14.0716,14.0705 -22.7762,33.5095 -22.7762,54.975 0,1.45994 0.0413685,2.91046 0.120964,4.3505l-100.264 0.0801187c0.0822133,-1.46622 0.125676,-2.94345 0.125676,-4.43062 0,-21.4655 -8.70466,-40.9045 -22.7762,-54.975 -14.0716,-14.0716 -33.51,-22.7762 -54.9761,-22.7762 -21.4655,0 -40.9045,8.70466 -54.975,22.7762 -12.5147,12.5137 -20.7837,29.2742 -22.4605,47.9293l-2.77535 -0.26392z"/>
  <path class="fg-fill" fill="white" d="M379.639 47.3371c0.99808,-0.0356083 0.148193,-0.0534125 0.773433,-0.0534125l38.7596 0c23.9277,0 39.0503,15.9017 45.4959,36.2503 1.21958,3.85093 2.10822,7.89876 2.66643,12.0461l56.8628 -0.103159 0 18.7792 -56.5664 0.102636c-0.510037,5.01449 -1.4966,9.9143 -2.95916,14.5308 -6.44091,20.3297 -21.5545,36.2084 -45.4996,36.2084l-38.7596 0c-0.651946,0 0.35713,-0.0198988 -1.04416,-0.0612672l-1.03107 -0.0298481c-6.96142,-0.381742 -12.3488,-6.15081 -12.3435,-13.04l-0.0319427 0 0 -9.28434 -53.0087 0c-5.20562,0 -9.42573,-4.22011 -9.42573,-9.42573 0,-5.20562 4.22011,-9.42573 9.42573,-9.42573l53.0087 0 0 -33.1477 -54.2571 0c-5.20562,0 -9.42573,-4.22011 -9.42573,-9.42573 0,-5.20562 4.22011,-9.42573 9.42573,-9.42573l54.2571 0 0 -11.4172c0,-7.23006 5.86123,-13.0913 13.0913,-13.0913 0.196369,0 0.391691,0.00471286 0.585966,0.0136149z"/>
 </g>
</svg>
`,qr=Kn(Ot,{width:20,height:20})(24,"#003B80","onlineSVGinHELP"),Zr=Kn(Ot,{width:20,height:20})(24,"#888A87","offlineSVGinHELP"),Pt=({onlineSVG:e=qr,offlineSVG:n=Zr})=>o.jsx(Tt,{sectionKey:"help",sectionTitle:"Kompaktanleitung",sectionBsStyle:"default",sectionContent:o.jsx(_t,{configs:[{type:"FAQS",configs:[{title:"Datengrundlage",bsStyle:"secondary",contentBlockConf:{type:"REACTCOMP",content:o.jsxs("div",{children:[o.jsxs("p",{children:["Die"," ",o.jsx("strong",{children:"E-Auto-Ladestationskarte Wuppertal"})," ","bietet ihnen die folgenden Hintergrundkarten an, die auf verschiedenen Geodatendiensten und Geodaten basieren:"]}),o.jsxs("ul",{children:[o.jsx(Ft,{}),o.jsx(Rt,{})]}),o.jsxs("p",{children:["Zusätzlich nutzt die E-Auto-Ladestationskarte den Datensatz"," ",o.jsx("a",{target:"_legal",href:"https://offenedaten-wuppertal.de/dataset/ladestationen-e-autos-wuppertal",children:"Ladestationen E-Autos Wuppertal"})," ","aus dem Open-Data-Angebot der Stadt Wuppertal."]})]})}},{title:"Kartendarstellung",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:o.jsxs("p",{children:['Zur Darstellung der Ladestationen in der Karte verwenden wir zwei unterschiedliche Symbole für die Ladestationen, die derzeit in Betrieb ("online") ',e,' sind, und diejenigen, die wegen länger dauernder Maßnahmen nicht in Betrieb ("offline") ',n," sind. Die Farben der Symbole werden in der Titelzeile der Info-Box unten rechts aufgegriffen. Zusätzlich wird dort der Betriebszustand der Ladestation - Ladestation für E-Autos (online) bzw. Ladestation für E-Autos (offline) - wiederholt. Räumlich nah beieinander liegende Anlagen werden standardmäßig maßstabsabhängig zu größeren Kreis-Symbolen zusammengefasst, jeweils mit der Anzahl der repräsentierten Anlagen im Zentrum"," ",o.jsx("img",{alt:"Cluster",width:"32",src:$r+"images/emob_cluster.png"}),". Vergrößern Sie ein paar Mal durch direktes Anklicken eines solchen Punktes oder mit"," ",o.jsx(rn,{icon:Xr})," die Darstellung, so werden die zusammengefassten Anlagen Schritt für Schritt in die kleineren Symbole für die Einzel-Anlagen zerlegt."]})}},{title:"Ladestationen abfragen",bsStyle:"success",contentBlockConf:{type:"REACTCOMP",content:o.jsxs("div",{children:[" ",o.jsxs("p",{children:["Bewegen Sie den Mauszeiger im Kartenfenster auf eines der Symbole für die Ladestationen (online oder offline), um sich den Namen der Station anzeigen zu lassen. Ein Klick auf das Symbol setzt den Fokus auf diese Ladestation. Sie wird dann blau hinterlegt und die zugehörigen Informationen (Name, ggf. Lagebeschreibung, Adresse) werden in der Info-Box angezeigt. (Auf einem Tablet-PC wird der Fokus durch das erste Antippen des Symbols gesetzt, das zweite Antippen blendet den Namen ein.) Durch Anklicken des Symbols ",o.jsx(y,{name:"info"})," rechts neben dem Namen der Ladestation öffnen Sie das Datenblatt mit den vollständigen Informationen zu dieser Station einschließlich einer Verknüpfung zur Ladekosten-Information des Betreibers. Mit dem Lupensymbol ",o.jsx(y,{name:"search"})," links daneben wird die Karte auf die Ladestation, die gerade den Fokus hat, zentriert und gleichzeitig ein großer Betrachtungsmaßstab (Zoomstufe 14) eingestellt. Mit den Symbolen ",o.jsx(y,{name:"phone"})," und"," ",o.jsx(y,{name:"external-link-square"})," rechts daneben können Sie den Betreiber via Smartphone direkt anrufen oder zu seiner Website wechseln."]}),o.jsxs("p",{children:["Wenn Sie noch keine Ladestation im aktuellen Kartenausschnitt selektiert haben, wird der Fokus automatisch auf die nördlichste Station gesetzt. Mit den Funktionen"," ",o.jsx("a",{className:"useAClassNameToRenderProperLink",children:"<<"})," ","vorheriger Treffer und"," ",o.jsx("a",{className:"useAClassNameToRenderProperLink",children:">>"})," ","nächster Treffer können Sie ausgehend von der Ladestation, auf der gerade der Fokus liegt, in nördlicher bzw. südlicher Richtung alle aktuell im Kartenfenster angezeigten Stationen durchmustern."]}),o.jsxs("p",{children:["Mit der Schaltfläche"," ",o.jsx(y,{name:"chevron-circle-down"})," im dunkelgrau abgesetzten rechten Rand der Info-Box lässt sich diese so verkleinern, dass nur noch der Betriebszustand der Ladestation (Ladestation online oder offline), ihr Name und die Symbole ",o.jsx(y,{name:"search-location"}),","," ",o.jsx(y,{name:"info"}),", ",o.jsx(y,{name:"phone"})," und"," ",o.jsx(y,{name:"external-link-square"})," angezeigt werden - nützlich für Endgeräte mit kleinem Display. Mit der Schaltfläche ",o.jsx(y,{name:"chevron-circle-up"})," an derselben Stelle können Sie die Info-Box wieder vollständig einblenden."]}),o.jsx("p",{children:'Ein kleines Foto über der Info-Box vermittelt Ihnen bei den meisten Ladestationen einen Eindruck vom Aussehen der Station vor Ort. Klicken Sie auf dieses Vorschaubild, um einen Bildbetrachter ("Leuchtkasten") mit dem Foto zu öffnen.'})]})}},{title:"In Karte positionieren",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:o.jsxs("div",{children:[" ",o.jsxs("p",{children:["Um direkt zu einer Ladestation zu gelangen, geben Sie den Anfang des Namens dieser Ladestation im Eingabefeld links unten ein (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der Inhalt der Auswahlliste angepasst.) Sie können auch andere Suchbegriffe eingeben, nämlich Stadtteil (Stadtbezirk oder Quartier), Adresse, Straßenname oder POI. Durch das in der Auswahlliste vorangestellte Symbol erkennen Sie, ob es sich bei einem Treffer um eine ",o.jsx(y,{name:"charging-station"})," ","Ladestation, einen ",o.jsx(y,{name:"circle"})," Stadtbezirk, ein ",o.jsx(y,{name:"pie-chart"})," Quartier, eine"," ",o.jsx(y,{name:"home"})," Adresse, eine"," ",o.jsx(y,{name:"road"})," Straße ohne zugeordnete Hausnummern, einen ",o.jsx(y,{name:"tag"})," POI, die"," ",o.jsx(y,{name:"tags"})," alternative Bezeichnung eines POI, eine ",o.jsx(y,{name:"child"})," Kindertageseinrichtung oder eine ",o.jsx(y,{name:"graduation-cap"})," Schule handelt."]}),o.jsxs("p",{children:["Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie (Ladestation, Adresse, Straße, POI) wird außerdem ein großer Maßstab (Zoomstufe 14) eingestellt und ein Marker"," ",o.jsx(y,{name:"map-marker"})," auf der Zielposition platziert. Bei Suchbegriffen mit Flächengeometrie (Stadtbezirk, Quartier) wird der Maßstab so eingestellt, dass die Fläche vollständig dargestellt werden kann. Zusätzlich wird der Bereich außerhalb dieser Fläche abgedunkelt (Spotlight-Effekt)."]}),o.jsxs("p",{children:["Durch Anklicken des Werkzeugs ",o.jsx(y,{name:"times"})," ","links neben dem Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker bzw. Abdunklung, Löschen des Textes im Eingabefeld)."]}),o.jsxs("p",{children:["Wenn Sie die Karte wie oben beschrieben auf eine Ladestation positionieren, erhält diese sofort den Fokus, sodass die zugehörigen Informationen direkt in der Info-Box angezeigt werden. Voraussetzung dafür ist, dass die aktuellen"," ",o.jsx(me,{to:"MeinThemenstadtplan",className:"useAClassNameToRenderProperLink",containerId:"myMenu",children:"Filtereinstellungen"})," ","die Darstellung der Ladestation in der Karte erlauben."]})]})}},{title:"Mein Standort",bsStyle:"warning",contentBlockConf:{type:"REACTCOMP",content:o.jsx("div",{children:o.jsx(Lt,{})})}},{title:"Filtern",bsStyle:"info",contentBlockConf:{type:"REACTCOMP",content:o.jsxs("div",{children:[" ",o.jsxs("p",{children:['Im Bereich "',o.jsx("b",{children:"Filter"}),'" können Sie im Anwendungsmenü ',o.jsx(y,{name:"bars"})," die in der Karte angezeigten Ladestationen so ausdünnen, dass nur die für Sie interessanten Stationen übrig bleiben. Standardmäßig sind die Einstellungen hier so gesetzt, dass alle Ladestationen angezeigt werden."]}),o.jsxs("p",{children:['Mit den Optionsgruppen "',o.jsx("b",{children:o.jsx("i",{children:"Verfügbarkeit"})}),'", "',o.jsx("b",{children:o.jsx("i",{children:"Öffnungszeiten"})}),'", "',o.jsx("b",{children:o.jsx("i",{children:"Ökostrom"})}),'" und "',o.jsx("b",{children:o.jsx("i",{children:"Schnelllader"})}),'" können Sie die Kartenanzeige auf Ladestationen beschränken, die aktuell verfügbar (online) sind, die durchgehend (jeweils 24 Stunden an 7 Tagen die Woche) erreichbar sind, die ökologisch erzeugten Strom bereitstellen oder bei denen es sich um Schnell-Ladestationen handelt. Mit der in jeder dieser Gruppen verfügbaren Option "',o.jsx("i",{children:"alle Ladestationen"}),'" wird das jeweilige Filterkriterium nicht ausgewertet. In der Optionsgruppe "',o.jsx("b",{children:o.jsx("i",{children:"Steckertypen"})}),'" können Sie die für ihre Ladekabel passenden Steckertypen auswählen. Damit grenzen Sie die Kartenanzeige auf diejenigen Stationen ein, die mindestens eine entsprechende Anschlussmöglichkeit besitzen. Alle Filterkriterien werden mit einem logischen "und" kombiniert: Wenn Sie z. B. unter "',o.jsx("b",{children:o.jsx("i",{children:"Öffnungszeiten"})}),'" den Wert "',o.jsx("i",{children:"24/7"}),'" wählen und unter "',o.jsx("b",{children:o.jsx("i",{children:"Ökostrom"})}),'" den Wert "',o.jsx("i",{children:"nur Ökostrom-Ladestationen"}),'", werden alle Stationen angezeigt, die durchgehend erreichbar sind ',o.jsx("b",{children:"und"})," ökologisch erzeugten Strom bereitstellen."]}),o.jsxs("p",{children:['Ihre Einstellungen werden direkt in der blauen Titelzeile des Bereichs "',o.jsx("b",{children:"Filter"}),'" und in dem Donut-Diagramm, das Sie rechts neben oder unter den Filteroptionen finden, ausgewertet. Die Titelzeile zeigt die Gesamtanzahl der Ladestationen, die den von Ihnen gesetzten Filterbedingungen entsprechen. Das Donut-Diagramm zeigt zusätzlich die Verteilung auf die beiden Kategorien verfügbare Ladestationen (online) und nicht verfügbare Ladestationen (offline). Bewegen Sie dazu den Mauszeiger auf eines der farbigen Segmente des Diagramms.']})]})}},{title:"Einstellungen",bsStyle:"info",contentBlockConf:{type:"REACTCOMP",content:o.jsxs("div",{children:[o.jsxs("p",{children:['Unter "',o.jsx("strong",{children:"Einstellungen"}),'" können Sie im Anwendungsmenü ',o.jsx(y,{name:"bars"})," festlegen, wie die Ladestationen und die Hintergrundkarte angezeigt werden sollen."]}),o.jsxs("p",{children:['Zu den Ladestationen können Sie unter "',o.jsx("b",{children:o.jsx("i",{children:"Ladestation-Einstellungen"})}),'" auswählen, ob Ihre unter "',o.jsx("b",{children:"Filter"}),'" festgelegten Filterbedingungen in einer Titelzeile ausgeprägt werden oder nicht. Weiter können Sie dort festlegen, ob räumlich nah beieinander liegende Ladestationen maßstabsabhängig zu einem Punktsymbol zusammengefasst werden oder nicht. Unter "',o.jsx("b",{children:o.jsx("i",{children:"Symbolgröße"})}),'" können Sie in Abhängigkeit von Ihrer Bildschirmauflösung und Ihrem Sehvermögen auswählen, ob die Ladestationen mit kleinen (35 Pixel), mittleren (45 Pixel) oder großen (55 Pixel) Symbolen angezeigt werden.']}),o.jsxs("p",{children:['Unter "',o.jsx("strong",{children:o.jsx("em",{children:"Hintergrundkarte"})}),'" können Sie auswählen, ob Sie die standardmäßig aktivierte farbige Hintergrundkarte verwenden möchten ("',o.jsx("em",{children:"Stadtplan (Tag)"}),'") oder lieber eine invertierte Graustufenkarte ("',o.jsx("em",{children:"Stadtplan (Nacht)"}),'"), zu der uns die von vielen PKW-Navis bei Dunkelheit eingesetzte Darstellungsweise inspiriert hat.'," ",o.jsx("strong",{children:"Hinweis"}),": Der Stadtplan (Nacht) wird Ihnen nur angeboten, wenn Ihr Browser CSS3-Filtereffekte unterstützt, also z. B. nicht beim Microsoft Internet Explorer. Die Nacht-Karte erzeugt einen deutlicheren Kontrast mit den farbigen Symbolen der Ladestationen, die unterschiedlichen Flächennutzungen in der Hintergrundkarte lassen sich aber nicht mehr so gut unterscheiden wie in der Tag-Karte. Als dritte Möglichkeit steht eine"," ",o.jsx("i",{children:"Luftbildkarte"})," zur Verfügung, die die Anschaulichkeit des Luftbildes mit der Eindeutigkeit des Stadtplans (Kartenschrift, durchscheinende Linien) verbindet."]}),o.jsxs("p",{children:["In der"," ",o.jsx("b",{children:o.jsx("i",{children:"Vorschau"})})," ","sehen Sie direkt die Wirkung ihrer Einstellungen in einem fest eingestellten Kartenausschnitt."]})]})}},{title:"Personalisierung",bsStyle:"info",contentBlockConf:{type:"REACTCOMP",content:o.jsx("p",{children:"Ihre Einstellungen bleiben auch nach einem Neustart der Anwendung erhalten. (Es sei denn, Sie löschen den Browser-Verlauf einschließlich der gehosteten App-Daten.)"})}}]}]})},"help");Pt.__docgenInfo={description:"",methods:[],displayName:"KompaktanleitungSection",props:{onlineSVG:{defaultValue:{value:`getSymbolSVGGetter(ladestationSVG, {
  width: 20,
  height: 20,
})(24, "#003B80", "onlineSVGinHELP")`,computed:!0},required:!1},offlineSVG:{defaultValue:{value:`getSymbolSVGGetter(ladestationSVG, {
  width: 20,
  height: 20,
})(24, "#888A87", "offlineSVGinHELP")`,computed:!0},required:!1}}};const Qr="2.4.1",Jr=()=>D.createElement("div",null,D.createElement("b",null,"TopicMaps Wuppertal"),":"," ",D.createElement("a",{href:"https://cismet.de/",target:"_cismet"},"cismet GmbH")," ","auf Basis von"," ",D.createElement("a",{href:"http://leafletjs.com/",target:"_more"},"Leaflet")," ","und"," ",D.createElement("a",{href:"https://cismet.de/#refs",target:"_cismet"},"cids | react-cismap v",Qr," | WuNDa")," ","|"," ",D.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cismet.de/datenschutzerklaerung.html"},"Datenschutzerklärung (Privacy Policy)")),Ct=()=>{const{setAppMenuActiveMenuSection:e}=Dt.useContext(Mt);return o.jsxs("div",{style:{fontSize:"11px"},children:[o.jsx("b",{children:"Hintergrundkarten"}),": Stadtkarte 2.0 © RVR | True Orthophoto 2022 © Stadt Wuppertal"," ",o.jsx("a",{className:"useAClassNameToRenderProperLink",onClick:()=>e("help"),children:"(Details und Nutzungsbedingungen)"}),o.jsx("br",{}),o.jsx(Jr,{})]})};Ct.__docgenInfo={description:"",methods:[],displayName:"MenuFooter"};const jt=({setAppMenuActiveMenuSection:e})=>o.jsxs("span",{children:["Benutzen Sie die Auswahlmöglichkeiten unter"," ",o.jsx(me,{className:"useAClassNameToRenderProperLink",to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>e("filter"),children:"Filter"})," ","um die in der Karte angezeigten Ladestationen für E-Autos auf die für Sie relevanten Stationen zu beschränken. Über"," ",o.jsx(me,{className:"useAClassNameToRenderProperLink",to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>e("settings"),children:"Einstellungen"})," ","können Sie die Darstellung der Hintergrundkarte und der Ladestationen an Ihre Vorlieben anpassen. Wählen Sie"," ",o.jsx(me,{className:"useAClassNameToRenderProperLink",to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:()=>e("help"),children:"Kompaktanleitung"})," ","für detailliertere Bedienungsinformationen."]});jt.__docgenInfo={description:"",methods:[],displayName:"MenuIntroduction"};const fi={title:"E-Auto Ladestationskarte"},fe={render:()=>o.jsx(Vn,{appKey:"storybook-appkey",children:o.jsx(jt,{setAppMenuActiveMenuSection:Xt("setAppMenuActiveMenuSection")})})},ue={render:()=>{const e={overflowY:"auto",overflowX:"hidden",maxHeight:"100vh"};return o.jsx("div",{id:"myMenu",style:e,children:o.jsx(Pt,{})})}},de={render:()=>o.jsx(Vn,{appKey:"storybook-appkey",children:o.jsx(Ct,{})})};var Ln,Mn,_n;fe.parameters={...fe.parameters,docs:{...(Ln=fe.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuIntroduction setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")} />
      </TopicMapContextProvider>;
  }
}`,...(_n=(Mn=fe.parameters)==null?void 0:Mn.docs)==null?void 0:_n.source}}};var Fn,Rn,Dn;ue.parameters={...ue.parameters,docs:{...(Fn=ue.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  render: () => {
    const modalBodyStyle = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh"
    };
    return <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>;
  }
}`,...(Dn=(Rn=ue.parameters)==null?void 0:Rn.docs)==null?void 0:Dn.source}}};var Bn,Wn,Gn;de.parameters={...de.parameters,docs:{...(Bn=de.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  render: () => {
    return <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter />
      </TopicMapContextProvider>;
  }
}`,...(Gn=(Wn=de.parameters)==null?void 0:Wn.docs)==null?void 0:Gn.source}}};const ui=["MenuEinleitung","Kompaktanleitung","MenuFußzeile"];export{ue as Kompaktanleitung,fe as MenuEinleitung,de as MenuFußzeile,ui as __namedExportsOrder,fi as default};

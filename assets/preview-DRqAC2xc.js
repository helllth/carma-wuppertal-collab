const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-BEIz81K8.js","./iframe-Ctb5dbyN.js","./index-DQ2WTIsS.js","./react-18-DeCcH5gs.js","./index-hiYxhEkP.js","./index-D-8MO0q_.js","./_commonjs-dynamic-modules-BYpTrffH.js","./_baseClone-rQP4jvJ2.js","./_getPrototype-DVol2gLu.js","./index-CFFTH5x_.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-Ctb5dbyN.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-BEIz81K8.js").then(r=>r.ah),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};

function a(){return a=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)({}).hasOwnProperty.call(o,t)&&(r[t]=o[t])}return r},a.apply(null,arguments)}function n(r,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},n(r,e)}function i(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,n(r,e)}function s(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}export{a as _,i as a,n as b,s as c};

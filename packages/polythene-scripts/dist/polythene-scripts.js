!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.polythene={})}(this,function(e){"use strict";var r=require("autoprefixer"),n=require("cssbeautify"),t=require("fs"),i=require("j2c"),u=require("postcss"),o=require("cssnano"),c=require("tar"),s=new i,f=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(function(e,r){return Object.keys(r).length?(r.forEach(function(r){var n={"@global":r},t=s.sheet(n);e+=t}),e):e},"")},a=function(e){return n(e,{indent:"  "})},p=function(e,r){return t.writeFileSync(e,r,"ascii",function(e){if(e)throw e})},d=function(e){var n=e.css,i=e.styles,s=e.path,d=e.autoPrefix,l=e.beautify,h=e.sourceMap,y=void 0===h||h,g=e.gzip,m=n||(i?i.reduce(function(e,r){return e+f(r)},""):""),q=s+".map",v=[];d&&v.push(r()),v.push(o({preset:"default",reduceIdents:!1,zindex:!1}));var b=y?{to:s,map:{inline:!1}}:{};u(v).process(m,b).then(function(e){e.warnings().forEach(function(e){console.warn("[31m","Warning","[37m",e.toString())}),p(s,l?a(e.css):e.css),g&&c.c({gzip:!0},[s]).pipe(t.createWriteStream(s+".gz")),y&&p(q,e.map)})};e.writeCSS=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-scripts.js.map

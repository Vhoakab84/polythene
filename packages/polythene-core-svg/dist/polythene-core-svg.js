!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t(e.polythene={},e["polythene-core"])}(this,function(e,t){"use strict";var n={component:"pe-svg"},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(e){return e.attrs.element||"div"},c=function(e){e.dom&&e.dom.querySelector("svg").setAttribute("focusable","false")},l=function(e,r){var c=r.keys,l=e.attrs;return o({},t.filterSupportedAttributes(l),{className:[n.component,"dark"===l.tone?"pe-dark-tone":null,"light"===l.tone?"pe-light-tone":null,l.className||l[c.class]].join(" ")})},s=function(e){var t=e.attrs;return t.content?t.content:t.children||e.children||t},a=Object.freeze({getElement:r,onMount:c,createProps:l,createContent:s}),i={color_light:"currentcolor",color_dark:"currentcolor"};e.coreSVG=a,e.classes=n,e.vars=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-svg.js.map

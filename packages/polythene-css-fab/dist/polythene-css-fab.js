!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-core-fab"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-fab","polythene-theme"],n):n(e.polythene={},e["polythene-core-css"],e["polythene-core-fab"],e["polythene-theme"])}(this,function(e,n,t,o){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a={component:"pe-fab",content:"pe-fab__content",mini:"pe-fab--mini"},u=function(e,t){return[r({},e,{userSelect:"none",display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",width:t.size_regular+"px",height:t.size_regular+"px",borderRadius:"50%",padding:t.padding_regular+"px"}," .pe-button__wash, .pe-button__focus":[n.mixin.fit(),{borderRadius:"inherit"}],".pe-fab--mini":{" .pe-button__content":{width:t.size_mini+"px",height:t.size_mini+"px",padding:(t.size_mini-o.vars.unit_icon_size)/2+"px"}}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":{transition:"background-color "+o.vars.animation_duration+" ease-in-out",borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}})]},p=function(e,n,t,o){return[i({},e.map(function(e){return e+n}).join(","),{" .pe-button__content":{backgroundColor:t["color_"+o+"_background"],color:t["color_"+o]},"&.pe-button--focus":{" .pe-button__focus":{opacity:1,backgroundColor:t["color_"+o+"_focus_background"]}}})]},c=function(e,n){return[p([".pe-dark-tone",".pe-dark-tone "],e,n,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,n,"light")]},l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=[u,c],d="."+a.component,b=function(e,o){return n.styler.generateStyles([e,d],l({},t.vars,o),s)},f=function(e,o){return e?n.styler.createStyleSheets([e,d],l({},t.vars,o),s):n.styler.createStyleSheets([d],t.vars,s)};n.styler.generateStyles([d],t.vars,s),e.addStyle=b,e.getStyle=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-fab.js.map

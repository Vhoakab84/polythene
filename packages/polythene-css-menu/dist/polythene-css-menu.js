!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-menu"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-menu","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-menu"],e["polythene-theme"])}(this,function(e,t,n,i){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",contentFront:"pe-list-tile__content-front",compact:"pe-list-tile--compact",compactFront:"pe-list-tile--compact-front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",header:"pe-list-tile--header",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",highlight:"pe-list-tile--highlight",sticky:"pe-list-tile--sticky"},s={component:"pe-menu",content:"pe-menu__content",placeholder:"pe-menu__placeholder",target:"pe-menu__target",permanent:"pe-menu--permanent",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",listTile:o.component,selectedListTile:o.selected},p=function(e,t){return t<e.min_size?e.min_size:t},u=function(e){return"pe-menu--width-"+e.toString().replace(".","-")},a=function(e,t){var n=p(e,t);return l({},"&."+u(n),{width:e.size_factor*n+"px"})},c=function(e,n){var r;return[(r={},l(r,e,[n.sizes.map(function(e){return a(n,e)}),{transitionTimingFunction:"ease-out",transitionProperty:"all",zIndex:i.vars.z_menu,opacity:0,position:"absolute",minWidth:i.vars.grid_unit_menu*n.min_size+"px","&.pe-menu--width-auto":{width:"auto"},"&.pe-menu--visible":{opacity:1},"&.pe-menu--permanent":{position:"relative",opacity:1,zIndex:0}," .pe-menu__content":{width:"100%",borderRadius:n.border_radius+"px"}}]),l(r," .pe-menu__content",{" .pe-list-tile__title":[t.mixin.ellipsis("none")]}),r)]},h=function(e,t,n,i){return[r({},e.map(function(e){return e+t}).join(","),{" .pe-menu__content":{"background-color":n["color_"+i+"_background"]}})]},d=function(e,t){return[h([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),h(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_=[c,d],y="."+s.component,b=function(e,i){return t.styler.generateStyles([e,y],m({},n.vars,i),_)},f=function(e,i){return e?t.styler.createStyleSheets([e,y],m({},n.vars,i),_):t.styler.createStyleSheets([y],n.vars,_)};t.styler.generateStyles([y],n.vars,_),e.addStyle=b,e.getStyle=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-menu.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-theme"),require("j2c-plugin-prefix-browser"),require("j2c")):"function"==typeof define&&define.amd?define(["exports","polythene-theme","j2c-plugin-prefix-browser","j2c"],t):t(e.polythene=e.polythene||{},e["polythene-theme"],e["j2c-plugin-prefix-browser"],e.j2c)}(this,function(e,t,i,n){"use strict";function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}n="default"in n?n.default:n;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o=function(e,t){var i=t.map(function(e){return"_"+e+"$"}).join("");return l({},i,e)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e+"px";return{position:"absolute",top:t,right:t,bottom:t,left:t}},f=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"}:{"-webkit-font-smoothing":"subpixel-antialiased","-moz-osx-font-smoothing":"auto"}},s=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return"none"===e?{textOverflow:"initial",overflow:"initial",display:"block",height:"auto"}:r({},{overflow:"hidden","text-overflow":"ellipsis","text-rendering":"auto"},void 0!==e?{"-webkit-line-clamp":e,"-webkit-box-orient":"vertical",display:"-webkit-box"}:null,void 0!==t?{"max-height":e*t+i}:null)},u=function(){return{"&:after":{content:'""',display:"table",clear:"both"}}},c=function(){return{}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{position:"sticky",top:0,zIndex:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.vars.animation_duration,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.vars.animation_curve_default;return{transitionDelay:0,transitionDuration:i,transitionTimingFunction:n,transitionProperty:e}},p={clearfix:u,defaultTransition:d,ellipsis:s,fit:a,fontSmoothing:f,hairline:c,sticky:x,vendorize:o},m=[{display:"-webkit-box"},{display:"-moz-box"},{display:"-ms-flexbox","-ms-flex-preferred-size":"initial"},{display:"-webkit-flex"},{display:"flex"}],b=[m,{display:"-ms-inline-flexbox"},{display:"-webkit-inline-flex"},{display:"inline-flex"}],w=[m,{"-ms-flex-direction":"row","-webkit-flex-direction":"row","flex-direction":"row"}],y=[m,{"-ms-flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse","flex-direction":"row-reverse"}],g=[m,{"-ms-flex-direction":"column","-webkit-flex-direction":"column","flex-direction":"column"}],v=[m,{"-ms-flex-direction":"column-reverse","-webkit-flex-direction":"column-reverse","flex-direction":"column-reverse"}],h=[m,{"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap","flex-wrap":"wrap"}],k=[m,{"-ms-flex-wrap":"wrap-reverse","-webkit-flex-wrap":"wrap-reverse","flex-wrap":"wrap-reverse"}],j=[m,{"-ms-flex-align":"start","-webkit-align-items":"flex-start","align-items":"flex-start"}],z=[m,{"-ms-flex-align":"center","-webkit-align-items":"center","align-items":"center"}],C=[m,{"-ms-flex-align":"end","-webkit-align-items":"flex-end","align-items":"flex-end"}],E=[m,{"-ms-flex-line-pack":"stretch","-ms-flex-pack":"justify","-webkit-justify-content":"space-between","justify-content":"space-between"}],O=[m,{"-ms-flex-align":"start","-ms-flex-pack":"start","-webkit-justify-content":"flex-start","justify-content":"flex-start"}],_=[m,{"-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center"}],A=[m,{"-ms-flex-pack":"end","-webkit-justify-content":"flex-end","justify-content":"flex-end"}],S=[_,z],J=[m,{"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around","justify-content":"space-around"}],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[{"-webkit-box-flex":e},{"-moz-box-flex":e},{"-webkit-flex":e},{"-ms-flex":e},{flex:e},1===e?{"-webkit-flex-basis":"0.000000001px"}:{},1===e?{"flex-basis":"0.000000001px"}:{}]},I={"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},T={"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},q=function(e){return{"-ms-flex":e,"-webkit-flex":e,flex:e}},D=function(e){return{"-webkit-flex-grow":e,"flex-grow":e}},N={"-ms-flex-item-align":"start","-ms-align-self":"flex-start","-webkit-align-self":"flex-start","align-self":"flex-start"},R={"-ms-flex-item-align":"center","-ms-align-self":"center","-webkit-align-self":"center","align-self":"center"},V={"-ms-flex-item-align":"end","-ms-align-self":"flex-end","-webkit-align-self":"flex-end","align-self":"flex-end"},H={"-ms-flex-item-align":"stretch","-ms-align-self":"stretch","-webkit-align-self":"stretch","align-self":"stretch"},W={flex:P,flexAuto:I,flexAutoVertical:T,flexIndex:q,flexGrow:D,layout:m,layoutAroundJustified:J,layoutCenter:z,layoutCenterCenter:S,layoutCenterJustified:_,layoutEnd:C,layoutEndJustified:A,layoutHorizontal:w,layoutHorizontalReverse:y,layoutInline:b,layoutJustified:E,layoutStart:j,layoutStartJustified:O,layoutVertical:g,layoutVerticalReverse:v,layoutWrap:h,layoutWrapReverse:k,selfCenter:R,selfEnd:V,selfStart:N,selfStretch:H},$=new n(i.prefixPlugin),B=/[^a-z0-9\-]/g,F=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];M.apply(void 0,[{id:e}].concat(i))},G=function(e){if(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)}},M=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var l=e.id.replace(B,"_"),r=e.document||window.document;G(l);var o=r.createElement("style");l&&o.setAttribute("id",l),i.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},i=$.sheet(t);o.appendChild(r.createTextNode(i))})}),r.head.appendChild(o)},K=function(e,t,i){var n=e.join(""),l=n.trim().replace(/^[^a-z]?(.*)/,"$1");F(l,i.map(function(e){return e(n,t)}))},L={add:F,addToDocument:M,remove:G,generateStyles:K};e.mixin=p,e.flex=W,e.styler=L,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css.js.map

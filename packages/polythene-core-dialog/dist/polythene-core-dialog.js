!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-theme"])}(this,function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",contentFront:"pe-list-tile__content-front",compact:"pe-list-tile--compact",compactFront:"pe-list-tile--compact-front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",header:"pe-list-tile--header",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",highlight:"pe-list-tile--highlight",sticky:"pe-list-tile--sticky"},l={component:"pe-dialog",placeholder:"pe-dialog__placeholder",holder:"pe-dialog__holder",content:"pe-dialog__content",fullScreen:"pe-dialog--full-screen",backdrop:"pe-dialog--backdrop",open:"pe-dialog--open",menuContent:{component:"pe-menu",content:"pe-menu__content",placeholder:"pe-menu__placeholder",target:"pe-menu__target",permanent:"pe-menu--permanent",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",listTile:i.component,selectedListTile:i.selected}.content},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(e){return e.attrs.element||"div"},s=function(e,n){if(e.transitioning())return Promise.resolve();var o=e.instanceId;e.transitioning(!0);var i=n.transitions;return t.show(r({},n,i.show({el:e.el,showDuration:n.showDuration,showDelay:n.showDelay}))).then(function(){n.multipleDidShow&&n.multipleDidShow(o),e.transitioning(!1)})},c=function(e,n){if(e.transitioning())return Promise.resolve();var o=e.instanceId;e.transitioning(!0);var i=n.transitions;return t.hide(r({},n,i.hide({el:e.el,hideDuration:n.hideDuration,hideDelay:n.hideDelay}))).then(function(){n.multipleDidHide&&n.multipleDidHide(o),e.transitioning(!1)})},u=function(e,t){return{cleanUp:void 0,el:void 0,transitioning:t(!1)}},d=function(e){if(e.dom){var n=e.state,o=e.attrs;n.el=e.dom;var i=function(e){o.fullScreen||o.modal||"Escape"===e.key&&c(n,r({},o,{hideDelay:0}))};n.cleanUp=function(){return t.unsubscribe("keydown",i)},t.subscribe("keydown",i),o.showInstance&&s(n,o)}},p=function(e){return e.state.cleanUp()},h=function(e,n){var i=n.keys,a=e.state,s=e.attrs;return r({},t.filterSupportedAttributes(s,{remove:["style"]}),o({className:[l.component,s.fullScreen?l.fullScreen:null,s.backdrop?l.backdrop:null,"dark"===s.tone?"pe-dark-tone":null,"light"===s.tone?"pe-light-tone":null,s.className||s[i.class]].join(" ")},i.onclick,function(e){e.target===a.el&&(s.modal||c(a,r({},s,{hideDelay:0})))}),s.formOptions?s.formOptions:null)},_=function(e,t){var n=t.renderer,o=t.Shadow,i=t.DialogPane,r=e.state,a=e.attrs;a.hideInstance&&c(r,a);var s=a.panes&&a.panes.length?a.panes[0]:n(i,{title:a.title,header:a.header,body:a.content||a.body||a.menu,footer:a.footer,footerButtons:a.footerButtons,className:a.className,style:a.style,fullBleed:a.fullBleed});return n("div",{className:[l.content,a.menu?l.menuContent:null].join(" "),style:a.style},[a.fullScreen?null:n(o,{z:void 0!==a.z?a.z:3,animated:!0}),s])},f=Object.freeze({getElement:a,getInitialState:u,onMount:d,onUnMount:p,createProps:h,createContent:_}),g=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},m={border_radius:n.vars.unit_block_border_radius,padding_vertical:3*n.vars.grid_unit_component,padding_horizontal:5*n.vars.grid_unit_component,color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_backdrop_background:"rgba(0, 0, 0, .5)",color_light_background:g(n.vars.color_light_background),color_dark_background:g(n.vars.color_dark_background),color_light_text:g(n.vars.color_light_foreground,n.vars.blend_light_text_regular),color_dark_text:g(n.vars.color_dark_foreground,n.vars.blend_dark_text_regular)},b={show:function(e){var t=e.el,n=e.showDuration,o=e.showDelay;return{el:t,showDuration:n||.22,showDelay:o||0,beforeShow:function(){return t.style.opacity=0},show:function(){return t.style.opacity=1}}},hide:function(e){var t=e.el,n=e.hideDuration,o=e.hideDelay;return{el:t,hideDuration:n||.22,hideDelay:o||0,hide:function(){return t.style.opacity=0}}}};e.coreDialogInstance=f,e.vars=m,e.transitions=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-dialog.js.map

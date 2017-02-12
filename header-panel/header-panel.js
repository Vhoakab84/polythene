'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),require('polythene/common/object.assign');var _polythene=require('polythene/polythene/polythene'),_polythene2=_interopRequireDefault(_polythene),_events=require('polythene/common/events'),_events2=_interopRequireDefault(_events),_mithril=require('mithril'),_mithril2=_interopRequireDefault(_mithril),_toolbar=require('polythene/toolbar/toolbar'),_toolbar2=_interopRequireDefault(_toolbar);require('polythene/header-panel/theme/theme');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var CSS_CLASSES={panel:'pe-header-panel',header:'pe-header',dropShadow:'pe-header-panel__drop-shadow',outerContainer:'pe-header-panel__outer-container',headerContainer:'pe-header-panel__header-container',backgroundContainer:'pe-header-panel__background-container',condensedBackground:'pe-header-panel__condensed-background',headerBackground:'pe-header-panel__header-background',mediaDimmer:'pe-header-panel__media-dimmer',mainContainer:'pe-header-panel__main-container',headerAnimated:'pe-header--animated',fixed:'pe-header-panel--fixed',cascaded:'pe-header-panel--cascaded',modeCover:'pe-header-panel--cover',modeScroll:'pe-header-panel--scroll',modeSeamed:'pe-header-panel--seamed',modeStandard:'pe-header-panel--standard',modeTall:'pe-header-panel--tall',modeWaterfallTall:'pe-header-panel--waterfall-tall',modeWaterfall:'pe-header-panel--waterfall',toolbar:'pe-toolbar',toolbarTopbar:'pe-toolbar__bar--top',headerTall:'pe-header--tall'},DEFAULT_SHADOW_HEIGTH=6,DEFAULT_HEADER_HEIGHT=192,DEFAULT_CONDENSED_HEADER_HEIGHT=DEFAULT_HEADER_HEIGHT/3,SCROLL_WATCH_TIMER=150,scroller,scrollPositions={},modeConfigs={shadowAfterScroll:{waterfall:1,'waterfall-tall':1},alwaysShadow:{standard:1,tall:1},noShadow:{seamed:1,cover:1,scroll:1},tallMode:{tall:!0,'waterfall-tall':!0},outerScroll:{scroll:1}},modeClasses={cover:CSS_CLASSES.modeCover,scroll:CSS_CLASSES.modeScroll,seamed:CSS_CLASSES.modeSeamed,standard:CSS_CLASSES.modeStandard,tall:CSS_CLASSES.modeTall,'waterfall-tall':CSS_CLASSES.modeWaterfallTall,waterfall:CSS_CLASSES.modeWaterfall},classForMode=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'standard';return modeClasses[a]},setTransform=document.documentElement.style.transform===void 0?function(a,b){a.webkitTransform=b}:function(a,b){a.transform=b},translateY=function(a,b){var c=null===b?'':'translate3d(0, '+b+'px, 0)';setTransform(a,c)},createHeaderComponent=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.tall||!1,c=a.tallClass||'',d=a.toolbar;return d?(d.class=[d.class||null,b?c:null].join(' '),d.topBar||(d.topBar={tag:'div',attrs:{},children:[]}),_mithril2.default.component(_toolbar2.default,d)):a.content?{tag:'div',attrs:{'class':[CSS_CLASSES.header,a.class||null,b?c:null,a.animated?CSS_CLASSES.headerAnimated:''].join(' ')},children:[a.content]}:(0,_mithril2.default)('div',a)},createViewHeader=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},d=b.header?createHeaderComponent(Object.assign({},b.header,a.headerConfig)):null;return{tag:'div',attrs:{'class':CSS_CLASSES.headerContainer,config:function initHeaderContainer(f,g){g||(a.headerContainerElem=f)}},children:[{tag:'div',attrs:{'class':CSS_CLASSES.backgroundContainer},children:[{tag:'div',attrs:{'class':CSS_CLASSES.condensedBackground},children:[]},{tag:'div',attrs:{'class':CSS_CLASSES.headerBackground},children:[]},{tag:'div',attrs:{'class':CSS_CLASSES.mediaDimmer},children:[]}]},d,'seamed'===a.mode||!1===a.shadow?null:{tag:'div',attrs:{'class':CSS_CLASSES.dropShadow},children:[]}]}},createViewContent=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return[{tag:'div',attrs:{'class':CSS_CLASSES.mainContainer,config:function initMainContainer(f,g){g||b.main&&(a.scrollerElem=f)},onscroll:function onscroll(f){b.main(f),_events2.default.emit('scroll',f),a.storeScrollPosition(f.target.scrollTop)}},children:[c.content?c.content:null]}]},createView=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};b.header=b.header||{},b.configs=b.configs||[],a.init(a);var c=b.updateContentOnScroll||!1,d=!c&&a.isScrolling,f=modeConfigs.outerScroll[a.mode]?'outer':'main',g=a.handleScroll.bind(a),i=createViewHeader(a,b),j=b.tag||'div',k={};k[f]=g;var m=Object.assign({},{class:[CSS_CLASSES.panel,a.fixed?CSS_CLASSES.fixed:null,classForMode(a.mode),b.class].join(' '),id:b.id||'',config:function config(o,p){p||(a.headerPanelElem=o)}}),n={tag:'div',attrs:{'class':CSS_CLASSES.outerContainer,config:function initOuterContainer(o,p){var q=o.querySelector('.'+CSS_CLASSES.header)||o.querySelector('.'+CSS_CLASSES.toolbar);if(q&&!(p&&a.headerElem)){var r=o.querySelector('.'+CSS_CLASSES.headerContainer),s=r.querySelector('.'+CSS_CLASSES.toolbarTopbar),u=r.querySelector('.'+CSS_CLASSES.headerBackground),v=r.querySelector('.'+CSS_CLASSES.condensedBackground);a.outerContainerElem=o,a.headerElem=q,a.headerTopBarElem=s,a.headerBg=u,a.condensedHeaderBg=v,b.animated||a.setHeight(r.clientHeight),k.outer&&(a.scrollerElem=o),a.restoreScrollPosition()}},onscroll:function onscroll(o){k.outer(o),_events2.default.emit('scroll',o)}},children:[i,d?{subtree:'retain'}:createViewContent(a,k,b)]};return(0,_mithril2.default)(j,m,[b.before,n,b.after])},component={controller:function controller(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=void 0,c=void 0,d=void 0,f=void 0,g=void 0,i=void 0,j=void 0;a.mode?c=a.mode:a.header&&a.header.toolbar?c=a.header.toolbar.mode:a.header&&a.header.content&&(c=a.header.mode),c=c||'standard';var k=modeConfigs.tallMode[c]||!1,l=a.tallClass||CSS_CLASSES.headerTall,m=a.animated||!1,n=a.fixed||!1,o=a.condenses||!1,p=a.scrollAwayTopbar||!1,q=a.noReveal||!1,r=a.keepCondensedHeader||!1,s=a.noDissolve||!1,u=void 0===a.backgroundScrollSpeed?0.5:a.backgroundScrollSpeed;d=0,f=!1,g=0;var v=DEFAULT_SHADOW_HEIGTH;j=(a.headerHeight||DEFAULT_HEADER_HEIGHT)+v;var w=(a.condensedHeaderHeight||DEFAULT_CONDENSED_HEADER_HEIGHT)+v;i=j-w;var z,x={standard:function standard(){},fixed:function fixed(){var A=0<b.scrollerElem.scrollTop;b.showShadow(A),f=A},animated:function animated(){var A=0<b.scrollerElem.scrollTop;if(A!==f){var B=b.headerElem;B&&k&&B.classList[A?'remove':'add'](l),b.showShadow(A),f=A}},dynamicHeader:function dynamicHeader(){var A,C,B=!1;return C=!b.scrollInited&&a.initialScrollPosition?a.initialScrollPosition:b.scrollerElem.scrollTop,!b.scrollInited&&a.initialPositionFixed?(g=C,void(d=0)):void(C<i?A=C:(A=Math.min(r?i:j,Math.max(0,q||r?C:d+C-g)),o&&g>=C&&C>i&&(A=Math.max(A,i))),0<C?b.transformHeader(A):_polythene2.default.isTouch&&b.enlargeImage(A),!modeConfigs.noShadow[a.mode]&&(C>A&&(B=!0),b.showShadow(B)),d=A,g=Math.max(C,0))}};return z=m?x.animated:'standard'===c?x.standard:n?x.fixed:x.dynamicHeader,{headerPanelElem:void 0,scrollerElem:void 0,outerContainerElem:void 0,headerContainerElem:void 0,headerTopBarElem:void 0,headerElem:void 0,headerBg:void 0,condensedHeaderBg:void 0,mode:c,fixed:n,shadow:void 0===a.shadow||a.shadow,scrollWatchId:0,isScrolling:!1,scrollInited:!1,headerConfig:{tall:k,tallClass:l,animated:m,fixed:n},init:function init(A){b=A},setHeight:function setHeight(A){if(void 0===a.headerHeight&&(j=A+v,i=j-w),!n){var B=b.outerContainerElem.querySelector('.'+CSS_CLASSES.mainContainer);B.style.paddingTop=A+'px'}q&&b.showShadow(!1)},handleScroll:function handleScroll(A){A&&(b.isScrolling=!0,scroller=b,clearTimeout(b.scrollWatchId),b.scrollWatchId=setTimeout(function(){b.isScrolling=!1,scroller=void 0},SCROLL_WATCH_TIMER)),'scroll'===c||(modeConfigs.alwaysShadow[c]&&b.showShadow(!0),z(),b.scrollInited=!0,A&&a.scroll&&a.scroll(A))},condenseHeader:function condenseHeader(A){var B=null===A;!p&&b.headerTopBarElem&&translateY(b.headerTopBarElem.style,Math.min(A,i));var C=b.headerBg.style;if(C&&(s||(C.opacity=B?'':(i-A)/i),translateY(C,B?null:A*u),!s)){var D=b.condensedHeaderBg.style;D.opacity=B?'':A/i,translateY(D,B?null:A*u)}},transformHeader:function transformHeader(A){0>A||(translateY(b.headerContainerElem.style,-A),o&&b.condenseHeader(A),a.transform&&a.transform({y:A,height:j,condensedHeight:w}))},enlargeImage:function enlargeImage(A){b.headerBg.style.height=100/j*(j+Math.abs(A/2))+'%'},showShadow:function showShadow(A){modeConfigs.alwaysShadow[c]&&(A=!0),b.outerContainerElem.classList[A?'add':'remove'](CSS_CLASSES.cascaded)},storeScrollPosition:function storeScrollPosition(A){a.restoreScrollPositionId&&(scrollPositions[a.restoreScrollPositionId]=A)},restoreScrollPosition:function restoreScrollPosition(){a.restoreScrollPositionId&&function(){var A=scrollPositions[a.restoreScrollPositionId];if(void 0!==A){var B=function restore(){return b.scrollerElem.scrollTop=A};B(),setTimeout(B,0)}}()}}},view:function view(a,b){return scroller&&scroller!==a?{subtree:'retain'}:createView(a,b)}};exports.default=component,module.exports=exports['default'];
//# sourceMappingURL=header-panel.js.map
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _mithril=require('mithril'),_mithril2=_interopRequireDefault(_mithril),_spinner=require('polythene/spinner/spinner'),_spinner2=_interopRequireDefault(_spinner);require('polythene/spinner/theme/ios/theme');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var CSS_CLASSES={block:'pe-spinner--ios'},component={view:function view(){for(var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=[],d=0;12>d;++d)c.push({tag:'div',attrs:{},children:[]});return b.content=c,b.class=[CSS_CLASSES.block,b.class].join(' '),_mithril2.default.component(_spinner2.default,b)}};exports.default=component,module.exports=exports['default'];
//# sourceMappingURL=ios-spinner.js.map
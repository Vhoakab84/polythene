'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),require('polythene/common/object.assign');var _config=require('polythene/config/config'),_config2=_interopRequireDefault(_config),_config3=require('polythene/spinner/theme/common/config'),_config4=_interopRequireDefault(_config3);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=Object.assign({},_config4.default,{border_width_small:3*(_config4.default.size_small/_config4.default.size_regular),border_width_regular:3,border_width_medium:3*(_config4.default.size_medium/_config4.default.size_regular),border_width_large:3*(_config4.default.size_large/_config4.default.size_regular),border_width_fab:3*(_config4.default.size_fab/_config4.default.size_regular),color_light:_config2.default.rgba(_config2.default.color_primary),color_dark:_config2.default.rgba(_config2.default.color_primary)}),module.exports=exports['default'];
//# sourceMappingURL=config.js.map
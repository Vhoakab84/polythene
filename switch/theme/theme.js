"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneSwitchThemeConfig=require("polythene/switch/theme/config");var _polytheneSwitchThemeConfig2=_interopRequireDefault(_polytheneSwitchThemeConfig);var _polytheneConfigCustom=require("polythene/config/custom");var _polytheneSwitchThemeLayout=require("polythene/switch/theme/layout");var _polytheneSwitchThemeLayout2=_interopRequireDefault(_polytheneSwitchThemeLayout);var _polytheneSwitchThemeColor=require("polythene/switch/theme/color");var _polytheneSwitchThemeColor2=_interopRequireDefault(_polytheneSwitchThemeColor);var _polytheneCommonStyler=require("polythene/common/styler");var _polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler);var config=_polytheneConfigCustom.checkbox?(0,_polytheneConfigCustom.checkbox)(_polytheneSwitchThemeConfig2["default"]):_polytheneSwitchThemeConfig2["default"];_polytheneCommonStyler2["default"].add("pe-switch",(0,_polytheneSwitchThemeLayout2["default"])(config),(0,_polytheneSwitchThemeColor2["default"])(config));
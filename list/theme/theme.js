"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneListThemeConfig=require("polythene/list/theme/config");var _polytheneListThemeConfig2=_interopRequireDefault(_polytheneListThemeConfig);var _polytheneConfigCustom=require("polythene/config/custom");var _polytheneListThemeLayout=require("polythene/list/theme/layout");var _polytheneListThemeLayout2=_interopRequireDefault(_polytheneListThemeLayout);var _polytheneListThemeColor=require("polythene/list/theme/color");var _polytheneListThemeColor2=_interopRequireDefault(_polytheneListThemeColor);var _polytheneCommonStyler=require("polythene/common/styler");var _polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler);var config=_polytheneConfigCustom.list?(0,_polytheneConfigCustom.list)(_polytheneListThemeConfig2["default"]):_polytheneListThemeConfig2["default"];_polytheneCommonStyler2["default"].add("pe-list",(0,_polytheneListThemeLayout2["default"])(config),(0,_polytheneListThemeColor2["default"])(config));
"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneSliderThemeConfig=require("polythene/slider/theme/config");var _polytheneSliderThemeConfig2=_interopRequireDefault(_polytheneSliderThemeConfig);var _polytheneConfigCustom=require("polythene/config/custom");var _polytheneSliderThemeLayout=require("polythene/slider/theme/layout");var _polytheneSliderThemeLayout2=_interopRequireDefault(_polytheneSliderThemeLayout);var _polytheneSliderThemeColor=require("polythene/slider/theme/color");var _polytheneSliderThemeColor2=_interopRequireDefault(_polytheneSliderThemeColor);var _polytheneCommonStyler=require("polythene/common/styler");var _polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler);var config=_polytheneConfigCustom.slider?(0,_polytheneConfigCustom.slider)(_polytheneSliderThemeConfig2["default"]):_polytheneSliderThemeConfig2["default"];_polytheneCommonStyler2["default"].add("pe-slider",(0,_polytheneSliderThemeLayout2["default"])(config),(0,_polytheneSliderThemeColor2["default"])(config));
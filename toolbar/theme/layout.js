"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneConfigConfig=require("polythene/config/config");var _polytheneConfigConfig2=_interopRequireDefault(_polytheneConfigConfig);var _polytheneCommonMixin=require("polythene/common/mixin");var _polytheneCommonMixin2=_interopRequireDefault(_polytheneCommonMixin);var _polytheneLayoutThemeFlex=require("polythene/layout/theme/flex");var _polytheneLayoutThemeFlex2=_interopRequireDefault(_polytheneLayoutThemeFlex);var createStyles=function createStyles(config){return[{".pe-toolbar":[_polytheneCommonMixin2["default"].vendorize({transform:"translate3d(0,0,0)"},_polytheneConfigConfig2["default"].prefixes_transform),{display:"block",position:"relative",height:config.height_normal+"px","font-size":config.font_size+"px","line-height":config.line_height+"em","background-color":"#CFD8DC","&.pe-header--animated":_polytheneCommonMixin2["default"].defaultAnimation("height",config.transition_duration,"ease-in"),"&.pe-header--medium-tall":{height:config.height_medium_tall+"px"},"&.pe-header--tall":{height:config.height_tall+"px"},"&.pe-toolbar--narrow":{height:config.height_narrow+"px"," .pe-toolbar__bar":{height:config.height_narrow+"px",padding:0}},"&.pe-toolbar--narrow.pe-header--medium-tall":{height:config.height_narrow_medium_tall+"px"},"&.pe-toolbar--narrow.pe-header--tall":{height:config.height_narrow_tall+"px"},"&.pe-header--tall .pe-toolbar__bar--middle":_polytheneCommonMixin2["default"].vendorize({transform:"translateY(100%)"},_polytheneConfigConfig2["default"].prefixes_transform)," .pe-toolbar__bar":[_polytheneLayoutThemeFlex2["default"].layout,_polytheneLayoutThemeFlex2["default"].layoutCenter,_polytheneLayoutThemeFlex2["default"].layoutHorizontal,{"> *:not(.disabled)":{"pointer-events":"auto"}},{"> :first-child":{"margin-left":config.margin_side+"px"}},{"> :last-child":{"margin-right":config.margin_side+"px"}},{" .pe-button--icon + span, .pe-button--icon + .pe-title":{"margin-left":config.indent-config.margin_side-_polytheneConfigConfig2["default"].grid_unit_icon_button+"px"}},{"> span:first-child, .pe-toolbar__title--indent":[_polytheneCommonMixin2["default"].ellipsis(),{"margin-left":config.indent+"px"}]},{"> span, > .pe-title":[_polytheneCommonMixin2["default"].ellipsis(),_polytheneCommonMixin2["default"].vendorize({"transform-origin":"left 50%"},_polytheneConfigConfig2["default"].prefixes_transform),{display:"block","line-height":_polytheneConfigConfig2["default"].line_height+"em"}]},{width:"100%",position:"relative",height:config.height_normal+"px","pointer-events":"none"," .pe-fit":[_polytheneCommonMixin2["default"].fit(),{width:"auto",margin:0,".bottom":{top:"auto"}}]," .pe-header":_polytheneCommonMixin2["default"].ellipsis(),"&.pe-toolbar__bar--middle":{position:"absolute",top:0,right:0,left:0},"&.pe-toolbar__bar--bottom":{position:"absolute",right:0,bottom:0,left:0}}]}]}]};exports["default"]=function(config){return _polytheneCommonMixin2["default"].createStyles(config,createStyles)};module.exports=exports["default"];
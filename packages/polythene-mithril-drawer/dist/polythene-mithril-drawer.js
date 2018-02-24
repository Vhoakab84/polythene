(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-drawer'), require('polythene-mithril-dialog')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-drawer', 'polythene-mithril-dialog'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-drawer'],global['polythene-mithril-dialog']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreDrawer,polytheneMithrilDialog) { 'use strict';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  push: "pe-drawer--push"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreDrawer.coreDrawer, { component: polytheneMithrilDialog.DialogInstance }));

var DrawerToggle = polytheneMithrilBase.StateComponent(polytheneCore.Conditional);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = {
  view: function view(vnode) {
    return polytheneMithrilBase.renderer(DrawerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance
    }));
  }
};

Drawer.displayName = "Drawer";

exports.Drawer = Drawer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-drawer.js.map
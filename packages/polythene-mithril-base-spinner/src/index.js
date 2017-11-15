import { StateComponent } from "polythene-mithril-base";
import { coreBaseSpinner as core } from "polythene-core-base-spinner";
import classes from "polythene-css-classes/base-spinner";
import { Shadow } from "polythene-mithril-shadow";

export const BaseSpinner = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow })),
  }
));

BaseSpinner.classes = classes;
BaseSpinner.displayName = "BaseSpinner";

import { ViewComponent } from "polythene-mithril-base";
import { coreToolbar as core } from "polythene-core-toolbar";

export const Toolbar = ViewComponent(Object.assign(
  {},
  core
));

Toolbar.theme = core.theme;
Toolbar.displayName = "Toolbar";
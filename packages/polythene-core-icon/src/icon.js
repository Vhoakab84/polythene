import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/icon";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const sizeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large
};

const classForSize = (size = "regular") => sizeClasses[size];

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        classForSize(attrs.size),
        attrs.avatar ? classes.avatar : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs.events
  );
};

export const createContent = (vnode, { renderer: h, SVG }) => {
  const attrs = vnode.attrs;
  return attrs.content
    ? attrs.content
    : attrs.svg
      ? h(SVG, attrs.svg)
      : attrs.src
        ? h("img", { src: attrs.src })
        : attrs.children || vnode.children;
};

/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import { menu as component } from "polythene-menu";

runSnapshots(tests);

describe("Menu component", () => {
  it("no options", () => {
    const cmp = m(component);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<span class=\"pe-menu--placeholder\"></span>");
  });
  // it("option id", () => {
  //   const cmp = m(component, {id: "id-x"});
  //   const html = tidy(cmp);
  //   expect(html).toContain("id=\"id-x\"");
  // });
  // it("option class", () => {
  //   const cmp = m(component, {class: "class-x"});
  //   const html = tidy(cmp);
  //   expect(html).toContain("class-x\">");
  // });
  // it("option element", () => {
  //   const cmp = m(component, {element: "span"});
  //   const html = tidy(cmp);
  //   expect(html).toContain("<span ");
  //   expect(html).toContain("</span>");
  // });
  // it("option tabindex", () => {
  //   const cmp = m(component, {tabindex: 3});
  //   const html = tidy(cmp);
  //   expect(html).toContain("tabindex=\"3\"");
  // });
  // it("option before", () => {
  //   const cmp = m(component, {before: m("span", "Before")});
  //   const html = tidy(cmp);
  //   expect(html).toContain("<span>Before</span>");
  // });
  // it("option after", () => {
  //   const cmp = m(component, {after: m("span", "After")});
  //   const html = tidy(cmp);
  //   expect(html).toContain("<span>After</span>");
  // });
});

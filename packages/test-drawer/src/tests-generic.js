import opener from "./components/opener";
import navigationList from "./components/navigation-list";
import permanent from "./components/permanent";
import { DrawerCSS } from "polythene-css";

export default ({ keys, renderer, Drawer, RaisedButton, List, ListTile, Icon }) => {

  const createContent = ({ isLong, onClick }) => navigationList({ renderer, keys, Icon, List, ListTile, isLong, onClick });

  DrawerCSS.addStyle(".drawer-tests-small", {
    content_max_width: 220,
  });

  return [
    {
      name: "Permanent, floating, no shadow",
      component: permanent({ renderer, Drawer, createContent, drawerOpts: {
        z: 0
      } })
    },
    {
      name: "Permanent, floating, with shadow depth 1",
      component: permanent({ renderer, Drawer, createContent, drawerOpts: {
        z: 1
      } })
    },
    {
      name: "Sliding drawer (slide over from left, with backdrop, can be closed with ESCAPE)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, createContent, drawerOpts: {
        backdrop: true,
      }})
    },
    {
      name: "Sliding drawer (modal, cannot be closed with ESCAPE or backdrop tap)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, createContent, drawerOpts: {
        backdrop: true,
        modal: true,
      }})
    },
    {
      name: "Pushing drawer (push from left, without shadow, bordered, themed small width)",
      interactive: true,
      exclude: true,
      component: opener({ renderer, keys, Drawer, RaisedButton, createContent, drawerOpts: {
        push: true,
        z: 0,
        className: "drawer-tests-small",
        bordered: true,
      }})
    },
    
  ];
};
import stream from "mithril/stream";

export default ({ h, k, RaisedButton, Switch }) => ({
  oninit: vnode => {
    const checked = stream(false);
    Object.assign(vnode.state, {
      checked,
      redrawOnUpdate: stream.merge([checked])
    });
  },
  view: vnode => {
    const state = vnode.state;
    const checked = state.checked();
    return h("div", [
      h(Switch, {
        onChange: newState => state.checked(newState.checked),
        checked
      }),
      h("div", {
        style: {
          marginTop: "1rem"
        }
      }, h(RaisedButton, {
        label: "Toggle",
        events: {
          [k.onclick]: () => state.checked(!checked)
        }
      }))
    ]);
  }
});

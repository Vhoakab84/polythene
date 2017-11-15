import React from "react";
import { Dialog, RaisedButton, List, ListTile } from "polythene-react";

const Tile = ({ title, selected, disabled }) =>
  <ListTile
    title={title}
    selected={selected}
    disabled={disabled}
    ink
    events={{
      onClick: () => {
        if (!disabled) {
          Dialog.hide();
        }
      }
    }}
  />;

const dialogOptions = {
  menu: <List
    hoverable
    tiles={[
      <Tile key="one" title="Item one" selected={true} disabled={false} />,
      <Tile key="two" title="Item two" selected={false} disabled={false} />,
      <Tile key="three" title="Item three" selected={false} disabled={true} />
    ]}
  />,
  hideDelay: .240
};

export default () => 
  <RaisedButton
    label="Open Menu Dialog"
    events={{
      onClick: () => Dialog.show(dialogOptions)
    }}
  />;

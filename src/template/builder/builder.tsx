import React, { useState, CSSProperties } from "react";
import { Component } from "../../component";
import { Template, Item } from "../types";

import { components } from "../../component";

import Grid from "@material-ui/core/Grid";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import { Web } from "../../renderer/web";
import { Settings } from "./settings";

const styles: Record<string, CSSProperties> = {
  page: {
    background: "white",
    margin: "2rem",
    width: "210mm",
    boxShadow: "0px 0px 1rem 0px rgba(0,0,0,0.15)",
    outline: "none"
  },
  btnAddItem: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem"
  }
};

interface Props {
  template: Template;
  setTemplateItemValue: (id: string, value: string) => void;
  addItem: (component: Component, after?: Item) => Item;
  removeItem: (item: Item) => void;
}

export const Builder: React.SFC<Props> = ({
  template,
  setTemplateItemValue,
  addItem,
  removeItem
}) => {
  const [activeItemID, setActiveItemID] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeItem = activeItemID
    ? template.items.find(item => item.id === activeItemID)
    : undefined;

  const onClickItem = (item: Item) => {
    if (activeItem && activeItem.value === "") {
      removeItem(activeItem);
    }
    setActiveItemID(item.id);
  };

  const onClickAddItem = (component: Component) => () => {
    const item = addItem(component, activeItem);
    setActiveItemID(item.id);
  };

  return (
    <Grid container>
      <Settings item={activeItem} />
      <Grid
        container
        justify="center"
        alignContent="center"
        style={{
          paddingLeft: "300px",
          width: "calc(100%-300px)"
        }}
      >
        <Web
          template={template}
          activeItem={activeItem}
          onChangeItemValue={setTemplateItemValue}
          onClickItem={onClickItem}
        />
        <SpeedDial
          style={styles.btnAddItem}
          ariaLabel="Add"
          icon={<SpeedDialIcon />}
          direction="up"
          open={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {components.map(component => {
            return (
              <SpeedDialAction
                key={component.id}
                icon={<component.Icon />}
                tooltipTitle={component.name}
                onClick={onClickAddItem(component)}
              />
            );
          })}
        </SpeedDial>
      </Grid>
    </Grid>
  );
};

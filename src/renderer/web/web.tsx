import React, { CSSProperties } from "react";
import { Template, Item, ItemID } from "../../template";

import { componentsByID } from "../../component";

import Grid from "@material-ui/core/Grid";

const styles: Record<string, CSSProperties> = {
  page: {
    background: "white",
    boxShadow: "0px 0px 1rem 0px rgba(0,0,0,0.15)",
    outline: "none"
  }
};

interface Props<T> {
  template: Template;
  activeItem?: Item<T>;
  onChangeItemValue: (item: Item<T>, value: T) => void;
  onClickItem: (item: Item<T>) => void;
}

export const Web: React.SFC<Props<any>> = ({
  template,
  activeItem,
  onChangeItemValue,
  onClickItem
}) => {
  const { page } = template;
  return (
    <Grid
      item
      style={{
        ...styles.page,
        width: dimension(page.size.width),
        paddingLeft: dimension(page.margin.left),
        paddingTop: dimension(page.margin.top),
        paddingRight: dimension(page.margin.right),
        paddingBottom: dimension(page.margin.bottom)
      }}
    >
      <React.Fragment>
        {template.items.map(item => {
          const component = componentsByID[item.component];
          if (!component.Web) {
            return null;
          }
          return (
            <component.Web
              key={item.id}
              value={item.value}
              onChange={v => onChangeItemValue(item, v)}
              onClick={() => onClickItem(item)}
            />
          );
        })}
      </React.Fragment>
    </Grid>
  );
};

function dimension(value: number): string {
  return value + "mm";
}

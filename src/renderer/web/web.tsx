import React, { CSSProperties } from "react";
import { Template, Item, ItemID } from "../../template";

import { componentsByID } from "../../component";

import Grid from "@material-ui/core/Grid";

const styles: Record<string, CSSProperties> = {
  page: {
    background: "white",
    margin: "2rem",
    width: "210mm",
    boxShadow: "0px 0px 1rem 0px rgba(0,0,0,0.15)",
    outline: "none"
  }
};

interface Props<T> {
  template: Template;
  activeItem?: Item<T>;
  onChangeItemValue: (id: ItemID, value: T) => void;
  onClickItem: (item: Item<T>) => void;
}

export const Web: React.SFC<Props<any>> = ({
  template,
  activeItem,
  onChangeItemValue,
  onClickItem
}) => {
  return (
    <Grid
      item
      style={{
        ...styles.page,
        paddingLeft: template.page.margin.left + "mm",
        paddingTop: template.page.margin.top + "mm",
        paddingRight: template.page.margin.right + "mm",
        paddingBottom: template.page.margin.bottom + "mm"
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
              onChange={v => onChangeItemValue(item.id, v)}
              onClick={() => onClickItem(item)}
            />
          );
        })}
      </React.Fragment>
    </Grid>
  );
};

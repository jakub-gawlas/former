import React from "react";
import { Item } from "../types";

import { componentsByID } from "../../component";

import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

interface Props {
  item?: Item<any>;
}

export const Settings: React.SFC<Props> = ({ item }) => {
  return (
    <Drawer variant="permanent" open>
      <Grid
        container
        direction="column"
        style={{ width: "300px", margin: "1rem" }}
      >
        {item ? (
          <React.Fragment>
            <Grid item>
              <Typography variant="overline" color="textSecondary">
                #{item.id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">{item.component}</Typography>
            </Grid>
            <Divider
              variant="fullWidth"
              style={{
                margin: "1rem"
              }}
            />
            {(() => {
              const component = componentsByID[item.component];
              if (!component) {
                return null;
              }
              return <component.Settings item={item} />;
            })()}
          </React.Fragment>
        ) : (
          <Grid item>
            <Typography variant="overline" color="textSecondary" align="center">
              SELECT ITEM
            </Typography>
          </Grid>
        )}
      </Grid>
    </Drawer>
  );
};

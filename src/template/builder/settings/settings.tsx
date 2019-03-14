import React from "react";
import { Item, Template } from "../../types";

import { componentsByID } from "../../../component";

import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { PageSettings } from "./page";

interface Props {
  template: Template;
  activeItem?: Item<any>;
}

export const Settings: React.SFC<Props> = ({ template, activeItem }) => {
  return (
    <Drawer variant="permanent" open>
      <Grid
        container
        direction="column"
        style={{ width: "300px", margin: "1rem" }}
      >
        {activeItem ? (
          <React.Fragment>
            <Grid item>
              <Typography variant="overline" color="textSecondary">
                #{activeItem.id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">{activeItem.component}</Typography>
            </Grid>
            <Divider
              variant="fullWidth"
              style={{
                margin: "1rem"
              }}
            />
            {(() => {
              const component = componentsByID[activeItem.component];
              if (!component) {
                return null;
              }
              return <component.Settings item={activeItem} />;
            })()}
          </React.Fragment>
        ) : (
          <Grid item>
            <PageSettings />
          </Grid>
        )}
      </Grid>
    </Drawer>
  );
};

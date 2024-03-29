import React from "react";
import { SettingsProps } from "../types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Value } from "../paragraph/types";

export const HeadingSettings: React.SFC<SettingsProps<Value>> = ({ item }) => {
  return (
    <Grid container>
      <Typography variant="body1" color="primary">
        {item.value}
      </Typography>
    </Grid>
  );
};

import React from "react";
import { SettingsProps } from "../types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const ParagraphSettings: React.SFC<SettingsProps> = ({ item }) => {
  return (
    <Grid container>
      <Typography variant="body1" color="secondary">
        {item.value}
      </Typography>
    </Grid>
  );
};

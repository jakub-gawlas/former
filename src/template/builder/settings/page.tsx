import React from "react";

import { context } from "../../../context";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MeasurementField } from "./components/measurement";

export const PageSettings: React.SFC<{}> = () => {
  return (
    <context.Consumer>
      {({ template }) => {
        if (!template) {
          return null;
        }

        const { page } = template.state;
        const { actions } = template;

        return (
          <Grid container direction="column" justify="center">
            <Typography variant="overline" color="textSecondary" align="center">
              SIZE
            </Typography>
            <MeasurementField
              label="Width"
              value={page.size.width}
              onChange={actions.setPageSizeWidth}
            />
            <MeasurementField
              label="Height"
              value={page.size.height}
              onChange={actions.setPageSizeHeight}
            />
            <Typography
              variant="overline"
              color="textSecondary"
              align="center"
              style={{
                marginTop: "1.5rem"
              }}
            >
              MARGIN
            </Typography>
            <MeasurementField
              label="Left"
              value={page.margin.left}
              onChange={actions.setPageMarginLeft}
            />
            <MeasurementField
              label="Top"
              value={page.margin.top}
              onChange={actions.setPageMarginTop}
            />
            <MeasurementField
              label="Right"
              value={page.margin.right}
              onChange={actions.setPageMarginRight}
            />
            <MeasurementField
              label="Bottom"
              value={page.margin.bottom}
              onChange={actions.setPageMarginBottom}
            />
          </Grid>
        );
      }}
    </context.Consumer>
  );
};

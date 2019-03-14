import React from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {
  value: number;
  label: string;
  onChange?: (value: number) => void;
}

export const MeasurementField: React.SFC<Props> = ({
  value,
  label,
  onChange
}) => {
  return (
    <TextField
      style={{
        margin: "0.5rem"
      }}
      variant="standard"
      label={label}
      value={value}
      onChange={
        onChange
          ? e => {
              const str = e.target.value;
              if (str === "") {
                onChange(0);
                return;
              }
              const v = parseInt(e.target.value);
              !Number.isNaN(v) && onChange(v);
            }
          : undefined
      }
      InputProps={{
        endAdornment: <InputAdornment position="end">mm</InputAdornment>
      }}
    />
  );
};

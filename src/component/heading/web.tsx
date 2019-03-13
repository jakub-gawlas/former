import React from "react";
import { WebProps } from "../types";
import { Value } from "./types";

import { View, Text } from "../base";

const styles = {
  container: {
    paddingTop: 15,
    paddingBottom: 15
  },
  text: {
    fontWeight: 600,
    fontSize: "22pt"
  }
};

export const HeadingWeb: React.SFC<WebProps<Value>> = ({
  value,
  onChange,
  onClick
}) => (
  <View style={styles.container} onClick={onClick}>
    <Text style={styles.text} value={value} onChange={onChange} />
  </View>
);

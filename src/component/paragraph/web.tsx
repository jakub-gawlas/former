import React, { SFC } from "react";
import { WebProps } from "../types";
import { Value } from "./types";

import { View, Text } from "../base";

const styles = {
  paragraph: {
    fontWeight: 400,
    fontSize: "12pt",
    textIndent: "30pt",
    textAlign: "justify",
    paddingTop: 5,
    paddingBottom: 5
  }
};

export const ParagraphWeb: SFC<WebProps<Value>> = ({
  value,
  onChange,
  onClick
}) => (
  <View onClick={onClick}>
    <Text style={styles.paragraph} value={value} onChange={onChange} />
  </View>
);

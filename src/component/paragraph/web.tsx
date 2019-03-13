import React, { SFC } from "react";
import { RenderProps } from "../types";

import { View, Text } from "../base";

const styles = {
  paragraph: {
    fontWeight: 400,
    fontSize: "12pt",
    textIndent: "30pt",
    outline: "none",
    textAlign: "justify",
    paddingTop: 5,
    paddingBottom: 5
  }
};

export const ParagraphWeb: SFC<RenderProps> = ({
  value,
  onChange,
  onClick
}) => (
  <View onClick={onClick}>
    <Text style={styles.paragraph} value={value} onChange={onChange} />
  </View>
);

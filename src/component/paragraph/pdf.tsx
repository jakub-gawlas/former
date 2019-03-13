import React, { SFC } from "react";
import { PDFProps } from "../types";
import { Value } from "./types";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  paragraph: {
    fontWeight: 400,
    fontSize: "12pt",
    textIndent: "30pt",
    textAlign: "justify",
    paddingTop: 5,
    paddingBottom: 5
  }
});

export const ParagraphPDF: SFC<PDFProps<Value>> = ({ value }) => (
  <View>
    <Text style={styles.paragraph}>{value}</Text>
  </View>
);

import React from "react";
import { PDFProps } from "../types";
import { Value } from "./types";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15
  },
  text: {
    fontWeight: 600,
    fontSize: "22pt"
  }
});

export const HeadingPDF: React.SFC<PDFProps<Value>> = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

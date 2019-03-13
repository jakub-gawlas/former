import React from "react";
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

interface Props {
  value: string;
}

export const HeadingPDF: React.SFC<Props> = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

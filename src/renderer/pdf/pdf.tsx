import React from "react";
import { Template } from "../../template";

import { componentsByID } from "../../component";

import { Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    background: "white",
    paddingHorizontal: "10mm"
  }
});

interface Props {
  template: Template;
}

export const PDF: React.SFC<Props> = ({ template }) => {
  return (
    <Document>
      <Page style={styles.page}>
        {template.items.map(item => {
          const component = componentsByID[item.component];
          if (!component.Web) {
            return null;
          }
          return <component.PDF key={item.id} value={item.value} />;
        })}
      </Page>
    </Document>
  );
};

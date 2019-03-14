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
  const { page } = template;
  const pageStyle = {
    ...styles.page,
    paddingLeft: mm(page.margin.left),
    paddingTop: mm(page.margin.top),
    paddingRight: mm(page.margin.right),
    paddingBottom: mm(page.margin.bottom)
  };
  return (
    <Document>
      <Page
        size={{
          width: mmToPix(page.size.width),
          height: mmToPix(page.size.height)
        }}
        style={pageStyle}
      >
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

const DPI = 72;
const Inch = 25.4; // mm
function mmToPix(mm: number): number {
  return (mm * DPI) / Inch;
}

function mm(v: number): string {
  return v + "mm";
}

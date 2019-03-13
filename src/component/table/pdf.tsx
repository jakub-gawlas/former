import React, { SFC, CSSProperties } from "react";
import { PDFProps } from "../types";
import { Value } from "./types";
import { View, Text } from "@react-pdf/renderer";

const styles: Record<string, CSSProperties> = {
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tr: {
    margin: "auto",
    flexDirection: "row"
  },
  td: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tt: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10
  }
};

interface WithStyle {
  style?: CSSProperties;
}

const joinStyle = (a, b) => {
  return b ? { ...a, ...b } : a;
};

const Table: SFC<WithStyle> = ({ children, style }) => {
  return <View style={joinStyle(styles.table, style)}>{children}</View>;
};

const TR: SFC<WithStyle> = ({ children, style }) => {
  return <View style={joinStyle(styles.tr, style)}>{children}</View>;
};

const TD: SFC<WithStyle> = ({ children, style }) => {
  return <View style={joinStyle(styles.td, style)}>{children}</View>;
};

const TT: SFC<WithStyle> = ({ children, style }) => {
  return <Text style={joinStyle(styles.tt, style)}>{children}</Text>;
};

export const TablePDF: SFC<PDFProps<Value>> = ({ value }) => {
  const cellStyle = {
    width: `${100 / value.columns.length}%`
  };
  return (
    <Table>
      <TR>
        {value.columns.map((column, i) => {
          return (
            <TD key={i} style={cellStyle}>
              <TT>{column.title}</TT>
            </TD>
          );
        })}
      </TR>
      {value.rows.map((row, i) => {
        return (
          <TR key={i}>
            {row.cells.map((cell, i) => {
              return (
                <TD key={i} style={cellStyle}>
                  <TT>{cell.value}</TT>
                </TD>
              );
            })}
          </TR>
        );
      })}
    </Table>
  );
};

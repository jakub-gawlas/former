import React, { SFC } from "react";
import { WebProps } from "../types";
import { Value } from "./types";

import { Text } from "../base";

export const TableWeb: SFC<WebProps<Value>> = ({
  value,
  onChange,
  onClick
}) => {
  const onChangeColumnTitle = (index: number, title: string) => {
    value.columns[index].title = title;
    onChange(value);
  };

  const onChangeCellValue = (row: number, column: number, val: string) => {
    value.rows[row].cells[column].value = val;
    onChange(value);
  };

  const cellStyle = {
    width: `${100 / value.columns.length}%`,
    border: "1px solid black"
  };

  return (
    <table
      onClick={onClick}
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid black"
      }}
    >
      <tbody>
        <tr>
          {value.columns.map((column, i) => {
            return (
              <td style={cellStyle} key={i}>
                <Text
                  value={column.title}
                  onChange={v => onChangeColumnTitle(i, v)}
                />
              </td>
            );
          })}
        </tr>
        {value.rows.map((row, i) => {
          return (
            <tr style={{ padding: 0 }} key={i}>
              {row.cells.map((cell, j) => {
                return (
                  <td style={cellStyle} key={j}>
                    <Text
                      value={cell.value}
                      onChange={v => onChangeCellValue(i, j, v)}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

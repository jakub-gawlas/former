import { Value } from "./types";
import { Component, ComponentID } from "../types";

import { TableWeb } from "./web";
import { TablePDF } from "./pdf";
import { TableSettings } from "./settings";
import TableIcon from "@material-ui/icons/TableChart";

export const Table: Component<Value> = {
  id: ComponentID.Table,
  defaultValue: {
    columns: [{ title: "Foo" }, { title: "Bar" }, { title: "Baz" }],
    rows: [
      {
        cells: [
          { value: "foo foo" },
          {
            value:
              "bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar"
          },
          { value: "baz baz" }
        ]
      },
      {
        cells: [
          { value: "foo foo foo" },
          { value: "bar bar" },
          { value: "baz baz baz" }
        ]
      },
      { cells: [{ value: "foo" }, { value: "bar bar" }, { value: "baz baz" }] }
    ]
  },
  name: "Table",
  Icon: TableIcon,
  Web: TableWeb,
  PDF: TablePDF,
  Settings: TableSettings
};

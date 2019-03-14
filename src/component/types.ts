import { SFC, ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { Item } from "../template";

export interface Component<T> {
  id: ComponentID;
  name: string;
  defaultValue: () => T;
  Icon: ComponentType<SvgIconProps>;
  Web: SFC<WebProps<any>>;
  PDF: SFC<PDFProps<any>>;
  Settings: SFC<SettingsProps<any>>;
}

export interface WebProps<T> {
  value: T;
  onChange: (value: T) => void;
  onClick: () => void;
}

export interface PDFProps<T> {
  value: T;
}

export interface SettingsProps<T> {
  item: Item<T>;
}

export enum ComponentID {
  Heading = "heading",
  Paragraph = "paragraph",
  Table = "table"
}

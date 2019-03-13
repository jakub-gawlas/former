import { SFC, ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { Item } from "../template";

export interface Component {
  id: ComponentID;
  name: string;
  defaultValue: string;
  Icon: ComponentType<SvgIconProps>;
  Web: SFC<RenderProps>;
  PDF: SFC<RenderProps>;
  Settings: SFC<SettingsProps>;
}

export interface RenderProps {
  value: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}

export interface SettingsProps {
  item: Item;
}

export enum ComponentID {
  Heading = "heading",
  Paragraph = "paragraph"
}

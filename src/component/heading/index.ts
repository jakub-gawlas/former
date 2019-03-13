import { Value } from "./types";
import { Component, ComponentID } from "../types";

import { HeadingWeb } from "./web";
import { HeadingPDF } from "./pdf";
import { HeadingSettings } from "./settings";
import TitleIcon from "@material-ui/icons/Title";

export const Heading: Component<Value> = {
  id: ComponentID.Heading,
  defaultValue: "Title",
  name: "Title",
  Icon: TitleIcon,
  Web: HeadingWeb,
  PDF: HeadingPDF,
  Settings: HeadingSettings
};

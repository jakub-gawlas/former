import { Value } from "./types";
import { Component, ComponentID } from "../types";

import { ParagraphWeb } from "./web";
import { ParagraphPDF } from "./pdf";
import { ParagraphSettings } from "./settings";
import NotesIcon from "@material-ui/icons/Notes";

export const Paragraph: Component<Value> = {
  id: ComponentID.Paragraph,
  defaultValue: () =>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id elit hendrerit nibh consectetur luctus. Duis vitae maximus massa.",
  name: "Paragraph",
  Icon: NotesIcon,
  Web: ParagraphWeb,
  PDF: ParagraphPDF,
  Settings: ParagraphSettings
};

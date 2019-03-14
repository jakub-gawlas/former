import { ComponentID, componentsByID } from "../../component";
import { Template, randID } from "../types";

const items = [
  {
    id: randID(),
    component: ComponentID.Heading
  },
  {
    id: randID(),
    component: ComponentID.Paragraph
  },
  {
    id: randID(),
    component: ComponentID.Heading
  },
  {
    id: randID(),
    component: ComponentID.Paragraph
  },
  {
    id: randID(),
    component: ComponentID.Table
  },
  {
    id: randID(),
    component: ComponentID.Heading
  },
  {
    id: randID(),
    component: ComponentID.Paragraph
  }
].map(component => ({
  ...component,
  value: componentsByID[component.component].defaultValue
}));

export const initialState: Template = {
  page: {
    size: {
      width: 210,
      height: 297
    },
    margin: {
      left: 15,
      top: 25,
      right: 15,
      bottom: 25
    }
  },
  items
};

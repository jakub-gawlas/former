import { ComponentID } from "../component";

export interface Template {
  page: Page;
  items: Item[];
}

export interface Page {
  margin: Margin;
}

export interface Margin {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface Item {
  id: ItemID;
  component: ComponentID;
  value: string;
}

export type ItemID = string;

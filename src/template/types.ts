import { ComponentID } from "../component";

export interface Template {
  page: Page;
  items: Item<any>[];
}

export interface Page {
  size: Size;
  margin: Margin;
}

export interface Size {
  // values in mm
  width: number;
  height: number;
}

export interface Margin {
  // values in mm
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface Item<T> {
  id: ItemID;
  component: ComponentID;
  value: T;
}

export type ItemID = string;

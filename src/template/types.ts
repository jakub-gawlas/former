import { ComponentID } from "../component";

export interface Template {
  page: Page;
  items: Item<any>[];
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

export interface Item<T> {
  id: ItemID;
  component: ComponentID;
  value: T;
}

export type ItemID = string;

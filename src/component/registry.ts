import { Component, ComponentID } from "./types";

// Components
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { Table } from "./table";

export const components: Component<any>[] = [Heading, Paragraph, Table];

export const componentsByID = components.reduce((result, component) => {
  result[component.id] = component;
  return result;
}, {}) as Record<ComponentID, Component<any>>;

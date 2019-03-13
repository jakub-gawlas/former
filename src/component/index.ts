import { Component, ComponentID } from "./types";

// Component
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

export const components: Component[] = [Heading, Paragraph];

export const componentsByID = components.reduce((result, component) => {
  result[component.id] = component;
  return result;
}, {}) as Record<ComponentID, Component>;

export * from "./types";

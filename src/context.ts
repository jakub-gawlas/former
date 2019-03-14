import { createContext } from "react";
import { Template, createActions } from "./template";

export interface Context {
  template?: {
    state: Template;
    actions: ReturnType<typeof createActions>;
  };
}

export const context = createContext<Context>({});

import { Template, Item } from "../types";
import { Type } from "./type";
import * as action from "./action";

type ReduceFunction = (payload: any) => Template;

export const createReducer = () => (
  state: Template,
  action: action.ValidAction
): Template => {
  const reduceFunctions: Record<Type, ReduceFunction> = {
    [Type.SetPageSizeWidth]: (payload: action.SetMeasurementPayload) => {
      const page = { ...state.page };
      page.size.width = payload;
      return { ...state, page };
    },
    [Type.SetPageSizeHeight]: (payload: action.SetMeasurementPayload) => {
      const page = { ...state.page };
      page.size.height = payload;
      return { ...state, page };
    },
    [Type.SetPageMarginLeft]: (payload: action.SetMeasurementPayload) => {
      const page = { ...state.page };
      page.margin.left = payload;
      return { ...state, page };
    },
    [Type.SetPageMarginTop]: (payload: action.SetMeasurementPayload) => {
      const page = { ...state.page };
      page.margin.top = payload;
      return { ...state, page };
    },
    [Type.SetPageMarginRight]: (payload: action.SetMeasurementPayload) => {
      const page = { ...state.page };
      page.margin.right = payload;
      return { ...state, page };
    },
    [Type.SetPageMarginBottom]: (payload: action.SetMeasurementPayload) => {
      const page = { ...state.page };
      page.margin.bottom = payload;
      return { ...state, page };
    },
    [Type.AddTemplateItem]: (payload: action.AddTemplateItemPayload) => {
      const items: Item<any>[] = [];
      state.items.forEach(i => {
        items.push(i);
        if (payload.after && i.id === payload.after.id) {
          items.push(payload.item);
        }
      });
      if (!payload.after) {
        items.push(payload.item);
      }
      return { ...state, items };
    },
    [Type.RemoveTemplateItem]: (payload: action.RemoveTemplateItemPayload) => {
      const items = state.items.filter(i => payload.id !== i.id);
      return { ...state, items };
    },
    [Type.RemoveTemplateItem]: (payload: action.RemoveTemplateItemPayload) => {
      const items = state.items.map(item => {
        if (item.id === payload.id) {
          item.value = payload.value;
        }
        return item;
      });
      return { ...state, items };
    },
    [Type.SetTemplateItemValue]: (
      payload: action.SetTemplateItemValuePayload
    ) => {
      const items = state.items.map(item => {
        if (item.id === payload.id) {
          item.value = payload.value;
        }
        return item;
      });
      return { ...state, items };
    }
  };

  const fn = reduceFunctions[action.type];
  return fn ? fn(action.payload) : state;
};

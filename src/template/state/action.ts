import { Dispatch } from "react";
import { Component, componentsByID } from "../../component";
import { Item, ItemID, randID } from "../types";
import { Type } from "./type";

export interface Action<T, P> {
  type: T;
  payload: P;
}

export type ValidAction =
  | Action<Type.SetPageSizeWidth, SetMeasurementPayload>
  | Action<Type.SetPageSizeHeight, SetMeasurementPayload>
  | Action<Type.SetPageMarginLeft, SetMeasurementPayload>
  | Action<Type.SetPageMarginTop, SetMeasurementPayload>
  | Action<Type.SetPageMarginRight, SetMeasurementPayload>
  | Action<Type.SetPageMarginBottom, SetMeasurementPayload>
  | Action<Type.AddTemplateItem, AddTemplateItemPayload>
  | Action<Type.RemoveTemplateItem, RemoveTemplateItemPayload>
  | Action<Type.SetTemplateItemValue, SetTemplateItemValuePayload>;

/** Payload types */
export type SetMeasurementPayload = number;

export interface AddTemplateItemPayload {
  item: Item<any>;
  after?: Item<any>;
}

export type RemoveTemplateItemPayload = Item<any>;

export interface SetTemplateItemValuePayload {
  id: ItemID;
  value: any;
}

/** Actions */
export const createActions = (dispatch: Dispatch<ValidAction>) => {
  const measurementAction = measurementActionCreator(dispatch);
  return {
    setPageSizeWidth: measurementAction(Type.SetPageSizeWidth),
    setPageSizeHeight: measurementAction(Type.SetPageSizeHeight),
    setPageMarginLeft: measurementAction(Type.SetPageMarginLeft),
    setPageMarginTop: measurementAction(Type.SetPageMarginTop),
    setPageMarginRight: measurementAction(Type.SetPageMarginRight),
    setPageMarginBottom: measurementAction(Type.SetPageMarginBottom),
    addTemplateItem: (component: Component<any>, after?: Item<any>) => {
      const item: Item<any> = {
        id: randID(),
        component: component.id,
        value: componentsByID[component.id].defaultValue
      };
      const action: ValidAction = {
        type: Type.AddTemplateItem,
        payload: { item, after }
      };
      dispatch(action);
      return item;
    },
    removeTemplateItem: (item: Item<any>) => {
      const action: ValidAction = {
        type: Type.RemoveTemplateItem,
        payload: item
      };
      dispatch(action);
    },
    setTemplateItemValue: (item: Item<any>, value: any) => {
      const action: ValidAction = {
        type: Type.SetTemplateItemValue,
        payload: {
          id: item.id,
          value
        }
      };
      dispatch(action);
    }
  };
};

function measurementActionCreator(
  dispatch: Dispatch<Action<any, SetMeasurementPayload>>
) {
  return (type: Type) => {
    return (value: number) => {
      const action: Action<any, SetMeasurementPayload> = {
        type,
        payload: value
      };
      dispatch(action);
    };
  };
}

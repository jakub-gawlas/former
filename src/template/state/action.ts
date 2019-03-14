import { Dispatch } from "react";
import { Component, componentsByID } from "../../component";
import { Item, ItemID, randID } from "../types";
import { Type } from "./type";

export interface Action<T> {
  type: Type;
  payload: T;
}

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
const measurementActionCreator = (dispatch: Dispatch<Action<any>>) => (
  type: Type
) => {
  return (value: number) => {
    const action: Action<SetMeasurementPayload> = {
      type: type,
      payload: value
    };
    dispatch(action);
  };
};

export const createActions = (dispatch: Dispatch<Action<any>>) => {
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
      const action: Action<AddTemplateItemPayload> = {
        type: Type.AddTemplateItem,
        payload: { item, after }
      };
      dispatch(action);
      return item;
    },
    removeTemplateItem: (item: Item<any>) => {
      const action: Action<RemoveTemplateItemPayload> = {
        type: Type.RemoveTemplateItem,
        payload: item
      };
      dispatch(action);
    },
    setTemplateItemValue: (item: Item<any>, value: any) => {
      const action: Action<SetTemplateItemValuePayload> = {
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

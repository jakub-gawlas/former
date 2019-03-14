import { Dispatch } from "react";
import { Component, ComponentID, componentsByID } from "../component";
import { Template, ItemID, Item } from "./types";

interface Action<T> {
  type: Type;
  payload: T;
}

enum Type {
  SetPageSizeWidth = "SET_PAGE_SIZE_WIDTH",
  SetPageSizeHeight = "SET_PAGE_SIZE_HEIGHT",
  SetPageMarginLeft = "SET_PAGE_MARGIN_LEFT",
  SetPageMarginTop = "SET_PAGE_MARGIN_TOP",
  SetPageMarginRight = "SET_PAGE_MARGIN_RIGHT",
  SetPageMarginBottom = "SET_PAGE_MARGIN_BOTTOM",
  AddTemplateItem = "ADD_TEMPLATE_ITEM",
  RemoveTemplateItem = "REMOVE_TEMPLATE_ITEM",
  SetTemplateItemValue = "SET_TEMPLATE_ITEM_VALUE"
}

type SetMeasurementPayload = number;

interface AddTemplateItemPayload {
  item: Item<any>;
  after?: Item<any>;
}

type RemoveTemplateItemPayload = Item<any>;

interface SetTemplateItemValuePayload {
  id: ItemID;
  value: any;
}

export const createReducer = () => (
  state: Template,
  { type, payload: _payload }: Action<any>
): Template => {
  if (type === Type.SetPageSizeWidth) {
    const payload = _payload as SetMeasurementPayload;
    const page = { ...state.page };
    page.size.width = payload;
    return { ...state, page };
  } else if (type === Type.SetPageSizeHeight) {
    const payload = _payload as SetMeasurementPayload;
    const page = { ...state.page };
    page.size.height = payload;
    return { ...state, page };
  } else if (type === Type.SetPageMarginLeft) {
    const payload = _payload as SetMeasurementPayload;
    const page = { ...state.page };
    page.margin.left = payload;
    return { ...state, page };
  } else if (type === Type.SetPageMarginTop) {
    const payload = _payload as SetMeasurementPayload;
    const page = { ...state.page };
    page.margin.top = payload;
    return { ...state, page };
  } else if (type === Type.SetPageMarginRight) {
    const payload = _payload as SetMeasurementPayload;
    const page = { ...state.page };
    page.margin.right = payload;
    return { ...state, page };
  } else if (type === Type.SetPageMarginBottom) {
    const payload = _payload as SetMeasurementPayload;
    const page = { ...state.page };
    page.margin.bottom = payload;
    return { ...state, page };
  } else if (type === Type.AddTemplateItem) {
    const payload = _payload as AddTemplateItemPayload;
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
  } else if (type === Type.RemoveTemplateItem) {
    const payload = _payload as RemoveTemplateItemPayload;
    const items = state.items.filter(i => payload.id !== i.id);
    return { ...state, items };
  } else if (type === Type.SetTemplateItemValue) {
    const payload = _payload as SetTemplateItemValuePayload;
    const items = state.items.map(item => {
      if (item.id === payload.id) {
        item.value = payload.value;
      }
      return item;
    });
    return { ...state, items };
  }
  return state;
};

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

function randID() {
  return (Math.random() * 1e7).toFixed().toString();
}

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

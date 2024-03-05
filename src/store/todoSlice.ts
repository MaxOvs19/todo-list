import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../interfaces/todoItem";
import { RootState } from "./store";

interface IStore {
  items: ITodoItem[];
}

const initialState: IStore = {
  items: [],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem: (store, action: PayloadAction<ITodoItem>) => {
      store.items.push(action.payload);
    },

    deleteItem: (store, action: PayloadAction<number>) => {
      store.items = store.items.filter(
        (elem, index) => index !== action.payload
      );
    },

    toggleStateTask: (store, action: PayloadAction<number>) => {
      const elem = store.items.find((item, index) => index == action.payload);
      if (elem) {
        elem.status == true ? (elem.status = false) : (elem.status = true);

        store.items = store.items.map((item, index) => {
          if (index == action.payload) {
            item.status = elem.status;
            return item;
          } else {
            return item;
          }
        });
      }
    },
  },
});

export const { addItem, deleteItem, toggleStateTask } = todoSlice.actions;

export const getItems = (store: RootState) => store.todoStore.items;

export default todoSlice.reducer;

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
  },
});

export const { addItem, deleteItem } = todoSlice.actions;

export const getItems = (store: RootState) => store.todoStore.items;

export default todoSlice.reducer;

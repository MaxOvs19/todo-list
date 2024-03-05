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
    loadTasks: (store, action: PayloadAction<ITodoItem[]>) => {
      store.items = action.payload;
    },

    addItem: (store, action: PayloadAction<ITodoItem>) => {
      store.items.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(store.items));
    },

    deleteItem: (store, action: PayloadAction<number>) => {
      store.items = store.items.filter(
        (elem, index) => index !== action.payload
      );
      localStorage.setItem("todoList", JSON.stringify(store.items));
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
        localStorage.setItem("todoList", JSON.stringify(store.items));
      }
    },
  },
});

export const { addItem, deleteItem, toggleStateTask, loadTasks } =
  todoSlice.actions;

export const getItems = (store: RootState) => store.todoStore.items;

export default todoSlice.reducer;

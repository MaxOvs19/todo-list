import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../interfaces/todoItem";
import { RootState } from "./store";

interface IStore {
  items: ITodoItem[];
  filterStatusFalse: ITodoItem[];
  filterStatusTrue: ITodoItem[];
}

const initialState: IStore = {
  items: [],
  filterStatusFalse: [],
  filterStatusTrue: [],
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

    deleteItem: (store, action: PayloadAction<string>) => {
      store.items = store.items.filter(
        (elem, index) => elem.id !== action.payload
      );

      localStorage.setItem("todoList", JSON.stringify(store.items));
    },

    toggleStateTask: (store, action: PayloadAction<string>) => {
      const elem = store.items.find((item) => item.id == action.payload);
      if (elem) {
        elem.status == true ? (elem.status = false) : (elem.status = true);

        store.items = store.items.map((item, index) => {
          if (item.id == action.payload) {
            item.status = elem.status;
            return item;
          } else {
            return item;
          }
        });

        localStorage.setItem("todoList", JSON.stringify(store.items));
      }
    },

    filterStatusFalse: (store, action: PayloadAction<boolean>) => {
      store.filterStatusTrue = [];
      store.filterStatusFalse = store.items.filter(
        (elem) => elem.status == action.payload
      );
    },

    filterStatusTrue: (store, action: PayloadAction<boolean>) => {
      store.filterStatusFalse = [];
      store.filterStatusTrue = store.items.filter(
        (elem) => elem.status == action.payload
      );
    },

    clearFilter: (store) => {
      store.filterStatusTrue = [];
      store.filterStatusFalse = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  toggleStateTask,
  loadTasks,
  filterStatusFalse,
  filterStatusTrue,
  clearFilter,
} = todoSlice.actions;

export const getItems = (store: RootState) => store.todoStore.items;
export const getFilterStatusFalse = (store: RootState) =>
  store.todoStore.filterStatusFalse;

export const getFilterStatusTrue = (store: RootState) =>
  store.todoStore.filterStatusTrue;

export default todoSlice.reducer;

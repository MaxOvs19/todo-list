import { createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../interfaces/todoItem";

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
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
  },
});

export default todoSlice.reducer;

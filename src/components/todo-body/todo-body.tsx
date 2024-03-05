import React, { FC, useEffect } from "react";

import "./todo-body.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterStatusFalse,
  getFilterStatusTrue,
  getItems,
  loadTasks,
} from "../../store/todoSlice";
import TodoItem from "../todo-item/todo-item";
import { ITodoItem } from "interfaces/todoItem";

const TodoBody: FC = () => {
  const list = useSelector(getItems);
  const listStatusTaskFalse = useSelector(getFilterStatusFalse);
  const listStatusTaskTrue = useSelector(getFilterStatusTrue);
  const dispatch = useDispatch();

  useEffect(() => {
    const arr: Array<ITodoItem> = JSON.parse(localStorage.getItem("todoList")!);
    if (arr?.length > 0) {
      dispatch(loadTasks(arr));
    }
  }, []);

  return (
    <div className="todo-body">
      {listStatusTaskFalse.length > 0
        ? listStatusTaskFalse.map((elem, index) => {
            return <TodoItem item={elem} key={index} type={0} />;
          })
        : listStatusTaskTrue.length > 0
        ? listStatusTaskTrue.map((elem, index) => {
            return <TodoItem item={elem} key={index} type={1} />;
          })
        : list.map((elem, index) => {
            return <TodoItem item={elem} key={index} />;
          })}
    </div>
  );
};

export default TodoBody;

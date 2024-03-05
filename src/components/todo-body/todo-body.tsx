import React, { FC, useEffect } from "react";

import "./todo-body.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterStatusFalse,
  getFilterStatusTrue,
  getItems,
  getTypeFilleter,
  loadTasks,
} from "../../store/todoSlice";
import TodoItem from "../todo-item/todo-item";
import { ITodoItem } from "interfaces/todoItem";

const TodoBody: FC = () => {
  const list = useSelector(getItems);
  const listStatusTaskFalse = useSelector(getFilterStatusFalse);
  const listStatusTaskTrue = useSelector(getFilterStatusTrue);
  const type = useSelector(getTypeFilleter);
  const dispatch = useDispatch();

  useEffect(() => {
    const arr: Array<ITodoItem> = JSON.parse(localStorage.getItem("todoList")!);
    if (arr?.length > 0) {
      dispatch(loadTasks(arr));
    }
  }, []);

  return (
    <div className="todo-body">
      {type == 0 &&
        list.map((elem, index) => {
          return <TodoItem item={elem} key={index} />;
        })}

      {type == 1 &&
        listStatusTaskTrue.map((elem, index) => {
          return <TodoItem item={elem} key={index} type={0} />;
        })}

      {type == 2 &&
        listStatusTaskFalse.map((elem, index) => {
          return <TodoItem item={elem} key={index} type={1} />;
        })}
    </div>
  );
};

export default TodoBody;

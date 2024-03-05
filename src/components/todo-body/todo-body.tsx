import React, { FC, useEffect } from "react";

import "./todo-body.scss";
import { useDispatch, useSelector } from "react-redux";
import { getItems, loadTasks } from "../../store/todoSlice";
import TodoItem from "../todo-item/todo-item";
import { ITodoItem } from "interfaces/todoItem";

const TodoBody: FC = () => {
  const list = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const arr: Array<ITodoItem> = JSON.parse(localStorage.getItem("todoList")!);
    if (arr.length > 0) {
      dispatch(loadTasks(arr));
    }
  }, []);

  return (
    <div className="todo-body">
      {list.map((elem, index) => {
        return <TodoItem item={elem} key={index} index={index} />;
      })}
    </div>
  );
};

export default TodoBody;

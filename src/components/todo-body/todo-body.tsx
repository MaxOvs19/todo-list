import React, { FC } from "react";

import "./todo-body.scss";
import { useSelector } from "react-redux";
import { getItems } from "../../store/todoSlice";
import TodoItem from "../todo-item/todo-item";

const TodoBody: FC = () => {
  const list = useSelector(getItems);

  return (
    <div className="todo-body">
      {list.map((elem, index) => {
        return <TodoItem item={elem} key={index} index={index} />;
      })}
    </div>
  );
};

export default TodoBody;

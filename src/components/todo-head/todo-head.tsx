import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITodoItem } from "../../interfaces/todoItem";
import { addItem, getItems } from "../../store/todoSlice";

import "./todo-head.scss";

const TodoHead: FC = () => {
  const dispatch = useDispatch();
  const [itemValue, setItemValue] = useState<string>("");

  const addedItem = () => {
    if (itemValue?.length > 0) {
      const newItem: ITodoItem = {
        id: new Date().toLocaleTimeString(),
        status: false,
        text: itemValue,
      };

      setItemValue("");
      dispatch(addItem(newItem));
    }
  };

  return (
    <div className="todo-head">
      <div className="todo-head__input">
        <input
          type="text"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
      </div>
      <button className="todo-head__button" onClick={addedItem}>
        Добавить
      </button>
    </div>
  );
};

export default TodoHead;

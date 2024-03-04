import React, { FC } from "react";
import { ITodoItem } from "../../interfaces/todoItem";

import edit from "assets/edit.png";
import deleteIcon from "assets/deleteIcon.png";

import "./todo-item.scss";
import { useDispatch } from "react-redux";
import { deleteItem } from "store/todoSlice";

interface IProps {
  item: ITodoItem;
  index: number;
}

const TodoItem: FC<IProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  const deleteRow = () => {
    dispatch(deleteItem(index));
  };

  return (
    <div className="todo-item">
      <p>{item.text}</p>
      <div className="todo-item__buttons">
        <button className="todo-item-edit">
          <img src={edit} alt="@" />
        </button>
        <button className="todo-item-delete" onClick={deleteRow}>
          <img src={deleteIcon} alt="#" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

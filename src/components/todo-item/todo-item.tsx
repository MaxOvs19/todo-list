import React, { FC, useEffect, useState } from "react";
import { ITodoItem } from "../../interfaces/todoItem";

import edit from "assets/edit.png";
import deleteIcon from "assets/deleteIcon.png";
import check from "assets/check.png";

import "./todo-item.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  getFilterStatusFalse,
  getFilterStatusTrue,
  toggleStateTask,
} from "store/todoSlice";

interface IProps {
  item: ITodoItem;
  type?: number;
}

const TodoItem: FC<IProps> = ({ item, type }) => {
  const [taskState, setTaskState] = useState<boolean>(item.status);

  const dispatch = useDispatch();

  const deleteRow = () => {
    dispatch(deleteItem(item.id));
  };

  const toggleStatus = () => {
    dispatch(toggleStateTask(item.id));

    if (taskState) {
      setTaskState(false);
    } else {
      setTaskState(true);
    }
  };

  return (
    <div className="todo-item">
      <p className={item.status ? "compete-task--text" : ""}>{item.text}</p>
      <div className="todo-item__buttons">
        <button className="check" onClick={toggleStatus}>
          <img
            src={check}
            alt="v"
            className={item.status == true ? "compete-task--box" : ""}
          />
        </button>

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

import React, { FC, useState } from "react";
import { ITodoItem } from "../../interfaces/todoItem";

import edit from "assets/edit.png";
import deleteIcon from "assets/deleteIcon.png";
import check from "assets/check.png";

import "./todo-item.scss";
import { useDispatch } from "react-redux";
import { deleteItem, toggleStateTask } from "store/todoSlice";

interface IProps {
  item: ITodoItem;
  index: number;
}

const TodoItem: FC<IProps> = ({ item, index }) => {
  const [taskState, setTaskState] = useState<boolean>(item.status);

  const dispatch = useDispatch();

  const deleteRow = () => {
    dispatch(deleteItem(index));
  };

  const toggleStatus = () => {
    dispatch(toggleStateTask(index));

    if (taskState) {
      setTaskState(false);
    } else {
      setTaskState(true);
    }
  };

  return (
    <div className="todo-item">
      <p className={taskState ? "compete-task--text" : ""}>{item.text}</p>
      <div className="todo-item__buttons">
        <button className="check" onClick={toggleStatus}>
          <img
            src={check}
            alt="v"
            className={taskState ? "compete-task--box" : ""}
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

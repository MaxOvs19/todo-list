import React, { FC, useState } from "react";
import { ITodoItem } from "../../interfaces/todoItem";

import edit from "assets/edit.png";
import deleteIcon from "assets/deleteIcon.png";
import check from "assets/check.png";

import "./todo-item.scss";
import { useDispatch } from "react-redux";
import { deleteItem, editTask, toggleStateTask } from "store/todoSlice";

interface IProps {
  item: ITodoItem;
  type?: number;
}

const TodoItem: FC<IProps> = ({ item, type }) => {
  const [taskState, setTaskState] = useState<boolean>(item.status);
  const [editActive, setEditActive] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(item.text);

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

  const toggleEdit = () => {
    if (editActive) {
      setEditActive(false);
    } else {
      setEditActive(true);
    }
  };

  const save = () => {
    const editItem: ITodoItem = {
      id: item.id,
      status: item.status,
      text: editValue,
    };

    dispatch(editTask(editItem));
    setEditActive(false);
  };

  return (
    <div className="todo-item">
      {editActive ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="todo-item__edit-input"
          />
          <button className="todo-item__save" onClick={save}>
            Save
          </button>
        </>
      ) : (
        <p className={item.status ? "compete-task--text" : ""}>{item.text}</p>
      )}

      <div className="todo-item__buttons">
        <button className="check" onClick={toggleStatus}>
          <img
            src={check}
            alt="v"
            className={item.status == true ? "compete-task--box" : ""}
          />
        </button>

        <button className="todo-item-edit" onClick={toggleEdit}>
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

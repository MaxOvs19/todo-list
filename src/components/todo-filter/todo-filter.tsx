import React, { FC } from "react";
import "./todo-filter.scss";
import { useDispatch } from "react-redux";
import {
  clearFilter,
  filterStatusFalse,
  filterStatusTrue,
} from "store/todoSlice";

const TodoFilter: FC = ({}) => {
  const dispatch = useDispatch();

  const showAllTask = () => {
    dispatch(clearFilter());
  };

  const showFinishedTask = () => {
    dispatch(filterStatusTrue(true));
  };

  const showNotCompleted = () => {
    dispatch(filterStatusFalse(false));
  };

  return (
    <div className="todo-filters">
      <button className="todo-filters__button" onClick={showAllTask}>
        Все задачи
      </button>
      <button className="todo-filters__button" onClick={showFinishedTask}>
        Выполненные
      </button>
      <button className="todo-filters__button" onClick={showNotCompleted}>
        Не выполненные
      </button>
    </div>
  );
};

export default TodoFilter;

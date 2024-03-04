import React, { FC } from "react";

import './todo-head.scss'

const TodoHead: FC = () => {
  return (
    <div className="todo-head">
      <div className="todo-head__input">
        <input type="text" />
      </div>
      <button className="todo-head__button">Добавить</button>
    </div>
  );
};

export default TodoHead;

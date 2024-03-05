import React, { useEffect } from "react";
import TodoHead from "../../components/todo-head/todo-head";
import TodoBody from "../../components/todo-body/todo-body";

import "./home.scss";
import TodoFilter from "components/todo-filter/todo-filter";

const Home = () => {
  return (
    <div className="home">
      <h1>TODO LIST</h1>
      <TodoFilter />
      <TodoHead />
      <TodoBody />
    </div>
  );
};

export default Home;

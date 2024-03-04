import React from "react";

import "./home.scss";
import TodoHead from "../../components/todo-head/todo-head";

const Home = () => {
  return (
    <div className="home">
      <h1>TODO LIST</h1>
      <TodoHead />
    </div>
  );
};

export default Home;

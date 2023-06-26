import React, { useEffect, useState } from "react";
import "./Header.css";
import Task from "./Task";

function Home() {

  const initialArray =
    localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")): [];
  let [tasks, setTasks] = useState(initialArray);
  let [title, settitle] = useState("");
  let [description, setdescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    settitle("");
    setdescription("");
  };

  const deleteTask = (index) =>{
    const filteteredArr = tasks.filter((val, i) =>{
      return i!==index;
    });
    console.log(filteteredArr);
    setTasks(filteteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></textarea>
        <button className="submit">ADD</button>
      </form>
      {tasks.map((item, index) => {
        return (
          <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
        );
      })}
    </div>
  );
}

export default Home;

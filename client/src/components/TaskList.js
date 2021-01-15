import React, { useState, useEffect } from "react";
import Task from "./Task";

const axios = require("axios").default;

function TaskList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  });

  async function fetchTasks() {
     const res = await axios.get(`/api/task/${props.email}`);
     setTasks(res.data);
  }

  return (
    <div className="task-list">
      <h3>My Task List</h3>

      <div>
        {tasks.map((t) => {
          return <Task key={t._id} id={t._id} taskName={t.task} isCompleted = {t.isCompleted} />;
        })}
      </div>
    </div>
  );
}

export default TaskList;

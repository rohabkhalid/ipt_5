import React, { useState } from "react";
import alert from "alert";

const axios = require("axios").default;

function AddTask(props) {
  const [task, setTask] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (task === "") {
      alert("Please enter your task");
      return;
    }

    await axios.post(`/api/task/`,{
      email:props.email,
      task:task
    })

    setTask("");
  }

  return (
    <div className="new-task">
      <form action="">
        <input
          type="text"
          placeholder="ENTER NEW TASK HERE"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;

import React, { useState } from "react";
const axios = require("axios").default;

function Task(props) {
  const [completedValue, setCompletedValue] = useState(props.isCompleted);

  function onClickTask() {
    axios
      .put(`/api/task/`, {
        id: props.id,
        isCompleted: !completedValue,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const textStyle = {
    textDecoration: completedValue ? "line-through" : "",
  };

  return (
    <div className="task">
      <p style={textStyle}>{props.taskName}</p>
      <input
        type="checkbox"
        checked={completedValue}
        onClick={onClickTask}
        onChange={() => setCompletedValue(!completedValue)}
      />
    </div>
  );
}

export default Task;

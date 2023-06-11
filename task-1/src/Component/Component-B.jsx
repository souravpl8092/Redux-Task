import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../redux/actions";

const ComponentB = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addtask(task));
    setTask("");
  };

  return (
    <div className="compB">
      <h1>Task Record</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Please enter task here..."
      />
      <button type="submit" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
};

export default ComponentB;

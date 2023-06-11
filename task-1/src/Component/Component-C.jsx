import { useSelector } from "react-redux";

const ComponentC = () => {
  const tasks = useSelector((state) => state.task);

  return (
    <div className="compC">
      {tasks.length > 0 ? (
        <>
          <h2>Task List</h2>
          <div>
            {tasks.map((task, index) => (
              <h4 key={index + 1}>
                {index + 1}. {task}
              </h4>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ComponentC;

import { useState } from "react";
import Button from "./components/to-do list/Button";
import Task from "./components/to-do list/Task";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [taskStatus, setTaskStatus] = useState("all");

  const completedNumber = data.filter(
    (task) => task.status === "completed"
  ).length;

  const createTask = () => {
    if (!inputValue.trim()) {
      window.alert("please enter a task");
      return;
    }
    const newTask = {
      id: Math.random(),
      text: inputValue,
      status: "active",
    };

    const newData = [...data, newTask];
    setData(newData);

    if (taskStatus === "active") {
      setFilteredData(newData.filter((task) => task.status === "active"));
    } else if (taskStatus === "completed") {
      setFilteredData(newData.filter((task) => task.status === "completed"));
    } else {
      setFilteredData(newData);
    }
    setInputValue("");
  };

  const deleteTask = (id) => {
    const filteredData = data.filter((task) => task.id !== id);
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task"
    );
    if (!isConfirmed) return;
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const toggleStatus = (id) => {
    const changedData = data.map((task) => {
      if (task.id === id) {
        const isDone = task.status === "active" ? false : true;
        task.status = isDone ? "active" : "completed";
        return task;
      }
      return task;
    });
    setData(changedData);
    setFilteredData(changedData);
  };

  const clearCompleted = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const filterCompleted = () => {
    const filteredData = data.filter((task) => task.status === "completed");
    setFilteredData(filteredData);
    setTaskStatus("completed");
  };
  const filterActive = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setFilteredData(filteredData);
    setTaskStatus("active");
  };
  const clearFilter = () => {
    setFilteredData(data);
    setTaskStatus("all");
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      createTask();
    }
  };
  return (
    <div className="flex justify-center bg-[#f3f4f6] h-screen w-screen">
      <div className="w-[377px] size-fit bg-white mt-[60px] shadow-md rounded-xl py-[24px] px-[16px] flex flex-col items-center">
        {/* input and filteres and tags */}
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-xl font-semibold text-center text-[#f68edf]">
            To-Do list
          </h1>
          <div className="flex gap-[6px]">
            <input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              value={inputValue}
              type="text"
              className="h-[40px] border w-full  border-[#fab9ec] rounded-md pl-4"
              placeholder="Add a new task..."
              onKeyDown={handleEnter}
            />
            <Button handleClick={createTask} text="Add" isGray={"all"} />
          </div>
          <div className="flex gap-[6px]">
            <Button
              isGray={taskStatus === "all"}
              isSmall={true}
              text="All"
              handleClick={clearFilter}
            />
            <Button
              isGray={taskStatus === "active"}
              isSmall={true}
              text="Active"
              handleClick={filterActive}
            />
            <Button
              isGray={taskStatus === "completed"}
              isSmall={true}
              text="Completed"
              handleClick={filterCompleted}
            />
          </div>
          {/* tasks */}
          {filteredData.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                status={task.status}
                deleteTask={deleteTask}
                toggleStatus={toggleStatus}
              />
            );
          })}

          {filteredData.length === 0 && (
            <p className="text-center text-[#6b7280] text-sm my-5">
              No tasks yet. Add one above!
            </p>
          )}

          <div className="pt-4 pb-1 border-t border-[#e4e4e7] flex justify-between text-sm">
            <p className="text-[#6b7280]">
              {completedNumber} of {data.length} tasks completed
            </p>
            <button onClick={clearCompleted} className="text-[#ef4444]">
              Clear completed
            </button>
          </div>

          <p className="mt-10 text-xs text-[#6b7280] flex justify-center">
            Powered by{""}
            <a
              href="https://legacy.pinecone.mn/"
              target="blank"
              className="text-[#f885df] pl-1"
            >
              Pinecone academy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

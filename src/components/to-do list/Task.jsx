const Task = (props) => {
  const isDone = props.status === "active" ? false : true;

  return (
    <div
      key={props.id}
      className="w-full rounded-md bg-[#f3f4f6] p-4 flex justify-between items-center text-sm"
    >
      <div className="flex gap-[10px] items-center">
        <input
          type="checkbox"
          className="w-5 h-5 bg-[#f68edf]"
          checked={isDone}
          onChange={() => {
            props.toggleStatus(props.id);
          }}
        />
        <p
          className={`text-sm ${
            props.status === "completed" ? "line-through text-gray-400" : ""
          }`}
        >
          {props.text}
        </p>
      </div>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="w-[67px] h-[30px] text-[#ef4444] bg-[#fef2f2] rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;

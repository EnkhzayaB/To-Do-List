const Notes = (props) => {
  return (
    <div
      key={props.id}
      className="flex items-center justify-between w-full p-4 text-sm bg-white rounded-md"
    >
      <div className="flex gap-[10px] items-center">
        <p className="text-black">{props.text}</p>
      </div>
      <button className="w-[67px] h-[30px] text-[#ef4444] bg-[#fef2f2] rounded-md">
        Delete
      </button>
    </div>
  );
};

export default Notes;

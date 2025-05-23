function TodoList() {
  return (
    <div className="container">
      <div className="py-24 pt-16 mb-auto bg-white rounded-lg shadow w-377px">
        <h1 className="flex justify-center text-sm font-semibold text-black-600 mb-20px">
          To-Do List
        </h1>
        <div className="flex gap-6 h-40px columns-6">
          <input type="text" className="" />
        </div>
      </div>
    </div>
  );
}

export default TodoList;

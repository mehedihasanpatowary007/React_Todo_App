import { useState } from "react";

const NewTodo = ({onAddTodo}) => {

    const [todo, setTodo] = useState({title : "", desc: ""})
    const {title, desc} = todo;

    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo((oldTodo) => {
            return {...oldTodo, [name] : value}
        })
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddTodo(todo);
      setTodo({ title: "", desc: "" });
    };

  return (
    <form className="bg-gradient-to-r from-cyan-500 to-blue-800 flex flex-col  gap-3 w-3/4 p-10"
    onSubmit={handleSubmit}
    >
      <div>
        <input
          className="w-full outline-none px-3 py-2 bg-gray-300 rounded focus:bg-white focus:rounded-none focus:border-b-2 border-black"
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
          placeholder="Task title"
          value={title}
          required
        />
      </div>
      <div>
        <textarea
          className="w-full outline-none px-3 py-2 bg-gray-300 rounded focus:bg-white focus:rounded-none focus:border-b-2 border-black"
          onChange={handleChange}
          type="text"
          id="desc"
          name="desc"
          placeholder="Task description"
          value={desc}
          required
        />
      </div>
      <button
        className="text-white uppercase bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  font-medium rounded text-sm px-5 py-2.5 text-center"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default NewTodo;

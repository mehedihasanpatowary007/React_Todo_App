import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import {v4 as uuidv4} from 'uuid'


const Home = () => {

  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) => {
      setTodos((previousTodo) => {
        return [...previousTodo, {id: uuidv4(), todo}]
      })
  }
  const handleRemoveTodo = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filterTodos);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 flex flex-col items-center justify-start gap-10">
      <h1 className="text-5xl font-bold uppercase text-gray-600 italic text-center mt-4">
        Todo App
      </h1>
      <NewTodo onAddTodo = {handleTodo}/>
      <Todos todos={todos} onRemoveTodo = {handleRemoveTodo}/>
    </div>
  );
};

export default Home;

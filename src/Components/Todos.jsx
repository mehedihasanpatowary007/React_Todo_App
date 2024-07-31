import Todo from "./Todo";

const Todos = (props) => {
    return (
      <section className="bg-gradient-to-r from-sky-500 to-indigo-500 border-2 border-black rounded p-5 w-3/4">
        <h1 className="ml-5 text-3xl font-bold italic text-gray-700">
          Remaining Task{" "}
        </h1>
        {props.todos.map((todo) => (
          <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            onRemoveTodo={props.onRemoveTodo}
          />
        ))}
      </section>
    );
};

export default Todos;
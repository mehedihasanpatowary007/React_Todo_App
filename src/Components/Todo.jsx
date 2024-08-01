import { FaTrash } from "react-icons/fa";

const Todo = (props) => {
  const { title, desc} = props.todo;
  const {id} = props;


  const handleClick = (id) => {
    props.onRemoveTodo(id);
  }


  return (
    <article className="flex justify-between items-center border-2 border-black p-3 m-5 rounded bg-gradient-to-r from-blue-400 to-violet-600">
      <div>
        <h2 className="text-2xl font-semibold uppercase italic">{title}</h2>
        <p className="text-[18px] italic break-words">{desc}</p>
      </div>
      <div>
        <button className="text-red-500 text-3xl opacity-100 hover:opacity-80 duration-500" onClick={ () => {
          handleClick(id)
        }}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default Todo;

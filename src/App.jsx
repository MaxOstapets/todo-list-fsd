import { LuSunMedium } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { useTodos } from "./todos-store";
import { useForm } from "react-hook-form";

function App() {
  const todos = useTodos((state) => state.todos);
  const addTodo = useTodos((state) => state.addTodo);
  const removeTodo = useTodos((state) => state.removeTodo);
  const toggleTodo = useTodos((state) => state.toggleTodo);
  const [todo, setTodo] = useState("");
  const { register, handleSubmit, setError, formState: { errors } } = useForm()
  const handlerAddTodo = () => {
    if (todos.some((t) => t.todo === todo)) {
      setError("todo", { message: "This task is already in list" });
      return;
    }
    addTodo(todo);
    setTodo("");
  };

  return (
    <main className="w-screen bg-indigo-700 h-screen flex justify-center items-center">
      <section className="w-[500px] text-white">
        <div className="flex justify-between items-center mb-[40px]">
          <span className="text-3xl tracking-[10px]">TODO</span>
          <LuSunMedium className="text-4xl" />
        </div>
        <form className="flex justify-start flex-col items-start gap-2 mb-[40px]" onSubmit={handleSubmit(handlerAddTodo)}>
          <div className="flex gap-10 w-full">
            <input {...register("todo", { required: "Task is required" })} type="text" className="w-full bg-slate-800 p-[20px] rounded-md focus:outline-purple-900" placeholder="Task" value={todo} onChange={(el) => setTodo(el.target.value)} />
            <button type="submit" className="p-[18px] rounded-md bg-slate-800"><FiPlusCircle className="text-3xl" /></button>
          </div>
          {errors.todo && <span className="text-red-300">{errors.todo.message}</span>}
        </form>
        <div className="w-full bg-slate-800 text-white rounded-md">
          <ul>
            {todos.map((el) => (
              <li className="p-[20px] flex justify-between" key={el.id}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={el.complete} onChange={() => toggleTodo(el.id)} />
                  {!el.complete ? <span>{el.todo}</span> : <span className="line-through text-gray-400">{el.todo}</span>}
                </div>
                <button onClick={() => removeTodo(el.id)}><FaRegTrashAlt className="text-white" /></button>
              </li>
            ))}
          </ul>
          <div className="text-xs flex justify-between items-center px-[20px] py-[10px] text-gray-400 bg-slate-800">
            <p>{todos.length} items left</p>
            <ul className="flex gap-2 text-sm text-blue-50">
              <li className="text-blue-400">All</li>
              <li>Active</li>
              <li>Completed</li>
            </ul>
            <p>Clear completed</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

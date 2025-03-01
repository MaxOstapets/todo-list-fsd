import { LuSunMedium } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useState } from "react";
import { useTodos } from "./todos-store";

function App() {
  const todos = useTodos((state) => state.todos)
  const addTodo = useTodos((state) => state.addTodo)
  const [todo, setTodo] = useState("")
  const handlerAddTodo = () => {
    addTodo(todo)
    setTodo("")
  }

  return (
    <main className="w-screen bg-indigo-700 h-screen flex justify-center items-center">
      <section className="w-[500px] text-white">
        <div className="flex justify-between items-center mb-[40px]">
          <span className="text-3xl tracking-[10px]">TODO</span>
          <LuSunMedium className="text-4xl" />
        </div>
        <div className="flex justify-center items-center gap-10 mb-[40px]">
          <input type="text" className="w-full bg-slate-800 p-[20px] mb-5 rounded-md" placeholder="Task" value={todo} onChange={(el) => setTodo(el.target.value)} />
          <button onClick={handlerAddTodo} className="p-[18px] rounded-md bg-slate-800"><FiPlusCircle className="text-3xl" /></button>
        </div>
        <div className="w-full bg-slate-800 text-white rounded-md">
          <ul>
            {todos.map((el) =>
              <li className="p-[20px] flex gap-2" key={el.id}>
                <button><MdOutlineDownloadDone className="text-white" /></button>
                <span>{el.todo}</span>
              </li>
            )}
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

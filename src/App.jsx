import { LuSunMedium } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([
    {
      todo: "Help",
      complete: false,
      id: Math.floor(Math.random() * 1000)
    },
    {
      todo: "Go for a walk",
      complete: false,
      id: Math.floor(Math.random() * 1000)
    },
  ])

  const handlerTodo = () => {
    setTodos([...todos, {todo, complete: false, id: Math.floor(Math.random() * 1000)}])
    setTodo("")
  }

  return (
    <main className="w-full bg-indigo-700 h-full flex justify-center items-center">
      <section className="w-[500px] text-white mt-40">
        <div className="flex justify-between items-center">   
          <span className="text-3xl tracking-[10px]">TODO</span>
          <LuSunMedium className="text-xl"/>
        </div>
        <div className="flex justify-between items-center gap-10">
          <input type="text" className="w-full bg-slate-800 p-[20px] mb-5 rounded-md" placeholder="Task" value={todo} onChange={(el) => setTodo(el.target.value)}/>
          <button onClick={handlerTodo}><FiPlusCircle className="text-3xl"/></button>
        </div>
        <div className="w-full bg-slate-800 text-white rounded-md">
            <ul>
              {todos.map((el) => 
              <li className="p-[20px] flex gap-2" key={el.id}>
                <input type="checkbox" />
                <span>{el.todo}</span>
              </li>
              )}
            </ul>
            <div className="text-xs flex justify-between items-center px-[20px] py-[10px] text-gray-400 bg-slate-800">
              <p>{todos.length} items left</p>
              <ul className="flex gap-2 text-sm text-blue-50">
                <li>All</li>
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

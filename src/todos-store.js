import { create } from "zustand";
// import { useForm } from "react-hook-form";

// const {register, handleSubmit} = useForm()

export const useTodos = create((set) => ({
  todos: [],
  addTodo: (todoText) => {
    const newTodo = {
      todo: todoText,
      complete: false,
      id: Date.now()
    };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((el) =>
        el.id === id ? { ...el, complete: !el.complete } : el
      )
    }));
  }
}));

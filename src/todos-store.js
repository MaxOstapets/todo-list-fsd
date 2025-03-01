import { create } from "zustand";

export const useTodos = create((set) => ({
  todos: [
    {todo: "help someone", complete: false, id: Math.floor(Math.random() * 100)},
    {todo: "go for a walk", complete: false, id: Math.floor(Math.random() * 100)}
  ],
  addTodo: (todoText) => {
    const newTodo = {
      todo: todoText,
      complete: false,
      id: Math.floor(Math.random() * 100)
    };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  }
}))
import { create } from "zustand";

export const useTodos = create((set) => ({
  todos: [],
  addTodo: (todoText) => {
    const newTodo = {
      todo: todoText,
      complete: false,
      id: Math.floor(Math.random() * 100)
    };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  removeTodo: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todo.id)
    }));
  }
}))
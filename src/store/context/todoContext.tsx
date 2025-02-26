import React, { createContext, useState, ReactNode } from 'react';
import { TodoContextType, ITodo, IStatus } from '../../models/todo.model';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);
type ContextProviderProps = {
  children?: ReactNode
}
const TodoContextProvider = ({ children }: ContextProviderProps) => {
  const [todos, setTodo] = useState<ITodo[]>([]);
  const [ids, setChecked] = useState<IStatus[]>([]);

  const addTodo = (text: string)=>{
    if(text) {
      const newData = {
        id: `id-${Math.floor(Math.random() * 10000000)}`,
        text: text,
        status: false,
      } as ITodo;

      setTodo((data) => [...data, newData]);
    }
  };

  const editTodo = (id: string, text: string)=>{
    if (id) {
      const updatedTodo = todos.map((item) => {
        if(item.id === id) {
          return { ...item, text: text};
        }
        return item;
      });
      setTodo(updatedTodo);
    }
  };

  const removeTodo = (id: string)=>{
    setTodo((prevTodos: ITodo[]) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const changeTodoStatus = (id: string)=>{
    if(id) {
      const exist = ids.find((item) => (item.id === id));
      if(exist) {
        ids.push(exist);
        setChecked(ids);
      }
    }
  };

  return (<TodoContext.Provider value={{todos, ids, addTodo, editTodo, removeTodo, changeTodoStatus}}>{children}</TodoContext.Provider>);
};

export default TodoContextProvider;

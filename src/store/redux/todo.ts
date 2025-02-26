import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../models/todo.model';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [] as ITodo[],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload.todo);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((item: ITodo) => {
                if (item.id === action.payload.id) {
                    return { ...item, text: action.payload.text };
                }
                return item;
            });
        },
        removeTodo: (state, action) => {
            state.todos.splice(state.todos.indexOf(action.payload.id), 1);
        },
    },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

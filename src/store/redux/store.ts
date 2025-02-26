import { configureStore } from '@reduxjs/toolkit';
import  { setupListeners } from '@reduxjs/toolkit/query';
import { todoApi } from '../../services/todoServices';

import todoReducer from './todo';

export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

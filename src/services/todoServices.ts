import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// This variable handles request header informations
const todoAPIHeader = { 'content-type': 'application/json' };
// Base URL
const baseUrl = 'http://localhost:3000';
const createRequest = (url: string) => ({ url, headers: todoAPIHeader });

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => createRequest('/todos/'),
    }),
    getTodos: builder.query({
      query: ({ status }) => createRequest(`/todos/${status}`),
    }),
    // add new todos
    createTodo: builder.mutation({
      query: (body) => ({ url: '/todos/', method: 'POST', body: body }),
    }),
    // edit todo
    updateTodo: builder.mutation({
      query: ({ id, text }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: { text: text },
      }),
    }),
    // delete todo
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoApi;

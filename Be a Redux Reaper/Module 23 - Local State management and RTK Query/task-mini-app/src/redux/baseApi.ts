import type { ITask } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API response structure
interface TasksResponse {
  tasks: ITask[];
  pagination: any;
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query<TasksResponse, string>({
      query: () => `/api/tasks`,
      providesTags: ['Task'],
    }),
    addTask: builder.mutation<ITask, Omit<ITask, 'id'>>({
      query: (task) => ({
        url: '/api/tasks',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: builder.mutation<ITask, { id: string; task: Partial<ITask> }>({
      query: ({ id, task }) => ({
        url: `/api/tasks/${id}`,
        method: 'PATCH',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
    toggleTaskComplete: builder.mutation<ITask, { id: string; isCompleted: boolean }>({
      query: ({ id, isCompleted }) => ({
        url: `/api/tasks/${id}/toggle`,
        method: 'PATCH',
        body: { isCompleted },
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const { 
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useToggleTaskCompleteMutation,
} = baseApi;
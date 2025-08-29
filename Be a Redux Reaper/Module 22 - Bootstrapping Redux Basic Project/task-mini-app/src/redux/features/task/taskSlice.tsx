import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { ITask } from "../../../types";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "low" | "medium";
}

const initialState: InitialState = {
  tasks: [
    {
      title: "Test Task",
      description:
        "Eta Testing er jonno create kora hoise, jodi remove korte hoy tahole Redux er Slice er giye remove kore ay beda ja.",
      priority: "high",
      dueDate: "2025-08",
      id: "ae57c4b1-d526-4977-ac5b-83281976cac6",
      completed: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        completed: false,
      };
      state.tasks.push(taskData);
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updatedTask: Partial<ITask> }>
    ) => {
      const { id, updatedTask } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        Object.assign(taskToUpdate, updatedTask);
      }
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const selectTasks = (state: { todo: InitialState }) => state.todo.tasks;
export const selectFilter = (state: { todo: InitialState }) =>
  state.todo.filter;
export const { addTask, updateTask, toggleCompleteState, deleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;

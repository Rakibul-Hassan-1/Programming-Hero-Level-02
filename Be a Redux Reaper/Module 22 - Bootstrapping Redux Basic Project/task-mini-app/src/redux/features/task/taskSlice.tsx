import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
      deadline: "2025-08",
      id: "ae57c4b1-d526-4977-ac5b-83281976cac6",
      completed: false,
    },
    {
      title: "Another Task",
      description: "This is another task for testing.",
      priority: "medium",
      deadline: "2025-09",
      id: "b1c4d5e6-f7g8-9h0i-j1k2-l3m4n5o6p7q8",
      completed: false,
    },
    {
      title: "Yet Another Task",
      description: "This is yet another task for testing.",
      priority: "low",
      deadline: "2025-10",
      id: "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6",
      completed: false,
    },
    {
      title: "Task 4",
      description: "This is the fourth task for testing.",
      priority: "high",
      deadline: "2025-11",
      id: "d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6",
      completed: false,
    },
    {
      title: "Task 5",
      description: "This is the fifth task for testing.",
      priority: "medium",
      deadline: "2025-12",
      id: "e1f2g3h4-i5j6-k7l8-m9n0-o1p2q3r4s5t6",
      completed: false,
    },
    {
      title: "Task 6",
      description: "This is the sixth task for testing.",
      priority: "low",
      deadline: "2025-12",
      id: "f1g2h3i4-j5k6-l7m8-n9o0-p1q2r3s4t5u6",
      completed: false,
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<ITask, 'id' | 'completed'>>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        completed: false,
        deadline: action.payload.deadline ? new Date(action.payload.deadline).toISOString().split('T')[0] : "",
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
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "low" | "medium">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "all") return state.todo.tasks;
  if (filter === "low")
    return state.todo.tasks.filter((task) => task.priority === "low");
  if (filter === "medium")
    return state.todo.tasks.filter((task) => task.priority === "medium");
  if (filter === "high")
    return state.todo.tasks.filter((task) => task.priority === "high");

  return state.todo.tasks;
};

export const selectFilter = (state: { todo: InitialState }) =>
  state.todo.filter;

export const {
  addTask,
  updateTask,
  toggleCompleteState,
  deleteTask,
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;

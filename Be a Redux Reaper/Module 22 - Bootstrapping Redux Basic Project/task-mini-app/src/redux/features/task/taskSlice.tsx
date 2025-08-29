import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../../../types";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "Completing 1",
      title: "Initial Task",
      description: "Create homepage, and routing",
      dueDate: "2023-10-10",
      completed: false,
      priority: "High",
    },
    {
      id: "Completing 2",
      title: "Second Task",
      description: "Create about page",
      dueDate: "2023-10-12",
      completed: false,
      priority: "Medium",
    },
    {
      id: "Completing 3",
      title: "Third Task",
      description: "Create contact page",
      dueDate: "2023-10-14",
      completed: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;

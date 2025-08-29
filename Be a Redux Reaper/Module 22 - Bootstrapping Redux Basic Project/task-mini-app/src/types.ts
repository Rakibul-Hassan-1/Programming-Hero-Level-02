export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
}

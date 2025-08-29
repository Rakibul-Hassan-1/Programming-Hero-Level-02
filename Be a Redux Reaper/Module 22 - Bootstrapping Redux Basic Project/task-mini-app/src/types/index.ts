export interface ITask {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  deadline: string;
  completed: boolean;
}

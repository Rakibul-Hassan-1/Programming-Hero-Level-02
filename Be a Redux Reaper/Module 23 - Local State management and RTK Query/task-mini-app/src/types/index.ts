export interface ITask {
  _id?: string; // MongoDB ObjectId
  id?: string;  // Fallback ID field
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  isCompleted: boolean;
  member: string | null;
}

export interface IUser {
  id: string;
  name: string;
}

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useDeleteTaskMutation, useToggleTaskCompleteMutation } from "@/redux/baseApi";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";
import { UpdateTaskModal } from "./UpdateTaskModal";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation();
  const [toggleComplete, { isLoading: isToggling }] = useToggleTaskCompleteMutation();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id === task.member);

  const handleDelete = async () => {
    try {
      console.log('🗑️ Deleting task with ID:', task._id || task.id);
      // Ensure we have a valid ID before calling deleteTask
      const taskId = task._id || task.id;
      if (!taskId) {
        throw new Error('No task ID available');
      }
      await deleteTask(taskId).unwrap();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleToggleComplete = async () => {
    try {
      console.log('🔄 Toggling task with ID:', task._id || task.id);
      const taskId = task._id || task.id;
      if (!taskId) {
        throw new Error('No task ID available');
      }
      await toggleComplete({ id: taskId, isCompleted: !task.isCompleted }).unwrap();
    } catch (error) {
      console.error('Failed to toggle task completion:', error);
    }
  };

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          />
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>

        <div className="flex gap-3 items-center">
          <UpdateTaskModal task={task} />
          <Button
            onClick={handleDelete}
            disabled={isDeleting}
            variant="ghost"
            size="icon"
            className="p-1 text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            disabled={isToggling}
            onClick={handleToggleComplete}
          />
        </div>
      </div>
      <p>Assigned to: {assignedUser?.name || "Unassigned"}</p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}

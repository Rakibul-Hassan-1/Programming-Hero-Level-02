import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";
import { UpdateTaskModal } from "./UpdateTaskModal";
interface IProps {
  task: ITask;
}
export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
const users = useAppSelector(selectUsers)
const assignedUser = users.find((user) => user.id === task.assignTo)
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
          <h1 className={cn({ "line-through": task.completed })}>
            {task.title}
          </h1>
        </div>

        <div className="flex gap-3 items-center">
          <UpdateTaskModal task={task} />
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="ghost"
            size="icon"
            className="p-1 text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Checkbox
            checked={task.completed}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p>Assigned to: {assignedUser?.name || "Unassigned"}</p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}

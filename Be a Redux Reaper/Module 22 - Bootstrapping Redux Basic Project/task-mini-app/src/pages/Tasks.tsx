import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { useAppSelector } from "@/redux/hook";
import type { RootState } from "@/redux/store";

export default function Tasks() {
  const { tasks } = useAppSelector((state: RootState) => state.todo);

  return (
    <div className="h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Tasks</h1>
            <p className="text-gray-500">Manage your tasks efficiently</p>
          </div>
          <AddTaskModal />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TabsList } from "@radix-ui/react-tabs";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const currentFilter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  
  return (
    <div className="h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-end">
          <div className="mr-auto">
            <h1 className="text-3xl font-bold ">Tasks</h1>
            <p className="text-gray-500">Manage your tasks efficiently</p>
          </div>
          <Tabs value={currentFilter} onValueChange={(value) => dispatch(updateFilter(value as "all" | "high" | "medium" | "low"))}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="high">High</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="low">Low</TabsTrigger>
            </TabsList>
          </Tabs>
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

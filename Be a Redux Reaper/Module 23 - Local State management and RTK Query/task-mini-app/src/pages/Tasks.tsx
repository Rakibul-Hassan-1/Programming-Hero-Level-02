import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/baseApi";
import type { ITask } from "@/types";
import { TabsList } from "@radix-ui/react-tabs";
import { useState } from "react";

export default function Tasks() {
  const { data, isLoading, error } = useGetTasksQuery("");
  const [currentFilter, setCurrentFilter] = useState<"all" | "high" | "medium" | "low">("all");

  if (isLoading) {
    return (
      <div className="h-screen p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-2">Loading tasks...</div>
          <div className="text-gray-500">Please wait while we fetch your tasks</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-2 text-red-600">Error loading tasks</div>
          <div className="text-gray-500 mb-4">Please check if your backend is running at http://localhost:5002</div>
          <div className="text-sm text-gray-400">
            Error details: {'status' in error ? String(error.status) : error?.message || 'Unknown error'}
          </div>
        </div>
      </div>
    );
  }

  // Extract tasks from the API response structure { tasks: [...], pagination: {...} }
  const tasks = data?.tasks || [];
  
  // Client-side filtering
  const filteredTasks = tasks.filter((task: ITask) => {
    if (currentFilter === "all") return true;
    return task.priority === currentFilter;
  });

  return (
    <div className="h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-end">
          <div className="mr-auto">
            <h1 className="text-3xl font-bold ">Tasks</h1>
            <div className="text-gray-500">Manage your tasks efficiently</div>
            {data?.pagination && (
              <div className="text-sm text-gray-400 mt-1">
                Total tasks: {data.pagination.total || tasks.length}
              </div>
            )}
          </div>
          <Tabs value={currentFilter} onValueChange={(value) => setCurrentFilter(value as "all" | "high" | "medium" | "low")}>
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
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task: ITask) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <div className="text-2xl font-semibold text-gray-600 mb-2">
                {tasks.length === 0 ? "No tasks found" : "No tasks match the current filter"}
              </div>
              <div className="text-gray-500 mb-4">
                {tasks.length === 0 
                  ? "Get started by adding your first task using the button above!" 
                  : "Try changing the filter or add more tasks."
                }
              </div>
              {tasks.length === 0 && (
                <div className="text-sm text-gray-400">
                  Your tasks will appear here once you create them
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

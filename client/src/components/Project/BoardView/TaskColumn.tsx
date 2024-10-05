import { Task as TaskType } from "@/state/api";
import { EllipsisVertical, Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";
// import TaskCard from "./Task";

type TaskColumnProps = {
  status: string;
  tasks: TaskType[];
  moveTask: (taskId: number, toStatus: string) => void;
  setModalOpenForNewTask: Dispatch<SetStateAction<boolean>>;
};

export default function TaskColumn({
  status,
  tasks,
  moveTask,
  setModalOpenForNewTask,
}: TaskColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => moveTask(item.id, status),
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const tasksCount = tasks.filter((task) => task.status === status).length;

  const STATUS_COLOR: any = {
    "To Do": "#2563EB",
    "Work In Progress": "#FFF236",
    "Under Review": "#D97706",
    Completed: "#059669",
  };

  return (
    <div
      ref={(instance) => {
        drop(instance);
      }}
      className={`sl:py-4 rounded-lg py-2 xl:px-2 ${
        isOver ? "bg-blue-100 dark:bg-neutral-950" : ""
      }`}
    >
      <div className="mb-3 flex w-full">
        <div
          className={`w-2 !bg-[${STATUS_COLOR[status]}] rounded-s-lg`}
          style={{ backgroundColor: STATUS_COLOR[status] }}
        />
        <div className="flex w-full items-center justify-between rounded-e-lg bg-white  px-5 py-4 dark:bg-slate-800">
          <h3 className="flex items-center text-lg font-semibold dark:text-white">
            {status}{" "}
            <span
              className="ml-2 inline-block rounded-full bg-gray-200 p-1 text-center text-sm leading-none dark:bg-slate-400"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              {tasksCount}
            </span>
          </h3>
          <div className="flex items-center gap-1">
            <button className="flex h-6 w-5 items-center justify-center dark:text-neutral-500">
              <EllipsisVertical size={26} />
            </button>
            <button
              className="flex h-6 w-6 items-center justify-center rounded bg-gray-200 dark:bg-slate-800 dark:text-white"
              onClick={() => setModalOpenForNewTask(true)}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
}

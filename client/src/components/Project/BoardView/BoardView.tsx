import useMoveTask from "@/hooks/Project/Board/useMoveTask";
import { useGetTasksQuery } from "@/state/api";
import { Dispatch, SetStateAction } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "./TaskColumn";

export interface BoardViewProps {
  params: { id: string };
  setModalOpenForNewTask: Dispatch<SetStateAction<boolean>>;
}

const TASK_STATUS = ["To Do", "Work In Progress", "Under Review", "Completed"];

const Boardview = ({ params, setModalOpenForNewTask }: BoardViewProps) => {
  const { id } = params;
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });

  const moveTask = useMoveTask();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while fetching task</div>;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
        {TASK_STATUS.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks || []}
            moveTask={moveTask}
            setModalOpenForNewTask={setModalOpenForNewTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Boardview;

import { Status, useUpdateTaskStatusMutation } from "@/state/api";
import React from "react";

const useMoveTask = () => {
  const [updateTaskStatus] = useUpdateTaskStatusMutation();
  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({ taskId, status: toStatus });
  };
  return moveTask;
};

export default useMoveTask;

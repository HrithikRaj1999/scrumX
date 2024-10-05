import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface Project {
  id: number;
  name: string;
  description?: string;
  startDat?: string;
  endDate?: string;
}

export enum Priority {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}

export enum Status {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}
export interface User {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}
export interface Attachment {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}
export interface Task {
  id: string;
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startDate?: string;
  dueDate?: number;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: User;
  assignee?: User;
  comments?: Comment[];
  attachments?: Attachment[];
}
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL! }),
  reducerPath: "api",
  tagTypes: ["Projects", "Tasks"], //it will be used to invalidate the current project
  endpoints: (builder) => ({
    getProject: builder.query<Project[], void>({
      query: () => "projects",
      providesTags: ["Projects"],
    }),
    createProject: builder.mutation<Project[], Partial<Project>>({
      query: (projects) => ({
        url: "projects",
        method: "POST",
        body: projects,
      }),
      invalidatesTags: ["Projects"],
    }),
    getTasks: builder.query<Task[], { projectId: number }>({
      query: ({ projectId }) => `tasks?projectId=${projectId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
          : [{ type: "Tasks" as const }],
    }),
    createTask: builder.mutation<Task[], Partial<Task>>({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTaskStatus: builder.mutation<
      Task,
      { taskId: number; status: Status }
    >({
      query: ({ taskId, status }) => ({
        url: `tasks/${taskId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { taskId }) =>
        result
          ? [{ type: "Tasks" as const, id: taskId }]
          : [{ type: "Tasks" as const }],
    }),
  }),
});
export const {
  useGetProjectQuery,
  useCreateProjectMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
} = api;

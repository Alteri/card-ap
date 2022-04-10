import { TaskProps } from "../types";

export type FetchTaskSuccessProps = {
  type: "FETCH_TASKS_SUCCESS";
  payload: TaskProps[];
};

export type FetchTaskErrorProps = {
  type: "FETCH_TASKS_ERROR";
  payload: string;
};

export type UpdateTaskCompleteProps = {
  type: "UPDATE_TASK_COMPLETE";
  payload: TaskProps;
};

export const fetchTaskSuccess = (task: TaskProps[]): FetchTaskSuccessProps => ({
  type: "FETCH_TASKS_SUCCESS",
  payload: task,
});

export const fetchTaskError = (error: string): FetchTaskErrorProps => ({
  type: "FETCH_TASKS_ERROR",
  payload: error,
});

export const updateTaskComplete = (
  task: TaskProps
): UpdateTaskCompleteProps => ({
  type: "UPDATE_TASK_COMPLETE",
  payload: task,
});

import { ProjectProps } from "../types";

export type FetchProjectSuccessProps = {
  type: "FETCH_PROJECTS_SUCCESS";
  payload: ProjectProps[];
};

export type FetchProjectErrorProps = {
  type: "FETCH_PROJECTS_ERROR";
  payload: string;
};

export type RemoveProjectProps = {
  type: "REMOVE_PROJECT";
  payload: number;
};

export type AddProjectProps = {
  type: "ADD_PROJECT";
  payload: ProjectProps;
};

export const fetchProjectSuccess = (
  project: ProjectProps[]
): FetchProjectSuccessProps => ({
  type: "FETCH_PROJECTS_SUCCESS",
  payload: project,
});

export const fetchProjectError = (error: string): FetchProjectErrorProps => ({
  type: "FETCH_PROJECTS_ERROR",
  payload: error,
});

export const removeProject = (id: number): RemoveProjectProps => ({
  type: "REMOVE_PROJECT",
  payload: id,
});

export const addProject = (project: ProjectProps): AddProjectProps => ({
  type: "ADD_PROJECT",
  payload: project,
});

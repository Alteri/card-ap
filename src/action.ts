import { ProjectProps, TeamProps } from "./types";

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

export type FetchTeamSuccessProps = {
  type: "FETCH_TEAMS_SUCCESS";
  payload: TeamProps[];
};

export type FetchTeamErrorProps = {
  type: "FETCH_TEAMS_ERROR";
  payload: string;
};

export type AddTeamProps = {
  type: "ADD_TEAM";
  payload: TeamProps;
};

export type RemoveTeamProps = {
  type: "REMOVE_TEAM";
  payload: number;
};

export type Action =
  | FetchProjectSuccessProps
  | FetchProjectErrorProps
  | RemoveProjectProps
  | AddProjectProps
  | FetchTeamSuccessProps
  | FetchTeamErrorProps
  | AddTeamProps
  | RemoveTeamProps;

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

export const fetchTeamSuccess = (team: TeamProps[]): FetchTeamSuccessProps => ({
  type: "FETCH_TEAMS_SUCCESS",
  payload: team,
});

export const fetchTeamError = (error: string): FetchTeamErrorProps => ({
  type: "FETCH_TEAMS_ERROR",
  payload: error,
});

export const addTeam = (team: TeamProps): AddTeamProps => ({
  type: "ADD_TEAM",
  payload: team,
});

export const removeTeam = (id: number): RemoveTeamProps => ({
  type: "REMOVE_TEAM",
  payload: id,
});

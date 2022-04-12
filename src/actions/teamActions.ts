import { TeamProps } from "types";

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

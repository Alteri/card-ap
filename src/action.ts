import { CardProps, TeamProps } from "./types";

export type FetchCardSuccessProps = {
  type: "FETCH_CARDS_SUCCESS";
  payload: CardProps[];
};

export type FetchCardErrorProps = {
  type: "FETCH_CARDS_ERROR";
  payload: string;
};

export type RemoveCardProps = {
  type: "REMOVE_CARD";
  payload: number;
};

export type AddCardProps = {
  type: "ADD_CARD";
  payload: CardProps;
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
  | FetchCardSuccessProps
  | FetchCardErrorProps
  | RemoveCardProps
  | AddCardProps
  | FetchTeamSuccessProps
  | FetchTeamErrorProps
  | AddTeamProps
  | RemoveTeamProps;

export const fetchCardSuccess = (card: CardProps[]): FetchCardSuccessProps => ({
  type: "FETCH_CARDS_SUCCESS",
  payload: card,
});

export const fetchCardError = (error: string): FetchCardErrorProps => ({
  type: "FETCH_CARDS_ERROR",
  payload: error,
});

export const removeCard = (id: number): RemoveCardProps => ({
  type: "REMOVE_CARD",
  payload: id,
});

export const addCard = (card: CardProps): AddCardProps => ({
  type: "ADD_CARD",
  payload: card,
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

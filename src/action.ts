import { TaskType } from "./types";

export type FetchCardSuccessProps = {
  type: "FETCH_CARDS_SUCCESS";
  payload: {
    id: number;
    title: string;
    description: string;
    group: TaskType;
  }[];
};

export type FetchCardErrorProps = {
  type: "FETCH_CARDS_ERROR";
  payload: string;
};

export type RemoveCardProps = {
  type: "REMOVE_CARD";
  payload: number;
};

export type Action =
  | FetchCardSuccessProps
  | FetchCardErrorProps
  | RemoveCardProps;

export const fetchCardSuccess = (
  card: {
    id: number;
    title: string;
    description: string;
    group: TaskType;
  }[]
): FetchCardSuccessProps => ({
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

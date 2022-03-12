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

export type Action = FetchCardSuccessProps | FetchCardErrorProps;

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

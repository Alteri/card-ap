import { Action } from "./action";
import { TaskType } from "./types";

export type CardsState = {
  cards: {
    id: number;
    title: string;
    description: string;
    group: TaskType;
  }[];
};

const initialState = {
  cards: [],
};

export const rootReducer = (
  state: CardsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "FETCH_CARDS_SUCCESS":
      return {
        ...state,
        cards: action.payload,
      };
    case "FETCH_CARDS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { Action } from "./action";
import { CardProps, TeamProps } from "./types";

export type StateProps = {
  cards: CardProps[];
  teams: TeamProps[];
};

const initialState = {
  cards: [],
  teams: [],
  error: false,
};

export const rootReducer = (
  state: StateProps = initialState,
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
    case "REMOVE_CARD":
      return {
        ...state,
        cards: state.cards.filter(({ id }) => id !== action.payload),
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case "FETCH_TEAMS_SUCCESS":
      return {
        ...state,
        teams: action.payload,
      };
    case "FETCH_TEAMS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "ADD_TEAM":
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case "REMOVE_TEAM":
      return {
        ...state,
        teams: state.teams.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

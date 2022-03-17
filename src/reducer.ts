import { Action } from "./action";
import { CardProps } from "./types";

export type CardsState = {
  cards: CardProps[];
};

const initialState = {
  cards: [],
  error: false,
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
    case "REMOVE_CARD":
      return {
        ...state,
        cards: state.cards.filter((_, index) => index !== action.payload),
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    default:
      return state;
  }
};

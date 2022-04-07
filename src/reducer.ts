import { Action } from "./action";
import { ProjectProps, TeamProps } from "./types";

export type StateProps = {
  projects: ProjectProps[];
  teams: TeamProps[];
};

const initialState = {
  projects: [],
  teams: [],
  error: false,
};

export const rootReducer = (
  state: StateProps = initialState,
  action: Action
) => {
  switch (action.type) {
    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        projects: action.payload,
      };
    case "FETCH_PROJECTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "REMOVE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(({ id }) => id !== action.payload),
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
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

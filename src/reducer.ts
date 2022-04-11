import { Action } from "./actions";
import { ProjectProps, TeamProps, TaskProps } from "./types";

export type StateProps = {
  projects: ProjectProps[];
  teams: TeamProps[];
  tasks: TaskProps[];
};

const initialState = {
  projects: [],
  teams: [],
  tasks: [],
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
    case "FETCH_TASKS_SUCCESS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "FETCH_TASKS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "UPDATE_TASK_COMPLETE":
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );

      const updateTask = [...state.tasks];
      updateTask[index].complete = action.payload.complete;
      return {
        ...state,
        tasks: updateTask,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

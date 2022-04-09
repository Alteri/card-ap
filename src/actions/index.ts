import {
  FetchProjectSuccessProps,
  FetchProjectErrorProps,
  RemoveProjectProps,
  AddProjectProps,
} from "./projectActions";
import {
  FetchTeamSuccessProps,
  FetchTeamErrorProps,
  AddTeamProps,
  RemoveTeamProps,
} from "./teamActions";
import { FetchTaskSuccessProps, FetchTaskErrorProps } from "./taskActions";

export type Action =
  | FetchProjectSuccessProps
  | FetchProjectErrorProps
  | RemoveProjectProps
  | AddProjectProps
  | FetchTeamSuccessProps
  | FetchTeamErrorProps
  | AddTeamProps
  | RemoveTeamProps
  | FetchTaskSuccessProps
  | FetchTaskErrorProps;

import axios from "axios";
import {
  fetchProjectSuccess,
  fetchProjectError,
} from "./actions/projectActions";
import { fetchTeamSuccess, fetchTeamError } from "./actions/teamActions";
import { fetchTaskSuccess, fetchTaskError } from "./actions/taskActions";

export const fetchProjects = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/8260fb47-294f-4a36-9437-9352d1261d7e`)
    .then((response) => {
      dispatch(fetchProjectSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchProjectError(error));
    });
};

export const fetchTeams = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/a5a2a9f9-d76a-4c93-bd9d-475060e98df4`)
    .then((response) => {
      dispatch(fetchTeamSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchTeamError(error));
    });
};

export const fetchTasks = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/8d2ab8ca-e852-4f31-83ac-06e5c88f7806`)
    .then((response) => {
      dispatch(fetchTaskSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchTaskError(error));
    });
};

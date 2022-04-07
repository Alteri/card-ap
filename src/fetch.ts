import axios from "axios";
import {
  fetchProjectSuccess,
  fetchProjectError,
  fetchTeamSuccess,
  fetchTeamError,
} from "./action";

export const fetchProjects = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/3720879b-5bdc-448d-81bf-90d8a11e3bfe`)
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

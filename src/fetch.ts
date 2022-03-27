import axios from "axios";
import {
  fetchCardSuccess,
  fetchCardError,
  fetchTeamSuccess,
  fetchTeamError,
} from "./action";

export const fetchCards = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/8d3a6b47-321f-4efe-97e5-fce4d1354798`)
    .then((response) => {
      dispatch(fetchCardSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCardError(error));
    });
};

export const fetchTeams = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/76e14a87-85b0-41a4-b359-08f8e2512281`)
    .then((response) => {
      dispatch(fetchTeamSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchTeamError(error));
    });
};

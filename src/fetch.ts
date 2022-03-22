import axios from "axios";
import {
  fetchCardSuccess,
  fetchCardError,
  fetchTeamSuccess,
  fetchTeamError,
} from "./action";

export const fetchCards = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/3dc7b958-2e1c-4657-9871-479c22a54f29`)
    .then((response) => {
      dispatch(fetchCardSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCardError(error));
    });
};

export const fetchTeams = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/bbe1810d-4111-42a0-8640-dc0d3a607e9a`)
    .then((response) => {
      dispatch(fetchTeamSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchTeamError(error));
    });
};

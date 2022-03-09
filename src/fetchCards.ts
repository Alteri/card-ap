import axios from "axios";
import { fetchCardSuccess, fetchCardError } from "./action";

export const fetchCards = () => (dispatch: any) => {
  axios
    .get(`https://run.mocky.io/v3/c7712ff6-12ff-4cd5-af73-1497a652fe0d`)
    .then((response) => {
      dispatch(fetchCardSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCardError(error));
    });
};

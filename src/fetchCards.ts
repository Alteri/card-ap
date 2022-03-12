import axios from "axios";
import { fetchCardSuccess, fetchCardError } from "./action";

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

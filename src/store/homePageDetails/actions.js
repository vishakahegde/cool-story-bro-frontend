import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appDoneLoading, appLoading } from "../appState/actions";

export const pageDetailFetched = (page) => {
  return {
    type: "homePageDetails/pageFetched",
    payload: page,
  };
};

export const fetchPageDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const res = await axios.get(`${apiUrl}/homepages/${id}`);
    dispatch(pageDetailFetched(res.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.error(error);
  }
};

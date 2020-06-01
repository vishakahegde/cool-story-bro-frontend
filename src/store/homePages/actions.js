import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

export const homePagesFetched = (homePages) => {
  return {
    type: "homePage/homePagesFetched",
    payload: homePages,
  };
};

export const fetchHomePages = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const res = await axios.get(`${apiUrl}/homepages`);
    dispatch(homePagesFetched(res.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.error(error);
  }
};

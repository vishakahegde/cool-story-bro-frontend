import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import HomePageSliceReducer from "./homePages/reducer";
import { HomePageDetailsSliceReducer } from "./homePageDetails/reducer";

export default combineReducers({
  appState,
  user,
  homePages: HomePageSliceReducer,
  homePageDetails: HomePageDetailsSliceReducer,
});

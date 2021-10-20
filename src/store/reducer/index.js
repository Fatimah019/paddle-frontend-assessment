import { combineReducers } from "redux";
import githubUserReducer from "../reducer/githubUsers";

export default combineReducers({
  githubUser: githubUserReducer,
});

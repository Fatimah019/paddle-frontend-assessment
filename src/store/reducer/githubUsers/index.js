import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../actions";

let githubUserSlice = createSlice({
  name: "githubUser",
  initialState: {
    user: null,
    loading: false,
  },
  reducers: {
    githubUserFetchSuccess: (userData, action) => {
      userData.loading = false;
      userData.user = action.payload;
    },

    githubUserFetchStart: (userData, action) => {
      userData.loading = true;
    },

    githubUserFetchFailed: (userData, action) => {
      userData.loading = false;
    },
  },
});

const { githubUserFetchSuccess, githubUserFetchStart, githubUserFetchFailed } =
  githubUserSlice.actions;

export default githubUserSlice.reducer;

export const fetchGithubUser = (query, sort) =>
  apiCallBegan({
    // url: `/search/repositories?q=${query}&sort=${sort}`,
    url: `/search/repositories?${query}&sort=${sort}`,
    method: "GET",
    onSuccess: githubUserFetchSuccess.type,
    onStart: githubUserFetchStart.type,
    onError: githubUserFetchFailed.type,
  });

//   selectors
export const getUser = (state) => state.githubUser.user;

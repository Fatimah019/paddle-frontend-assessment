import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../actions";

let githubUserSlice = createSlice({
  name: "user",
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

export const fetchGithubUser = (query, sort, order) =>
  apiCallBegan({
    url: `/search/repositories?q=${query}&sort=${sort}&order=${order}`,
    method: "GET",
    onSuccess: githubUserFetchSuccess.type,
    onStart: githubUserFetchStart.type,
    onError: githubUserFetchFailed.type,
  });

//   selectors
export const getUser = (state) => state.githubUser;

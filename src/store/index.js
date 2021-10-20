import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { api } from "./middleware/api.js";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, api],
});

export default store;

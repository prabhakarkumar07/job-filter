import { configureStore } from "@reduxjs/toolkit";
import jobSliceReducer from "./jobSlice";

const store = configureStore({
  reducer: {
    jobs: jobSliceReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: false };

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    jobpost: (state, action) => {
      state.status = true;
    },
  },
});

export const { jobpost } = jobSlice.actions;
export default jobSlice.reducer;

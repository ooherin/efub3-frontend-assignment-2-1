import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: [],
  reducers: {
    addTimer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTimer } = timerSlice.actions;

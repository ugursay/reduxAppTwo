import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 55,
  value2: 60,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value2 += 1;
    },
    decrement: (state) => {
      state.value2 -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

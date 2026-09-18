import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 5500 },
  reducers: {
    up: (state) => {
      state.counter += 5;
    },
    down: (state) => {
      state.counter -= 5;
    },
  },
});

export const { up, down } = counterSlice.actions;
export default counterSlice.reducer;

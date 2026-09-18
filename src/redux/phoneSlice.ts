import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: { amount: 100 },
  reducers: {
    addPhone: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
    delPhone: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
    },
  },
});

export const { addPhone, delPhone } = phoneSlice.actions;
export default phoneSlice.reducer;

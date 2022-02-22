import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DemoState } from "./type";

const initialState: DemoState = {
  isOver: false,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setFlag(state: DemoState, { payload }: PayloadAction<boolean>) {
      state.isOver = payload;
    },
  },
});

export const { setFlag } = demoSlice.actions;

export default demoSlice.reducer;

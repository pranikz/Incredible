import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const slice = createSlice({
  name: "activeArea",
  initialState,
  reducers: {
    setActiveArea: (state, action) => {
      return action.payload;
    },
    removeActiveArea: () => {
      return initialState;
    },
  },
});

export const { setActiveArea, removeActiveArea } = slice.actions;

export const selectActiveArea = (state: any) => state.activeArea;
export default slice.reducer;

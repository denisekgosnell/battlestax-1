import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  id: "",
};

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = slice.actions;

export const selectId = (state) => state.game.id;

export default slice.reducer;

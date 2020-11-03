import { configureStore, combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";

export const reducers = combineReducers({
  game: gameReducer,
});

export default configureStore({
  reducer: reducers,
});

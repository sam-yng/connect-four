import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice"
import playerReducer from "./playerSlice";

const reducers = combineReducers({ board: boardReducer, player: playerReducer })

export const store = configureStore({
	reducer: reducers
})
import { createSlice } from "@reduxjs/toolkit";

export interface BoardState { board: BoardSpace[][] }
export type BoardSpace = string

const initialState: BoardSpace[][] = [
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
]

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		testAction: (state, action) => {
			console.log(action)
		}
	}
})

export const { testAction } = boardSlice.actions
export default boardSlice.reducer
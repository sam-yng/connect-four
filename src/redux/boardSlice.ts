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
		placePiece: (state, action) => {
			const baordCopy: BoardSpace[][] = [...state]
			baordCopy[action.payload.index][action.payload.subIndex] = action.payload.player
		}
	}
})

export const { placePiece } = boardSlice.actions
export default boardSlice.reducer
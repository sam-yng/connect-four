import { createSlice } from "@reduxjs/toolkit";

export interface BoardState { board: BoardSpace[][] }
export type BoardSpace = "" | "1" | "2"

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
		},
		clearBoard: (state) => {
			const newBoard = initialState
			state = newBoard
			return state
		}
	}
})

export const { placePiece, clearBoard } = boardSlice.actions
export default boardSlice.reducer
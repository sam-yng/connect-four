import { createSlice } from "@reduxjs/toolkit";

type GridSpace = string

export type GameState = GridSpace[][]

const initialState: GridSpace[][] = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
]

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		testAction: (state, action) => {
			console.log(action)
		}
	}
})

export const { testAction } = gameSlice.actions
export default gameSlice.reducer
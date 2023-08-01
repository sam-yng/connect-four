import { createSlice } from "@reduxjs/toolkit";

type GridSpace = number | null

const initialState: GridSpace[][] = [
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
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
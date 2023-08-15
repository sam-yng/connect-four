import { createSlice } from "@reduxjs/toolkit";

export interface PlayerState { player: Player }
export type Player = "2" | "1"

const initialState: Player = "1"

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		turnChange: (state, action) => {
			state = action.payload.player
			return state
		},
		resetTurn: (state) => {
			state = "1"
			return state
		},
	}
})

export const { turnChange, resetTurn } = playerSlice.actions
export default playerSlice.reducer
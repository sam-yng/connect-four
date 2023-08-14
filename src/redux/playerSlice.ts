import { createSlice } from "@reduxjs/toolkit";

export interface PlayerState { player: Player }
export type Player = "yellow" | "red"

const initialState: Player = "red"

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		turnChange: (state, action) => {
			state = action.payload.player
			return state
		}
	}
})

export const { turnChange } = playerSlice.actions
export default playerSlice.reducer
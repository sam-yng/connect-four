import { createSlice } from "@reduxjs/toolkit";

export interface PlayerState { player: Player }
export type Player = "yellow" | "red"

const initialState: Player = "red"

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		testAction2: (state, action) => {
			console.log(action)
		}
	}
})

export const { testAction2 } = playerSlice.actions
export default playerSlice.reducer
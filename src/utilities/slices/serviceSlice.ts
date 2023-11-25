import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface serviceState {
	value: string;
}

const initialState = {
	value: "None",
} as serviceState;

export const serviceSlice = createSlice({
	name: "service",
	initialState,
	reducers: {
		changeBySelect: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { changeBySelect } = serviceSlice.actions;
export default serviceSlice.reducer;

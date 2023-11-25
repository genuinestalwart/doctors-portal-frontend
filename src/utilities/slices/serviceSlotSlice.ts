import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface serviceSlotState {
	value: string;
}

const initialState = {
	value: "",
} as serviceSlotState;

export const serviceSlotSlice = createSlice({
	name: "serviceSlot",
	initialState,
	reducers: {
		changeBySelect: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { changeBySelect } = serviceSlotSlice.actions;
export default serviceSlotSlice.reducer;

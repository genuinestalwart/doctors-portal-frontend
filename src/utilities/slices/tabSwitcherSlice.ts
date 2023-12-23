import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface tabSwitcherState {
	value: string;
}

const initialState = {
	value: "my-appointments",
} as tabSwitcherState;

export const tabSwitcherSlice = createSlice({
	name: "tabSwitcher",
	initialState,
	reducers: {
		changeBySelect: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { changeBySelect } = tabSwitcherSlice.actions;
export default tabSwitcherSlice.reducer;

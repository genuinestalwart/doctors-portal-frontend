import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface selectedDateState {
	value: Date | undefined;
}

const initialState = {
	value: new Date(),
} as selectedDateState;

export const selectedDateSlice = createSlice({
	name: "selectedDate",
	initialState,
	reducers: {
		changeBySelect: (state, action: PayloadAction<Date | undefined>) => {
			state.value = action.payload;
		},
	},
});

export const { changeBySelect } = selectedDateSlice.actions;
export default selectedDateSlice.reducer;

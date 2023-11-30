import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import auth from "@/utilities/lib/firebase";

interface userState {
	value: object | null;
}

const initialState = {
	value: auth.currentUser,
} as userState;

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<object>) => {
			state.value = action.payload;
		},
	},
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

import selectedDate from "@/utilities/slices/selectedDateSlice";
import service from "@/utilities/slices/serviceSlice";
import serviceSlot from "@/utilities/slices/serviceSlotSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		selectedDate,
		service,
		serviceSlot,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

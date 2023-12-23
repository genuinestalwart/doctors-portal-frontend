import selectedDate from "@/utilities/slices/selectedDateSlice";
import service from "@/utilities/slices/serviceSlice";
import serviceSlot from "@/utilities/slices/serviceSlotSlice";
import { configureStore } from "@reduxjs/toolkit";
import tabSwitcher from "@/utilities/slices/tabSwitcherSlice";

const store = configureStore({
	reducer: {
		selectedDate,
		service,
		serviceSlot,
		tabSwitcher,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

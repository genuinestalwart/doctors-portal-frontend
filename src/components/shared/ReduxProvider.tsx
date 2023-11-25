"use client";

import store from "@/utilities/lib/store";
import { Provider } from "react-redux";

const ReduxProvider = (props: React.PropsWithChildren) => {
	return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;

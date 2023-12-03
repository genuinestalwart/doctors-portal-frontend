"use client";

import auth from "@/utilities/lib/firebase";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const RequireAuth = (props: React.PropsWithChildren) => {
	const [user] = useAuthState(auth);

	if (user) {
		return <>{props.children}</>;
	} else {
		redirect("/login");
	}
};

export default RequireAuth;

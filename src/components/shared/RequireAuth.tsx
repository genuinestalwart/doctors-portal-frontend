"use client";

import auth from "@/utilities/lib/firebase";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";

const RequireAuth = (props: React.PropsWithChildren) => {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<>
				<Header />
			</>
		);
	} else if (user) {
		return <>{props.children}</>;
	} else {
		redirect("/login");
	}
};

export default RequireAuth;

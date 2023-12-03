import Header from "@/components/shared/Header";
import RequireAuth from "@/components/shared/RequireAuth";

const DashboardPage = () => {
	return (
		<RequireAuth>
			<Header />

			<main></main>
		</RequireAuth>
	);
};

export default DashboardPage;

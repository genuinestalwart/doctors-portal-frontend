import Dashboard from "@/components/Dashboard/Dashboard";
import Header from "@/components/shared/Header";
import RequireAuth from "@/components/shared/RequireAuth";

const DashboardPage = () => {
	return (
		<RequireAuth>
			<Header />
			<Dashboard />
		</RequireAuth>
	);
};

export default DashboardPage;

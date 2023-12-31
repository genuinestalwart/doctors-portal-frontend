import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Doctors Portal | Dashboard",
	openGraph: {
		images: "/og-image.png",
		url: "https://github.com/genuinestalwart/",
	},
	metadataBase: new URL("https://gs-doctors-portal-frontend.vercel.app/"),
	keywords: ["genuine stalwart", "doctors portal"],
	description: "Book Your Appointments Online",
	authors: [{ name: "Genuine Stalwart" }],
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>;
};

export default DashboardLayout;

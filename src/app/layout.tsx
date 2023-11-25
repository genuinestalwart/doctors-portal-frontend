import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utilities/lib/utils";
import ReduxProvider from "@/components/shared/ReduxProvider";

const openSans = Open_Sans({
	weight: "variable",
	variable: "--font-open-sans",
	subsets: ["latin"],
	style: ["italic", "normal"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Doctors Portal | Home",
	openGraph: {
		images: "/og-image.png",
		url: "https://github.com/genuinestalwart/",
	},
	metadataBase: new URL("https://gs-doctors-portal-frontend.vercel.app/"),
	keywords: ["genuine stalwart", "doctors portal"],
	description: "Book Your Appointments Online",
	authors: [{ name: "Genuine Stalwart" }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReduxProvider>
			<html lang='en' suppressHydrationWarning>
				<body
					className={cn(
						"antialiased bg-background font-open-sans text-foreground",
						openSans.variable
					)}>
					<div className='container'>{children}</div>
				</body>
			</html>
		</ReduxProvider>
	);
};

export default RootLayout;

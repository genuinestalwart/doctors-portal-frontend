import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utilities/lib/utils";
import ReduxProvider from "@/components/shared/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";

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
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					"antialiased bg-background font-open-sans text-foreground",
					openSans.variable
				)}>
				<ReduxProvider>
					<div className='container'>
						{children}
						<Toaster />
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
};

export default RootLayout;

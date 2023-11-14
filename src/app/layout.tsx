import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store";
import { cn } from "@/utilities/lib/utils";

const openSans = Open_Sans({
	weight: "variable",
	variable: "--font-open-sans",
	subsets: ["latin"],
	style: ["italic", "normal"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Doctors Portal | Home",
	description: "Book Your Appointments Online",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn("antialiased font-open-sans", openSans.variable)}>
				{/* <Provider store={store}>{children}</Provider> */}
				<div className='container'>{children}</div>
			</body>
		</html>
	);
};

export default RootLayout;

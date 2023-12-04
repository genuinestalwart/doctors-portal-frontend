"use client";

import auth from "@/utilities/lib/firebase";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const navItems = [
	{ pathName: "/", pageName: "Home" },
	{ pathName: "/about-us", pageName: "About Us" },
	{ pathName: "/appointment", pageName: "Appointment" },
	{ pathName: "/reviews", pageName: "Reviews" },
	{ pathName: "/contact-us", pageName: "Contact Us" },
];

const Navbar = (props: any) => {
	const pathName = usePathname();
	const { clicked } = props;
	const [user, loading, error] = useAuthState(auth);
	const [signOut] = useSignOut(auth);

	if (user && pathName === "/login") {
		redirect("/dashboard");
	} else {
		return (
			<NavigationMenu
				className={`block duration-500 fixed lg:flex h-[calc(100vh_-_4rem)] lg:h-auto [&_div]:h-full inset-0 lg:inset-auto lg:relative max-w-full lg:max-w-max lg:top-auto z-20 lg:z-10 ${
					clicked ? "top-16" : "-top-full"
				}`}
				delayDuration={0}>
				<NavigationMenuList className='bg-background lg:bg-transparent block duration-500 md:flex md:flex-col lg:flex-row p-6 lg:p-0 relative space-x-0 lg:space-x-1 space-y-4 lg:space-y-0 lg:static w-full'>
					{navItems.map((navItem, index) => (
						<NavigationMenuItem
							key={index}
							className='w-full md:w-3/4 lg:w-auto'>
							<Link
								href={navItem.pathName}
								legacyBehavior
								passHref>
								<NavigationMenuLink
									className={`block font-semibold lg:inline px-4 py-2 rounded-lg lg:rounded-md lg:text-sm w-full ${
										pathName === navItem.pathName
											? "bg-accent lg:px-3 text-accent-foreground"
											: "bg-accent/5 lg:bg-transparent lg:mx-3 lg:p-0 hover:text-primary hover:underline underline-offset-2"
									}`}>
									{navItem.pageName}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}

					<NavigationMenuItem className='w-full md:w-3/4 lg:w-auto'>
						<Link
							href={
								loading || error || !user
									? "/login"
									: "/dashboard"
							}
							legacyBehavior
							passHref>
							<NavigationMenuLink
								className={`block font-semibold lg:inline px-4 py-2 rounded-lg lg:rounded-md lg:text-sm w-full ${
									((loading || error || !user) &&
										pathName === "/login") ||
									pathName === "/dashboard"
										? "bg-accent lg:px-3 text-accent-foreground"
										: "bg-accent/5 lg:bg-transparent lg:mx-3 lg:p-0 hover:text-primary hover:underline underline-offset-2"
								}`}>
								{loading || error || !user
									? "Log In"
									: "Dashboard"}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<Button
						onClick={async () => await signOut()}
						className={`bg-destructive hover:bg-destructive font-semibold h-auto lg:px-3 rounded-lg lg:rounded-md text-base lg:text-sm w-full md:w-3/4 lg:w-auto ${
							loading || error || !user ? "hidden" : ""
						}`}>
						Log Out
					</Button>
				</NavigationMenuList>
			</NavigationMenu>
		);
	}
};

export default Navbar;

"use client";

import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useAppSelector } from "@/utilities/lib/hooks";
import { UserCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
	const user = useAppSelector((state) => state.user.value);

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
						<Link href={navItem.pathName} legacyBehavior passHref>
							<NavigationMenuLink
								className={`block font-semibold lg:inline px-4 py-2.5 rounded-lg lg:rounded-md lg:text-sm w-full ${
									pathName === navItem.pathName
										? "bg-accent lg:px-3 text-accent-foreground"
										: "bg-accent/5 lg:bg-transparent lg:mx-3 lg:p-0 hover:text-primary hover:underline underline-offset-2"
								}`}>
								{navItem.pageName}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}

				{user ? (
					<>
						<NavigationMenuItem className='hidden lg:inline-flex'>
							<Popover>
								<PopoverTrigger asChild>
									<Button className='bg-transparent hover:bg-accent h-auto p-1 text-foreground hover:text-accent-foreground'>
										<UserCircleIcon
											className='h-8 w-8'
											strokeWidth={1.5}
											absoluteStrokeWidth
										/>
									</Button>
								</PopoverTrigger>

								<PopoverContent className='space-y-4 w-auto'>
									<Link
										href='/dashboard'
										legacyBehavior
										passHref>
										<NavigationMenuLink
											className={`block font-semibold px-4 py-2.5 rounded-lg text-sm w-full ${
												pathName === "/dashboard"
													? "bg-accent text-accent-foreground"
													: "bg-accent/5 hover:text-primary hover:underline underline-offset-2"
											}`}>
											Dashboard
										</NavigationMenuLink>
									</Link>

									<Button className='bg-destructive hover:bg-destructive block font-semibold px-4 py-2.5 rounded-lg text-sm w-full'>
										Log Out
									</Button>
								</PopoverContent>
							</Popover>
						</NavigationMenuItem>

						<Link href='/dashboard' legacyBehavior passHref>
							<NavigationMenuLink
								className={`block font-semibold lg:hidden px-4 py-2.5 rounded-lg w-full md:w-3/4 ${
									pathName === "/dashboard"
										? "bg-accent text-accent-foreground"
										: "bg-accent/5 hover:text-primary hover:underline underline-offset-2"
								}`}>
								Dashboard
							</NavigationMenuLink>
						</Link>

						<Button className='bg-destructive hover:bg-destructive block h-auto lg:hidden font-semibold px-4 py-2.5 rounded-lg text-base w-full md:w-3/4'>
							Log Out
						</Button>
					</>
				) : (
					<NavigationMenuItem className='w-full md:w-3/4 lg:w-auto'>
						<Link href='/login' legacyBehavior passHref>
							<NavigationMenuLink
								className={`block font-semibold lg:inline px-4 py-2.5 rounded-lg lg:rounded-md lg:text-sm w-full ${
									pathName === "/login"
										? "bg-accent lg:px-3 text-accent-foreground"
										: "bg-accent/5 lg:bg-transparent lg:mx-3 lg:p-0 hover:text-primary hover:underline underline-offset-2"
								}`}>
								Log In
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navbar;

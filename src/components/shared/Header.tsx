"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/utilities/data/items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
	const pathName = usePathname();
	const [clicked, setClicked] = useState(false);

	return (
		<header className='flex h-16 items-center justify-between px-4 md:px-16 relative lg:static'>
			<div
				className={`duration-500 font-semibold text-lg ${
					clicked ? "opacity-0" : ""
				}`}>
				Doctors Portal
			</div>

			<div
				onClick={() => setClicked(!clicked)}
				className={`burger cursor-pointer duration-500 flex flex-col h-8 lg:hidden justify-evenly w-7 z-30 ${
					clicked ? "clicked" : ""
				}`}>
				<div className='bg-accent duration-500 burger-icon-1 h-1 rounded-md w-full'></div>
				<div className='bg-accent duration-500 burger-icon-2 h-1 rounded-md w-full'></div>
				<div className='bg-accent duration-500 burger-icon-3 h-1 rounded-md w-full'></div>
			</div>

			<div
				className={`duration-500 fixed h-[calc(100vh_-_4rem)] lg:hidden inset-0 top-16 w-full -z-10 ${
					clicked
						? "bg-accent/75 show-sidebar"
						: "bg-accent/0 hide-sidebar"
				}`}></div>

			<NavigationMenu
				className={`block duration-500 fixed lg:flex h-[calc(100vh_-_4rem)] lg:h-auto [&_div]:h-full lg:[&_div]:h-auto inset-0 lg:inset-auto lg:relative max-w-full lg:max-w-max lg:top-auto z-20 lg:z-10 ${
					clicked ? "top-16" : "-top-full"
				}`}>
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
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};

export default Header;

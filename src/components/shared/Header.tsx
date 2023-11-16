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
		<header className='flex h-16 items-center justify-between px-4 md:px-16'>
			<div
				className={`duration-500 font-semibold text-lg ${
					clicked ? "opacity-0" : ""
				}`}>
				Doctors Portal
			</div>

			<div className='h-8 relative w-7'>
				<div
					onClick={() => setClicked(!clicked)}
					className={`absolute cursor-pointer duration-500 flex flex-col burger h-full justify-evenly w-full ${
						clicked ? "clicked" : ""
					}`}>
					<div className='bg-accent duration-500 burger-icon-1 h-1 rounded-md w-full'></div>
					<div className='bg-accent duration-500 burger-icon-2 h-1 rounded-md w-full'></div>
					<div className='bg-accent duration-500 burger-icon-3 h-1 rounded-md w-full'></div>
				</div>
			</div>

			{/* <NavigationMenu>
				<NavigationMenuList>
					{navItems.map((navItem, index) => (
						<NavigationMenuItem key={index}>
							<Link
								href={navItem.pathName}
								legacyBehavior
								passHref>
								<NavigationMenuLink
									className={`font-semibold px-3 py-2.5 text-sm ${
										pathName === navItem.pathName
											? "bg-foreground rounded-md text-background"
											: "hover:underline underline-offset-2"
									}`}>
									{navItem.pageName}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu> */}
		</header>
	);
};

export default Header;

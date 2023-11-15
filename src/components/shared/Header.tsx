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

const Header = () => {
	const pathName = usePathname();

	return (
		<header className='flex h-16 items-center justify-between px-16'>
			<div className='text-lg font-semibold'>Doctors Portal</div>

			<NavigationMenu>
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
			</NavigationMenu>
		</header>
	);
};

export default Header;

"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const tabItems = [
	{ name: "My Appointments", value: "my-appointments" },
	{ name: "My Review", value: "my-review" },
	{ name: "All Users", value: "all-users" },
	{ name: "Add A Doctor", value: "add-a-doctor" },
	{ name: "Manage Doctors", value: "manage-doctors" },
];

const Dashboard = () => {
	const [tabOpen, setTabOpen] = useState("my-appointments");

	return (
		<main className='md:flex h-[calc(100vh_-_4rem)]'>
			<section className='lg:block hidden h-full py-4 w-1/5'>
				{tabItems.map((tabItem, index) => (
					<Button
						onClick={() => setTabOpen(tabItem.value)}
						key={index}
						className={`font-bold h-auto justify-start px-12 py-3 rounded-none text-base w-full ${
							tabOpen === tabItem.value
								? "bg-muted hover:bg-muted text-foreground hover:text-foreground"
								: "bg-transparent hover:bg-accent text-foreground/50"
						}`}>
						{tabItem.name}
					</Button>
				))}
			</section>

			<Tabs
				className='bg-muted h-full w-4/5'
				defaultValue='my-appointments'
				value={tabOpen}>
				{tabItems.map((tabItem, index) => (
					<TabsContent
						key={index}
						value={tabItem.value}></TabsContent>
				))}
			</Tabs>
		</main>
	);
};

export default Dashboard;

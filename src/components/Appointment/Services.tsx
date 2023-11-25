"use client";

import { useAppDispatch, useAppSelector } from "@/utilities/lib/hooks";
import { Button } from "@/components/ui/button";
import { changeBySelect } from "@/utilities/slices/serviceSlice";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const serviceItems = [
	{ serviceName: "Teeth Orthodontics" },
	{ serviceName: "Cosmetic Dentistry" },
	{ serviceName: "Teeth Cleaning" },
	{ serviceName: "Cavity Protection" },
	{ serviceName: "Pediatric Dental" },
	{ serviceName: "Oral Surgery" },
];

const Services = () => {
	const selectedDate =
		useAppSelector((state) => state.selectedDate.value) || new Date();
	const dispatch = useAppDispatch();

	return (
		<section className='px-8 md:px-0 space-y-8 md:space-y-12'>
			<div className='space-y-2 text-center'>
				<h1 className='font-bold scroll-m-20 text-primary text-xl tracking-tight'>
					Available Services on {months[selectedDate.getMonth()]}{" "}
					{selectedDate.getDate()}, {selectedDate.getFullYear()}
				</h1>

				<h2 className='font-semibold scroll-m-20 text-lg tracking-tight'>
					Please Select A Service
				</h2>
			</div>

			<div className='gap-8 grid grid-cols-1 md:grid-cols-3 md:px-12'>
				{serviceItems.map((serviceItem, index) => (
					<Button
						onClick={() =>
							dispatch(changeBySelect(serviceItem.serviceName))
						}
						key={index}
						className='bg-background hover:bg-background font-bold py-12 rounded-xl shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px] hover:text-lg text-primary hover:text-secondary'>
						{serviceItem.serviceName}
					</Button>
				))}
			</div>
		</section>
	);
};

export default Services;

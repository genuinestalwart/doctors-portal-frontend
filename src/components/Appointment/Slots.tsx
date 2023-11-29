"use client";

import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppSelector } from "@/utilities/lib/hooks";
import SlotModal from "./SlotModal";

const slotItems = [
	{ slotName: "Teeth Orthodontics", appointmentTime: "8:00 AM - 9:00 AM" },
	{ slotName: "Cosmetic Dentistry", appointmentTime: "10:05 AM - 11:30 AM" },
	{ slotName: "Teeth Cleaning", appointmentTime: "8:00 AM - 9:00 AM" },
	{ slotName: "Teeth Orthodontics", appointmentTime: "8:00 AM - 9:00 AM" },
	{ slotName: "Teeth Orthodontics", appointmentTime: "8:00 AM - 9:00 AM" },
];

const Slots = () => {
	const serviceName = useAppSelector((state) => state.service.value);

	return (
		<section
			className={`px-8 md:px-0 space-y-8 md:space-y-12 ${
				serviceName === "None" ? "hidden" : ""
			}`}>
			<h2 className='font-bold scroll-m-20 text-center text-primary text-xl tracking-tight'>
				Available Slots for {serviceName}
			</h2>

			<div className='gap-8 grid grid-cols-1 md:grid-cols-3 md:px-12'>
				{slotItems.map((slotItem, index) => (
					<Card
						key={index}
						className='border-0 rounded-xl shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px] text-center'>
						<CardHeader>
							<CardTitle className='text-lg'>
								{slotItem.slotName}
							</CardTitle>

							<CardDescription>
								{slotItem.appointmentTime}
							</CardDescription>
						</CardHeader>

						<CardFooter className='flex justify-center'>
							<SlotModal
								slotName={slotItem.slotName}
								appointmentTime={slotItem.appointmentTime}
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Slots;

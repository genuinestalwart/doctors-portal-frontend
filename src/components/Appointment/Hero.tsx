"use client";

import Image from "next/image";
import doctorsChair from "../../../public/hero-chair.png";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const today = new Date();
const targetDate =
	today.getDate() +
	30 -
	([0, 2, 4, 6, 7, 9, 11].includes(today.getMonth())
		? 31
		: [3, 5, 8, 10].includes(today.getMonth())
		? 30
		: today.getMonth() === 29
		? 29
		: 28);
const targetMonth = today.getMonth() + 1 > 11 ? 0 : today.getMonth() + 1;
const targetYear =
	today.getMonth() + 1 > 11 ? today.getFullYear() + 1 : today.getFullYear();

const Hero = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date()
	);

	return (
		<section className='bg-center bg-cover md:bg-hero bg-no-repeat md:flex flex-row-reverse md:h-[calc(100%_-_4rem)] items-center justify-evenly px-6 md:px-16 py-8 md:py-0 shadow-accent/5 shadow-lg space-y-8 md:space-y-0'>
			<div className='md:w-2/5'>
				<Image src={doctorsChair} alt="doctor's chair" />
			</div>

			<div className='flex items-center justify-end w-1/4'>
				<Calendar
					onSelect={setSelectedDate}
					className='bg-background border max-w-max p-4 rounded-xl shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px]'
					classNames={{
						month: "space-y-4",
						caption: "flex justify-between pl-2 items-center",
						caption_label: "font-semibold",
						nav: "flex items-center",
						nav_button:
							"disabled:cursor-not-allowed h-8 disabled:opacity-25 w-8",
						nav_button_previous: "static",
						nav_button_next: "static",
						table: "w-full border-collapse",
						head_row: "flex",
						head_cell: "h-8 w-8 font-semibold text-sm",
						row: "flex w-full mt-2",
						cell: "h-8 w-8 text-center text-sm p-0 rounded-full [&_button]:rounded-full",
						day: "enabled:hover:bg-accent h-8 w-8",
						day_selected:
							"bg-gradient-to-r from-primary text-accent-foreground to-secondary",
						day_today: "font-semibold",
						day_disabled:
							"hover:cursor-not-allowed text-muted-foreground/50",
					}}
					fixedWeeks
					fromDate={today}
					mode='single'
					selected={selectedDate}
					showOutsideDays={false}
					toDate={new Date(targetYear, targetMonth, targetDate)}
				/>
			</div>
		</section>
	);
};

export default Hero;

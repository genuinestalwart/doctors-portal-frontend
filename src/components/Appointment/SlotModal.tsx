"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogPortal,
	DialogOverlay,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/utilities/lib/hooks";
import { changeBySelect } from "@/utilities/slices/serviceSlotSlice";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	appointmentDate: z.date(),
	appointmentTime: z.string(),
	fullName: z.string().min(5).max(50),
	phoneNumber: z.string().min(8).max(15),
	email: z
		.string()
		.email()
		.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
});

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

const SlotModal = (props: any) => {
	const { slotName, appointmentTime } = props;
	const selectedDate =
		useAppSelector((state) => state.selectedDate.value) || new Date();
	const serviceSlotName = useAppSelector((state) => state.serviceSlot.value);
	const dispatch = useAppDispatch();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			appointmentDate: selectedDate,
			appointmentTime,
			fullName: "",
			phoneNumber: "",
			email: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					onClick={() => dispatch(changeBySelect(slotName))}
					className='bg-gradient-to-r font-bold from-primary to-secondary'>
					BOOK APPOINTMENT
				</Button>
			</DialogTrigger>

			<DialogPortal>
				<DialogOverlay className='bg-accent/75 md:bg-accent/90'>
					<Form {...form}>
						<form
							className=''
							onSubmit={form.handleSubmit(onSubmit)}>
							<DialogContent className='space-y-4'>
								<DialogHeader>
									<DialogTitle className='font-bold'>
										{serviceSlotName}
									</DialogTitle>
								</DialogHeader>

								<div className='space-y-6 text-sm w-full'>
									<Input
										className='disabled:bg-muted font-medium disabled:opacity-100'
										defaultValue={`${
											months[selectedDate.getMonth()]
										} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`}
										disabled
									/>

									<Input
										className='disabled:bg-muted font-medium disabled:opacity-100'
										defaultValue={appointmentTime}
										disabled
									/>

									<FormField
										control={form.control}
										name='fullName'
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className='focus-visible:border-0 font-medium focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-primary placeholder:text-foreground/50'
														placeholder='Full Name'
														{...field}
													/>
												</FormControl>

												<FormMessage className='font-semibold text-error text-left' />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name='phoneNumber'
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className='focus-visible:border-0 font-medium focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-primary placeholder:text-foreground/50'
														placeholder='Phone Number'
														{...field}
													/>
												</FormControl>

												<FormMessage className='font-semibold text-error text-left' />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className='focus-visible:border-0 font-medium focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-primary placeholder:text-foreground/50'
														autoComplete='true'
														placeholder='Email'
														{...field}
													/>
												</FormControl>

												<FormMessage className='font-semibold text-error text-left' />
											</FormItem>
										)}
									/>
								</div>

								<DialogFooter>
									<Button
										className='bg-accent hover:bg-accent text-accent-foreground/50 hover:text-accent-foreground w-full'
										type='submit'>
										SUBMIT
									</Button>
								</DialogFooter>

								<DialogClose className='bg-accent opacity-100 p-1 focus:ring-0 focus:ring-offset-0 rounded-full text-accent-foreground/50 hover:text-accent-foreground top-0'>
									<X className='h-6 w-6' />
								</DialogClose>
							</DialogContent>
						</form>
					</Form>
				</DialogOverlay>
			</DialogPortal>
		</Dialog>
	);
};

export default SlotModal;

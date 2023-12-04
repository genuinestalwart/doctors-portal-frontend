"use client";

import * as z from "zod";
import imgContactUs from "@/utilities/images/background.png";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
	email: z
		.string()
		.email()
		.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
	subject: z.string().min(5).max(50),
	message: z.string().min(50).max(500),
});

const ContactUs = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		toast({
			description:
				"Thanks for sharing your feedback regarding the service. Please check your mail. You may have received an auto-generated response from our side.",
		});
	};

	return (
		<section
			className='bg-left md:bg-center bg-cover bg-no-repeat flex flex-col items-center px-6 md:px-0 py-16'
			style={{
				backgroundImage: `url(${imgContactUs.src})`,
			}}>
			<div className='font-bold text-primary'>CONTACT US</div>

			<h2 className='font-medium mt-2 scroll-m-20 text-center text-3xl text-accent-foreground tracking-tight'>
				Stay Connected With Us
			</h2>

			<Form {...form}>
				<form
					className='flex flex-col items-center mt-12 space-y-8 w-full md:w-1/3'
					onSubmit={form.handleSubmit(onSubmit)}>
					<div className='space-y-4 w-full'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className='border-0 font-medium focus-visible:ring-4 focus-visible:ring-primary placeholder:text-foreground/50'
											autoComplete='true'
											placeholder='Email Address'
											{...field}
										/>
									</FormControl>

									<FormMessage className='font-semibold text-error text-left' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='subject'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className='border-0 font-medium focus-visible:ring-4 focus-visible:ring-primary placeholder:text-foreground/50'
											placeholder='Subject'
											{...field}
										/>
									</FormControl>

									<FormMessage className='font-semibold text-error text-left' />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea
											className='border-0 font-medium focus-visible:ring-4 focus-visible:ring-primary placeholder:text-foreground/50'
											placeholder='Your Message'
											rows={5}
											{...field}
										/>
									</FormControl>

									<FormMessage className='font-semibold text-error text-left' />
								</FormItem>
							)}
						/>
					</div>

					<Button
						className='bg-gradient-to-r font-bold from-primary to-secondary'
						type='submit'>
						SEND MESSAGE
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default ContactUs;

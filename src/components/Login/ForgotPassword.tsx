"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@/utilities/lib/firebase";
import Spinner from "@/components/shared/Spinner";
import { useToast } from "@/components/ui/use-toast";

const forgotPasswordSchema = z.object({
	email: z
		.string()
		.email()
		.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
});

const ForgotPassword = (props: any) => {
	const { errorClassNames, inputClassNames, setTabOpen } = props;
	const { toast } = useToast();
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);

	const forgotPasswordData = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
		await sendPasswordResetEmail(values.email);
		toast({
			title: "Email Sent!",
			description:
				"Although we sent you a mail. It is possible that you won't receive it. If that happens, it means there is no such account registered with this email.",
		});
	};

	return (
		<Form {...forgotPasswordData}>
			<form
				onSubmit={forgotPasswordData.handleSubmit(onSubmit)}
				className='space-y-6'>
				<FormField
					control={forgotPasswordData.control}
					name='email'
					render={({ field }) => (
						<FormItem className='space-y-0'>
							<FormLabel>Email</FormLabel>

							<FormControl>
								<Input
									className={inputClassNames}
									disabled={sending}
									autoComplete='true'
									type='email'
									{...field}
								/>
							</FormControl>

							<FormMessage className={errorClassNames} />
						</FormItem>
					)}
				/>

				<div className='space-y-4'>
					<Button
						className='bg-accent hover:bg-accent disabled:bg-accent/75 disabled:cursor-wait disabled:opacity-100 disabled:pointer-events-auto disabled:space-x-2 text-accent-foreground disabled:text-accent-foreground/75 w-full'
						disabled={sending}
						type='submit'>
						<span>SEND RESET EMAIL</span>

						<Spinner
							className={`animate-spin -ml-1 mr-3 h-5 w-5 hidden`}
						/>
					</Button>

					<p className='font-medium text-center text-sm'>
						Remembered your password?{" "}
						<small
							onClick={() => setTabOpen("signin")}
							className='cursor-pointer text-primary text-sm hover:underline underline-offset-1'>
							Log in to your account
						</small>
					</p>
				</div>
			</form>
		</Form>
	);
};

export default ForgotPassword;

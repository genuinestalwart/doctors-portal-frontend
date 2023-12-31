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
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@/utilities/lib/firebase";
import Spinner from "@/components/shared/Spinner";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const signUpSchema = z.object({
	name: z.string().min(3).max(32),
	email: z
		.string()
		.email()
		.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
	password: z
		.string()
		.regex(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/
		),
});

const formFieldItems = [
	{ label: "Name", attributes: {} },
	{
		label: "Email",
		attributes: { autoComplete: "true", type: "email" },
	},
	{
		label: "Password",
		attributes: { autoComplete: "true", type: "password" },
	},
];

const SignUpForm = (props: any) => {
	const { setTabOpen } = props;
	const { toast } = useToast();
	const [createUserWithEmailAndPassword, user, loading, createError] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating] = useUpdateProfile(auth);
	const [sendEmailVerification, sending] = useSendEmailVerification(auth);

	const signUpData = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof signUpSchema>) => {
		createUserWithEmailAndPassword(values.email, values.password);
	};

	useEffect(() => {
		const setUpAccount = async (displayName: string) => {
			await updateProfile({ displayName });
			await sendEmailVerification();
		};

		if (createError) {
			toast({
				title: "Email Address Already Taken!",
				description:
					"Someone has already signed up using this email address. If that's you, please sign in instead.",
			});
		}

		if (user) {
			setUpAccount(signUpData.getValues().name);
			redirect("/dashboard");
		}
	}, [
		createError,
		sendEmailVerification,
		signUpData,
		toast,
		updateProfile,
		user,
	]);

	return (
		<Form {...signUpData}>
			<form
				onSubmit={signUpData.handleSubmit(onSubmit)}
				className='space-y-6'>
				<div className='space-y-2'>
					{formFieldItems.map((formFieldItem, index) => (
						<FormField
							key={index}
							control={signUpData.control}
							name={
								index === 0
									? "name"
									: index === 1
									? "email"
									: "password"
							}
							render={({ field }) => (
								<FormItem className='space-y-0'>
									<FormLabel>{formFieldItem.label}</FormLabel>

									<FormControl>
										<Input
											className='focus-visible:border-0 font-medium focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-primary'
											disabled={
												loading || updating || sending
											}
											{...formFieldItem.attributes}
											{...field}
										/>
									</FormControl>

									<FormMessage className='font-semibold text-error text-left' />
								</FormItem>
							)}
						/>
					))}
				</div>

				<div className='space-y-4'>
					<Button
						className='bg-accent hover:bg-accent disabled:bg-accent/75 disabled:cursor-wait disabled:opacity-100 disabled:pointer-events-auto disabled:space-x-2 text-accent-foreground disabled:text-accent-foreground/75 w-full'
						disabled={loading || updating || sending}
						type='submit'>
						<span>SIGN UP</span>

						<Spinner
							className={`animate-spin -ml-1 mr-3 h-5 w-5 hidden`}
						/>
					</Button>

					<p className='font-medium text-center text-sm'>
						Already have an account?{" "}
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

export default SignUpForm;

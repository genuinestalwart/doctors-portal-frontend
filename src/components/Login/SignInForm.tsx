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
import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@/utilities/lib/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import ErrorModal from "./ErrorModal";
import Spinner from "@/components/shared/Spinner";

const signInSchema = z.object({
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
	{
		label: "Email",
		attributes: { autoComplete: "true", type: "email" },
	},
	{
		label: "Password",
		attributes: { autoComplete: "true", type: "password" },
	},
];

const errorMessage = {
	title: "Incorrect Email or Password!",
	description:
		"The email and password you entered doesn't match. Either your password is wrong or the email was never registered on our website. Try checking the spelling again.",
};

const SignInForm = (props: any) => {
	const { errorClassNames, inputClassNames, setTabOpen } = props;
	const [modalOpen, setModalOpen] = useState(false);
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const signInData = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof signInSchema>) => {
		signInWithEmailAndPassword(values.email, values.password);
	};

	useEffect(() => {
		if (error) {
			console.log(error.code);
			setModalOpen(true);
		}

		if (user) {
		}
	}, [error, user]);

	return (
		<Form {...signInData}>
			<form onSubmit={signInData.handleSubmit(onSubmit)}>
				<div className='space-y-2'>
					{formFieldItems.map((formFieldItem, index) => (
						<FormField
							key={index}
							control={signInData.control}
							name={index ? "password" : "email"}
							render={({ field }) => (
								<FormItem className='space-y-0'>
									<FormLabel>{formFieldItem.label}</FormLabel>

									<FormControl>
										<Input
											className={inputClassNames}
											disabled={loading}
											{...formFieldItem.attributes}
											{...field}
										/>
									</FormControl>

									<FormMessage className={errorClassNames} />
								</FormItem>
							)}
						/>
					))}
				</div>

				<div className='space-y-4'>
					<small className='cursor-pointer hover:text-primary text-sm hover:underline underline-offset-1'>
						Forgot Password?
					</small>

					<Button
						className='bg-accent hover:bg-accent disabled:bg-accent/75 disabled:cursor-wait disabled:opacity-100 disabled:pointer-events-auto disabled:space-x-2 text-accent-foreground disabled:text-accent-foreground/75 w-full'
						disabled={loading}
						type='submit'>
						<span>SIGN IN</span>

						<Spinner
							className={`animate-spin -ml-1 mr-3 h-5 w-5 hidden`}
						/>
					</Button>

					<p className='font-medium text-center text-sm'>
						New to Doctors Portal?{" "}
						<small
							onClick={() => setTabOpen("signup")}
							className='cursor-pointer text-primary text-sm hover:underline underline-offset-1'>
							Create new account
						</small>
					</p>
				</div>

				<ErrorModal
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
					title={errorMessage.title}
					description={errorMessage.description}
				/>
			</form>
		</Form>
	);
};

export default SignInForm;

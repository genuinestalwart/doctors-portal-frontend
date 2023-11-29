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

const SignUpForm = (props: any) => {
	const { errorClassNames, inputClassNames, setTabOpen } = props;
	const onSignUpSubmit = (values: z.infer<typeof signUpSchema>) => {};

	const signUpData = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	return (
		<Form {...signUpData}>
			<form
				onSubmit={signUpData.handleSubmit(onSignUpSubmit)}
				className='space-y-6'>
				<div className='space-y-2'>
					<FormField
						control={signUpData.control}
						name='name'
						render={({ field }) => (
							<FormItem className='space-y-0'>
								<FormLabel>Name</FormLabel>

								<FormControl>
									<Input
										className={inputClassNames}
										{...field}
									/>
								</FormControl>

								<FormMessage className={errorClassNames} />
							</FormItem>
						)}
					/>

					<FormField
						control={signUpData.control}
						name='email'
						render={({ field }) => (
							<FormItem className='space-y-0'>
								<FormLabel>Email</FormLabel>

								<FormControl>
									<Input
										className={inputClassNames}
										autoComplete='true'
										{...field}
									/>
								</FormControl>

								<FormMessage className={errorClassNames} />
							</FormItem>
						)}
					/>

					<FormField
						control={signUpData.control}
						name='password'
						render={({ field }) => (
							<FormItem className='space-y-0'>
								<FormLabel>Password</FormLabel>

								<FormControl>
									<Input
										className={inputClassNames}
										{...field}
									/>
								</FormControl>

								<FormMessage className={errorClassNames} />
							</FormItem>
						)}
					/>
				</div>

				<div className='space-y-4'>
					<Button
						className='bg-accent hover:bg-accent text-accent-foreground w-full'
						type='submit'>
						SIGN UP
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

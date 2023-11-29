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

const SignInForm = (props: any) => {
	const { errorClassNames, inputClassNames, setTabOpen } = props;
	const onSignInSubmit = (values: z.infer<typeof signInSchema>) => {};

	const signInData = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<Form {...signInData}>
			<form onSubmit={signInData.handleSubmit(onSignInSubmit)}>
				<div className='space-y-2'>
					<FormField
						control={signInData.control}
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
						control={signInData.control}
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
					<small className='cursor-pointer hover:text-primary text-sm hover:underline underline-offset-1'>
						Forgot Password?
					</small>

					<Button
						className='bg-accent hover:bg-accent text-accent-foreground w-full'
						type='submit'>
						SIGN IN
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
			</form>
		</Form>
	);
};

export default SignInForm;

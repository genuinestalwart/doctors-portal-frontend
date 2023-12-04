"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import GoogleIcon from "./GoogleIcon";
import ForgotPassword from "./ForgotPassword";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "@/utilities/lib/firebase";
import { redirect } from "next/navigation";

const tabItems = [
	{
		value: "signin",
		title: "Sign In",
	},
	{
		value: "signup",
		title: "Sign Up",
	},
	{
		value: "forgot-password",
		title: "Forgot Password",
	},
];

const LoginTab = () => {
	const [tabOpen, setTabOpen] = useState("signin");
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);

	useEffect(() => {
		if (user) {
			redirect("/dashboard");
		}
	}, [user]);

	return (
		<Tabs className='md:w-1/3' defaultValue='signin' value={tabOpen}>
			{tabItems.map((tabItem, index) => (
				<TabsContent key={index} value={tabItem.value}>
					<Card className='border-0 shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px]'>
						<CardHeader>
							<CardTitle className='text-center'>
								{tabItem.title}
							</CardTitle>
						</CardHeader>

						<CardContent className='pb-4'>
							{tabItem.value === "signin" ? (
								<SignInForm setTabOpen={setTabOpen} />
							) : tabItem.value === "signup" ? (
								<SignUpForm setTabOpen={setTabOpen} />
							) : (
								<ForgotPassword setTabOpen={setTabOpen} />
							)}
						</CardContent>

						{!(tabItem.value === "forgot-password") ? (
							<CardFooter className='flex-col space-y-4'>
								<div className='after:bg-accent/25 before:bg-accent/25 flex after:h-[1px] before:h-[1px] items-center after:ml-3 before:mr-3 w-full after:w-full before:w-full'>
									OR
								</div>

								<Button
									onClick={() => signInWithGoogle()}
									variant='outline'
									className='border-accent flex items-center justify-center space-x-2 text-foreground w-full'>
									<GoogleIcon />
									<span>CONTINUE WITH GOOGLE</span>
								</Button>
							</CardFooter>
						) : (
							<></>
						)}
					</Card>
				</TabsContent>
			))}
		</Tabs>
	);
};

export default LoginTab;

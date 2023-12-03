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
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import GoogleIcon from "./GoogleIcon";
import auth from "@/utilities/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";

const errorClassNames = "font-semibold text-error text-left";
const inputClassNames =
	"focus-visible:border-0 font-medium focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-primary";

const LoginTab = () => {
	const [tabOpen, setTabOpen] = useState("signin");
	const [user] = useAuthState(auth);

	if (user) {
		redirect("/");
	} else {
		return (
			<Tabs className='md:w-1/3' defaultValue='signin' value={tabOpen}>
				<TabsContent value='signin'>
					<Card className='border-0 shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px]'>
						<CardHeader>
							<CardTitle className='text-center'>
								Sign In
							</CardTitle>
						</CardHeader>

						<CardContent className='pb-4'>
							<SignInForm
								errorClassNames={errorClassNames}
								inputClassNames={inputClassNames}
								setTabOpen={setTabOpen}
							/>
						</CardContent>

						<CardFooter className='flex-col space-y-4'>
							<div className='after:bg-accent/25 before:bg-accent/25 flex after:h-[1px] before:h-[1px] items-center after:ml-3 before:mr-3 w-full after:w-full before:w-full'>
								OR
							</div>

							<Button
								variant='outline'
								className='border-accent flex items-center justify-center space-x-2 text-foreground w-full'>
								<GoogleIcon />
								<span>CONTINUE WITH GOOGLE</span>
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value='signup'>
					<Card className='border-0 shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px]'>
						<CardHeader>
							<CardTitle className='text-center'>
								Sign Up
							</CardTitle>
						</CardHeader>

						<CardContent className='pb-4'>
							<SignUpForm
								errorClassNames={errorClassNames}
								inputClassNames={inputClassNames}
								setTabOpen={setTabOpen}
							/>
						</CardContent>

						<CardFooter className='flex-col space-y-4'>
							<div className='after:bg-accent/25 before:bg-accent/25 flex after:h-[1px] before:h-[1px] items-center after:ml-3 before:mr-3 w-full after:w-full before:w-full'>
								OR
							</div>

							<Button
								variant='outline'
								className='border-accent flex items-center justify-center space-x-2 text-foreground w-full'>
								<GoogleIcon />
								<span>CONTINUE WITH GOOGLE</span>
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		);
	}
};

export default LoginTab;

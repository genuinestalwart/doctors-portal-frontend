"use client";

import auth from "@/utilities/lib/firebase";
import { useAppDispatch } from "@/utilities/lib/hooks";
import { updateUser } from "@/utilities/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
	const [clicked, setClicked] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (u) => {
			if (u) {
				dispatch(updateUser(u));
			}
		});
	}, [dispatch]);

	return (
		<header className='flex h-16 items-center justify-between px-4 md:px-16 relative lg:static'>
			<div
				className={`duration-500 font-semibold text-lg ${
					clicked ? "opacity-0" : ""
				}`}>
				Doctors Portal
			</div>

			<div
				onClick={() => setClicked(!clicked)}
				className={`burger cursor-pointer duration-500 flex flex-col h-8 lg:hidden justify-evenly w-7 z-30 ${
					clicked ? "clicked" : ""
				}`}>
				<div className='bg-accent duration-500 burger-icon-1 h-1 rounded-md w-full'></div>
				<div className='bg-accent duration-500 burger-icon-2 h-1 rounded-md w-full'></div>
				<div className='bg-accent duration-500 burger-icon-3 h-1 rounded-md w-full'></div>
			</div>

			<aside
				className={`duration-500 fixed h-[calc(100vh_-_4rem)] lg:hidden inset-0 top-16 w-full -z-10 ${
					clicked
						? "bg-accent/75 show-sidebar"
						: "bg-accent/0 hide-sidebar"
				}`}></aside>

			<Navbar clicked={clicked} />
		</header>
	);
};

export default Header;

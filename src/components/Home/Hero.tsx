import Image from "next/image";
import doctorsChair from "../../../public/hero-chair.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
	return (
		<section className='bg-center bg-cover md:bg-hero bg-no-repeat md:flex flex-row-reverse md:h-[calc(100%_-_4rem)] items-center px-6 md:px-16 py-8 md:py-0 space-y-8 md:space-y-0'>
			<div className='md:ml-6 md:w-1/2'>
				<Image src={doctorsChair} alt="doctor's chair" />
			</div>

			<div className='pr-6 space-y-6 md:w-1/2'>
				<h1 className='font-bold leading-snug scroll-m-20 text-4xl lg:text-5xl tracking-tight'>
					Your New Smile Starts Here
				</h1>

				<p className='text-sm md:text-base'>
					Find the perfect doctor for your needs, book appointments
					effortlessly, and make informed decisions with the help of
					our trusted community. Start your journey towards better
					healthcare today!
				</p>

				<Button
					className='bg-gradient-to-r font-bold from-primary to-secondary'
					asChild>
					<Link href='/appointment'>GET STARTED</Link>
				</Button>
			</div>
		</section>
	);
};

export default Hero;

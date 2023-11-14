import Image from "next/image";
import doctorsChair from "../../../public/hero-chair.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className='bg-center bg-cover bg-hero bg-no-repeat flex flex-row-reverse h-[calc(100%_-_4rem)] items-center px-16 shadow-lg shadow-accent/5'>
			<div className='w-1/2'>
				<Image src={doctorsChair} alt="doctor's chair" />
			</div>

			<div className='pr-6 space-y-6 w-1/2'>
				<h1 className='scroll-m-20 text-5xl font-bold tracking-tight'>
					Your New Smile Starts Here
				</h1>

				<p>
					Find the perfect doctor for your needs, book appointments
					effortlessly, and make informed decisions with the help of
					our trusted community. Start your journey towards better
					healthcare today!
				</p>

				<Button className='bg-gradient-to-r font-bold from-primary to-secondary'>
					GET STARTED
				</Button>
			</div>
		</section>
	);
};

export default Hero;

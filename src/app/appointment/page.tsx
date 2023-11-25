import Hero from "@/components/Appointment/Hero";
import Services from "@/components/Appointment/Services";
import Slots from "@/components/Appointment/Slots";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const AppointmentPage = () => {
	return (
		<>
			<div className='md:h-screen min-[1440px]:max-h-[810px]'>
				<Header />
				<Hero />
			</div>

			<main className='my-24 space-y-16 md:space-y-28'>
				<Services />
				<Slots />
			</main>

			<Footer />
		</>
	);
};

export default AppointmentPage;

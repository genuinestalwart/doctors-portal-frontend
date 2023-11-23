import Hero from "@/components/Appointment/Hero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const AppointmentPage = () => {
	return (
		<>
			<div className='md:h-screen min-[1440px]:max-h-[810px]'>
				<Header></Header>
				<Hero></Hero>
			</div>

			<main></main>

			<Footer></Footer>
		</>
	);
};

export default AppointmentPage;

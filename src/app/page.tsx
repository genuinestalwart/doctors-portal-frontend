import Appointment from "@/components/Home/Appointment";
import Article from "@/components/Home/Article";
import ContactUs from "@/components/Home/ContactUs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Summary from "@/components/Home/Summary";
import Testimonial from "@/components/Home/Testimonial";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const HomePage = () => {
	return (
		<>
			<div className='md:h-screen min-[1440px]:max-h-[810px]'>
				<Header />
				<Hero />
			</div>

			<main className='space-y-16 md:space-y-28'>
				<Summary />
				<Services />
				<Article />
				<Appointment />
				<Testimonial />
				<ContactUs />
			</main>

			<Footer />
		</>
	);
};

export default HomePage;

import Appointment from "@/components/Home/Appointment";
import Article from "@/components/Home/Article";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Summary from "@/components/Home/Summary";
import Testimonial from "@/components/Home/Testimonial";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Home = () => {
	return (
		<>
			<div className='h-screen min-[1440px]:max-h-[810px]'>
				<Header></Header>
				<Hero></Hero>
			</div>

			<main className='space-y-28'>
				<Summary></Summary>
				<Services></Services>
				<Article></Article>
				<Appointment></Appointment>
				<Testimonial></Testimonial>
			</main>

			<Footer></Footer>
		</>
	);
};

export default Home;

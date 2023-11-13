import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Home = () => {
	return (
		<>
			<div className='h-screen min-[1440px]:max-h-[810px]'>
				<Header></Header>
			</div>

			<main></main>

			<Footer></Footer>
		</>
	);
};

export default Home;

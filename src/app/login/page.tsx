import LoginTab from "@/components/Login/LoginTab";
import Header from "@/components/shared/Header";

const LoginPage = () => {
	return (
		<>
			<Header />

			<main className='flex items-center justify-center min-h-[calc(100vh_-_4rem)]'>
				<LoginTab />
			</main>
		</>
	);
};

export default LoginPage;

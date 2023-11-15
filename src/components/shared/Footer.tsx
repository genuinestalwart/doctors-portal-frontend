import imgFooter from "@/utilities/images/footer.png";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className='bg-center bg-cover bg-no-repeat pb-12'
			style={{
				backgroundImage: `url(${imgFooter.src})`,
			}}>
			<div className='flex justify-between px-20 py-16 text-foreground/75'>
				<div className='space-y-3'>
					<div className='text-lg font-bold'>SERVICES</div>

					<ul className='font-medium leading-6 text-sm'>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Emergency Checkup</li>
						</Link>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Monthly Checkup</li>
						</Link>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Weekly Checkup</li>
						</Link>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Deep Checkup</li>
						</Link>
					</ul>
				</div>

				<div className='space-y-3'>
					<div className='text-lg font-bold'>ORAL HEALTH</div>

					<ul className='font-medium leading-6 text-sm'>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Fluoride Treatment</li>
						</Link>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Cavity Filling</li>
						</Link>
						<Link
							className='hover:underline underline-offset-2'
							href='/'>
							<li>Teeth Whitening</li>
						</Link>
					</ul>
				</div>

				<div className='space-y-3'>
					<div className='text-lg font-bold'>OUR ADDRESS</div>

					<p className='font-medium text-sm'>
						New York - 101010 Hudson
					</p>
				</div>
			</div>

			<div className='text-center'>
				<small className='font-semibold leading-none text-sm'>
					Copyright&copy; 2022 All Rights Reserved
				</small>
			</div>
		</footer>
	);
};

export default Footer;

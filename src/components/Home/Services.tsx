import Image from "next/image";
import { serviceItems } from "@/utilities/data/items";

const Services = () => {
	return (
		<section className='text-center'>
			<div className='font-bold text-primary'>OUR SERVICES</div>

			<h2 className='font-medium mt-2 scroll-m-20 text-3xl tracking-tight'>
				Services We Provide
			</h2>

			<div className='gap-8 grid grid-cols-3 mt-12 px-8'>
				{serviceItems.map((serviceItem, index) => (
					<div
						key={index}
						className='flex flex-col items-center justify-between py-8 rounded-xl shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px] space-y-6'>
						<Image
							className='w-1/4'
							src={serviceItem.src}
							alt={serviceItem.alt}
						/>

						<div className='space-y-1'>
							<div className='font-semibold'>
								{serviceItem.title}
							</div>

							<p className='px-8 text-sm'>
								{serviceItem.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;

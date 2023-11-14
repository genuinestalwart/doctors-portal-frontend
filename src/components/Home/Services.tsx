import Image from "next/image";
import imgFluoride from "@/utilities/images/services/fluoride.png";
import imgCavity from "@/utilities/images/services/cavity.png";
import imgWhitening from "@/utilities/images/services/whitening.png";

const serviceItems = [
	{
		src: imgFluoride,
		alt: "fluoride treatment",
		title: "Fluoride Treatment",
		description:
			"Protect your pearly whites - strong, healthy teeth are just a visit away!",
	},
	{
		src: imgCavity,
		alt: "cavity filling",
		title: "Cavity Filling",
		description:
			"Keep your smile shining bright - say goodbye to toothaches!",
	},
	{
		src: imgWhitening,
		alt: "teeth whitening",
		title: "Teeth Whitening",
		description: "Get a dazzling smile - get ready to radiate confidence! ",
	},
];

const Services = () => {
	return (
		<section className='text-center'>
			<div className='font-bold text-lg text-primary'>OUR SERVICES</div>
			<h2 className='scroll-m-20 text-3xl font-medium mt-2 tracking-tight'>
				Services We Provide
			</h2>

			<div className='gap-6 grid grid-cols-3 mt-12 px-6'>
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

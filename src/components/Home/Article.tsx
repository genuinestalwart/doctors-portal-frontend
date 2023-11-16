import Image from "next/image";
import imgTreatment from "@/utilities/images/treatment.png";
import { Button } from "@/components/ui/button";
const Article = () => {
	return (
		<article className='md:flex items-center justify-around px-6 md:px-36 space-y-8 md:space-y-0'>
			<div className='px-4 md:px-0 md:w-2/5'>
				<Image
					className='rounded-lg w-full'
					src={imgTreatment}
					alt='treatment'
				/>
			</div>

			<div className='space-y-6 md:w-2/5'>
				<h2 className='font-bold scroll-m-20 text-4xl tracking-tight'>
					Exceptional Dental Care, on Your Terms
				</h2>

				<p className='line-clamp-5 text-sm'>
					We believe that every patient deserves exceptional care
					tailored to their unique needs. We understand that visiting
					the dentist can be a daunting experience for some, which is
					why we strive to create a comfortable and relaxed
					environment. Our team of highly skilled and compassionate
					dental professionals is dedicated to providing personalized
					care that puts you in control.
				</p>

				<Button className='bg-gradient-to-r font-bold from-primary to-secondary'>
					READ MORE
				</Button>
			</div>
		</article>
	);
};

export default Article;

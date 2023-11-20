import Image from "next/image";
import imgTreatment from "@/utilities/images/treatment.png";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button className='bg-gradient-to-r font-bold from-primary to-secondary'>
							READ MORE
						</Button>
					</AlertDialogTrigger>

					<AlertDialogPortal>
						<AlertDialogOverlay className='bg-accent/90'>
							<AlertDialogContent className='max-w-xl'>
								<AlertDialogHeader className='text-left'>
									<AlertDialogTitle className='font-bold text-2xl'>
										Exceptional Dental Care, on Your Terms
									</AlertDialogTitle>

									<AlertDialogDescription className='max-h-96 overflow-y-auto text-foreground'>
										<p className='[&:not(:first-child)]:mt-6'>
											At our dental clinic, we believe
											that every patient deserves
											exceptional care tailored to their
											unique needs. We understand that
											visiting the dentist can be a
											daunting experience for some, which
											is why we strive to create a
											comfortable and relaxed environment.
											Our team of highly skilled and
											compassionate dental professionals
											is dedicated to providing
											personalized care that puts you in
											control.
										</p>

										<p className='[&:not(:first-child)]:mt-6'>
											From routine check-ups to advanced
											treatments, we offer a comprehensive
											range of dental services to cater to
											all your oral health needs. Our
											state-of-the-art facilities are
											equipped with the latest technology,
											ensuring accurate diagnoses and
											effective treatments. Whether you
											require a simple cleaning or a
											complex procedure, we are committed
											to delivering the highest quality of
											care.
										</p>

										<p className='[&:not(:first-child)]:mt-6'>
											We also understand the importance of
											convenience in today&apos;s
											fast-paced world. That&apos;s why we
											offer flexible scheduling options,
											including evening and weekend
											appointments, to accommodate your
											busy lifestyle. Your time is
											valuable, and we strive to minimize
											waiting times and provide efficient
											service without compromising on
											quality.
										</p>

										<p className='[&:not(:first-child)]:mt-6'>
											Exceptional dental care is not just
											about the treatments we provide, but
											also the overall experience. From
											the moment you step into our clinic,
											you will be greeted by our friendly
											staff who are dedicated to ensuring
											your comfort and satisfaction. We
											prioritize building long-lasting
											relationships with our patients,
											based on trust, respect, and genuine
											care.
										</p>

										<p className='[&:not(:first-child)]:mt-6'>
											Experience exceptional dental care
											on your terms. Schedule an
											appointment with us today and let us
											take care of your smile. Your oral
											health is our priority, and we are
											committed to helping you achieve a
											healthy and beautiful smile that
											lasts a lifetime.
										</p>

										<p className='italic [&:not(:first-child)]:mt-6 text-sm text-foreground/75'>
											AI Generated Text
										</p>
									</AlertDialogDescription>
								</AlertDialogHeader>

								<AlertDialogFooter className='flex-row justify-end'>
									<AlertDialogAction className='bg-gradient-to-r font-bold from-primary max-w-max to-secondary'>
										DONE
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialogOverlay>
					</AlertDialogPortal>
				</AlertDialog>
			</div>
		</article>
	);
};

export default Article;

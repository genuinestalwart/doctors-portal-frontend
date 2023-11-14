import Quote from "./Quote";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { reviewItems } from "@/utilities/data/Home";

const Testimonial = () => {
	return (
		<section className='space-y-12'>
			<div className='flex items-center justify-between px-12'>
				<div className='space-y-2'>
					<div className='font-bold text-primary'>TESTIMONIAL</div>
					<h2 className='scroll-m-20 text-3xl font-medium tracking-tight'>
						What Our Patient Says
					</h2>
				</div>

				<div className='w-1/6'>
					<Quote />
				</div>
			</div>

			<div className='gap-12 grid grid-cols-3 px-20'>
				{reviewItems.map((reviewItem, index) => (
					<div
						key={index}
						className='p-6 rounded-xl shadow-accent/10 shadow-[0_4px_8px,_0_6px_20px] space-y-6'>
						<p className='line-clamp-5 text-sm'>
							{reviewItem.review}
						</p>

						<div className='flex items-center space-x-4'>
							<Avatar className='h-14 outline outline-2 outline-offset-2 outline-primary w-14'>
								<AvatarImage
									src={reviewItem.avatar.src}
									alt='user avatar'
								/>
								<AvatarFallback className='bg-gradient-to-br font-bold from-primary text-accent-foreground text-lg to-secondary'>
									DP
								</AvatarFallback>
							</Avatar>

							<div className='space-y-1'>
								<div className='text-lg font-semibold'>
									{reviewItem.displayName}
								</div>
								<small className='text-sm font-medium leading-none'>
									{reviewItem.location}
								</small>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='text-center'>
				<Button className='bg-gradient-to-r font-bold from-primary to-secondary'>
					SEE MORE
				</Button>
			</div>
		</section>
	);
};

export default Testimonial;
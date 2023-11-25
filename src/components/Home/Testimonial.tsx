import imgAvatar1 from "@/utilities/images/avatars/people1.png";
import imgAvatar2 from "@/utilities/images/avatars/people2.png";
import imgAvatar3 from "@/utilities/images/avatars/people3.png";
import Quote from "./Quote";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const reviewItems = [
	{
		avatar: imgAvatar1,
		displayName: "Winson Herry ",
		location: "California",
		review: "Wow, I must say that Doctors Portal is an absolute game-changer! The user-friendly interface makes it a breeze to book appointments, and the extensive list of doctors ensures that I always find the right specialist for my needs. The doctors I've seen through this platform have been incredibly knowledgeable, attentive, and compassionate. Plus, the convenience of being able to manage my appointments online and receive timely reminders has made my healthcare journey so much smoother. I can't recommend Doctors Portal enough!",
	},
	{
		avatar: imgAvatar2,
		displayName: "Sophia Miller",
		location: "Texas",
		review: "I have been using Doctors Portal for a while now, and I am thoroughly impressed with the level of service and care I have received. The platform is incredibly intuitive, making it easy to navigate and book appointments with just a few clicks. The doctors I have consulted with have been highly professional, taking the time to listen to my concerns and provide comprehensive explanations and treatment plans. The added benefit of being able to access my medical records and history online has been a game-changer for me. Doctors Portal has truly revolutionized the way I approach my healthcare.",
	},
	{
		avatar: imgAvatar3,
		displayName: "Emma Williams",
		location: "Florida",
		review: "Where has Doctors Portal been all my life? This platform has completely transformed my healthcare experience. The seamless appointment booking process, coupled with the extensive range of doctors and specialists available, has made finding the right healthcare professional a breeze. I appreciate the transparency and detailed profiles provided for each doctor, allowing me to make an informed decision. The doctors I have consulted with have been exceptional, demonstrating expertise, empathy, and a genuine commitment to my well-being. Doctors Portal has become my go-to resource for all my medical needs, and I couldn't be happier with the level of care I have received.",
	},
];

const Testimonial = () => {
	return (
		<section className='space-y-12'>
			<div className='flex items-center justify-between px-6 md:px-12'>
				<div className='space-y-2'>
					<div className='font-bold text-primary'>TESTIMONIAL</div>

					<h2 className='font-medium scroll-m-20 text-3xl tracking-tight'>
						What Our Patient Says
					</h2>
				</div>

				<div className='w-1/3 md:w-1/6'>
					<Quote />
				</div>
			</div>

			<div className='gap-8 md:gap-12 grid grid-cols-1 md:grid-cols-3 px-6 md:px-20'>
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
								<div className='font-semibold text-lg'>
									{reviewItem.displayName}
								</div>

								<small className='font-medium leading-none text-sm'>
									{reviewItem.location}
								</small>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='text-center'>
				<Button
					className='bg-gradient-to-r font-bold from-primary to-secondary'
					asChild>
					<Link href='/reviews'>SEE MORE</Link>
				</Button>
			</div>
		</section>
	);
};

export default Testimonial;

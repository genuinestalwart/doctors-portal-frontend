import imgFluoride from "@/utilities/images/services/fluoride.png";
import imgCavity from "@/utilities/images/services/cavity.png";
import imgWhitening from "@/utilities/images/services/whitening.png";
import imgAvatar1 from "@/utilities/images/avatars/people1.png";
import imgAvatar2 from "@/utilities/images/avatars/people2.png";
import imgAvatar3 from "@/utilities/images/avatars/people3.png";

const navItems = [
	{ pathName: "/", pageName: "Home" },
	{ pathName: "/about-us", pageName: "About" },
	{ pathName: "/appointments", pageName: "Appointments" },
	{ pathName: "/reviews", pageName: "Reviews" },
	{ pathName: "/contact-us", pageName: "Contact Us" },
	{ pathName: "/login", pageName: "Login" },
];

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

export { navItems, reviewItems, serviceItems };

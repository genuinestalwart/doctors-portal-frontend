import Image from "next/image";
import imgDoctor from "@/utilities/images/doctor.png";
import imgAppointment from "@/utilities/images/background.png";
import { Button } from "@/components/ui/button";

const Appointment = () => {
	return (
		<section
			className='bg-center bg-cover bg-no-repeat flex items-center justify-around px-28 text-accent-foreground'
			style={{
				backgroundImage: `url(${imgAppointment.src})`,
			}}>
			<Image className='w-1/2' src={imgDoctor} alt='doctor smiling' />

			<div className='space-y-6 w-1/2'>
				<div className='font-bold text-primary'>APPOINTMENT</div>

				<h2 className='font-bold scroll-m-20 text-3xl tracking-tight'>
					Make An Appointment Today
				</h2>

				<p className='text-sm'>
					Enjoy the convenience of booking appointments from the
					comfort of your own home, at any time that suits you.
					Receive timely reminders and notifications to ensure you
					never miss an appointment. Take control of your healthcare
					journey by easily managing and rescheduling appointments
					online.
				</p>

				<Button className='bg-gradient-to-r font-bold from-primary to-secondary'>
					BOOK NOW
				</Button>
			</div>
		</section>
	);
};

export default Appointment;

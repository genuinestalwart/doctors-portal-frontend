import SummaryClock from "./summary-icons/SummaryClock";
import SummaryMarker from "./summary-icons/SummaryMarker";
import SummaryPhone from "./summary-icons/SummaryPhone";

const Summary = () => {
	return (
		<section className='gap-6 grid grid-cols-3 px-6 text-accent-foreground'>
			<div className='bg-gradient-to-r flex from-primary items-center px-6 py-8 rounded-xl space-x-6 to-secondary'>
				<div className='w-1/5'>
					<SummaryClock />
				</div>
				<div className='space-y-2 w-4/5'>
					<div className='font-bold'>Opening Hours</div>
					<p className='font-light text-xs'>
						Mon - Fri: 9am - 6pm, Sat: 10am - 2pm, Sun: Closed
					</p>
				</div>
			</div>

			<div className='bg-accent flex items-center px-6 py-8 rounded-xl space-x-6'>
				<div className='w-1/6'>
					<SummaryMarker />
				</div>
				<div className='space-y-2 w-5/6'>
					<div className='font-bold'>Visit Our Location</div>
					<p className='font-light text-xs'>
						Brooklyn, NY 10036, United States
					</p>
				</div>
			</div>

			<div className='bg-gradient-to-r flex from-primary items-center px-6 py-8 rounded-xl space-x-6 to-secondary'>
				<div className='w-1/6'>
					<SummaryPhone />
				</div>
				<div className='space-y-2 w-4/5'>
					<div className='font-bold'>Contact Us Now</div>
					<p className='font-light text-xs'>+000 123 456789</p>
				</div>
			</div>
		</section>
	);
};

export default Summary;

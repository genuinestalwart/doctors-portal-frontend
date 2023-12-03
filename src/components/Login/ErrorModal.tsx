"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ErrorModal = (props: any) => {
	const { modalOpen, setModalOpen, title, description } = props;

	return (
		<AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
			<AlertDialogPortal>
				<AlertDialogOverlay className='bg-accent/90'>
					<AlertDialogContent className='max-w-xl'>
						<AlertDialogHeader className='text-left'>
							<AlertDialogTitle className='font-bold text-2xl'>
								{title}
							</AlertDialogTitle>

							<AlertDialogDescription className='max-h-96 overflow-y-auto text-foreground'>
								{description}
							</AlertDialogDescription>
						</AlertDialogHeader>

						<AlertDialogFooter className='flex-row justify-end'>
							<AlertDialogAction className='bg-gradient-to-r font-bold from-primary max-w-max to-secondary'>
								OKAY
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialogPortal>
		</AlertDialog>
	);
};

export default ErrorModal;

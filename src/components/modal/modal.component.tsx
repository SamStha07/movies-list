import React, { FC } from 'react';
import CrossIcon from '../icons/cross.icon';

interface IModalProps {
	onToggle: () => void;
	title: string | undefined;
	children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ onToggle, title, children }) => {
	const handleEventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};
	return (
		<div
			className="w-full h-full bg-blackLight absolute top-0 bottom-0 left-0 right-0"
			onClick={onToggle}
		>
			<div
				className="w-[calc(100%-2rem)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5"
				onClick={handleEventPropagation}
			>
				<div className="flex justify-between mb-5">
					<h3 className="text-2xl capitalize">{title}</h3>
					<CrossIcon handleClose={onToggle} />
				</div>

				{children}
			</div>
		</div>
	);
};

export default Modal;

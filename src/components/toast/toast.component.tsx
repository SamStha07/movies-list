import classNames from 'classnames';
import React from 'react';
import useToast from '../../hooks/useToast.hook';
import TickIcon from '../icons/tick.icon';

const Toast = () => {
	const { toast } = useToast();

	return (
		<div
			className={classNames(
				'flex gap-[22px] items-center p-[17px] bg-success left-4 right-4 ease-in-out duration-300 absolute',
				{
					'bottom-0': toast,
					hidden: !toast,
				}
			)}
			data-testid="toast-id"
		>
			<TickIcon />
			<p className="text-white">Add to favourite</p>
		</div>
	);
};

export default Toast;

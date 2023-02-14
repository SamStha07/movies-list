import React, {
	createContext,
	FC,
	ReactElement,
	ReactFragment,
	useEffect,
	useMemo,
	useState,
} from 'react';

export type ToastContent = {
	toast: boolean;
	handleToast: () => void;
};

export const ToastContext = createContext<ToastContent>({
	toast: false,
	handleToast: () => {},
});

interface IProps {
	children: ReactFragment | ReactElement;
}

export const ToastProvider: FC<IProps> = ({ children }) => {
	const [toast, setToast] = useState(false);

	const handleToast = () => {
		setToast(true);
	};

	useEffect(() => {
		const interval = setTimeout(() => {
			setToast(false);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [toast]);

	const contextValue = useMemo(
		() => ({ toast, handleToast }),
		[toast, handleToast]
	);

	return (
		<ToastContext.Provider value={contextValue}>
			{children}
		</ToastContext.Provider>
	);
};

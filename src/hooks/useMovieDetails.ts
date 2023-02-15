/* eslint-disable no-promise-executor-return */
import { useState } from 'react';
import useToast from './useToast.hook';

const useMovieDetails = () => {
	const [loading, setLoading] = useState(false);

	const { handleToast } = useToast();

	const handleAddToFavorite = () => {
		setLoading(true);
		return new Promise((resolve) =>
			setTimeout(() => {
				setLoading(false);
				resolve(handleToast());
			}, 1500)
		);
	};
	return { handleAddToFavorite, loading };
};

export default useMovieDetails;

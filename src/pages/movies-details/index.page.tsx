import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../../api/movies';
import MovieCard from '../../components/movie-card/movie-card.component';
import useToast from '../../hooks/useToast.hook';
import { IMovie } from '../../types/movie.types';

const MovieDetailsPage = () => {
	const { slug } = useParams();

	const { handleToast } = useToast();

	const movieDetails = moviesData.find((movie: IMovie) => movie.slug === slug);

	const handleAddToFavorite = () => {
		handleToast();
	};

	if (!movieDetails) {
		return <p>Movies not found</p>;
	}

	return (
		<div>
			<MovieCard data={movieDetails} />
			<p data-testid="movie-description-id" className="mt-[14px] text-sm">
				{movieDetails.description}
			</p>

			<button
				type="button"
				className="bg-blueColor px-[31px] py-[12px] text-white text-base uppercase rounded-lg my-4"
				onClick={handleAddToFavorite}
			>
				add to favorite
			</button>

			<MovieCard data={movieDetails.recommendation} />
		</div>
	);
};

export default MovieDetailsPage;

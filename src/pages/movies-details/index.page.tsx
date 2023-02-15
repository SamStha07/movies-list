import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../../api/movies';
import MovieCard from '../../components/movie-card/movie-card.component';
import { IMovie } from '../../types/movie.types';
import useMovieDetails from '../../hooks/useMovieDetails';

const MovieDetailsPage = () => {
	const { slug } = useParams();

	const { handleAddToFavorite, loading } = useMovieDetails();

	const movieDetails = moviesData.find((movie: IMovie) => movie.slug === slug);

	if (!movieDetails) {
		return <p>Movies not found</p>;
	}

	return (
		<div>
			{/* movies details */}
			<MovieCard data={movieDetails} />

			<p data-testid="movie-description-id" className="mt-[14px] text-sm">
				{movieDetails.description}
			</p>

			<button
				type="button"
				className="bg-blueColor px-[31px] py-[12px] text-white text-base uppercase rounded-lg my-4 disabled:cursor-not-allowed"
				onClick={handleAddToFavorite}
				disabled={loading}
			>
				{loading ? 'Loading...' : 'add to favorite'}
			</button>

			{/* recommendated movie */}
			<MovieCard data={movieDetails.recommendation} />
		</div>
	);
};

export default MovieDetailsPage;

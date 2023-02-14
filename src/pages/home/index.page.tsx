import React from 'react';
import moviesData from '../../api/movies';
import MovieCard from '../../components/movie-card/movie-card.component';

function HomePage() {
	return (
		<div className="grid gap-4">
			{moviesData.map((movie) => (
				<MovieCard key={movie.id} data={movie} />
			))}
		</div>
	);
}

export default HomePage;

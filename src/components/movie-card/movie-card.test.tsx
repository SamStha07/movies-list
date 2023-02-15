/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MovieCard from './movie-card.component';

const renderComponent = () => {
	const movie = {
		slug: 'interstellar',
		name: 'interstellar',
		category: 'movie',
		image: {
			small: 'small',
			large: 'large',
		},
		director: {
			name: 'cristopher nolan',
			image: {
				small: 'small',
				large: 'large',
			},
			bio: 'greatest director ever',
		},
	};
	render(
		<MemoryRouter>
			<MovieCard data={movie} />
		</MemoryRouter>
	);

	return { movie };
};

test('should show all the description of a movie', async () => {
	renderComponent();
	await screen.findByRole('img', {
		name: 'interstellar',
	});
});

test('redirect to details page', () => {
	const { movie } = renderComponent();

	const link = screen.getAllByRole('link')[0];

	expect(link).toHaveAttribute('href', `/${movie.slug}`);
});

test('render movie details', () => {
	const { movie } = renderComponent();

	const name = screen.getByRole('heading', {
		name: new RegExp(movie.name),
	});
	const category = screen.getByTestId('category-element');
	const director = screen.getByRole('button', {
		name: new RegExp(movie.director.name),
	});

	expect(name).toBeInTheDocument();
	expect(category).toBeInTheDocument();
	expect(director).toBeInTheDocument();
});

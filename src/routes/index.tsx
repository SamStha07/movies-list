import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from '../layout/home.layout';
import HomePage from '../pages/home/index.page';
import MovieDetailsPage from '../pages/movies-details/index.page';
import PageNotFound from '../pages/page-not-found/page-not-found.page';

function AppRoute() {
	return (
		<Routes>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
				<Route path=":slug" element={<MovieDetailsPage />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default AppRoute;

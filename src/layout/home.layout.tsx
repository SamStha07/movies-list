import React from 'react';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
	return (
		<div className="relative container mx-auto p-4  max-w-full sm:max-w-[375px] h-auto bg-white overflow-hidden">
			<Outlet />
		</div>
	);
}

export default HomeLayout;

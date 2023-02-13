/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
// import App from './App.tsx';

test('should contains the heading 1', () => {
	render(<App />);
	const heading = screen.getByText(/Hello world/i);
	expect(heading).toBeInTheDocument();
});

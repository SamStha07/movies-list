/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Toast from './toast.component';

test('should render toast container', () => {
	render(<Toast />);

	const tick = screen.getByTestId('toast-id');

	const p = screen.getByText(/Add to favourite/i);

	expect(tick).toBeInTheDocument();
	expect(p).toBeInTheDocument();
});

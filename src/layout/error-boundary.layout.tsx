/* eslint-disable react/require-default-props */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false,
	};

	static getDerivedStateFromError(): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// eslint-disable-next-line no-console
		console.error('Uncaught error:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<h1 className="text-2xl text-center mt-20">
					Sorry.. there was an error
				</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

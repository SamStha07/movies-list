import React from 'react';
import Toast from './components/toast/toast.component';
import { ToastProvider } from './context/toast.context';
import ErrorBoundary from './layout/error-boundary.layout';
import AppRoute from './routes';

function App() {
	return (
		<ErrorBoundary>
			<ToastProvider>
				<AppRoute />
				<Toast />
			</ToastProvider>
		</ErrorBoundary>
	);
}

export default App;

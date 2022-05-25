import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { worker } from 'mocks/browser';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

if (process.env.NODE_ENV === 'development') worker.start();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.Fragment>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Fragment>,
);

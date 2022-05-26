import React from 'react';
import ReactDOM from 'react-dom/client';
import DateSelect from 'pages/DateSelect/DateSelect';
import { worker } from 'mocks/browser';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

if (process.env.NODE_ENV === 'development') worker.start();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.Fragment>
		<Provider store={store}>
			<DateSelect />
		</Provider>
	</React.Fragment>
);

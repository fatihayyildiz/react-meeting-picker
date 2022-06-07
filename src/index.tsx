import React from 'react';
import ReactDOM from 'react-dom/client';
import DateSelect from 'pages/DateSelect/DateSelect';
import About from 'pages/About/About';
import { worker } from 'mocks/browser';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// Bypass parameter implemented regarding this issue
// https://github.com/mswjs/msw/issues/785#issuecomment-867681855
if (process.env.NODE_ENV === 'development') worker.start({ onUnhandledRequest: 'bypass' });

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);


const RouterContainer = () => (<Routes>
	<Route path='/' element={<DateSelect />} />
	<Route path='about' element={<About />} />
</Routes>);


root.render(
	<React.Fragment>
		<Provider store={store}>
			<BrowserRouter>
				<RouterContainer />
			</BrowserRouter>
		</Provider>
	</React.Fragment>,
);

import React, { useEffect } from 'react';
import { fetchSlots } from 'store/slots/actions';
import { useSelector, useDispatch } from 'react-redux';
import { slotSelector } from 'store/slots/slice';
import { AppDispatch } from 'store/store';

const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { loading, companies } = useSelector(slotSelector);

	useEffect(() => {
		dispatch(fetchSlots());
	}, [dispatch]);

	return (
		<div>
			{loading ? <span>Loading ...</span> : <span>Loaded</span>}
			{companies?.map((co) => {
				return <p key={co.id}>{co.name}</p>;
			})}
		</div>
	);
};

export default App;

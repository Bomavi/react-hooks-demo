/* npm imports: common */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { debounce, debounceTiming } from 'utils/helpers';
import { searchTasks, fetchTasks } from 'actions/tasks';

/* local imports: common */
// import { useStyles } from './styles';

const Search = () => {
	// const classes = useStyles();
	const dispatch = useDispatch();

	const isFetching = useSelector(state => state.tasks.isFetching);

	const changeHandler = useCallback(
		debounce(value => {
			searchHandler(value);
		}, debounceTiming.input),
		[]
	);

	const searchHandler = useCallback(
		payload => {
			dispatch(searchTasks(payload));
			dispatch(fetchTasks());
		},
		[dispatch]
	);

	useEffect(() => {
		return () => {
			searchHandler('');
		};
	}, [searchHandler]);

	return (
		<CustomInput
			icon={{
				name: 'magnify',
				svgSize: 'md',
			}}
			isFetching={isFetching}
			placeholder="Type to search..."
			onChange={changeHandler}
		/>
	);
};

export { Search };

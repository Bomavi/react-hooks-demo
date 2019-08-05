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
	const isInitialized = React.useRef(false);
	const prevSearch = React.useRef('');

	const isFetching = useSelector(state => state.tasks.isFetching);

	const changeHandler = useCallback(
		debounce(value => {
			if (!isInitialized.current && value === '') {
				isInitialized.current = true;
			} else if (value !== prevSearch.current) {
				prevSearch.current = value;
				searchHandler(value);
			}
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
			if (prevSearch.current !== '') searchHandler('');
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

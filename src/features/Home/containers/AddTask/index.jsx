/* npm imports: common */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { createTask } from 'actions/tasks';

/* local imports: common */
// import { useStyles } from './styles';

const AddTask = () => {
	// const classes = useStyles();
	const dispatch = useDispatch();

	const inProgress = useSelector(state => state.tasks.inProgress);

	const actionHandler = useCallback(
		value => {
			if (value) {
				dispatch(createTask({ description: value, completed: false }));
			}
		},
		[dispatch]
	);

	return (
		<CustomInput
			icon={{
				name: 'plus',
				svgSize: 'md',
				title: 'Add',
			}}
			isFetching={inProgress}
			placeholder="Type task description..."
			onClick={actionHandler}
		/>
	);
};

export { AddTask };

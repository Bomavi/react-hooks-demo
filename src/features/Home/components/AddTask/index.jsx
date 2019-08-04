/* npm imports: common */
import React from 'react';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* local imports: common */
// import { useStyles } from './styles';

const AddTask = React.memo(({ inProgress, createTask }) => {
	// const classes = useStyles();

	const actionHandler = React.useCallback(
		value => {
			if (value) {
				createTask({ description: value, completed: false });
			}
		},
		[createTask]
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
});

export { AddTask };

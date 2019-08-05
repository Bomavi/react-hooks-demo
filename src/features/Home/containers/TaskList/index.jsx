/* npm imports: common */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

/* npm imports: material-ui/core */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* root imports: view components */
import { Task } from 'features/Home/containers';
import { SortButton } from 'features/Home/components';

/* root imports: common */
import { fetchTasks, sortTasks } from 'actions/tasks';
import { getSortedTasks, getTasksIsEmpty, getTasksLenth } from 'selectors';

/* local imports: common */
import { useStyles } from './styles';

const TaskList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const sortKey = useSelector(state => state.tasks.sort);
	const tasks = useSelector(state => getSortedTasks(state));
	const isEmpty = useSelector(state => getTasksIsEmpty(state));
	const tasksLength = useSelector(state => getTasksLenth(state));

	const sortTasksHandler = useCallback(() => {
		if (sortKey === 'asc') dispatch(sortTasks('desc'));
		if (sortKey === 'desc') dispatch(sortTasks('asc'));
	}, [dispatch, sortKey]);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	return (
		<Paper className={classes.root}>
			<div className={classes.header}>
				<Typography className={classes.title} noWrap variant="subtitle2">
					Task List &nbsp;&nbsp;
					{!isEmpty && '|'}
					&nbsp;&nbsp;&nbsp;
					{!isEmpty && `${tasksLength}`}
				</Typography>
				<SortButton
					sortKey={sortKey}
					disabled={isEmpty}
					onClick={sortTasksHandler}
				/>
			</div>
			{!isEmpty
				? tasks.map((task, i) => (
						<motion.div key={task._id} positionTransition>
							<Task task={task} isLastChild={tasksLength === i + 1} />
						</motion.div>
				  ))
				: 'no tasks'}
		</Paper>
	);
};

export { TaskList };

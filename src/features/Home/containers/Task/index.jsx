/* npm imports: common */
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

/* npm imports: material-ui/core */
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { TaskCheckbox, TaskActions } from 'features/Home/components';

/* root imports: common */
import { updateTask, deleteTask } from 'actions/tasks';

/* local imports: common */
import { Description } from './Description';
import { EditInput } from './EditInput';
import { Backdrop } from './Backdrop';
import { useStyles } from './styles';

const Task = React.memo(({ task, isLastChild = false }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [isHovered, setIsHovered] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	const mouseEnterHandler = () => {
		setIsHovered(true);
	};

	const mouseLeaveHandler = () => {
		setIsHovered(false);
	};

	const editHandler = () => {
		setIsEditable(!isEditable);
		mouseLeaveHandler();
	};

	const completeHandler = useCallback(() => {
		dispatch(updateTask(task._id, { ...task, completed: !task.completed }));
	}, [dispatch, task]);

	const saveHandler = useCallback(
		value => {
			dispatch(updateTask(task._id, { ...task, description: value }));
		},
		[dispatch, task]
	);

	const deleteHandler = useCallback(() => {
		dispatch(deleteTask(task._id));
	}, [dispatch, task._id]);

	return (
		<div
			className={cx(classes.root, { isLastChild })}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<TaskCheckbox
				value={task.completed}
				isFetching={task.updateInProgress}
				onChange={completeHandler}
			/>
			<Divider className={classes.divider} />
			<Description>{task.description}</Description>
			{isHovered && !task.deleteInProgress && (
				<Divider className={classes.divider} />
			)}
			{(isHovered || task.deleteInProgress) && (
				<TaskActions
					onEdit={editHandler}
					isFetching={task.deleteInProgress}
					onDelete={deleteHandler}
				/>
			)}
			<Backdrop fadeIn={isEditable} onClick={editHandler} />
			{isEditable && (
				<EditInput
					autoFocus
					isFetching={task.updateInProgress}
					defaultValue={task.description}
					onClick={saveHandler}
					onCancel={editHandler}
				/>
			)}
		</div>
	);
});

export { Task };

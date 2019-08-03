/* npm imports: common */
import { createSelector } from 'reselect';

const tasksSelector = state => state.tasks.taskList;
const sortKeySelector = state => state.tasks.sort;

export const getSortedByDateTasks = createSelector(
	[tasksSelector, sortKeySelector],
	(tasks, sortKey) =>
		tasks.sort((a, b) => {
			const aDate = Number(new Date(a.createdAt));
			const bDate = Number(new Date(b.createdAt));
			return sortKey === 'desc' ? bDate - aDate : aDate - bDate;
		})
);

export const getSortedTasks = createSelector(
	[getSortedByDateTasks, sortKeySelector],
	(tasks, sortKey) =>
		sortKey ? tasks.sort((a, b) => Number(a.completed) - Number(b.completed)) : tasks
);

export const getTasksLenth = createSelector(
	[tasksSelector],
	tasks => tasks.length
);

export const getTasksIsEmpty = createSelector(
	[getTasksLenth],
	tasksLength => tasksLength === 0
);

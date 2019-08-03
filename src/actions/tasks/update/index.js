/* local imports: common */
import * as types from './../types';

export const updateTask = (id, data) => ({
	type: types.UPDATE_TASK,
	payload: {
		id,
		data,
	},
});

export const updateTaskOnSuccess = task => ({
	type: types.UPDATE_TASK_ON_SUCCESS,
	payload: task,
});

export const updateTaskOnFail = error => ({
	type: types.UPDATE_TASK_ON_FAIL,
	payload: error,
	error: true,
});

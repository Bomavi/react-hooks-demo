/* local imports: common */
import * as types from './../types';

export const deleteTask = id => ({
	type: types.DELETE_TASK,
	payload: id,
});

export const deleteTaskOnSuccess = id => ({
	type: types.DELETE_TASK_ON_SUCCESS,
	payload: id,
});

export const deleteTaskOnFail = error => ({
	type: types.DELETE_TASK_ON_FAIL,
	payload: error,
	error: true,
});

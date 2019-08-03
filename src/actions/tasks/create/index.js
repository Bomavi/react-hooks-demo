/* local imports: common */
import * as types from './../types';

export const createTask = task => ({
	type: types.CREATE_TASK,
	payload: task,
});

export const createTaskOnSuccess = task => ({
	type: types.CREATE_TASK_ON_SUCCESS,
	payload: task,
});

export const createTaskOnFail = error => ({
	type: types.CREATE_TASK_ON_FAIL,
	payload: error,
	error: true,
});

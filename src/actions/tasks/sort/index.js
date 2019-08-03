/* local imports: common */
import * as types from './../types';

export const sortTasks = payload => ({
	type: types.SORT_TASKS,
	payload,
});

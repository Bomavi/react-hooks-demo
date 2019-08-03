/* local imports: common */
import * as types from './../types';

export const sortTasks = sort => ({
	type: types.SORT_TASKS,
	payload: sort,
});

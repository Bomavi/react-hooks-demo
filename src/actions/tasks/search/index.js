/* local imports: common */
import * as types from './../types';

export const searchTasks = payload => ({
	type: types.SEARCH_TASKS,
	payload,
});

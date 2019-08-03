/* local imports: common */
import * as types from './../types';

export const searchTasks = search => ({
	type: types.SEARCH_TASKS,
	payload: search,
});

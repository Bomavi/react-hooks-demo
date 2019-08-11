/* mock imports: common */
import { tasks } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { setIsFetching } from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { fetchTasks, fetchTasksOnSuccess, fetchTasksOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);

describe('Dispatch thunk: FETCH_TASKS', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	test(types.FETCH_TASKS_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();

		await store.dispatch(fetchTasks());

		const actions = store.getActions();
		const toEqual = [
			setIsFetching(true),
			fetchTasksOnFail('Network Error'),
			setIsFetching(false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.FETCH_TASKS_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();

		await store.dispatch(fetchTasks());

		const actions = store.getActions();
		const toEqual = [
			setIsFetching(true),
			fetchTasksOnSuccess(tasks),
			setIsFetching(false),
		];

		expect(actions).toEqual(toEqual);
	});
});

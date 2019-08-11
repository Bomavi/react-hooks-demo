/* mock imports: common */
import { task } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { setInProgress } from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { createTask, createTaskOnSuccess, createTaskOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);

describe('Dispatch thunk: CREATE_TASK', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	test(types.CREATE_TASK_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();

		await store.dispatch(createTask());

		const actions = store.getActions();
		const toEqual = [
			setInProgress(true),
			createTaskOnFail('Network Error'),
			setInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.CREATE_TASK_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();

		await store.dispatch(createTask());

		const actions = store.getActions();
		const toEqual = [
			setInProgress(true),
			createTaskOnSuccess(task),
			setInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});
});

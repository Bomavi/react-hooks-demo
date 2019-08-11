/* mock imports: common */
import { task } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { setDeleteInProgress } from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { deleteTask, deleteTaskOnSuccess, deleteTaskOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);
const taskId = task._id;

describe('Dispatch thunk: DELETE_TASK', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	test(types.DELETE_TASK_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();

		await store.dispatch(deleteTask(taskId));

		const actions = store.getActions();
		const toEqual = [
			setDeleteInProgress(taskId, true),
			deleteTaskOnFail('Network Error'),
			setDeleteInProgress(taskId, false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.DELETE_TASK_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();

		await store.dispatch(deleteTask(taskId));

		const actions = store.getActions();
		const toEqual = [
			setDeleteInProgress(taskId, true),
			deleteTaskOnSuccess(taskId),
			setDeleteInProgress(taskId, false),
		];

		expect(actions).toEqual(toEqual);
	});
});

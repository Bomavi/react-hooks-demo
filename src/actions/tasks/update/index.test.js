/* mock imports: common */
import { task } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

/* root imports: common */
import { setUpdateInProgress } from 'actions/tasks';
import * as types from 'actions/tasks/types';

/* local imports: common */
import { updateTask, updateTaskOnSuccess, updateTaskOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);
const taskId = task._id;
const data = {
	description: task.description,
	completed: task.completed,
};

describe('Dispatch thunk: UPDATE_TASK', () => {
	afterEach(() => {
		mockedTasksServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedTasksServerResponse.restore();
	});

	test(types.UPDATE_TASK_ON_FAIL, async () => {
		mockedTasksServerResponse.initFailResponse();

		await store.dispatch(updateTask(taskId, data));

		const actions = store.getActions();
		const toEqual = [
			setUpdateInProgress(taskId, true),
			updateTaskOnFail('Network Error'),
			setUpdateInProgress(taskId, false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.UPDATE_TASK_ON_SUCCESS, async () => {
		mockedTasksServerResponse.initSuccessResponse();

		await store.dispatch(updateTask(taskId, data));

		const actions = store.getActions();
		const toEqual = [
			setUpdateInProgress(taskId, true),
			updateTaskOnSuccess(task),
			setUpdateInProgress(taskId, false),
		];

		expect(actions).toEqual(toEqual);
	});
});

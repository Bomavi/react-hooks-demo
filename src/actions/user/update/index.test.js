/* mock imports: common */
import { user } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getUpdatedState } from '__mocks__/state';
import { mockedUsersServerResponse } from '__mocks__/services/users';

/* root imports: common */
import * as types from 'actions/user/types';

/* root imports: common */
import { updateUser, updateUserOnSuccess, updateUserOnFail } from '.';

const updatedState = getUpdatedState();
const store = mockStore(updatedState);

describe('Dispatch thunk: UPDATE_USER', () => {
	afterEach(() => {
		mockedUsersServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedUsersServerResponse.restore();
	});

	test(types.UPDATE_USER_ON_FAIL, async () => {
		mockedUsersServerResponse.initFailResponse();

		await store.dispatch(updateUser(user));

		const actions = store.getActions();
		const toEqual = [updateUserOnFail('Network Error')];

		expect(actions).toEqual(toEqual);
	});

	test(types.UPDATE_USER_ON_SUCCESS, async () => {
		mockedUsersServerResponse.initSuccessResponse();

		await store.dispatch(updateUser(user));

		const actions = store.getActions();
		const toEqual = [updateUserOnSuccess(user)];

		expect(actions).toEqual(toEqual);
	});
});

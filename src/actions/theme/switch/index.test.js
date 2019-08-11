/* mock imports: common */
import { user } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getUpdatedState } from '__mocks__/state';
import { mockedUsersServerResponse } from '__mocks__/services/users';

/* root imports: common */
import { switchTheme, setThemeInProgress } from 'actions/theme';
import { updateUserOnSuccess, updateUserOnFail } from 'actions/user';
import * as types from 'actions/user/types';

const updatedState = getUpdatedState();
const store = mockStore(updatedState);
const data = {
	theme: user.theme,
};

describe('Dispatch thunk: SWITCH_THEME', () => {
	afterEach(() => {
		mockedUsersServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedUsersServerResponse.restore();
	});

	test(types.UPDATE_USER_ON_FAIL, async () => {
		mockedUsersServerResponse.initFailResponse();

		await store.dispatch(switchTheme(data));

		const actions = store.getActions();
		const toEqual = [
			setThemeInProgress(true),
			updateUserOnFail('Network Error'),
			setThemeInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.UPDATE_USER_ON_SUCCESS, async () => {
		mockedUsersServerResponse.initSuccessResponse();

		await store.dispatch(switchTheme(data));

		const actions = store.getActions();
		const toEqual = [
			setThemeInProgress(true),
			updateUserOnSuccess(user),
			setThemeInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});
});

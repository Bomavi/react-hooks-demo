/* mock imports: common */
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { setInProgress } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { logout, logoutOnSuccess, logoutOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);

describe('Dispatch thunk: LOGOUT', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.LOGOUT_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();

		await store.dispatch(logout());

		const actions = store.getActions();
		const toEqual = [
			setInProgress(true),
			logoutOnFail('Network Error'),
			setInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.LOGOUT_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();

		await store.dispatch(logout());

		const actions = store.getActions();
		const toEqual = [setInProgress(true), logoutOnSuccess(), setInProgress(false)];

		expect(actions).toEqual(toEqual);
	});
});

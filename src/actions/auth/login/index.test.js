/* mock imports: common */
import { user } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { setInProgress } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { login, loginOnSuccess, loginOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);

describe('Dispatch thunk: LOGIN', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.LOGIN_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();

		await store.dispatch(login());

		const actions = store.getActions();
		const toEqual = [
			setInProgress(true),
			loginOnFail('Network Error'),
			setInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.LOGIN_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();

		await store.dispatch(login());

		const actions = store.getActions();
		const toEqual = [setInProgress(true), loginOnSuccess(user), setInProgress(false)];

		expect(actions).toEqual(toEqual);
	});
});

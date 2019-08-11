/* mock imports: common */
import { user } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { setIsInitialized } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { authenticate, authenticateOnSuccess, authenticateOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);

describe('Dispatch thunk: AUTHENTICATE', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.AUTHENTICATE_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();

		await store.dispatch(authenticate());

		const actions = store.getActions();
		const toEqual = [authenticateOnFail('Network Error'), setIsInitialized(true)];

		expect(actions).toEqual(toEqual);
	});

	test(types.AUTHENTICATE_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();

		await store.dispatch(authenticate());

		const actions = store.getActions();
		const toEqual = [authenticateOnSuccess(user), setIsInitialized(true)];

		expect(actions).toEqual(toEqual);
	});
});

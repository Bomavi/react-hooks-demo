/* mock imports: common */
import { user } from '__mocks__/data';
import { mockStore } from '__mocks__/store';
import { getInitialState } from '__mocks__/state';
import { mockedAuthServerResponse } from '__mocks__/services/auth';

/* root imports: common */
import { setInProgress } from 'actions/auth';
import * as types from 'actions/auth/types';

/* local imports: common */
import { register, registerOnSuccess, registerOnFail } from '.';

const initialState = getInitialState();
const store = mockStore(initialState);

describe('Dispatch thunk: REGISTER', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
		store.clearActions();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	test(types.REGISTER_ON_FAIL, async () => {
		mockedAuthServerResponse.initFailResponse();

		await store.dispatch(register());

		const actions = store.getActions();
		const toEqual = [
			setInProgress(true),
			registerOnFail('Network Error'),
			setInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});

	test(types.REGISTER_ON_SUCCESS, async () => {
		mockedAuthServerResponse.initSuccessResponse();

		await store.dispatch(register());

		const actions = store.getActions();
		const toEqual = [
			setInProgress(true),
			registerOnSuccess(user),
			setInProgress(false),
		];

		expect(actions).toEqual(toEqual);
	});
});

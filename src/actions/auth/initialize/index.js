/* local imports: common */
import * as types from './../types';

export const setIsInitialized = payload => ({
	type: types.SET_IS_INITIALIZED,
	payload,
});

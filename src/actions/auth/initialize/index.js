/* local imports: common */
import * as types from './../types';

export const setIsInitialized = isInitialized => ({
	type: types.SET_IS_INITIALIZED,
	payload: isInitialized,
});

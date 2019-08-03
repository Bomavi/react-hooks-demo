/* local imports: common */
import * as types from './../types';

export const toggleDrawer = (payload = null) => ({
	type: types.TOGGLE_DRAWER,
	payload,
});

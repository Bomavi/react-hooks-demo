/* local imports: common */
import * as types from './../types';

export const toggleDrawer = (isOpen = null) => ({
	type: types.TOGGLE_DRAWER,
	payload: isOpen,
});

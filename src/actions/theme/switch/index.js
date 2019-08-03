/* local imports: common */
import * as types from './../types';

export const switchTheme = theme => ({
	type: types.SWITCH_THEME,
	payload: theme,
});

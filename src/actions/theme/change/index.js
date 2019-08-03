/* local imports: common */
import * as types from './../types';

export const changeSelectedThemeType = payload => ({
	type: types.CHANGE_SELECTED_THEME_TYPE,
	payload,
});

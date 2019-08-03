/* root imports: common */
import { themeValidator } from 'utils/helpers';
import * as authTypes from 'actions/auth/types';
import * as userTypes from 'actions/user/types';
import * as themeTypes from 'actions/theme/types';

const types = {
	...authTypes,
	...userTypes,
	...themeTypes,
};

export const initialState = {
	user: null,
	isInitialized: false,
	theme: {
		selectedThemeType: 'light',
		inProgress: false,
	},
	inProgress: false,
};

export const auth = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_IN_PROGRESS: {
			return {
				...state,
				inProgress: action.payload,
			};
		}

		case types.SET_IS_INITIALIZED: {
			const localThemeType = localStorage.getItem('theme');
			let selectedThemeType;

			if (localThemeType && themeValidator(localThemeType)) {
				selectedThemeType = localThemeType;
			} else {
				selectedThemeType = state.theme.selectedThemeType;
				localStorage.setItem('theme', state.theme.selectedThemeType);
			}

			return {
				...state,
				theme: {
					...state.theme,
					selectedThemeType,
				},
				isInitialized: action.payload,
			};
		}

		case types.AUTHENTICATE_ON_SUCCESS:
		case types.LOGIN_ON_SUCCESS:
		case types.REGISTER_ON_SUCCESS:
		case types.UPDATE_USER_ON_SUCCESS: {
			localStorage.setItem('theme', action.payload.theme);
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
				theme: {
					...state.theme,
					selectedThemeType: action.payload.theme,
				},
			};
		}

		case types.LOGOUT_ON_SUCCESS: {
			return {
				...state,
				user: null,
			};
		}

		case types.SET_THEME_IN_PROGRESS: {
			return {
				...state,
				theme: {
					...state.theme,
					inProgress: action.payload,
				},
			};
		}

		case types.CHANGE_SELECTED_THEME_TYPE: {
			return {
				...state,
				theme: {
					...state.theme,
					selectedThemeType: action.payload,
				},
			};
		}

		default:
			return state;
	}
};

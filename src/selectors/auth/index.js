/* npm imports: common */
import { createSelector } from 'reselect';

/* root imports: common */
import { history } from 'config/history';
import { lightTheme, darkTheme } from 'utils/themes';

const authSelector = state => state.auth;
const userSelector = state => state.auth.user;
const themeSelector = state => state.auth.theme.selectedThemeType;
const pathnameSelector = () => history.location.pathname;

export const getIsAuthenticated = createSelector(
	[userSelector],
	user => !!user
);

export const getIsInitialized = createSelector(
	[authSelector],
	auth => auth.isInitialized
);

export const getAccessibleOnlyForAuthorized = createSelector(
	[getIsInitialized, getIsAuthenticated],
	(isInitialized, isAuthenticated) => isInitialized && isAuthenticated
);

export const getAccessibleOnlyForUnauthorized = createSelector(
	[getIsInitialized, getIsAuthenticated],
	(isInitialized, isAuthenticated) => isInitialized && !isAuthenticated
);

export const getNotAccessibleForAuthorized = createSelector(
	[getIsInitialized, getIsAuthenticated, pathnameSelector],
	(isInitialized, isAuthenticated, pathname) =>
		!isInitialized && !isAuthenticated && pathname === '/login'
);

export const getNotAccessibleForUnauthorized = createSelector(
	[getIsInitialized, getIsAuthenticated, pathnameSelector],
	(isInitialized, isAuthenticated, pathname) =>
		isInitialized && !isAuthenticated && pathname !== '/login'
);

export const getSelectedTheme = createSelector(
	[themeSelector],
	theme => {
		switch (theme) {
			case 'light':
				return lightTheme;

			case 'dark':
				return darkTheme;

			default:
				return lightTheme;
		}
	}
);

export const getThemeNameToSwitch = createSelector(
	[themeSelector],
	theme => {
		switch (theme) {
			case 'light':
				return 'dark';

			case 'dark':
				return 'light';

			default:
				return 'light';
		}
	}
);

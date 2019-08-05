/* npm imports: common */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* npm imports: material-ui/core */
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* root imports: common */
import { getThemeNameToSwitch } from 'selectors';
import { logout } from 'actions/auth';
import { switchTheme } from 'actions/theme';
import { toggleDrawer } from 'actions/ui';

/* local imports: common */
import { useStyles } from './styles';
import { DrawerItem } from './DrawerItem';

const Drawer = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const inProgress = useSelector(state => state.auth.inProgress);
	const isDrawerOpen = useSelector(state => state.ui.isDrawerOpen);
	const theme = useSelector(state => state.auth.theme);
	const themeNameToSwitch = useSelector(state => getThemeNameToSwitch(state));

	const logoutHandler = useCallback(() => dispatch(logout()), [dispatch]);

	const switchThemeHandler = useCallback(
		() => dispatch(switchTheme({ theme: themeNameToSwitch })),
		[dispatch, themeNameToSwitch]
	);

	const toggleDrawerHandler = useCallback(payload => dispatch(toggleDrawer(payload)), [
		dispatch,
	]);

	useEffect(() => {
		return () => {
			toggleDrawerHandler(false);
		};
	}, [toggleDrawerHandler]);

	return (
		<MUIDrawer anchor="right" variant="persistent" open={isDrawerOpen}>
			<div className={classes.toolbar} />
			<List>
				<DrawerItem
					text={`Switch to ${themeNameToSwitch} theme`}
					iconName="compare"
					inProgress={theme.inProgress}
					onClick={switchThemeHandler}
				/>
			</List>
			<Divider />
			<List>
				<DrawerItem
					text="Logout"
					iconName="logout-variant"
					inProgress={inProgress}
					onClick={logoutHandler}
				/>
			</List>
		</MUIDrawer>
	);
};

export { Drawer };

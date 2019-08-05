/* npm imports: common */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* npm imports: material-ui/core */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { toggleDrawer } from 'actions/ui';

/* local imports: common */
import { useStyles } from './styles';

const Header = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const user = useSelector(state => state.auth.user);

	const toggleDrawerHandler = useCallback(() => dispatch(toggleDrawer()), [dispatch]);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" noWrap className={classes.title}>
					TODO'SHER
				</Typography>
				{user && (
					<Typography variant="subtitle2" noWrap className={classes.hello}>
						Hello, {user.username}
					</Typography>
				)}
				{user && (
					<IconButton color="inherit" onClick={toggleDrawerHandler}>
						<Icon
							name="account-circle"
							color="white"
							size="md"
							svgSize="lg"
						/>
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
};

export { Header };

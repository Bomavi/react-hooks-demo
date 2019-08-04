/* npm imports: common */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* npm imports: material-ui/core */
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/* root imports: view components */
import { Content } from 'views/layouts';

/* root imports: common */
import { Routes } from 'routes';
import { authenticate } from 'actions/auth';
import { getSelectedTheme } from 'selectors';

/* local imports: common */
import { useStyles } from './styles';

const App = React.memo(() => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const selectedTheme = useSelector(state => getSelectedTheme(state));

	const authenticateHandler = React.useCallback(() => dispatch(authenticate()), [
		dispatch,
	]);

	React.useEffect(() => {
		authenticateHandler();
	}, [authenticateHandler]);

	return (
		<ThemeProvider theme={selectedTheme}>
			<>
				<CssBaseline />
				<div className={classes.app}>
					<Content>
						<Routes />
					</Content>
				</div>
			</>
		</ThemeProvider>
	);
});

export { App };

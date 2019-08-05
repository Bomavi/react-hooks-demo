/* npm imports: common */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

/* npm imports: material-ui/core */
import Paper from '@material-ui/core/Paper';

/* root imports: common */
import { Subtitle, LoginButton } from 'features/Login/components';
import { login } from 'actions/auth';

/* local imports: common */
import { useStyles } from './styles';

const GuestForm = React.memo(() => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const loginHandler = useCallback(() => {
		dispatch(login({ isGuest: true }));
	}, [dispatch]);

	return (
		<Paper className={classes.paper}>
			<Subtitle>Use Guest Access</Subtitle>
			<div className={classes.wrapper}>
				<LoginButton gradient="primary" onClick={loginHandler}>
					Get access
				</LoginButton>
			</div>
		</Paper>
	);
});

export { GuestForm };

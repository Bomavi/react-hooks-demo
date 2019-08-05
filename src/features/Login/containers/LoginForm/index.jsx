/* npm imports: common */
import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

/* npm imports: material-ui/core */
import Paper from '@material-ui/core/Paper';

/* root imports: common */
import {
	UsernameInput,
	PasswordInput,
	LoginTabs,
	LoginButton,
} from 'features/Login/components';
import { login, register } from 'actions/auth';

/* local imports: common */
import { useStyles } from './styles';

const LoginForm = React.memo(() => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [tabIndex, setTabIndex] = useState(0);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const isPasswordCorrect = useMemo(() => password === repeatPassword, [
		password,
		repeatPassword,
	]);

	const isLoginReady = useMemo(() => !!username && !!password, [password, username]);

	const isRegistrationReady = useMemo(() => isLoginReady && isPasswordCorrect, [
		isLoginReady,
		isPasswordCorrect,
	]);

	const tabClickHandler = useCallback((e, value) => {
		setTabIndex(value);
	}, []);

	const usernameChangeHandler = useCallback(({ target }) => {
		setUsername(target.value);
	}, []);

	const passwordChangeHandler = useCallback(({ target }) => {
		setPassword(target.value);
	}, []);

	const repeatPasswordChangeHandler = useCallback(({ target }) => {
		setRepeatPassword(target.value);
	}, []);

	const loginHandler = () => {
		const userData = {
			username,
			password,
		};

		if (isLoginReady) dispatch(login(userData));
	};

	const registrationHandler = () => {
		const userData = {
			username,
			password,
		};

		if (isRegistrationReady) dispatch(register(userData));
	};

	return (
		<Paper className={classes.paper}>
			<LoginTabs tabIndex={tabIndex} onChange={tabClickHandler} />
			<div className={classes.wrapper}>
				<UsernameInput value={username} onChange={usernameChangeHandler} />
				<PasswordInput value={password} onChange={passwordChangeHandler} />
				{tabIndex === 0 && (
					<LoginButton
						marginTop={14}
						gradient="secondary"
						onClick={loginHandler}
					>
						Login
					</LoginButton>
				)}
				{tabIndex === 1 && (
					<>
						<PasswordInput
							repeatPassword
							value={repeatPassword}
							onChange={repeatPasswordChangeHandler}
						/>
						<LoginButton
							marginTop={14}
							gradient="secondary"
							onClick={registrationHandler}
						>
							Register
						</LoginButton>
					</>
				)}
			</div>
		</Paper>
	);
});

export { LoginForm };

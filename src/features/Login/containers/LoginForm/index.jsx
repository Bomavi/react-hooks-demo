/* npm imports: common */
import React from 'react';
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

	const [tabIndex, setTabIndex] = React.useState(0);
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [repeatPassword, setRepeatPassword] = React.useState('');

	const isPasswordCorrect = React.useMemo(() => password === repeatPassword, [
		password,
		repeatPassword,
	]);

	const isLoginReady = React.useMemo(() => !!username && !!password, [
		password,
		username,
	]);

	const isRegistrationReady = React.useMemo(() => isLoginReady && isPasswordCorrect, [
		isLoginReady,
		isPasswordCorrect,
	]);

	const tabClickHandler = React.useCallback((e, value) => {
		setTabIndex(value);
	}, []);

	const usernameChangeHandler = React.useCallback(e => {
		const { value } = e.target;
		setUsername(value);
	}, []);

	const passwordChangeHandler = React.useCallback(e => {
		const { value } = e.target;
		setPassword(value);
	}, []);

	const repeatPasswordChangeHandler = React.useCallback(e => {
		const { value } = e.target;
		setRepeatPassword(value);
	}, []);

	const loginHandler = React.useCallback(() => {
		const userData = {
			username,
			password,
		};

		if (isLoginReady) dispatch(login(userData));
	}, [dispatch, isLoginReady, password, username]);

	const registrationHandler = React.useCallback(() => {
		const userData = {
			username,
			password,
		};

		if (isRegistrationReady) dispatch(register(userData));
	}, [dispatch, isRegistrationReady, password, username]);

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

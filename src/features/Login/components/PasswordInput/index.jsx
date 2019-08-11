/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';

/* npm imports: material-ui/core */
import TextField from '@material-ui/core/TextField';

/* local imports: common */
// import { useStyles } from './styles';

const PasswordInput = React.memo(({ repeatPassword, ...props }) => {
	// const classes = useStyles();
	const id = repeatPassword ? 'repeat-password' : 'password';
	const label = repeatPassword ? 'Repeat password' : 'Password';

	return (
		<TextField
			fullWidth
			{...props}
			id={id}
			label={label}
			autoComplete="off"
			type="password"
			margin="normal"
			variant="outlined"
		/>
	);
});

PasswordInput.propTypes = {
	repeatPassword: PropTypes.bool,
};

export { PasswordInput };

/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Button from '@material-ui/core/Button';

/* local imports: common */
import { useStyles } from './styles';

const LoginButton = React.memo(({ children, gradient, marginTop = 0, ...props }) => {
	const classes = useStyles({ marginTop, gradient });

	return (
		<Button className={classes.button} {...props}>
			{children}
		</Button>
	);
});

export { LoginButton };

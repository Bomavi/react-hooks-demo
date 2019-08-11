/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';

/* npm imports: material-ui/core */
import Button from '@material-ui/core/Button';

/* root imports: common */
import { GradientShape } from 'utils/shapes';

/* local imports: common */
import { useStyles } from './styles';

const LoginButton = React.memo(({ children, gradient, marginTop, ...props }) => {
	const classes = useStyles({ marginTop, gradient });

	return (
		<Button className={classes.button} {...props}>
			{children}
		</Button>
	);
});

LoginButton.propTypes = {
	gradient: GradientShape.isRequired,
	marginTop: PropTypes.number,
};

LoginButton.defaultProps = {
	marginTop: 0,
};

export { LoginButton };

/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* npm imports: material-ui/core */
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { useStyles } from './styles';

const Description = React.memo(({ children, completed }) => {
	const classes = useStyles();

	return (
		<Typography
			className={cx(classes.typography, { completed })}
			title={String(children)}
			noWrap
			variant="body1"
		>
			{children}
		</Typography>
	);
});

Description.propTypes = {
	completed: PropTypes.bool.isRequired,
};

export { Description };

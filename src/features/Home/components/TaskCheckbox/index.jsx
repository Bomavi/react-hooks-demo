/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';

/* npm imports: material-ui/core */
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

/* local imports: common */
import { useStyles } from './styles';

const TaskCheckbox = React.memo(({ value, disabled, onChange, isFetching }) => {
	const classes = useStyles();

	if (isFetching) {
		return (
			<div className={classes.root}>
				<CircularProgress size={18} thickness={4} color="inherit" />
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<Checkbox
				checked={value}
				color="primary"
				title={value ? 'Uncomplete' : 'Complete'}
				disabled={disabled}
				onChange={onChange}
			/>
		</div>
	);
});

TaskCheckbox.propTypes = {
	value: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
	isFetching: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

TaskCheckbox.defaultProps = {
	isFetching: false,
};

export { TaskCheckbox };

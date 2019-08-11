/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { IconShape } from 'utils/shapes';

/* local imports: common */
import { useStyles } from './styles';

const InputButton = React.memo(
	({
		icon: { name: iconName, svgSize = 'sm' },
		title,
		disabled,
		isFetching,
		color,
		onClick,
	}) => {
		const classes = useStyles();

		if (isFetching) {
			return (
				<div className={classes.root}>
					<CircularProgress size={18} thickness={4} color="inherit" />
				</div>
			);
		}

		if (!onClick) {
			return (
				<div className={classes.root}>
					<Icon name={iconName} size="sm" svgSize={svgSize} />
				</div>
			);
		}

		return (
			<div className={classes.root}>
				<IconButton
					className={cx(classes.iconButton, color)}
					title={title}
					color={color}
					disabled={disabled}
					onClick={onClick}
				>
					<Icon name={iconName} size="sm" svgSize={svgSize} />
				</IconButton>
			</div>
		);
	}
);

InputButton.propTypes = {
	icon: PropTypes.shape(IconShape).isRequired,
	title: PropTypes.string,
	disabled: PropTypes.bool,
	isFetching: PropTypes.bool,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

InputButton.defaultProps = {
	isFetching: false,
	color: 'inherit',
};

export { InputButton };

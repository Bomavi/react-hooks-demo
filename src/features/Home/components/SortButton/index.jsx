/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { SortShape } from 'utils/shapes';

/* local imports: common */
import { useStyles } from './styles';

const SortButton = React.memo(({ sortKey, disabled, onClick }) => {
	const classes = useStyles();

	const isAsc = sortKey === 'asc';
	const isDesc = sortKey === 'desc';
	const newFirstTitle = 'Recently created first';
	const oldFirstTitle = 'Oldest first';

	return (
		<div className={classes.root}>
			<IconButton
				title={isDesc ? oldFirstTitle : newFirstTitle}
				disabled={disabled}
				onClick={onClick}
			>
				{isAsc && <Icon name="sort-ascending" />}
				{isDesc && <Icon name="sort-descending" />}
			</IconButton>
		</div>
	);
});

SortButton.propTypes = {
	sortKey: SortShape.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

export { SortButton };

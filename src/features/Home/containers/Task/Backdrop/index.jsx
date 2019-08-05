/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import ButtonBase from '@material-ui/core/ButtonBase';
import Fade from '@material-ui/core/Fade';

/* local imports: common */
import { useStyles } from './styles';

const Backdrop = React.memo(({ fadeIn, onClick }) => {
	const classes = useStyles();

	return (
		<Fade in={fadeIn}>
			<ButtonBase disableRipple className={classes.backdrop} onClick={onClick} />
		</Fade>
	);
});

export { Backdrop };

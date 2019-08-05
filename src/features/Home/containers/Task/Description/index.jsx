/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { useStyles } from './styles';

const Description = React.memo(({ children }) => {
	const classes = useStyles();

	return (
		<Typography
			className={classes.typography}
			title={String(children)}
			noWrap
			variant="body1"
		>
			{children}
		</Typography>
	);
});

export { Description };

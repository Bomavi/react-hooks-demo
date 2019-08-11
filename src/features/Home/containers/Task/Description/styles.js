/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		typography: {
			flexGrow: 1,
			flexShrink: 2,
			width: '100%',
			padding: '0 20px',

			'&.completed': {
				textDecoration: 'line-through',
			},
		},
	})
);

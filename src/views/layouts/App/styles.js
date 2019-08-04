/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		app: {
			position: 'relative',
			width: '100%',
			minHeight: '100vh',
			fontFamily: 'Roboto, sans-serif',
		},
	})
);

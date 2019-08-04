/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		button: p => ({
			height: 48,
			padding: '0 30px',
			marginTop: p.marginTop,
			border: 0,
			background: theme.gradients[p.gradient],
			boxShadow: '0 3px 5px 2px rgba(0,0,0, 0.1)',
			color: 'white',
		}),
	})
);

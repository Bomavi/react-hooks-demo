/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			flexGrow: 1,
			flexShrink: 2,
			marginTop: 16,
			padding: 20,
			paddingTop: 0,
		},
		header: {
			display: 'flex',
			width: '100%',
		},
		title: {
			flexBasis: '100%',
			lineHeight: '60px',
		},
	})
);

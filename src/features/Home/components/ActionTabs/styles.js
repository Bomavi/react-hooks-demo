/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		tabContent: {
			padding: 20,
		},
	})
);

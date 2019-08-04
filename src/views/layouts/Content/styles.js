/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		main: {
			display: 'flex',
			width: '100%',
			paddingTop: 30,
			paddingBottom: theme.sizes.footer + 30,
		},
		toolbar: theme.mixins.toolbar,
	})
);

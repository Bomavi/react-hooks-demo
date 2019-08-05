/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			flexShrink: 0,
			width: 60,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		checkbox: {
			'&:disabled': {
				'& svg': {
					fill: theme.palette.text.disabled,
				},
			},
		},
	})
);

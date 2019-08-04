/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			display: 'flex',
			width: 60,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		iconButton: {
			'&:disabled': {
				'& svg': {
					fill: theme.palette.text.disabled,
				},
			},
			'&.primary': {
				'& svg': {
					fill: theme.palette.primary.main,
				},
			},
		},
	})
);

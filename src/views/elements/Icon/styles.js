/* npm imports: material-ui/core */
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
	createStyles({
		svgWrapper: p => ({
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			display: 'block',
			'& svg': {
				display: 'block',
				fill: p.color ? p.color : theme.palette.text.primary,
			},
			'&.xs svg': {
				width: 15,
				height: 15,
			},
			'&.sm svg': {
				width: 20,
				height: 20,
			},
			'&.md svg': {
				width: 24,
				height: 24,
			},
			'&.lg svg': {
				width: 28,
				height: 28,
			},
		}),
		iconWrapper: {
			display: 'flex',
			position: 'relative',
			'&.xs': {
				width: 14,
				height: 14,
			},
			'&.sm': {
				width: 18,
				height: 18,
			},
			'&.md': {
				width: 26,
				height: 26,
			},
			'&.lg': {
				width: 36,
				height: 36,
			},
			'&.xl': {
				width: 48,
				height: 48,
			},
			'&.xxl': {
				width: 56,
				height: 56,
			},
		},
	})
);

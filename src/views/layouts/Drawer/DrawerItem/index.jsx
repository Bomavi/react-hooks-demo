/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/* root imports: view components */
import { Icon } from 'views/elements';

const DrawerItem = React.memo(
	({ iconName, text, caption, inProgress = false, onClick }) => (
		<ListItem button onClick={onClick}>
			<ListItemIcon>
				{inProgress ? (
					<CircularProgress size={18} thickness={4} color="inherit" />
				) : (
					<Icon name={iconName} svgSize="md" />
				)}
			</ListItemIcon>
			<ListItemText primary={text} secondary={caption} />
		</ListItem>
	)
);

export { DrawerItem };

/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* root imports: view components */
import { AddTask, Search } from 'features/Home/containers';

/* local imports: common */
import { useStyles } from './styles';

const ActionTabs = () => {
	const classes = useStyles();

	const [tabIndex, setTabIndex] = React.useState(0);

	const tabClickHandler = React.useCallback((e, value) => {
		setTabIndex(value);
	}, []);

	return (
		<Paper className={classes.root}>
			<Tabs
				value={tabIndex}
				onChange={tabClickHandler}
				indicatorColor="primary"
				textColor="primary"
			>
				<Tab label="Add new task" />
				<Tab label="Search tasks" />
			</Tabs>
			<div className={classes.tabContent}>
				{tabIndex === 0 && <AddTask />}
				{tabIndex === 1 && <Search />}
			</div>
		</Paper>
	);
};

export { ActionTabs };

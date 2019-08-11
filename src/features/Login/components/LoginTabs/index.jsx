/* npm imports: common */
import React from 'react';
import PropTypes from 'prop-types';

/* npm imports: material-ui/core */
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* local imports: common */
// import { useStyles } from './styles';

const LoginTabs = React.memo(({ tabIndex, onChange }) => {
	// const classes = useStyles();

	return (
		<Tabs
			variant="fullWidth"
			indicatorColor="secondary"
			value={tabIndex}
			onChange={onChange}
		>
			<Tab label="Login" />
			<Tab label="Register" />
		</Tabs>
	);
});

LoginTabs.propTypes = {
	tabIndex: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { LoginTabs };

/* npm imports: common */
import React from 'react';
import { useSelector } from 'react-redux';

/* root imports: view components */
import { Header, Footer, Drawer } from 'views/layouts';

/* root imports: common */
import { getIsAuthenticated } from 'selectors';

/* local imports: common */
import { useStyles } from './styles';

const Content = ({ children }) => {
	const classes = useStyles();

	const isAuthenticated = useSelector(state => getIsAuthenticated(state));

	return (
		<>
			<Header />
			<div className={classes.toolbar} />
			{isAuthenticated && <Drawer />}
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	);
};

export { Content };

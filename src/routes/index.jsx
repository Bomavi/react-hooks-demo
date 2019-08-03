/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Redirect } from '@reach/router';

/* root imports: view components */
import { Login } from 'features/Login';
import { Home } from 'features/Home';

/* root imports: common */
import {
	getAccessibleOnlyForAuthorized,
	getAccessibleOnlyForUnauthorized,
	getNotAccessibleForAuthorized,
	getNotAccessibleForUnauthorized,
} from 'selectors';

const mapStateToProps = state => ({
	accessibleOnlyForAuthorized: getAccessibleOnlyForAuthorized(state),
	accessibleOnlyForUnauthorized: getAccessibleOnlyForUnauthorized(state),
	notAccessibleForAuthorized: getNotAccessibleForAuthorized(state),
	notAccessibleForUnauthorized: getNotAccessibleForUnauthorized(state),
});

const mapDispatchToProps = () => ({});

const RoutesComponent = ({
	accessibleOnlyForAuthorized,
	accessibleOnlyForUnauthorized,
	notAccessibleForAuthorized,
	notAccessibleForUnauthorized,
}) => (
	<Router>
		{accessibleOnlyForAuthorized && <Home path="/" />}
		{accessibleOnlyForUnauthorized && <Login path="login" />}
		{notAccessibleForAuthorized && <Redirect to="/" />}
		{notAccessibleForUnauthorized && <Redirect to="login" />}
	</Router>
);

const RoutesWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(RoutesComponent);

export const Routes = RoutesWithRedux;

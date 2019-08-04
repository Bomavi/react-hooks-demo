/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router';

/* root imports: view components */
import { Login } from 'features/Login';
import { Home } from 'features/Home';

/* root imports: common */
import { history } from 'config/history';
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
	<Router history={history}>
		<Switch>
			{accessibleOnlyForAuthorized && <Route exact path="/" component={Home} />}
			{accessibleOnlyForUnauthorized && (
				<Route exact path="/login" component={Login} />
			)}
			{notAccessibleForAuthorized && <Redirect to="/" />}
			{notAccessibleForUnauthorized && <Redirect to="/login" />}
		</Switch>
	</Router>
);

const RoutesWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(RoutesComponent);

export const Routes = RoutesWithRedux;

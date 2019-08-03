/* npm imports: common */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/* root imports: common */
import { reduxLogger } from 'config/middleware';
import { rootReducer } from 'reducers';

const dev = process.env.NODE_ENV === 'development';
const middleware = [thunk];

if (dev) middleware.push(reduxLogger);

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export { store };

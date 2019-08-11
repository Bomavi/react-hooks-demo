/* npm imports: common */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

/* root imports: common */
import { handleErrorLogger } from 'utils/helpers';

const mock = new MockAdapter(axios);

export const mockServerResponse = (apiPrefix, schema) => {
	return {
		initSuccessResponse() {
			for (const req of schema) {
				mock[req.method](req.path).reply(200, req.responseData);
			}
		},
		initFailResponse() {
			handleErrorLogger.turnOff();
			mock.onAny(new RegExp(`${apiPrefix}`)).networkError();
		},
		reset() {
			mock.resetHandlers();
			handleErrorLogger.turnOn();
		},
		restore() {
			mock.restore();
		},
	};
};

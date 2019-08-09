/* mock imports: common */
import { user } from '__mocks__/data';
import { mockServerResponse } from '__mocks__/services';

/* root imports: common */
import { API_URL } from 'utils/constants';

const apiPrefix = `${API_URL}/users`;
const schema = [
	{
		method: 'onPut',
		path: new RegExp(`${apiPrefix}/*`),
		responseData: user,
	},
];

export const mockedUsersServerResponse = mockServerResponse(apiPrefix, schema);

/* root imports: common */
import { ApiClient } from 'config/axios/api-client';
import { AUTH_URL, API_URL } from 'utils/constants';

/* local imports: common */
import { AuthService } from './auth';
import { ApiService } from './api';

export class Services {
	auth = new AuthService(new ApiClient({ apiPrefix: AUTH_URL }));
	api = new ApiService(new ApiClient({ apiPrefix: API_URL }));
}

export const services = new Services();

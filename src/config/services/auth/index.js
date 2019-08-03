/* root imports: common */
import { Base } from 'config/axios/base';

export class AuthService extends Base {
	authenticate = async () => {
		return await this.apiClient.post('/authenticate');
	};

	login = async params => {
		return await this.apiClient.post('/login', params);
	};

	register = async params => {
		return await this.apiClient.post('/register', params);
	};

	logout = async () => {
		return await this.apiClient.post('/logout');
	};
}

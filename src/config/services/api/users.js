/* root imports: common */
import { Base } from 'config/axios/base';

export class UsersApi extends Base {
	getById = async id => {
		return await this.apiClient.get(`/users/${id}`);
	};

	update = async (id, userData) => {
		return await this.apiClient.put(`/users/${id}`, userData);
	};
}

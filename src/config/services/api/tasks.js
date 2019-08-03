/* root imports: common */
import { Base } from 'config/axios/base';
import { queryString } from 'utils/helpers';

export class TasksApi extends Base {
	search = async params => {
		return await this.apiClient.get(`/tasks/search${queryString(params)}`);
	};

	create = async task => {
		return await this.apiClient.post('/tasks', task);
	};

	update = async (id, task) => {
		return await this.apiClient.put(`/tasks/${id}`, task);
	};

	delete = async id => {
		return await this.apiClient.delete(`/tasks/${id}`);
	};
}

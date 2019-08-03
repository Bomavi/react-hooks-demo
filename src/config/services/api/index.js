/* root imports: common */
import { Base } from 'config/axios/base';

/* local imports: common */
import { TasksApi } from './tasks';
import { UsersApi } from './users';

export class ApiService extends Base {
	tasks = new TasksApi(this.apiClient);
	users = new UsersApi(this.apiClient);
}

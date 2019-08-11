/* local imports: common */
import { axios } from './axios';

export class ApiClient {
	prefix;

	constructor({ apiPrefix }) {
		if (!apiPrefix) {
			throw Error('[apiPrefix] required');
		}

		this.prefix = apiPrefix;
	}

	get(url, params, options) {
		return this.request({
			url,
			params,
			options,
			method: 'get',
		});
	}

	put(url, body = {}, params, options) {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'put',
		});
	}

	patch(url, body = {}, params, options) {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'patch',
		});
	}

	post(url, body = {}, params, options) {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'post',
		});
	}

	delete(url, params) {
		return this.request({
			url,
			params,
			method: 'delete',
		});
	}

	async request({ url, method, body, params, options }) {
		try {
			const response = await axios({
				method,
				url,
				params,
				baseURL: this.prefix,
				data: body,
				...options,
			});
			return response.data;
		} catch (e) {
			throw e;
		}
	}
}

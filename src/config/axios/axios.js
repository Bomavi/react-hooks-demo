/* npm imports: common */
import axiosBase from 'axios';

export const axios = axiosBase.create({
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

axios.interceptors.request.use(
	config => {
		// do something
		return config;
	},
	error => Promise.reject(error)
);

const userFabric = index => {
	return {
		_id: `u_id_${index}`,
		username: `user_num_${index}`,
		theme: 'light',
		createdAt: 'some date',
		updatedAt: 'some date',
	};
};

export const user = userFabric(1);

export const users = [1, 2, 3].map(i => userFabric(i));

/* npm imports: common */
import { stringify } from 'query-string';

export const withoutEmptyValues = obj =>
	Object.keys(obj)
		.filter(k => obj[k] !== undefined && obj[k] !== '')
		.reduce(
			(acc, k) => ({
				...acc,
				[k]: obj[k],
			}),
			{}
		);

export const queryString = obj => {
	const objWithoutEmptyValues = withoutEmptyValues(obj);

	if (Object.keys(objWithoutEmptyValues).length > 0) {
		return `?${stringify(objWithoutEmptyValues)}`;
	}

	return '';
};

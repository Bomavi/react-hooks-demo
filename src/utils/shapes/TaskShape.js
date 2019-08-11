/* npm imports: common */
import { string, bool } from 'prop-types';

export const TaskShape = {
	_id: string.isRequired,
	description: string.isRequired,
	completed: bool.isRequired,
	createdAt: string.isRequired,
	updatedAt: string.isRequired,
	updateInProgress: bool,
	deleteInProgress: bool,
};

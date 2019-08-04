/* root imports: common */
import * as types from 'actions/ui/types';

export const initialState = {
	isDrawerOpen: false,
};

export const ui = (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_DRAWER: {
			const isOpen = action.payload;
			return {
				...state,
				isDrawerOpen: isOpen || isOpen !== null ? isOpen : !state.isDrawerOpen,
			};
		}

		default:
			return state;
	}
};

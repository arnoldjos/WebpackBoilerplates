import { FETCH_FAILURE, FETCH_SUCCESS } from '../actions/actionTypes';

const reducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				content: action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;

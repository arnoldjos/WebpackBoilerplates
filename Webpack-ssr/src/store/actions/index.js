import axios from 'axios';
import { FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export const fetchArticle = (site, slug) => dispatch => {
	if (!site || !slug) return;
	axios
		.get(`http://${site}.local:8080/api/articles/${slug}`)
		.then(res => dispatch(fetchSuccess(res.data)))
		.catch(err => dispatch(fetchFailure(err)));
};

export const fetchSuccess = response => {
	return {
		type: FETCH_SUCCESS,
		payload: response
	};
};

export const fetchFailure = error => {
	return { type: FETCH_FAILURE, payload: error };
};

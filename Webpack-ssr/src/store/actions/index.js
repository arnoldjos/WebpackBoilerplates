import axios from 'axios';
import { FETCH_SUCCESS, FETCH_FAILURE, SET_LOADING } from './actionTypes';

export const fetchArticle = (site, slug) => async dispatch => {
  try {
    if (!site || !slug) return;
    const response = await axios.get(
      `http://${site}.local:8080/api/articles/${slug}`
    );
    dispatch(fetchSuccess(response.data));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
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

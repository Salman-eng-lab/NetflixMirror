export const API_BASE_URL = 'https://api.themoviedb.org/3/movie';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const GET_NOW_PAYING_MOVIES = getApiUrl('/now_playing');
export const GET_POPULAR_MOVIES = getApiUrl('/popular');
export const GET_TOP_RATTED_MOVIES = getApiUrl('/top_rated');
export const GET_UP_COMING_MOVIES = getApiUrl('/upcoming');
export const GET_MOVIES_TRAILER = getApiUrl('/');

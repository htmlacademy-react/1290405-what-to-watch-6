import {AppRoute} from './const';

export const getMovieUrl = (id = `:id`) => `${AppRoute.MOVIES}/${id}`;

export const getReviewUrl = (id = `:id`) => `${AppRoute.MOVIES}/${id}/review`;

export const getPlayerUrl = (id = `:id`) => `/player/${id}`;

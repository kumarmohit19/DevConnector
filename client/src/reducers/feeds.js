import { FEED_ERROR, GET_FEEDS } from '../actions/types';

const initialState = {
  feed: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FEEDS:
      return {
        ...state,
        feed: payload.articles,
        loading: false,
      };
    case FEED_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

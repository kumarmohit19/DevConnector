import axios from 'axios';

import { GET_FEEDS, FEED_ERROR } from './types';

// Get news feeds
export const getFeeds = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/feeds');

    dispatch({
      type: GET_FEEDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FEED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

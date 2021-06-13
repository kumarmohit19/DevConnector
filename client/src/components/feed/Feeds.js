import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFeeds } from '../../actions/feeds';
import Spinner from '../layout/Spinner';
import FeedItem from './FeedItem';

const Feeds = ({ getFeeds, feeds: { feed, loading } }) => {
  useEffect(() => {
    getFeeds();
  }, [getFeeds]);

  return !loading && feed !== null && feed.length > 0 ? (
    <Fragment>
      <h1 className='large text-primary'>News Feed</h1>
      <p className='lead'>
        <i className='fa fa-rss'></i> Welcome to the Feeds
      </p>
      <div className='feeds'>
        {feed.map((article, index) => (
          <FeedItem article={article} key={index} />
        ))}
      </div>
    </Fragment>
  ) : (
    <Spinner />
  );
};

Feeds.propTypes = {
  getFeeds: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  feeds: state.feeds,
});

export default connect(mapStateToProps, { getFeeds })(Feeds);

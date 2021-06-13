import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const FeedItem = ({
  article: {
    author,
    title,
    description,
    url,
    urlToImage,
    content,
    publishedAt,
  },
}) => (
  <div className='feed bg-white p-1'>
    <div>
      <img src={urlToImage} alt='' />
    </div>
    <p>{title}</p>
    <p className='feed-date'>
      Published on
      <Moment format='YYYY/MM/DD'>{publishedAt}</Moment> By {author}
    </p>
    <p className='my-1'>{description}</p>
    <p className='my-1'>
      Read the full content on{' '}
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-primary'
      >
        Full Story..
      </a>
    </p>
  </div>
);

FeedItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default FeedItem;

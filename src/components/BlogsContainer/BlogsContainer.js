import React from 'react';
import { css } from '@emotion/core';
import PropTypes, { oneOfType } from 'prop-types';
import BlogItem from './BlogItem/BlogItem';

const BlogsContainer = (props) => {
  const { allBlogsDetails } = props;


  const root = css({
    marginTop: '100px',
    '@media (min-width: 800px)': {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: '1fr 1fr',
    },
  });

  return (
    <section data={allBlogsDetails.length} css={root} data-testid="preview-list">
      {allBlogsDetails.map((blog) => {
        return (
          <BlogItem
            key={blog.metaData.title}
            title={blog.metaData.title}
            description={blog.metaData.description}
            author={blog.metaData.author}
            date={blog.metaData.date}
            slug={blog.slug}
            url={blog.metaData.url}
          />
        );
      })}
    </section>
  );
};

BlogsContainer.propTypes = {
  allBlogsDetails: PropTypes.arrayOf(PropTypes.shape({
    metaData: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])),
    content: PropTypes.string,
  })).isRequired,
};

export default BlogsContainer;

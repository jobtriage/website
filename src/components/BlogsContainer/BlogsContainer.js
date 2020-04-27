import React from 'react';
import { css } from '@emotion/core';
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
    <section css={root}>
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

export default BlogsContainer;

import React from 'react';
import { css } from '@emotion/core';
import BlogItem from './BlogItem/BlogItem';

const BlogsContainer = (props) => {
  const { allBlogsDetails } = props;


  const root = css({
    marginTop: '100px',
    ul: {
      listStyle: 'none',
    },
  });

  return (
    <section css={root}>
      <ul>
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
      </ul>
    </section>
  );
};

export default BlogsContainer;

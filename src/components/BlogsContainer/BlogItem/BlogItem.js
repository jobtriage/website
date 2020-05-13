import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Typography from '../../../UI/Typography/Typography';

const BlogItem = (props) => {
  const theme = useTheme();

  const {
    title, description, author, date, slug, blogNumber
  } = props;

  const root = {
    border: '1px solid #f3f3f3',
    borderRadius: '3px',
    padding: '1rem',
    marginTop: '3rem',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.1)',
    },
  };

  const titleStyle = css({
    color: theme.palette.primary.main,
  });

  const descriptionStyle = css({
    marginTop: '0.8rem',
    lineHeight: '1.6',
  });

  const dateStyle = css({
    fontSize: '13px',
    fontWeight: '100',
    fontStyle: 'italic',
  });

  const authorStyle = css({
    marginTop: '1.8rem',
    color: theme.palette.secondary.main,
  });


  return (
    <div css={root} test-data={slug} 
      onClick={() => Router.push(`/blogs/${slug}`)} 
      data-testid={blogNumber === 1? "blog-preview" : null}>
      <Typography css={titleStyle} component="h3">{title}</Typography>
      <Typography css={descriptionStyle} component="p">{description}</Typography>
      <Typography css={authorStyle} component="p">
        By
        {' '}
        {author}
      </Typography>
      <Typography css={dateStyle} component="p">{date}</Typography>
    </div>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  blogNumber:PropTypes.number.isRequired
};

export default BlogItem;

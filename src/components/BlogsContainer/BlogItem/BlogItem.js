import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Router from 'next/router';
import Typography from '../../../UI/Typography/Typography';

const BlogItem = (props) => {
  const theme = useTheme();

  const {
    title, description, author, date, slug,
  } = props;

  const root = {
    border: '1px solid #f3f3f3',
    borderRadius: '3px',
    padding: '1rem',
    marginTop: '3rem',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.1)',
    },
  };
  const titleStyle = css({
    color: theme.palette.primary.main,
  });
  const descriptionStyle = css({
    marginTop: '0.8rem',
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

  const routeChageHandler = () => {
    Router.push(`/blogs/${slug}`);
  };
  return (
    <li css={root} onClick={() => routeChageHandler()}>
      <div>
        <Typography css={titleStyle} component="h3">{title}</Typography>
        <Typography css={descriptionStyle} component="p">{description}</Typography>
        <Typography css={authorStyle} component="p">
          By
          {' '}
          {author}
        </Typography>
        <Typography css={dateStyle} component="p">{date}</Typography>
      </div>
    </li>
  );
};

export default BlogItem;

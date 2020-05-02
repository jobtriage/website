import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const Author = (props) => {
  const {
    twitterUrl, githubUrl, date, author, profileUrl,
  } = props;

  const root = css({
    height: '48px',
    marginBottom: '3rem',
    display: 'grid',
    gridRowGap: '5px',
    gridColumnGap: '10px',
    gridTemplateColumns: '48px 2fr 3fr',
    gridTemplateRows: '24px 24px',
    '@media (max-width: 500px)': {
      gridTemplateColumns: '48px 3fr 1fr',
    },
  });
  const child1 = css({
    gridRow: '1/-1',
  });
  const child2 = css({
    gridColumn: '2/3',
    gridRow: '1/2',
    alignSelf: 'end',
  });
  const child3 = css({
    gridColumn: '2/3',
    gridRow: '2/-1',
    fontStyle: 'italic',
    alignSelf: 'start',
  });
  const child4 = css({
    gridColumn: '3/-1',
    gridRow: '1/2',
    justifySelf: 'end',
    img: {
      margin: 'auto 15px',
      cursor: 'pointer',
    },
  });
  const profile = css({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
  });

  return (
    <div css={root}>
      <img css={[profile, child1]} src={profileUrl} alt="profile" />
      <h4 css={child2} style={{ margin: 0, fontSize: '16px' }}>{author}</h4>
      <h3 css={child3} style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>{date}</h3>
      <div css={child4}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src="/images/github.svg" alt="github" />
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer"><img src="/images/twitter.png" alt="twitter" /></a>
      </div>
    </div>
  );
};

Author.propTypes = {
  twitterUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
};

export default Author;

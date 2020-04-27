/* eslint-disable no-shadow */
import React from 'react';
import { css, ClassNames } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Router from 'next/router';
import PropTypes from 'prop-types';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavBar = ({ isOnBlog }) => {
  const theme = useTheme();
  const Root = css({
    margin: '40px auto 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    img: {
      width: '55px',
      cursor: 'pointer',
    },
  });

  const anchor = css({
    marginLeft: '2.5rem',
    color: '#3F3D3D',
    cursor: 'pointer',
    '@media (max-width: 500px)': {
      marginLeft: '1rem',
    },
  });

  const activeStyle = {
    color: theme.palette.secondary.main,
  };
  const divider = css({
    marginTop: '1.5rem',
    height: '2px',
    backgroundColor: '#f3f3f3',
  });

  const onBlog = css({
    color: theme.palette.secondary.main,
  });


  return (
    <>
      <nav css={Root}>
        <img src="/images/Logo.svg" alt="Job Triage" onClick={() => Router.push('/')} />
        <div>
          <ClassNames>
            {({ css }) => (
              <ActiveLink href="/" activeClassName={css(activeStyle)}>
                <a css={anchor}>Home</a>
              </ActiveLink>
            )}
          </ClassNames>
          <ClassNames>
            {({ css }) => (
              <ActiveLink href="/blogs" activeClassName={css(activeStyle)}>
                <a css={isOnBlog ? [anchor, onBlog] : anchor}>Blogs</a>
              </ActiveLink>
            )}
          </ClassNames>
          <a
            css={anchor}
            href="https://github.com/jobtriage/jobtriage"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
      <div css={divider} />
    </>
  );
};

export default NavBar;

NavBar.defaultProps = {
  isOnBlog: false,
};

NavBar.propsTypes = {
  isOnBlog: PropTypes.bool.isRequired,
};

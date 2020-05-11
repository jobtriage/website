import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Footer = () => {
  const theme = useTheme();
  const root = css({
    div: {
      marginTop: '5em',
      height: '2px',
      backgroundColor: '#f3f3f3',
    },
    section: {
      margin: '30px auto',
      display: 'flex',
      justifyContent: 'space-between',
      '@media (max-width: 850px)': {
        display: 'block',
        margin: '30px auto',
        span: {
          display: 'block',
          margin: '20px auto',
        },
      },
    },
    a: {
      color: theme.palette.secondary.main,
    },
  });

  return (
    <div css={root}>
      <div />
      <section>
        <span>
          Released v0.1.0 under MIT License. Copyright &copy; 2020 Job Triage.
        </span>
        <span>
          Follow
          <a
            href="https://twitter.com/KoushikKM96"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="twitter"
          >
            @Twitter
          </a>
          {' '}
          to get updates!
        </span>
        <span>
          Need help?
          <a
            href="mailto:jobtriage@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gmail"
          >
            @Gmail
          </a>
        </span>
      </section>
    </div>

  );
};

export default Footer;

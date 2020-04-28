import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Typography from '../../UI/Typography/Typography';

const Contribution = () => {
  const theme = useTheme();
  const root = css({
    marginTop: '10em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    a: {
      color: theme.palette.secondary.main,
    },
  });
  const types = css({
    margin: '40px',
    textAlign: 'center',
    width: '40vw',
    '@media (max-width: 800px)': {
      width: '80vw',
    },
  });
  const divider = css({
    width: '100%',
    height: '2px',
    backgroundColor: '#3f3d3d',
  });
  return (
    <div css={root}>
      <Typography component="h1">
        Contributions
        <div css={divider} />
      </Typography>
      <Typography css={types} component="p">
        Job Triage is completely open sourced and free.
        Contribute to Job Triage by creating{' '}
        <a
          href="https://github.com/jobtriage/jobtriage/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          issues
        </a>
        {' '}
        and
        {' '}
        <a
          href="https://github.com/jobtriage/jobtriage/pulls"
          target="_blank"
          rel="noopener noreferrer"
        >
          pull requests
        </a>
        .
      </Typography>
    </div>
  );
};

export default Contribution;

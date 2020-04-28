import React from 'react';
import { css } from '@emotion/core';
import Feature from './Feature/Feature';
import Typography from '../../UI/Typography/Typography';

const Features = () => {
  const root = css({
    marginTop: '10.7em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const divider = css({
    width: '100%',
    height: '2px',
    backgroundColor: '#000',
  });

  const container = css({
    '@media (min-width: 800px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: 'auto auto',
    },
  });

  const child1 = css({
    '@media (min-width: 800px)': {
      gridColumn: '1/2',
      gridRow: '1/2',
    },
  });
  const child2 = css({
    '@media (min-width: 800px)': {
      gridColumn: '3/-1',
      gridRow: '1/2',
    },
  });
  const child3 = css({
    '@media (min-width: 800px)': {
      gridColumn: '1/2',
      gridRow: '2/3',
    },
  });
  const child4 = css({
    '@media (min-width: 800px)': {
      gridColumn: '3/-1',
      gridRow: '2/3',
    },
  });

  return (
    <div css={root}>
      <Typography component="h1">
        Features
        <div css={divider} />
      </Typography>
      <div css={container}>
        <div css={child1}>
          <Feature
            url="/images/Priority.svg"
            title="Priority Basesd"
            description="Manage job applications with Kanban board based system."
          />
        </div>
        <div css={child2}>
          <Feature

            url="/images/Logs.svg"
            title="Time Logs"
            description="Add interview schedules with notes for quick reference."
          />
        </div>
        <div css={child3}>
          <Feature
            url="/images/Self.svg"
            title="Self Analysis"
            description="Prepare your personal pitch and S.T.A.R stories."
          />
        </div>
        <div css={child4}>
          <Feature
            url="/images/Free.svg"
            title="Completely Free"
            description="It always will be. No restrictions."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

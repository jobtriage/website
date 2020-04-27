import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    children,
    ...more
  } = props;
  const theme = useTheme();

  const root = css({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    fontSize: '18px',
    letterSpacing: '1px',
    padding: '14px 40px',
    outline: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.22s ease-in-out',
    fontFamily: 'Montserrat sans-serif',
    ':hover': {
      backgroundColor: '#fff',
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  });

  return (
    <button css={root} type="submit" {...more}>{children}</button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

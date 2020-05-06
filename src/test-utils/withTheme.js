import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';

const withTheme = (Component) => {
  return (props) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
};

export default withTheme;
